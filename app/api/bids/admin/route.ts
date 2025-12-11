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

// GET: Get all bids (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin (assuming role field exists in User model)
    // For now, we'll allow any authenticated user to access - you may want to add role-based checks
    const bids = await prisma.bid.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        produk: {
          select: {
            id: true,
            nama_barang: true,
            harga_awal: true,
          }
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(bids);
  } catch (error) {
    console.error('Error fetching bids:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
