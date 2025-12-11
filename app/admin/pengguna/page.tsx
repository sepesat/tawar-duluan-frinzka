"use client";
import { useState } from "react";
import { useUsers, User } from "@/app/hooks/useUsers";
import { User as UserIcon, Plus } from "lucide-react";

export default function AdminUsersPage() {
  const { users, loading, error, fetchUsers } = useUsers();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMsg("");
  };

  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");

      setMsg("Petugas berhasil ditambahkan!");
      fetchUsers();

      setTimeout(() => closeModal(), 900);
    } catch (err: any) {
      setMsg(err.message || "Gagal menambahkan petugas");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-blue-500/20 rounded-lg">
              <UserIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Manajemen Petugas</h1>
              <p className="text-gray-300 text-sm">Kelola akun petugas dan akses platform</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg shadow hover:from-indigo-600 hover:to-indigo-700 transition"
          >
            <Plus className="w-4 h-4" />
            Tambah Petugas
          </button>
        </div>

        {/* Table Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Daftar Petugas</h2>

          {loading && <p className="text-blue-300 font-medium">Memuat...</p>}
          {error && (
            <p className="text-red-300 bg-red-900/30 p-3 rounded-lg">{error}</p>
          )}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-xs text-gray-300 uppercase tracking-wider">
                    <th className="py-3 px-3">Nama</th>
                    <th className="py-3 px-3">Email</th>
                    <th className="py-3 px-3">Role</th>
                    <th className="py-3 px-3">Dibuat</th>
                  </tr>
                </thead>
                <tbody>
                  {(users || []).map((u: User) => (
                    <tr key={u.id} className="border-t border-white/6 hover:bg-white/5 transition">
                      <td className="py-4 px-3 text-white font-medium">{u.name}</td>
                      <td className="py-4 px-3 text-gray-200">{u.email}</td>
                      <td className="py-4 px-3">
                        <span className="px-2 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-200 rounded-full">{u.role}</span>
                      </td>
                      <td className="py-4 px-3 text-gray-300">
                        {new Date(u.createdAt).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="w-full max-w-md p-6 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Tambah Petugas Baru</h3>
                <button onClick={closeModal} className="text-gray-300 hover:text-white">✕</button>
              </div>

              {msg && (
                <p className={`mb-3 p-3 rounded-lg text-sm font-medium ${msg.includes("berhasil") ? "bg-green-900/40 text-green-200" : "bg-red-900/40 text-red-200"}`}>
                  {msg}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Nama</label>
                  <input
                    type="text"
                    placeholder="Nama Petugas"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div className="flex gap-3 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold transition ${isSubmitting ? "bg-indigo-400 cursor-not-allowed" : "bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"}`}
                  >
                    {isSubmitting ? "Menyimpan..." : "Simpan"}
                  </button>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 py-3 bg-white/6 text-white/90 font-semibold rounded-lg hover:bg-white/10 transition"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
