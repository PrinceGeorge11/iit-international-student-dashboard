import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "student_session";

async function getStudentId() {
  // ✔ FIX: await cookies()
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

// POST — Toggle pin/unpin a chat room
export async function POST(req: NextRequest) {
  try {
    const studentId = await getStudentId();
    if (!studentId) return new NextResponse("Unauthorized", { status: 401 });

    const { roomId } = await req.json();
    if (!roomId) return new NextResponse("Missing roomId", { status: 400 });

    const existing = await prisma.studentPinnedRoom.findUnique({
      where: { studentId_roomId: { studentId, roomId } }
    });

    if (existing) {
      // Unpin (remove)
      await prisma.studentPinnedRoom.delete({
        where: { studentId_roomId: { studentId, roomId } }
      });

      return NextResponse.json({ pinned: false });
    }

    // Pin (create)
    await prisma.studentPinnedRoom.create({
      data: { studentId, roomId }
    });

    return NextResponse.json({ pinned: true });
  } catch (err) {
    console.error("Pin room API error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
