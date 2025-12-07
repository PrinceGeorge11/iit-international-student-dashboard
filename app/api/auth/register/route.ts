// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password, studentType, program, avatarUrl } = body;

    // -------- Validate Required Fields --------
    if (!fullName || !email || !password || !studentType || !program) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // -------- Check if Email Already Exists --------
    const existing = await prisma.student.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // -------- Hash Password --------
    const hashedPassword = await bcrypt.hash(password, 10);

    // -------- Create User in DB --------
    const newStudent = await prisma.student.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        studentType,
        program,
        avatarUrl: avatarUrl ?? null,
        isAdmin: false,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        studentType: true,
        program: true,
        avatarUrl: true,
      },
    });

    return NextResponse.json(
      { message: "Registration successful", student: newStudent },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
