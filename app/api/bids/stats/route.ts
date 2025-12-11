import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Get bid statistics for admin dashboard
export async function GET() {
  try {
    const [total, pending, approved, rejected] = await Promise.all([
      prisma.bid.count(),
      prisma.bid.count({ where: { status: 'pending' } }),
      prisma.bid.count({ where: { status: 'approved' } }),
      prisma.bid.count({ where: { status: 'rejected' } }),
    ]);

    return NextResponse.json({
      total,
      pending,
      approved,
      rejected,
    });
  } catch (error) {
    console.error('Error fetching bid stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
