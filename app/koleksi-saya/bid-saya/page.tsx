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
        setBids(data);
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
            <p className="text-gray-600 text-lg font-semibold">Anda belum memiliki bid.</p>
            <p className="text-gray-500 mt-2">Ajukan tawaran pada mobil yang Anda minati.</p>
          </div>
        ) : (
          bids.map((bid) => {
            let statusColor = "";
            let statusText = "";
            if (bid.status === "approved") {
              statusColor = "from-green-500 to-green-600 text-white";
              statusText = "DISETUJUI";
            } else if (bid.status === "rejected") {
              statusColor = "from-red-500 to-red-600 text-white";
              statusText = "DITOLAK";
            } else {
              statusColor = "from-yellow-400 to-yellow-500 text-yellow-900";
              statusText = "MENUNGGU";
            }
            return (
              <div
                key={bid.id}
                className={`flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r ${statusColor.includes('green') ? 'from-green-50 to-green-100' : statusColor.includes('red') ? 'from-red-50 to-red-100' : 'from-yellow-50 to-yellow-100'} p-5 md:p-6 rounded-2xl shadow-lg transition-all duration-300 border-l-8 ${statusColor.includes('green') ? 'border-green-500' : statusColor.includes('red') ? 'border-red-500' : 'border-yellow-400'} hover:scale-[1.01]`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-[#0138C9] truncate">{bid.produk.nama_barang}</h3>
                      <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-600 font-medium">
                        <span>Harga Awal: Rp {bid.produk.harga_awal.toLocaleString('id-ID')}</span>
                        <span className="hidden md:inline">|</span>
                        <span>Bid Anda: <span className="text-[#0138C9] font-bold">Rp {bid.bidAmount.toLocaleString('id-ID')}</span></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-center gap-1 mt-2 md:mt-0">
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full font-medium">{new Date(bid.createdAt).toLocaleDateString('id-ID')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className={`bg-gradient-to-r ${statusColor} font-bold py-1.5 px-4 rounded-full text-xs md:text-sm inline-block shadow-md mb-1`}>{statusText}</div>
                  <span className={`text-xs font-semibold text-center ${bid.status === 'approved' ? 'text-green-700' : bid.status === 'rejected' ? 'text-red-700' : 'text-yellow-700'}`}>
                    {bid.status === 'approved' ? '✓ Disetujui Admin' : bid.status === 'rejected' ? '✗ Ditolak Admin' : '⏳ Menunggu Persetujuan'}
                  </span>
                </div>
                <div className="flex flex-col items-end min-w-[100px]">
                  <button className="bg-gradient-to-r from-[#0138C9] to-[#0056b3] text-white font-bold py-2 px-4 text-xs md:text-sm rounded-xl hover:from-[#0056b3] hover:to-[#0138C9] transition-all duration-300 shadow-md hover:shadow-lg">
                    Lanjutkan
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>

    <Footer />
    </>
  );
}
