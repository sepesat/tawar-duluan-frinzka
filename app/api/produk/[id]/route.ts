import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params; // ⬅️ WAJIB await
    const formData = await req.formData();
    const nama_barang = formData.get("nama_barang") as string;
    const tanggal = formData.get("tanggal") as string;
    const harga_awal_str = formData.get("harga_awal") as string;
    const harga_awal = parseInt(harga_awal_str);
    const deskripsi = formData.get("deskripsi") as string;
    const kategori = formData.get("kategori") as string | null;
    const image = formData.get("image") as File | null;

    // Car-specific fields
    const merk_mobil = formData.get("merk_mobil") as string | null;
    const tipe_mobil = formData.get("tipe_mobil") as string | null;
    const transmisi = formData.get("transmisi") as string | null;
    const jumlah_seat_str = formData.get("jumlah_seat") as string | null;
    const jumlah_seat = jumlah_seat_str ? parseInt(jumlah_seat_str) : null;
    const tahun_str = formData.get("tahun") as string | null;
    const tahun = tahun_str ? parseInt(tahun_str) : null;
    const kilometer_str = formData.get("kilometer") as string | null;
    const kilometer = kilometer_str ? parseInt(kilometer_str) : null;

    console.log("PUT data:", { 
      id, 
      nama_barang, 
      tanggal, 
      harga_awal_str, 
      harga_awal, 
      deskripsi,
      kategori,
      merk_mobil,
      tipe_mobil,
      transmisi,
      jumlah_seat,
      tahun,
      kilometer,
      hasImage: !!image 
    });

    if (!nama_barang || !tanggal || isNaN(harga_awal) || !deskripsi) {
      console.error("Validation failed:", {
        nama_barang: !nama_barang,
        tanggal: !tanggal,
        harga_awal: isNaN(harga_awal),
        deskripsi: !deskripsi,
      });
      return NextResponse.json({ error: "Invalid form data: missing required fields" }, { status: 400 });
    }

    const dateObj = new Date(tanggal);
    if (isNaN(dateObj.getTime())) {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
    }

    let image_url = undefined;

    if (image) {
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), "public", "uploads");
      try {
        await mkdir(uploadsDir, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }

      // Generate unique filename
      const parts = image.name.split(".");
      const fileExtension = parts.length > 1 ? parts.pop() : "jpg";
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
      const filePath = join(uploadsDir, fileName);

      // Convert file to buffer and save
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);

      image_url = `/uploads/${fileName}`;
    }

    const updateData: any = {
      nama_barang,
      tanggal: new Date(tanggal),
      harga_awal,
      deskripsi,
      kategori: kategori && kategori.trim() ? kategori : null,
      merk_mobil: merk_mobil && merk_mobil.trim() ? merk_mobil : null,
      tipe_mobil: tipe_mobil && tipe_mobil.trim() ? tipe_mobil : null,
      transmisi: transmisi && transmisi.trim() ? transmisi : null,
      jumlah_seat: jumlah_seat || null,
      tahun: tahun || null,
      kilometer: kilometer || null,
    };

    if (image_url !== undefined) {
      updateData.image_url = image_url;
    }

    console.log("About to update produk with data:", updateData);
    const produk = await prisma.produk.update({
      where: { id },
      data: updateData,
    });
    console.log("Produk updated successfully:", produk);

    return NextResponse.json(produk);
  } catch (err: any) {
    console.error("PUT /api/produk error:", err);
    const message = err.message || "Unknown error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params; // ⬅️ WAJIB await
    await prisma.produk.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
