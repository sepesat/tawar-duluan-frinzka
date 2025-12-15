"use client";

import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  DollarSign,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Package,
} from "lucide-react";

/* ================= TYPES ================= */

type Produk = {
  nama_barang: string;
  harga_awal: number;
  kategori?: string;
  createdAt: string;
  status?: string;
  terjual?: boolean;
};

type Analytics = {
  totalProduk: number;
  produkBulanIni: number;
  totalBid: number;
  bidBulanIni: number;
  totalNilaiAuction: number;
  averageBidAmount: number;
};

interface LaporanClientProps {
  analytics: Analytics;
  produkList: Produk[];
}

/* ================= CLIENT ================= */

export default function LaporanClient({
  analytics,
  produkList,
}: LaporanClientProps) {
  const handleExportPDF = () => {
    const terjual = produkList.filter(
      (p) => p.status === "sold" || p.terjual === true
    );

    const doc = new jsPDF();
    doc.text("Laporan Data Penjualan", 14, 16);

    (doc as any).autoTable({
      head: [["Nama Produk", "Harga", "Kategori", "Tanggal"]],
      body: terjual.map((p) => [
        p.nama_barang,
        `Rp ${(p.harga_awal / 1_000_000).toFixed(0)}M`,
        p.kategori || "Umum",
        new Date(p.createdAt).toLocaleDateString("id-ID"),
      ]),
    });

    doc.save(
      `laporan-penjualan-${new Date().toISOString().slice(0, 10)}.pdf`
    );
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleExportPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Export PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Produk"
          value={analytics.totalProduk}
          change={analytics.produkBulanIni}
          changeLabel="bulan ini"
          icon={Package}
          color="from-blue-500 to-blue-600"
        />

        <KPICard
          title="Total Tawaran"
          value={analytics.totalBid}
          change={analytics.bidBulanIni}
          changeLabel="bulan ini"
          icon={TrendingUp}
          color="from-green-500 to-green-600"
        />

        <KPICard
          title="Nilai Lelang"
          value={`Rp ${(analytics.totalNilaiAuction / 1_000_000).toFixed(0)}M`}
          change={0}
          changeLabel=""
          icon={DollarSign}
          color="from-purple-500 to-purple-600"
        />

        <KPICard
          title="Rata-rata Tawaran"
          value={`Rp ${(analytics.averageBidAmount / 1_000_000).toFixed(1)}M`}
          change={0}
          changeLabel=""
          icon={Activity}
          color="from-orange-500 to-orange-600"
        />
      </div>
    </>
  );
}

/* ================= KPI CARD ================= */

function KPICard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  change: number;
  changeLabel: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-gray-400 text-xs">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>

        <div className={`p-2 bg-gradient-to-br ${color} rounded-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {change > 0 && (
        <div className="flex items-center gap-1 text-green-400 text-xs">
          <ArrowUpRight className="w-3 h-3" />
          <span>+{change} {changeLabel}</span>
        </div>
      )}
    </div>
  );
}
