"use client";

import React, { useState, useEffect } from 'react';
// Komponen Banner Status Lelang
function LelangStatusBanner() {
  const [status, setStatus] = useState<'buka' | 'tutup' | null>(null);
  useEffect(() => {
    fetch('/api/lelang')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus(null));
  }, []);
  if (!status) return null;
  return (
    <div className={`w-full text-center py-2 mb-4 font-semibold text-sm rounded-lg shadow-md ${status === 'buka' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {status === 'buka' ? 'Lelang Sedang Dibuka! Silakan ajukan tawaran.' : 'Lelang Sedang Ditutup. Tidak dapat mengajukan tawaran.'}
    </div>
  );
}
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Car as CarIcon, Users, Settings, Calendar, Gauge, Search, Filter, TrendingUp, Clock, DollarSign, Sparkles, Heart } from 'lucide-react';

interface Product {
  id: string;
  nama_barang: string;
  deskripsi: string;
  harga_awal: number;
  tanggal: string;
  image_url?: string;
  merk_mobil?: string;
  tipe_mobil?: string;
  transmisi?: string;
  jumlah_seat?: number;
  tahun?: number;
  kilometer?: number;
  kategori?: string;
  createdAt?: string;
}

// --- CATEGORY HELPERS (harus di atas komponen!) ---

// Map dari enum value Prisma ke slug untuk UI
const ENUM_TO_SLUG: Record<string, string> = {
  "SEMUA": "semua-mobil",
  "RAMAI": "sedang-ramai",
  "SEGERA": "segera-berakhir",
  "DIBAWAH100": "dibawah-100-juta",
  "BARU": "baru-masuk",
};

// Map dari slug ke enum value Prisma
const SLUG_TO_ENUM: Record<string, string> = {
  "semua-mobil": "SEMUA",
  "sedang-ramai": "RAMAI",
  "segera-berakhir": "SEGERA",
  "dibawah-100-juta": "DIBAWAH100",
  "baru-masuk": "BARU",
};

// normalizer: ubah lowercase + hapus karakter aneh
function normalizeKey(s?: string): string {
  if (!s) return "";
  return String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
}

// mengubah berbagai bentuk kategori → slug utama
export function formatKategori(input?: string): string {
  if (!input) return "semua-mobil";
  
  const upper = String(input).toUpperCase();
  
  // Jika input sudah enum value Prisma
  if (ENUM_TO_SLUG[upper]) {
    return ENUM_TO_SLUG[upper];
  }
  
  // Jika input adalah slug, kembalikan
  if (SLUG_TO_ENUM[String(input).toLowerCase()]) {
    return String(input).toLowerCase();
  }
  
  return "semua-mobil"; // default
}


function ProductCard({ product, onBid, isLoved, onToggleLove }: {
  product: Product;
  onBid: (productId: string, bidAmount: number) => void;
  isLoved: boolean;
  onToggleLove: (produkId: string) => void;
}) {
  const [bidAmount, setBidAmount] = useState(product.harga_awal + 1000000);
  const [submitting, setSubmitting] = useState(false);
  const [showBidForm, setShowBidForm] = useState(false);

  const handleBid = async () => {
    if (bidAmount <= product.harga_awal) {
      alert('Jumlah tawaran harus lebih tinggi dari harga awal!');
      return;
    }

    setSubmitting(true);
    await onBid(product.id, bidAmount);
    setSubmitting(false);
    setShowBidForm(false);
  };

  return (
    <div
      className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/30 hover:border-white/50 hover:scale-[1.02] flex flex-col h-full overflow-hidden cursor-pointer
      w-full max-w-xs mx-auto sm:max-w-sm md:max-w-none"
      style={{ minWidth: 0 }}
    >
      {/* Image section */}
      {product.image_url && (
        <div className="relative mb-3 overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <img
            src={product.image_url}
            alt={product.nama_barang}
            className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
          />
          {/* Badge Lelang kiri atas */}
          <div className="absolute top-2 left-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-md text-xs font-bold shadow-sm">
              Lelang
            </div>
          </div>
          {/* Tombol love kanan atas */}
          <button
            aria-label={isLoved ? 'Hapus dari Watchlist' : 'Tambah ke Watchlist'}
            className={`absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-pink-100 border border-pink-200 shadow transition z-10 ${isLoved ? 'text-pink-600' : 'text-gray-400'}`}
            onClick={e => { e.stopPropagation(); onToggleLove(product.id); }}
          >
            <Heart fill={isLoved ? '#ec4899' : 'none'} strokeWidth={2.2} className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className="space-y-2 flex-grow min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
        {/* Title */}
        <h4 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {product.nama_barang}
        </h4>

        {/* Brand and specs */}
        <div className="flex items-center justify-between text-xs text-gray-600">
          {product.merk_mobil && <span className="font-medium text-blue-600">{product.merk_mobil}</span>}
          {product.jumlah_seat && <span>{product.jumlah_seat} Seat</span>}
        </div>

        {/* Transmission */}
        {product.transmisi && (
          <div className="text-xs text-gray-500 capitalize">
            {product.transmisi}
          </div>
        )}

        {/* Date */}
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar className="w-3 h-3" />
          <span>{new Date(product.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-sm font-bold text-gray-900">Rp {product.harga_awal.toLocaleString('id-ID')}</p>
        </div>
      </div>

      {/* Bid section */}
      <div className="mt-3 pt-3 border-t border-gray-200/50">
        {!showBidForm ? (
          <button
            onClick={() => setShowBidForm(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-3 rounded-lg text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Ajukan Tawaran
          </button>
        ) : (
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Tawaran Anda"
              value={bidAmount}
              onChange={(e) => setBidAmount(Number(e.target.value))}
              className="w-full px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
              min={product.harga_awal + 1}
            />

            <div className="flex gap-1">
              <button
                onClick={handleBid}
                disabled={submitting}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-1.5 px-2 rounded-md text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? (
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Mengajukan...</span>
                  </div>
                ) : (
                  'Kirim'
                )}
              </button>

              <button
                onClick={() => setShowBidForm(false)}
                className="px-2 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-xs sm:text-sm transition-colors duration-300"
              >
                Batal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JelajahiPage() {
  // Watchlist state
  const [watchlist, setWatchlist] = useState<string[]>([]);

  // Fetch watchlist produkId[]
  useEffect(() => {
    fetch('/api/watchlist')
      .then(res => res.ok ? res.json() : [])
      .then((data: Product[]) => setWatchlist(data.map(p => p.id)))
      .catch(() => setWatchlist([]));
  }, []);

  // Toggle love
  const handleToggleLove = async (produkId: string) => {
    if (watchlist.includes(produkId)) {
      await fetch('/api/watchlist', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produkId }),
      });
      setWatchlist(watchlist.filter(id => id !== produkId));
    } else {
      await fetch('/api/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produkId }),
      });
      setWatchlist([...watchlist, produkId]);
    }
  };
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    formatKategori(searchParams.get("category") || "semua-mobil")
  );
  const [sortBy, setSortBy] = useState<string>('terbaru');
  
  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterMerk, setFilterMerk] = useState<string>('');
  const [filterHarga, setFilterHarga] = useState<string>('');

  const getFilteredProducts = (category: string) => {
    // Convert slug to enum value if needed
    const enumValue = SLUG_TO_ENUM[category.toLowerCase()];
    
    let filtered = products;
    
    // Filter by category
    if (category !== "semua-mobil" && enumValue) {
      filtered = filtered.filter(product => product.kategori === enumValue);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.nama_barang.toLowerCase().includes(query) ||
        product.merk_mobil?.toLowerCase().includes(query) ||
        product.tipe_mobil?.toLowerCase().includes(query) ||
        product.deskripsi.toLowerCase().includes(query)
      );
    }
    
    // Filter by merk
    if (filterMerk && filterMerk !== '') {
      filtered = filtered.filter(product => 
        product.merk_mobil?.toLowerCase() === filterMerk.toLowerCase()
      );
    }
    
    // Filter by harga
    if (filterHarga && filterHarga !== '') {
      filtered = filtered.filter(product => {
        switch(filterHarga) {
          case 'dibawah100':
            return product.harga_awal < 100000000;
          case '100-200':
            return product.harga_awal >= 100000000 && product.harga_awal < 200000000;
          case '200-300':
            return product.harga_awal >= 200000000 && product.harga_awal < 300000000;
          case 'diatas300':
            return product.harga_awal >= 300000000;
          default:
            return true;
        }
      });
    }
    
    // Sort
    if (sortBy === 'terbaru') {
      filtered.sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime());
    } else if (sortBy === 'termurah') {
      filtered.sort((a, b) => a.harga_awal - b.harga_awal);
    } else if (sortBy === 'termahal') {
      filtered.sort((a, b) => b.harga_awal - a.harga_awal);
    }
    
    return filtered;
  };

  // Get unique merk from products
  const getMerks = () => {
    const merks = new Set(products.map(p => p.merk_mobil).filter(Boolean));
    return Array.from(merks).sort();
  };

  const getProductsByCategory = (category: string) => {
    return getFilteredProducts(category);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/produk');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();

    // scroll otomatis ke kategori jika ada query param
    const initialCategory = formatKategori(searchParams.get("category") || "semua-mobil");
    if (initialCategory) {
      setTimeout(() => {
        const el = document.getElementById(initialCategory);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 600);
    }
  }, []);

  const submitBid = async (productId: string, bidAmount: number) => {
    try {
      const response = await fetch('/api/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          produkId: productId,
          bidAmount: bidAmount,
        }),
      });

      if (response.ok) {
        alert('Bid berhasil diajukan!');
        // You might want to refresh the page or update the UI
      } else if (response.status === 401) {
        alert('Silakan login terlebih dahulu untuk mengajukan tawaran');
        window.location.href = '/login';
      } else {
        try {
          const error = await response.json();
          alert(`Error: ${error.error || 'Gagal mengajukan bid'}`);
        } catch (parseError) {
          alert('Terjadi kesalahan saat mengajukan bid');
        }
      }
    } catch (error) {
      console.error('Error submitting bid:', error);
      alert('Terjadi kesalahan saat mengajukan bid');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <LelangStatusBanner />
      </div>
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/car-pattern.png')] opacity-10"></div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Temukan Mobil Impian Anda
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Jelajahi Koleksi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Mobil Premium
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Temukan berbagai pilihan mobil berkualitas dengan harga terbaik melalui sistem lelang modern kami
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari mobil..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  />
                </div>

                <select 
                  value={filterMerk} 
                  onChange={(e) => setFilterMerk(e.target.value)}
                  className="px-4 py-3 bg-white/90 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Semua Merk</option>
                  {getMerks().map((merk) => (
                    <option key={merk} value={merk}>
                      {merk}
                    </option>
                  ))}
                </select>

                <select 
                  value={filterHarga} 
                  onChange={(e) => setFilterHarga(e.target.value)}
                  className="px-4 py-3 bg-white/90 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Semua Harga</option>
                  <option value="dibawah100">Dibawah 100jt</option>
                  <option value="100-200">100jt - 200jt</option>
                  <option value="200-300">200jt - 300jt</option>
                  <option value="diatas300">Diatas 300jt</option>
                </select>

                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/90 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="terbaru">Terbaru</option>
                  <option value="termurah">Termurah</option>
                  <option value="termahal">Termahal</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <main className="container mx-auto p-4 -mt-8 relative z-10">
        {/* Banner status lelang di atas semua konten */}
        <div className="mb-4">
          <LelangStatusBanner />
        </div>
        {/* Stats Section */}

        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Kategori Populer
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Temukan Mobil Sesuai Kebutuhan Anda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Jelajahi berbagai kategori mobil yang sedang diminati pengguna kami</p>
          </div>

        {/* section semua mobil */}
        <section id="semua-mobil" className="py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Semua Mobil</h2>
              <p className="text-gray-600">Temukan mobil impian Anda dari berbagai pilihan</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{getProductsByCategory('semua-mobil').length} mobil ditemukan</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat koleksi mobil...</p>
              </div>
            </div>
          ) : getProductsByCategory('semua-mobil').length === 0 ? (
            <div className="text-center py-16">
              <CarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada mobil tersedia</h3>
              <p className="text-gray-600">Cek kembali nanti untuk koleksi mobil terbaru</p>
            </div>
          ) : (
            <div
              className="flex flex-row gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:overflow-x-visible"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {getProductsByCategory('semua-mobil').map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-xs w-full sm:min-w-0 sm:max-w-none">
                  <ProductCard
                    product={product}
                    onBid={submitBid}
                    isLoved={watchlist.includes(product.id)}
                    onToggleLove={handleToggleLove}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Section Divider */}
        <div className="py-16">
          
        {/* section sedang ramai */}
        <section id="sedang-ramai" className="py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sedang Ramai</h3>
                  <p className="text-gray-600 text-sm">Mobil dengan aktivitas tawaran tertinggi</p>
                </div>
              </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{getProductsByCategory('sedang-ramai').length} mobil ditemukan</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat koleksi mobil...</p>
              </div>
            </div>
          ) : getProductsByCategory('sedang-ramai').length === 0 ? (
            <div className="text-center py-16">
              <CarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada mobil tersedia</h3>
              <p className="text-gray-600">Cek kembali nanti untuk koleksi mobil terbaru</p>
            </div>
          ) : (
            <div
              className="flex flex-row gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:overflow-x-visible"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {getProductsByCategory('sedang-ramai').map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-xs w-full sm:min-w-0 sm:max-w-none">
                  <ProductCard product={product} onBid={submitBid} />
                </div>
              ))}
            </div>
          )}
        </section>

          {/* segera berakhir */}
          <section id="segera-berakhir" className="py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Segera Berakhir</h3>
                  <p className="text-gray-600 text-sm">Lelang yang akan berakhir dalam waktu dekat</p>
                </div>
              </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{getProductsByCategory('segera-berakhir').length} mobil ditemukan</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat koleksi mobil...</p>
              </div>
            </div>
          ) : getProductsByCategory('segera-berakhir').length === 0 ? (
            <div className="text-center py-16">
              <CarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada mobil tersedia</h3>
              <p className="text-gray-600">Cek kembali nanti untuk koleksi mobil terbaru</p>
            </div>
          ) : (
            <div
              className="flex flex-row gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:overflow-x-visible"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {getProductsByCategory('segera-berakhir').map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-xs w-full sm:min-w-0 sm:max-w-none">
                  <ProductCard product={product} onBid={submitBid} />
                </div>
              ))}
            </div>
          )}
        </section>

          {/* dibawah 100 juta */}
          <section id="dibawah-100-juta" className="py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Di Bawah 100 Juta</h3>
                  <p className="text-gray-600 text-sm">Mobil dengan harga terjangkau dan berkualitas</p>
                </div>
              </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{getProductsByCategory('dibawah-100-juta').length} mobil ditemukan</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat koleksi mobil...</p>
              </div>
            </div>
          ) : getProductsByCategory('dibawah-100-juta').length === 0 ? (
            <div className="text-center py-16">
              <CarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada mobil tersedia</h3>
              <p className="text-gray-600">Cek kembali nanti untuk koleksi mobil terbaru</p>
            </div>
          ) : (
            <div
              className="flex flex-row gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:overflow-x-visible"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {getProductsByCategory('dibawah-100-juta').map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-xs w-full sm:min-w-0 sm:max-w-none">
                  <ProductCard product={product} onBid={submitBid} />
                </div>
              ))}
            </div>
          )}
        </section>

          {/* baru masuk */}
          <section id="baru-masuk" className="py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Baru Masuk</h3>
                  <p className="text-gray-600 text-sm">Koleksi mobil terbaru di platform kami</p>
                </div>
              </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{getProductsByCategory('baru-masuk').length} mobil ditemukan</span>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Memuat koleksi mobil...</p>
              </div>
            </div>
          ) : getProductsByCategory('baru-masuk').length === 0 ? (
            <div className="text-center py-16">
              <CarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada mobil tersedia</h3>
              <p className="text-gray-600">Cek kembali nanti untuk koleksi mobil terbaru</p>
            </div>
          ) : (
            <div
              className="flex flex-row gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:overflow-x-visible"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {getProductsByCategory('baru-masuk').map((product) => (
                <div key={product.id} className="min-w-[260px] max-w-xs w-full sm:min-w-0 sm:max-w-none">
                  <ProductCard product={product} onBid={submitBid} />
                </div>
              ))}
            </div>
          )}
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}


