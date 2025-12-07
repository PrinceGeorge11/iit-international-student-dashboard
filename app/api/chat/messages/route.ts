import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "student_session";

/**
 * GET — Fetch messages for a chat room
 */
export async function GET(req: NextRequest) {
  try {
    const roomId = req.nextUrl.searchParams.get("roomId");
    if (!roomId) {
      return new NextResponse("Missing roomId", { status: 400 });
    }

    const messages = await prisma.chatMessage.findMany({
      where: { roomId },
      include: {
        student: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true
          }
        }
      },
      orderBy: { createdAt: "asc" }
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Chat GET error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}

/**
 * POST — Create a new chat message
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { roomId, content } = body;

    if (!roomId || !content) {
      return new NextResponse("roomId and content required", { status: 400 });
    }

    // ✔ FIX: Await cookies() in Next.js 14+
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    const secret = process.env.AUTH_JWT_SECRET;

    if (!token || !secret) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let decoded: { id: string; email: string } | null = null;

    try {
      decoded = jwt.verify(token, secret) as { id: string; email: string };
    } catch {
      return new NextResponse("Invalid token", { status: 401 });
    }

    // Ensure student exists
    const student = await prisma.student.findUnique({
      where: { id: decoded.id }
    });

    if (!student) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Create message
    const message = await prisma.chatMessage.create({
      data: {
        roomId,
        studentId: student.id,
        content
      },
      include: {
        student: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true
          }
        }
      }
    });

    return NextResponse.json({ message });
  } catch (err) {
    console.error("Chat POST error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
