import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper function to get current user from token
async function getCurrentUser(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) return null;

  try {
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    const user = await prisma.user.findUnique({ where: { id: payload.uid } });
    return user;
  } catch (error) {
    return null;
  }
}

// POST: Submit a new bid
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { produkId, bidAmount } = await request.json();

    if (!produkId || !bidAmount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate bid amount is higher than starting price
    const product = await prisma.produk.findUnique({ where: { id: produkId } });
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    if (parseInt(bidAmount) <= product.harga_awal) {
      return NextResponse.json({ error: 'Bid amount must be higher than starting price' }, { status: 400 });
    }

    const bid = await prisma.bid.create({
      data: {
        userId: user.id,
        produkId,
        bidAmount: parseInt(bidAmount),
      },
      include: {
        user: true,
        produk: true,
      },
    });

    return NextResponse.json(bid, { status: 201 });
  } catch (error) {
    console.error('Error creating bid:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET: Get user's bids
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const bids = await prisma.bid.findMany({
      where: { userId: user.id },
      include: {
        produk: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(bids);
  } catch (error) {
    console.error('Error fetching bids:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
