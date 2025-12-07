import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "student_session";

export async function GET() {
  try {
    // ✔ FIX: cookies() must be awaited in Next.js 14+
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    const secret = process.env.AUTH_JWT_SECRET;
    if (!token || !secret) {
      return NextResponse.json({ student: null }, { status: 200 });
    }

    let decoded: { id: string; email: string } | null = null;

    try {
      decoded = jwt.verify(token, secret) as {
        id: string;
        email: string;
      };
    } catch (e) {
      // Invalid token → return null
      return NextResponse.json({ student: null }, { status: 200 });
    }

    // Fetch student from database
    const student = await prisma.student.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        fullName: true,
        email: true,
        studentType: true,
        program: true,
        avatarUrl: true,
        isAdmin: true
      }
    });

    return NextResponse.json({ student }, { status: 200 });
  } catch (err) {
    console.error("Error in /api/auth/me:", err);
    return NextResponse.json({ student: null }, { status: 500 });
  }
}
