// app/api/marketplace/purchase/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentStudent } from "@/lib/auth";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Single Stripe instance
const stripe = stripeSecret ? new Stripe(stripeSecret) : null;

export async function POST(req: NextRequest) {
  // 1. Auth check
  const student = await getCurrentStudent();
  if (!student) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // 2. Parse body
  const { productId, paymentMethod } = await req.json();

  if (!productId || !paymentMethod) {
    return new NextResponse("Missing productId or paymentMethod", {
      status: 400
    });
  }

  if (!["card", "in_person"].includes(paymentMethod)) {
    return new NextResponse("Invalid payment method", { status: 400 });
  }

  // 3. Load product
  const product = await prisma.product.findUnique({
    where: { id: productId }
  });

  if (!product || !product.isActive) {
    return new NextResponse("Product not available", { status: 400 });
  }

  // 🔴 Extra safety: ensure ownerId exists and is not null
  if (!product.ownerId) {
    return new NextResponse("Listing has no owner assigned", {
      status: 500
    });
  }

  if (product.ownerId === student.id) {
    return new NextResponse("You cannot purchase your own listing", {
      status: 400
    });
  }

  let stripeSessionId: string | null = null;

  // 4. If paying by card → Stripe Checkout
  if (paymentMethod === "card") {
    if (!stripe) {
      return new NextResponse(
        "Stripe is not configured. Set STRIPE_SECRET_KEY.",
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: product.priceCents,
            product_data: {
              name: product.title,
              description: product.description
            }
          },
          quantity: 1
        }
      ],
      success_url: `${appUrl}/marketplace/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/marketplace/${product.id}`,
      metadata: {
        productId: product.id,
        buyerId: student.id
      }
    });

    stripeSessionId = session.id;
    // Demo behavior: we mark the order as "paid" immediately.
  }

  // 5. Create order record
  const order = await prisma.order.create({
    data: {
      productId: product.id,
      buyerId: student.id,
      paymentMethod,
      status: paymentMethod === "card" ? "paid" : "created",
      stripeSessionId: stripeSessionId || undefined
    }
  });

  // 6. Mark listing as inactive / sold
  await prisma.product.update({
    where: { id: product.id },
    data: {
      isActive: false,
      soldAt: new Date()
    }
  });

  // 7. Create buyer–seller conversation
  const conversation = await prisma.marketplaceConversation.create({
    data: {
      orderId: order.id,
      buyerId: student.id,
      sellerId: product.ownerId, // ✅ now guaranteed non-null by guard above
      messages: {
        create: {
          senderId: student.id,
          content:
            paymentMethod === "card"
              ? "Hi, I just purchased this item via card. When can we arrange delivery/pickup?"
              : "Hi, I reserved this item for in-person payment. When and where can we meet on campus?"
        }
      }
    }
  });

  // 8. Response: card → send checkout URL, in-person → go straight to chat
  if (paymentMethod === "card" && stripeSessionId) {
    const session = await stripe!.checkout.sessions.retrieve(stripeSessionId);

    return NextResponse.json({
      checkoutUrl: session.url,
      orderId: order.id,
      conversationId: conversation.id
    });
  }

  return NextResponse.json({
    orderId: order.id,
    conversationId: conversation.id
  });
}
