import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "student_session";

async function getStudentId() {
  // ✔ MUST await cookies()
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

// GET — Returns a list of chat rooms the student can see
export async function GET() {
  try {
    const studentId = await getStudentId();
    if (!studentId) return new NextResponse("Unauthorized", { status: 401 });

    const rooms = await prisma.chatRoom.findMany({
      orderBy: { createdAt: "asc" }
    });

    return NextResponse.json({ rooms });
  } catch (err) {
    console.error("Chat rooms API error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
