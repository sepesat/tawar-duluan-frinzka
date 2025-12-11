import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT: Update bid status (admin approval/rejection)
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { status } = await request.json();
    const { id } = await params;

    if (!status || !['approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const bid = await prisma.bid.update({
      where: { id },
      data: { status },
      include: {
        user: true,
        produk: true,
      },
    });

    return NextResponse.json(bid);
  } catch (error) {
    console.error('Error updating bid:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
