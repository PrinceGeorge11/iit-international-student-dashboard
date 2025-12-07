// app/api/marketplace/products/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// PATCH — update a product
export async function PATCH(req: NextRequest, context: RouteParams) {
  const { id } = await context.params;   // ✅ FIXED: await params

  try {
    const body = await req.json();

    const updated = await prisma.product.update({
      where: { id },
      data: {
        title: body.title ?? undefined,
        description: body.description ?? undefined,
        priceCents: body.priceCents ?? undefined,
        category: body.category ?? undefined,
        condition: body.condition ?? undefined,
        imageUrl: body.imageUrl ?? undefined,
        campus: body.campus ?? undefined,
        paymentOptions: body.paymentOptions ?? undefined,
        isActive: body.isActive ?? undefined
      }
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PATCH /products error:", err);
    return new NextResponse("Error updating product", { status: 500 });
  }
}

// DELETE — delete a product
export async function DELETE(req: NextRequest, context: RouteParams) {
  const { id } = await context.params;   // ✅ FIXED: await params

  try {
    await prisma.product.delete({
      where: { id }
    });
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("DELETE /products error:", err);
    return new NextResponse("Error deleting product", { status: 500 });
  }
}
