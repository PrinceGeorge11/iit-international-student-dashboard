// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // Check if request has body
    if (!req.body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { fullName, email, password, studentType, program, avatarUrl } = body;

    // Validate Required Fields - fix: ensure all are strings
    if (!fullName?.trim() || !email?.trim() || !password?.trim() || !studentType?.trim() || !program?.trim()) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Fix: Trim and normalize email
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check if Email Already Exists - fix: use normalized email
    const existing = await prisma.student.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash Password - fix: add try-catch for bcrypt
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (bcryptError) {
      console.error("BCRYPT ERROR:", bcryptError);
      return NextResponse.json(
        { error: "Error processing password" },
        { status: 500 }
      );
    }

    // Create User in DB - fix: ensure all required fields are included
    const newStudent = await prisma.student.create({
      data: {
        fullName: fullName.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        studentType: studentType.trim(),
        program: program.trim(),
        avatarUrl: avatarUrl?.trim() || null,
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

    // Fix: Add CORS headers for Azure
    const response = NextResponse.json(
      { message: "Registration successful", student: newStudent },
      { status: 201 }
    );
    
    // Add these headers for Azure deployment
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;

  } catch (error: any) {
    // Fix: More specific error logging
    console.error("REGISTER ERROR DETAILS:", {
      message: error.message,
      name: error.name,
      code: error.code,
      meta: error.meta,
      timestamp: new Date().toISOString()
    });

    // Fix: More helpful error messages
    let errorMessage = "Internal server error";
    let statusCode = 500;

    // Prisma-specific errors
    if (error.code === 'P2002') {
      errorMessage = "Email already exists";
      statusCode = 409;
    } else if (error.code === 'P1001') {
      errorMessage = "Database connection failed";
      statusCode = 503;
    } else if (error.code === 'P2003') {
      errorMessage = "Invalid data reference";
      statusCode = 400;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}

// FIX: Add OPTIONS handler for CORS preflight requests (important for Azure)
export async function OPTIONS() {
  const response = NextResponse.json({});
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}