// app/api/admin/announcements/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "student_session";

/**
 * Validate admin from JWT cookie
 */
async function getAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  const secret = process.env.AUTH_JWT_SECRET;
  if (!token || !secret) return null;

  try {
    const decoded = jwt.verify(token, secret) as { id: string; isAdmin: boolean };

    if (!decoded?.isAdmin) return null;

    const admin = await prisma.student.findUnique({
      where: { id: decoded.id }
    });

    return admin && admin.isAdmin ? admin : null;
  } catch {
    return null;
  }
}

/**
 * GET — Fetch announcements
 */
export async function GET() {
  const admin = await getAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const announcements = await prisma.announcement.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      createdBy: {
        select: { id: true, fullName: true, email: true }
      }
    }
  });

  return NextResponse.json({ announcements });
}

/**
 * POST — Create new announcement
 */
export async function POST(req: NextRequest) {
  const admin = await getAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, body } = await req.json();

  if (!title || !body) {
    return NextResponse.json(
      { error: "Missing title or body" },
      { status: 400 }
    );
  }

  const created = await prisma.announcement.create({
    data: {
      title,
      body,                 // ⭐ matches Prisma schema
      createdById: admin.id
    }
  });

  return NextResponse.json({ announcement: created });
}
