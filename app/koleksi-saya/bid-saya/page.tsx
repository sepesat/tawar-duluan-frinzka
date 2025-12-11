"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface Bid {
  id: string;
  bidAmount: number;
  status: string;
  createdAt: string;
  produk: {
    id: string;
    nama_barang: string;
    harga_awal: number;
    tanggal: string;
  };
}

export default function MyBids() {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBids();
  }, []);

  const fetchBids = async () => {
    try {
      const res = await fetch('/api/bids');
      if (res.ok) {
        const data = await res.json();
        // Filter to show only approved bids
        const approvedBids = data.filter((bid: Bid) => bid.status === 'approved');
        setBids(approvedBids);
      } else if (res.status === 401) {
        // User not authenticated, redirect to login
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error fetching bids:', error);
    }
    setLoading(false);
  };
  return (
    <>
     <Navbar />

    <div className="w-full max-w-6xl mx-auto px-4 mt-12 pt-20 pb-12">
      <div className="bg-gradient-to-r from-[#0138C9] to-[#0056b3] text-white p-6 rounded-2xl shadow-2xl mb-8">
        <h1 className="text-4xl font-extrabold mb-2 flex items-center">
          💸 Bid Saya (My Bids)
        </h1>
        <p className="text-lg opacity-90">Kelola tawaran Anda dengan mudah</p>
      </div>

      {/* Header table */}
      <div className="hidden md:grid md:grid-cols-12 text-sm font-bold text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-2xl shadow-lg border-b-2 border-gray-300">
        <div className="col-span-3">Detail Mobil</div>
        <div className="col-span-2 text-center">Bid Tertinggi Saat Ini</div>
        <div className="col-span-2 text-center">Bid Saya</div>
        <div className="col-span-3 text-center">Status & Sisa Waktu</div>
        <div className="col-span-2 text-right">Aksi</div>
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Memuat bid Anda...</p>
          </div>
        ) : bids.length === 0 ? (
          <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <p className="text-gray-600 text-lg font-semibold">Anda belum memiliki bid yang di-approve.</p>
            <p className="text-gray-500 mt-2">Tunggu admin untuk meng-approve bid Anda.</p>
          </div>
        ) : (
          bids.map((bid) => (
            <div key={bid.id} className="grid grid-cols-1 md:grid-cols-12 items-center bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 border-l-8 border-green-500">
              <div className="col-span-3 flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0138C9]">{bid.produk.nama_barang}</h3>
                  <p className="text-sm text-gray-600 font-medium">Harga Awal: Rp {bid.produk.harga_awal.toLocaleString('id-ID')}</p>
                </div>
              </div>

              <div className="col-span-2 text-center">
                <p className="text-lg font-bold text-green-600">Rp {bid.produk.harga_awal.toLocaleString('id-ID')}</p>
              </div>

              <div className="col-span-2 text-center">
                <p className="text-lg font-bold text-[#0138C9]">Rp {bid.bidAmount.toLocaleString('id-ID')}</p>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full font-medium">Bid Anda</span>
              </div>

              <div className="col-span-3 text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-4 rounded-full text-sm inline-block shadow-md">
                  DISETUJUI
                </div>
                <p className="text-xs text-green-700 mt-2 font-semibold">✓ Bid Anda Telah Disetujui Admin</p>
              </div>

              <div className="col-span-2 flex justify-end">
                <button className="bg-gradient-to-r from-[#0138C9] to-[#0056b3] text-white font-bold py-3 px-4 text-sm rounded-xl hover:from-[#0056b3] hover:to-[#0138C9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Lanjutkan
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

    <Footer />
    </>
  );
}
