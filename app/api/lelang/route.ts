import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Mendapatkan status lelang (buka/tutup)
export async function GET() {
  // Cek status lelang global (hanya satu baris di DB)
  let status = await prisma.setting.findUnique({ where: { key: 'lelang_status' } });
  if (!status) {
    // Default: tutup
    status = await prisma.setting.create({ data: { key: 'lelang_status', value: 'tutup' } });
  }
  return NextResponse.json({ status: status.value });
}

// POST: Ubah status lelang (buka/tutup)
export async function POST(request: NextRequest) {
  const { status } = await request.json();
  if (!['buka', 'tutup'].includes(status)) {
    return NextResponse.json({ error: 'Status tidak valid' }, { status: 400 });
  }
  await prisma.setting.upsert({
    where: { key: 'lelang_status' },
    update: { value: status },
    create: { key: 'lelang_status', value: status },
  });
  return NextResponse.json({ status });
}
