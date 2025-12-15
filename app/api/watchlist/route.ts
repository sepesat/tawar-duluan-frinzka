// app/api/watchlist/route.ts
export const runtime = "nodejs"; // ✅ PENTING

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =====================
// Helper: get current user
// =====================
type JwtPayload = {
  uid: string;
};

async function getCurrentUser(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) return null;

  try {
    const base64Payload = token.split(".")[1];
    const payload = JSON.parse(
      Buffer.from(base64Payload, "base64").toString()
    ) as JwtPayload;

    if (!payload.uid) return null;

    const user = await prisma.user.findUnique({
      where: { id: payload.uid },
    });

    return user;
  } catch {
    return null;
  }
}

// =====================
// GET: List watchlist
// =====================
export async function GET(request: NextRequest) {
  const user = await getCurrentUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const watchlist = await prisma.watchlist.findMany({
    where: { userId: user.id },
    include: { produk: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(watchlist.map((w) => w.produk));
}

// =====================
// POST: Add to watchlist
// =====================
export async function POST(request: NextRequest) {
  const user = await getCurrentUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { produkId?: string };

  if (!body.produkId) {
    return NextResponse.json(
      { error: "Missing produkId" },
      { status: 400 }
    );
  }

  await prisma.watchlist.upsert({
    where: {
      userId_produkId: {
        userId: user.id,
        produkId: body.produkId,
      },
    },
    update: {},
    create: {
      userId: user.id,
      produkId: body.produkId,
    },
  });

  return NextResponse.json({ success: true });
}

// =====================
// DELETE: Remove from watchlist
// =====================
export async function DELETE(request: NextRequest) {
  const user = await getCurrentUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { produkId?: string };

  if (!body.produkId) {
    return NextResponse.json(
      { error: "Missing produkId" },
      { status: 400 }
    );
  }

  await prisma.watchlist.deleteMany({
    where: {
      userId: user.id,
      produkId: body.produkId,
    },
  });

  return NextResponse.json({ success: true });
}
