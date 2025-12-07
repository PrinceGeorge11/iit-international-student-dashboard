import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const COOKIE_NAME = "student_session";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Lookup student
    const student = await prisma.student.findUnique({
      where: { email }
    });

    if (!student) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Validate password
    const valid = await bcrypt.compare(password, student.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT
    const secret = process.env.AUTH_JWT_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "JWT secret is not configured" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      {
        id: student.id,
        email: student.email,
        isAdmin: student.isAdmin
      },
      secret,
      { expiresIn: "7d" }
    );

    // ✔ FIX: cookies() is async, must await
    const cookieStore = await cookies();
    cookieStore.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return NextResponse.json({
      success: true,
      student: {
        id: student.id,
        fullName: student.fullName,
        email: student.email,
        isAdmin: student.isAdmin
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Server error during login" },
      { status: 500 }
    );
  }
}
