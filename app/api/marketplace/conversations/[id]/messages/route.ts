// app/api/marketplace/conversations/[id]/messages/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "student_session";

// ------------------------
// Helper – Get authenticated student ID
// ------------------------
async function getStudentId() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const secret = process.env.AUTH_JWT_SECRET;

  if (!token || !secret) return null;

  try {
    const decoded = jwt.verify(token, secret) as { id: string };
    return decoded.id;
  } catch {
    return null;
  }
}

// ------------------------
// GET /api/marketplace/conversations/[id]/messages
// ------------------------
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✔ FIXED: must await

  const studentId = await getStudentId();
  if (!studentId) return new NextResponse("Unauthorized", { status: 401 });

  // Check conversation exists
  const conversation = await prisma.marketplaceConversation.findUnique({
    where: { id },
    include: { messages: true }
  });

  if (!conversation)
    return new NextResponse("Not found", { status: 404 });

  return NextResponse.json({ messages: conversation.messages });
}

// ------------------------
// POST /api/marketplace/conversations/[id]/messages
// ------------------------
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✔ FIXED

  const studentId = await getStudentId();
  if (!studentId) return new NextResponse("Unauthorized", { status: 401 });

  const { content } = await req.json();
  if (!content || content.trim().length === 0) {
    return new NextResponse("Message cannot be empty", { status: 400 });
  }

  // Validate that the student is part of this conversation
  const conversation = await prisma.marketplaceConversation.findUnique({
    where: { id },
  });

  if (!conversation) {
    return new NextResponse("Conversation not found", { status: 404 });
  }

  if (
    conversation.buyerId !== studentId &&
    conversation.sellerId !== studentId
  ) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Create message
  const message = await prisma.marketplaceMessage.create({
    data: {
      conversationId: id,
      senderId: studentId,
      content
    }
  });

  return NextResponse.json({ message });
}
