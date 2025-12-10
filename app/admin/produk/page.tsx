"use client";
import React, { useEffect, useState } from "react";
import {
  Package,
  Plus,
  X,
  Edit2,
  Trash2,
  Save,
  DollarSign,
  Calendar,
  FileText,
  ShoppingBag,
  Loader2,
  Image,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useAdminData } from "@/app/hooks/useAdminData";

interface Produk {
  id: string;
  nama_barang: string;
  tanggal: string;
  harga_awal: number;
  deskripsi: string;
  image_url?: string | null;
  merk_mobil?: string | null;
  tipe_mobil?: string | null;
  transmisi?: string | null;
  jumlah_seat?: number | null;
  tahun?: number | null;
  kilometer?: number | null;
  kategori?: string | null;
}

// ==== Helper untuk format kategori ====
function formatKategori(raw: string | null | undefined): string {
  if (!raw) return "-";

  const key = raw.replace(/\s+/g, "").toUpperCase();

  const map: Record<string, string> = {
    SEMUA: "Semua Mobil",
    RAMAI: "Sedang Ramai",
    SEGERA: "Segera Berakhir",
    BARU: "Baru Masuk",
    DIBAWAH100: "Di Bawah 100 Juta",
  };

  return map[key] ?? raw;
}

export default function ProdukPage() {
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [kategoriList, setKategoriList] = useState<string[]>([]);
  const [filteredProdukList, setFilteredProdukList] = useState<Produk[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("semua");
  const [form, setForm] = useState<Omit<Produk, "id">>({
    nama_barang: "",
    tanggal: "",
    harga_awal: 0,
    deskripsi: "",
    image_url: "",
    kategori: "",
    // Car-specific fields
    merk_mobil: null,
    tipe_mobil: null,
    transmisi: null,
    jumlah_seat: null,
    tahun: null,
    kilometer: null,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  const { adminData, loading } = useAdminData();

  useEffect(() => {
    fetchProduk();
  }, []);

  useEffect(() => {
    let filtered = produkList;

    if (activeFilter === "semua") {
      filtered = produkList;
    } else {
      filtered = produkList.filter((p) => p.kategori === activeFilter);
    }

    setFilteredProdukList(filtered);
  }, [produkList, activeFilter]);

  useEffect(() => {
    const uniqueKategori = Array.from(
      new Set(
        produkList
          .map((p) => p.kategori || "")
          .filter((k) => k.trim() !== "")
      )
    );

    setKategoriList(uniqueKategori);
  }, [produkList]);


  async function fetchProduk() {
    try {
      const res = await fetch("/api/produk");
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setProdukList(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("nama_barang", form.nama_barang);
      formData.append("tanggal", form.tanggal);
      formData.append("harga_awal", form.harga_awal.toString());
      formData.append("deskripsi", form.deskripsi);
      if (form.kategori && form.kategori.trim()) {
        formData.append("kategori", form.kategori);
      }

      if (form.merk_mobil && form.merk_mobil.trim()) {
        formData.append("merk_mobil", form.merk_mobil);
      }

      if (form.tipe_mobil && form.tipe_mobil.trim()) {
        formData.append("tipe_mobil", form.tipe_mobil);
      }

      if (form.transmisi && form.transmisi.trim()) {
        formData.append("transmisi", form.transmisi);
      }

      if (typeof form.jumlah_seat === "number" && form.jumlah_seat > 0) {
        formData.append("jumlah_seat", form.jumlah_seat.toString());
      }

      if (typeof form.tahun === "number" && form.tahun > 0) {
        formData.append("tahun", form.tahun.toString());
      }

      if (typeof form.kilometer === "number" && form.kilometer >= 0) {
        formData.append("kilometer", form.kilometer.toString());
      }
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      let res;
      if (editingId) {
        res = await fetch(`/api/produk/${editingId}`, {
          method: "PUT",
          body: formData,
        });
      } else {
        res = await fetch("/api/produk", {
          method: "POST",
          body: formData,
        });
      }
      
      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData.error || res.statusText || "Gagal menyimpan produk";
        throw new Error(errorMessage);
      }
      
      setForm({
        nama_barang: "",
        tanggal: "",
        harga_awal: 0,
        deskripsi: "",
        image_url: "",
        kategori: null,
        merk_mobil: null,
        tipe_mobil: null,
        transmisi: null,
        jumlah_seat: null,
        tahun: null,
        kilometer: null,
      });

      setSelectedFile(null);
      setEditingId(null);
      setModalOpen(false);
      setErrors({});
      setTouched({});
      alert("Produk berhasil disimpan!");
      fetchProduk();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Terjadi kesalahan saat menyimpan produk";
      console.error("Submit error:", err);
      setErrors({ submit: message });
    } finally {
        setIsSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    try {
      const res = await fetch(`/api/produk/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData.error || res.statusText || "Gagal menghapus produk";
        throw new Error(errorMessage);
      }
      alert("Produk berhasil dihapus!");
      fetchProduk();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Terjadi kesalahan saat menghapus produk";
      console.error("Delete error:", err);
      alert(`Gagal menghapus produk: ${message}`);
    }
  }

  function handleEdit(produk: Produk) {
    setForm({
      nama_barang: produk.nama_barang,
      tanggal: produk.tanggal.slice(0, 10),
      harga_awal: produk.harga_awal,
      deskripsi: produk.deskripsi,
      image_url: produk.image_url || "",
      kategori: produk.kategori || null,
      merk_mobil: produk.merk_mobil || null,
      tipe_mobil: produk.tipe_mobil || null,
      transmisi: produk.transmisi || null,
      jumlah_seat: produk.jumlah_seat ?? null,
      tahun: produk.tahun ?? null,
      kilometer: produk.kilometer ?? null,
    });
    setEditingId(produk.id);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setForm({
      nama_barang: "",
      tanggal: "",
      harga_awal: 0,
      deskripsi: "",
      image_url: "",
      kategori: null,
      merk_mobil: null,
      tipe_mobil: null,
      transmisi: null,
      jumlah_seat: null,
      tahun: null,
      kilometer: null,
    });
    setSelectedFile(null);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!form.nama_barang.trim()) {
      newErrors.nama_barang = "Nama produk wajib diisi";
    } else if (form.nama_barang.length < 5) {
      newErrors.nama_barang = "Nama produk minimal 5 karakter";
    }

    if (!form.tanggal) {
      newErrors.tanggal = "Tanggal berakhir wajib diisi";
    } else {
      const selectedDate = new Date(form.tanggal);
      const minDate = new Date();
      minDate.setDate(minDate.getDate() + 7);
      if (selectedDate < minDate) {
        newErrors.tanggal = "Tanggal minimal 7 hari dari sekarang";
      }
    }

    if (!form.harga_awal || form.harga_awal < 100000) {
      newErrors.harga_awal = "Harga awal minimal Rp 100.000";
    }

    if (!form.deskripsi.trim()) {
      newErrors.deskripsi = "Deskripsi produk wajib diisi";
    } else if (form.deskripsi.length < 5) {
      newErrors.deskripsi = "Deskripsi minimal 5 karakter";
    } else if (form.deskripsi.length > 2000) {
      newErrors.deskripsi = "Deskripsi maksimal 2000 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
    if (touched[field]) {
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors({ ...errors, [field]: "" });
      }
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    // Validate on blur
    const fieldErrors: {[key: string]: string} = {};

    switch (field) {
      case 'nama_barang':
        if (!form.nama_barang.trim()) {
          fieldErrors.nama_barang = "Nama produk wajib diisi";
        } else if (form.nama_barang.length < 5) {
          fieldErrors.nama_barang = "Nama produk minimal 5 karakter";
        }
        break;
      case 'tanggal':
        if (!form.tanggal) {
          fieldErrors.tanggal = "Tanggal berakhir wajib diisi";
        } else {
          const selectedDate = new Date(form.tanggal);
          const minDate = new Date();
          minDate.setDate(minDate.getDate() + 7);
          if (selectedDate < minDate) {
            fieldErrors.tanggal = "Tanggal minimal 7 hari dari sekarang";
          }
        }
        break;
      case 'harga_awal':
        if (!form.harga_awal || form.harga_awal < 100000) {
          fieldErrors.harga_awal = "Harga awal minimal Rp 100.000";
        }
        break;
      case 'deskripsi':
        if (!form.deskripsi.trim()) {
          fieldErrors.deskripsi = "Deskripsi produk wajib diisi";
        } else if (form.deskripsi.length < 50) {
          fieldErrors.deskripsi = "Deskripsi minimal 50 karakter";
        } else if (form.deskripsi.length > 2000) {
          fieldErrors.deskripsi = "Deskripsi maksimal 2000 karakter";
        }
        break;
    }

    setErrors({ ...errors, ...fieldErrors });
  };


  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 pb-4">
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
            <Package className="w-8 h-8 mr-3 text-indigo-600" />
            Daftar Produk Lelang
          </h1>

          <button
            onClick={() => { setModalOpen(true); setEditingId(null); }}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-150 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Tambah Produk
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveFilter("semua")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeFilter === "semua" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            Semua Produk
          </button>

          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setActiveFilter(kategori)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeFilter === kategori
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {formatKategori(kategori)}
            </button>
          ))}

        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Nama Barang
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Merk/Tipe
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Transmisi
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Seats
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Tahun
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Kilometer
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Harga Awal
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Deskripsi
                  </th>
                  <th className="py-3 px-6 text-center text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredProdukList.map((produk) => (
                  <tr key={produk.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {produk.nama_barang}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {`${produk.merk_mobil || ''} ${produk.tipe_mobil || ''}`.trim() || '-'}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {produk.transmisi || '-'}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {produk.jumlah_seat || '-'}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {produk.tahun || '-'}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {produk.kilometer ? `${produk.kilometer} km` : '-'}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {new Date(produk.tanggal).toLocaleDateString("id-ID")}
                    </td>
                    <td className="py-4 px-6 text-sm font-semibold text-green-600">
                      {formatRupiah(produk.harga_awal)}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {produk.kategori || '-'}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 max-w-xs truncate">
                      {produk.deskripsi}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-center space-x-2">
                      <button
                        onClick={() => handleEdit(produk)}
                        className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium py-1 px-3 rounded-full inline-flex items-center text-xs transition duration-150 shadow-sm"
                        title="Edit Produk"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(produk.id)}
                        className="text-white bg-red-600 hover:bg-red-700 font-medium py-1 px-3 rounded-full inline-flex items-center text-xs transition duration-150 shadow-sm"
                        title="Hapus Produk"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] relative shadow-2xl border border-gray-100 flex flex-col" onClick={e => e.stopPropagation()}>

            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-8 space-y-8">
                {/* Error Alert */}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900">Gagal menyimpan produk</p>
                      <p className="text-sm text-red-700 mt-1">{errors.submit}</p>
                    </div>
                  </div>
                )}
                
                {/* Product Information Section */}
                <div className="space-y-6">

                  {/* Product Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                      Nama Produk Lelang
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.nama_barang ?? ""}
                      onChange={(e) => handleInputChange('nama_barang', e.target.value)}
                      onBlur={() => handleBlur('nama_barang')}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 ${
                        errors.nama_barang ? 'border-red-500' : 'border-gray-200'
                      }`}
                      required
                    />
                    {errors.nama_barang && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nama_barang}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">Gunakan nama yang jelas dan menarik untuk menarik perhatian bidder</p>
                  </div>

                  {/* Auction Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0138C9]" />
                        Tanggal Berakhir Lelang
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={form.tanggal.slice(0, 10) ?? ""}
                        onChange={(e) => handleInputChange('tanggal', e.target.value)}
                        onBlur={() => handleBlur('tanggal')}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 ${
                          errors.tanggal ? 'border-red-500' : 'border-gray-200'
                        }`}
                        required
                      />
                      {errors.tanggal && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.tanggal}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">Pilih tanggal minimal 7 hari dari sekarang</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#0138C9]" />
                        Harga Awal (Rp)
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                        <input
                          type="number"
                          placeholder="50000000"
                          value={form.harga_awal ?? ""}
                          onChange={(e) => handleInputChange('harga_awal', Number(e.target.value))}
                          onBlur={() => handleBlur('harga_awal')}
                          min="100000"
                          step="100000"
                          className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 ${
                            errors.harga_awal ? 'border-red-500' : 'border-gray-200'
                          }`}
                          required
                        />
                      </div>
                      {errors.harga_awal && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.harga_awal}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">Minimal Rp 100.000, kelipatan Rp 100.000</p>
                    </div>
                  </div>

                  {/* Kategori */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                      Kategori Produk
                      <span className="text-orange-500">(Opsional)</span>
                    </label>
                    <select
                      value={form.kategori || ""}
                      onChange={(e) => handleInputChange('kategori', e.target.value)}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                    >
                      <option value="">Pilih Kategori</option>
                      <option value="SEMUA">Semua Mobil</option>
                      <option value="RAMAI">Sedang Ramai</option>
                      <option value="SEGERA">Segera Berakhir</option>
                      <option value="DIBAWAH100">Di Bawah 100 Juta</option>
                      <option value="BARU">Baru Masuk</option>
                    </select>
                    <p className="text-xs text-gray-500">Pilih kategori produk untuk tampilan di halaman jelajahi</p>
                  </div>
                </div>

                {/* Car Details Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Detail Mobil</h3>

                  {/* Car Brand and Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                        Merk Mobil
                        <span className="text-orange-500">(Opsional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Toyota, Honda, Mitsubishi"
                        value={form.merk_mobil ?? ""}
                        onChange={(e) => handleInputChange('merk_mobil', e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                      />
                      <p className="text-xs text-gray-500">Masukkan merk mobil (brand)</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                        Tipe/Series Mobil
                        <span className="text-orange-500">(Opsional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Avanza, Civic, Pajero"
                        value={form.tipe_mobil ?? ""}
                        onChange={(e) => handleInputChange('tipe_mobil', e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                      />
                      <p className="text-xs text-gray-500">Masukkan tipe atau series mobil</p>
                    </div>
                  </div>

                  {/* Transmission and Seats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                        Transmisi
                        <span className="text-orange-500">(Opsional)</span>
                      </label>
                      <select
                        value={form.transmisi ?? ""}
                        onChange={(e) => handleInputChange('transmisi', e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                      >
                        <option value="">Pilih Transmisi</option>
                        <option value="Matic">Matic</option>
                        <option value="Manual">Manual</option>
                      </select>
                      <p className="text-xs text-gray-500">Pilih jenis transmisi mobil</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                        Jumlah Seat
                        <span className="text-orange-500">(Opsional)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Contoh: 5, 7, 8"
                        value={form.jumlah_seat || ''}
                        onChange={(e) => handleInputChange('jumlah_seat', Number(e.target.value))}
                        min="1"
                        max="20"
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                      />
                      <p className="text-xs text-gray-500">Masukkan jumlah seat mobil</p>
                    </div>
                  </div>

                  {/* Year and Mileage */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0138C9]" />
                        Tahun Pembuatan
                        <span className="text-orange-500">(Opsional)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Contoh: 2020, 2018"
                        value={form.tahun ?? ""}
                        onChange={(e) => handleInputChange('tahun', Number(e.target.value))}
                        min="1900"
                        max={new Date().getFullYear() + 1}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                      />
                      <p className="text-xs text-gray-500">Masukkan tahun pembuatan mobil</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#0138C9]" />
                        Kilometer
                        <span className="text-orange-500">(Opsional)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Contoh: 50000, 100000"
                        value={form.kilometer ?? ""}
                        onChange={(e) => handleInputChange('kilometer', Number(e.target.value))}
                        min="0"
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 border-gray-200"
                      />
                      <p className="text-xs text-gray-500">Masukkan kilometer mobil (dalam km)</p>
                    </div>
                  </div>
                </div>

                {/* Product Description Section */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0138C9]" />
                      Deskripsi Lengkap
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Jelaskan detail produk secara lengkap untuk membantu calon bidder:"
                      value={form.deskripsi ?? ""}
                      onChange={(e) => handleInputChange('deskripsi', e.target.value)}
                      onBlur={() => handleBlur('deskripsi')}
                      rows={8}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0138C9]/20 focus:border-[#0138C9] transition-all duration-200 bg-white hover:bg-gray-50 resize-none ${
                        errors.deskripsi ? 'border-red-500' : 'border-gray-200'
                      }`}
                      required
                    />
                    {errors.deskripsi && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.deskripsi}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">Minimal 50 karakter, maksimal 2000 karakter</p>
                  </div>
                </div>

                {/* Product Image Section */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Image className="w-4 h-4 text-[#0138C9]" />
                      Foto Produk
                      <span className="text-orange-500">(Opsional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-[#0138C9] transition-colors bg-gray-50/50 hover:bg-white">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#0138C9]/10 rounded-full flex items-center justify-center mb-4">
                          <Image className="w-8 h-8 text-[#0138C9]" />
                        </div>
                        <p className="text-sm text-gray-600 text-center mb-2">
                          {selectedFile ? (
                            <span className="text-[#0138C9] font-medium">{selectedFile.name}</span>
                          ) : (
                            "Klik untuk upload foto produk"
                          )}
                        </p>
                        <p className="text-xs text-gray-500 text-center">
                          Format: PNG, JPG, JPEG<br/>
                          Ukuran maksimal: 5MB<br/>
                          Rekomendasi: Foto dari berbagai sudut
                        </p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs">ℹ️</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-blue-800 mb-1">Tips untuk Lelang Sukses</h4>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Gunakan nama produk yang menarik dan spesifik</li>
                          <li>• Berikan deskripsi yang detail dan jujur</li>
                          <li>• Tetapkan harga awal yang realistis</li>
                          <li>• Upload foto berkualitas dari berbagai sudut</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#0138C9] to-[#0A2472] hover:from-[#0A2472] hover:to-[#0138C9] hover:shadow-xl transform hover:-translate-y-0.5"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        {editingId ? "Perbarui Produk Lelang" : "Buat Produk Lelang"}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
