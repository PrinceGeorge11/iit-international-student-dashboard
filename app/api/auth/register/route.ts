// app/api/auth/register/route.ts - UPDATED VERSION
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Import prisma properly
let prisma: any;

try {
  // Try dynamic import to avoid build issues
  const { prisma: importedPrisma } = await import("@/lib/prisma");
  prisma = importedPrisma;
} catch (error) {
  console.error("Failed to import prisma:", error);
  prisma = null;
}

export async function POST(req: Request) {
  console.log("🚀 REGISTER API CALLED");
  
  try {
    // Check if prisma is available
    if (!prisma) {
      console.error("Prisma not available");
      return NextResponse.json(
        { error: "Database connection not available" },
        { status: 503 }
      );
    }

    // Parse request
    const body = await req.json().catch(() => {
      console.error("Failed to parse JSON");
      return null;
    });

    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { fullName, email, password, studentType, program, avatarUrl } = body;
    
    console.log("Received data:", { 
      fullName: fullName?.substring(0, 20), 
      email, 
      studentType, 
      program,
      hasPassword: !!password 
    });

    // Validate required fields
    if (!fullName?.trim() || !email?.trim() || !password || !studentType?.trim() || !program?.trim()) {
      console.error("Missing fields:", { fullName, email, studentType, program });
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check if user exists
    console.log("Checking for existing user...");
    let existing;
    try {
      existing = await prisma.student.findUnique({
        where: { email: normalizedEmail },
      });
    } catch (dbError) {
      console.error("Database error when checking existing:", dbError);
      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    if (existing) {
      console.log("User already exists:", normalizedEmail);
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash password
    console.log("Hashing password...");
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (hashError) {
      console.error("Password hashing error:", hashError);
      return NextResponse.json(
        { error: "Error processing password" },
        { status: 500 }
      );
    }

    // Create user
    console.log("Creating user...");
    let newStudent;
    try {
      newStudent = await prisma.student.create({
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
      console.log("User created successfully:", newStudent.id);
    } catch (createError: any) {
      console.error("Error creating user:", {
        message: createError.message,
        code: createError.code,
        meta: createError.meta
      });
      
      // Handle specific prisma errors
      if (createError.code === 'P2002') {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to create user account", details: createError.message },
        { status: 500 }
      );
    }

    // Success response
    const response = NextResponse.json(
      { 
        message: "Registration successful", 
        student: newStudent,
        timestamp: new Date().toISOString()
      },
      { status: 201 }
    );
    
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;

  } catch (error: any) {
    console.error("UNEXPECTED ERROR IN REGISTER:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  const response = NextResponse.json({});
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}