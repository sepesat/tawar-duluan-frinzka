"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart2,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
} from "lucide-react";

interface Produk {
  id: string;
  nama_barang: string;
  harga_awal: number;
  tanggal: string;
  kategori?: string;
  createdAt: string;
}

interface Bid {
  id: string;
  bidAmount: number;
  createdAt: string;
}

interface Analytics {
  totalProduk: number;
  totalBid: number;
  totalNilaiAuction: number;
  averageBidAmount: number;
  produkBulanIni: number;
  bidBulanIni: number;
  kategoriDistribution: Record<string, number>;
  hargaTertinggi: number;
  hargaTerendah: number;
  topProducts: Produk[];
}

// Komponen utama
export default function HalamanLaporan() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch produk
      const produkRes = await fetch("/api/produk");
      const produk: Produk[] = produkRes.ok ? await produkRes.json() : [];
      setProdukList(produk);

      // Fetch bids
      const bidRes = await fetch("/api/bids");
      const bids: Bid[] = bidRes.ok ? await bidRes.json() : [];

      // Calculate analytics
      const now = new Date();
      const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

      const totalProduk = produk.length;
      const totalBid = bids.length;
      const totalNilaiAuction = produk.reduce((sum, p) => sum + p.harga_awal, 0);
      const averageBidAmount = bids.length > 0 ? bids.reduce((sum, b) => sum + b.bidAmount, 0) / bids.length : 0;

      const produkBulanIni = produk.filter(p => new Date(p.createdAt) >= thisMonthStart).length;
      const bidBulanIni = bids.filter(b => new Date(b.createdAt) >= thisMonthStart).length;

      // Kategori distribution
      const kategoriDistribution: Record<string, number> = {};
      produk.forEach(p => {
        const cat = p.kategori || "Tidak Dikategorikan";
        kategoriDistribution[cat] = (kategoriDistribution[cat] || 0) + 1;
      });

      const hargaTertinggi = produk.length > 0 ? Math.max(...produk.map(p => p.harga_awal)) : 0;
      const hargaTerendah = produk.length > 0 ? Math.min(...produk.map(p => p.harga_awal)) : 0;

      // Top products by harga
      const topProducts = [...produk].sort((a, b) => b.harga_awal - a.harga_awal).slice(0, 5);

      setAnalytics({
        totalProduk,
        totalBid,
        totalNilaiAuction,
        averageBidAmount,
        produkBulanIni,
        bidBulanIni,
        kategoriDistribution,
        hargaTertinggi,
        hargaTerendah,
        topProducts,
      });
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Memuat data analitik...</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return <div className="text-center py-16 text-gray-500">Gagal memuat data</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-blue-500/20 rounded-lg">
            <BarChart2 className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Dashboard Analitik</h1>
        </div>
        <p className="text-gray-400 text-sm ml-11">Monitor performa platform lelang mobil Anda</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
          title="Nilai Total Lelang"
          value={`Rp ${(analytics.totalNilaiAuction / 1000000).toFixed(0)}M`}
          change={0}
          changeLabel=""
          icon={DollarSign}
          color="from-purple-500 to-purple-600"
        />
        <KPICard
          title="Rata-rata Tawaran"
          value={`Rp ${(analytics.averageBidAmount / 1000000).toFixed(1)}M`}
          change={0}
          changeLabel=""
          icon={Activity}
          color="from-orange-500 to-orange-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Price Range */}
        <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5">
          <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-purple-400" />
            Rentang Harga
          </h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-3">
              <p className="text-green-300 text-xs opacity-80">Harga Terendah</p>
              <p className="text-green-100 text-xl font-bold mt-1">
                Rp {(analytics.hargaTerendah / 1000000).toFixed(0)}M
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg p-3">
              <p className="text-red-300 text-xs opacity-80">Harga Tertinggi</p>
              <p className="text-red-100 text-xl font-bold mt-1">
                Rp {(analytics.hargaTertinggi / 1000000).toFixed(0)}M
              </p>
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5">
          <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
            <Package className="w-4 h-4 text-blue-400" />
            Distribusi Kategori
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(analytics.kategoriDistribution).map(([category, count]) => (
              <div key={category} className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-blue-300 text-xs mb-1 line-clamp-2">{category}</p>
                <p className="text-blue-100 text-2xl font-bold">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5">
        <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-yellow-400" />
          Top 5 Produk Berdasarkan Harga
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-gray-300 font-medium">Nama Produk</th>
                <th className="text-left py-2 px-3 text-gray-300 font-medium">Harga</th>
                <th className="text-left py-2 px-3 text-gray-300 font-medium">Kategori</th>
                <th className="text-left py-2 px-3 text-gray-300 font-medium">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {analytics.topProducts.map((product, idx) => (
                <tr
                  key={product.id}
                  className="border-b border-white/5 hover:bg-white/5 transition cursor-pointer"
                  onClick={() => router.push(`/admin/produk`)}
                >
                  <td className="py-2 px-3 text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <span className="line-clamp-1 text-xs">{product.nama_barang}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-green-400 font-semibold text-xs">
                    Rp {(product.harga_awal / 1000000).toFixed(0)}M
                  </td>
                  <td className="py-2 px-3">
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-xs">
                      {product.kategori || "Umum"}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-gray-400 text-xs">
                    {new Date(product.createdAt).toLocaleDateString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

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
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:border-white/40 transition group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-gray-400 text-xs mb-0.5">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className={`p-2.5 bg-gradient-to-br ${color} rounded-lg group-hover:scale-110 transition`}>
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