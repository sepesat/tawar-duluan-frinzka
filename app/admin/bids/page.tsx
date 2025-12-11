"use client";

import React, { useEffect, useState } from "react";
import {
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Loader2,
  AlertCircle,
} from "lucide-react";

interface Bid {
  id: string;
  bidAmount: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  produk: {
    id: string;
    nama_barang: string;
    harga_awal: number;
  };
}

export default function AdminBidsPage() {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"semua" | "pending" | "approved" | "rejected">("pending");
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchBids();
  }, []);

  const fetchBids = async () => {
    try {
      const res = await fetch("/api/bids/admin");
      if (!res.ok) throw new Error("Gagal mengambil data bid");
      const data = await res.json();
      setBids(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching bids:", error);
      setMessage({ type: "error", text: "Gagal memuat data bid" });
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (bidId: string) => {
    setIsProcessing(bidId);
    try {
      const res = await fetch(`/api/bids/${bidId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error("Gagal approve bid");
      
      setMessage({ type: "success", text: "Bid berhasil di-approve!" });
      fetchBids();
    } catch (error) {
      console.error("Error approving bid:", error);
      setMessage({ type: "error", text: "Gagal approve bid" });
    } finally {
      setIsProcessing(null);
    }
  };

  const handleReject = async (bidId: string) => {
    setIsProcessing(bidId);
    try {
      const res = await fetch(`/api/bids/${bidId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "rejected" }),
      });
      if (!res.ok) throw new Error("Gagal reject bid");
      
      setMessage({ type: "success", text: "Bid berhasil di-reject!" });
      fetchBids();
    } catch (error) {
      console.error("Error rejecting bid:", error);
      setMessage({ type: "error", text: "Gagal reject bid" });
    } finally {
      setIsProcessing(null);
    }
  };

  const filteredBids = activeFilter === "semua" 
    ? bids 
    : bids.filter(b => b.status === activeFilter);

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return { bg: "bg-green-300", text: "text-green-900", label: "Disetujui" };
      case "rejected":
        return { bg: "bg-red-300", text: "text-red-900", label: "Ditolak" };
      case "pending":
      default:
        return { bg: "bg-yellow-300", text: "text-yellow-900", label: "Menunggu" };
    }
  };

  return (
    <main className="flex-1 p-6 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2.5 bg-blue-500/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Manajemen Bid (Tawaran)</h1>
              <p className="text-gray-300 text-sm">Approve atau tolak tawaran dari user</p>
            </div>
          </div>
        </div>

        {/* Message Alert */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
              message.type === "success"
                ? "bg-green-900/30 border border-green-500 text-green-200"
                : "bg-red-900/30 border border-red-500 text-red-200"
            }`}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">{message.text}</p>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(["semua", "pending", "approved", "rejected"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === filter
                  ? "bg-white/10 text-white"
                  : "bg-white/6 text-white/80 hover:bg-white/10"
              }`}
            >
              {filter === "semua" ? "Semua Bid" : filter === "pending" ? "Menunggu" : filter === "approved" ? "Disetujui" : "Ditolak"}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-300 uppercase tracking-wider">
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Produk</th>
                  <th className="py-3 px-6 text-right">Harga Awal</th>
                  <th className="py-3 px-6 text-right">Jumlah Bid</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-left">Tanggal</th>
                  <th className="py-3 px-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8">
                      <Loader2 className="w-5 h-5 animate-spin mx-auto text-blue-300 mb-2" />
                      <p className="text-blue-300">Memuat data bid...</p>
                    </td>
                  </tr>
                ) : filteredBids.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-400">Tidak ada bid.</td>
                  </tr>
                ) : (
                  filteredBids.map((bid) => {
                    const statusColor = getStatusColor(bid.status);
                    return (
                      <tr key={bid.id} className="border-t border-white/6 hover:bg-white/5 transition">
                        <td className="py-4 px-6">
                          <div>
                            <p className="text-white font-medium">{bid.user.name}</p>
                            <p className="text-xs text-gray-400">{bid.user.email}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-300">{bid.produk.nama_barang}</td>
                        <td className="py-4 px-6 text-right text-gray-300">{formatRupiah(bid.produk.harga_awal)}</td>
                        <td className="py-4 px-6 text-right text-green-300 font-semibold">{formatRupiah(bid.bidAmount)}</td>
                        <td className="py-4 px-6 text-center">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ring-1 ${statusColor.bg} ${statusColor.text}`}>
                            {statusColor.label}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-300">
                          {new Date(bid.createdAt).toLocaleDateString("id-ID")}
                        </td>
                        <td className="py-4 px-6 text-center whitespace-nowrap space-x-2">
                          {bid.status === "pending" ? (
                            <>
                              <button
                                onClick={() => handleApprove(bid.id)}
                                disabled={isProcessing === bid.id}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg text-xs font-semibold transition"
                              >
                                {isProcessing === bid.id ? (
                                  <Loader2 className="w-3 h-3 animate-spin" />
                                ) : (
                                  <CheckCircle className="w-3 h-3" />
                                )}
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(bid.id)}
                                disabled={isProcessing === bid.id}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg text-xs font-semibold transition"
                              >
                                {isProcessing === bid.id ? (
                                  <Loader2 className="w-3 h-3 animate-spin" />
                                ) : (
                                  <XCircle className="w-3 h-3" />
                                )}
                                Reject
                              </button>
                            </>
                          ) : (
                            <span className="text-xs text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
