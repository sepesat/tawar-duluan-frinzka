"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      if (!email || !password) {
        setErrorMsg("Email dan password harus diisi");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Cek apakah response adalah JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server error: Invalid response format");
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login gagal");

      // jika admin, arahkan ke dashboard admin
      if (data.role === "admin") {
        router.push("/admin/dashboard");
      } else if (data.role === "petugas") {
        router.push("/petugas/dashboard");
      } else {
        router.push("/"); // masyarakat
      }
      console.log("RESPON LOGIN:", data);
      console.log("ROLE:", data.role);

    } catch (err: any) {
      console.error("LOGIN ERROR:", err);
      setErrorMsg(err.message || "Gagal login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[conic-gradient(at_top_left,#0138C9,40%,#001f7a,70%,#D8FF4B)] p-6">
      <div className="w-full max-w-md p-8 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-[0_0_45px_rgba(1,56,201,0.35)] bg-white/10">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
          Login ke Akun Anda
        </h1>

        {errorMsg && (
          <p className="p-3 text-center text-yellow-300 text-sm mb-4 bg-white/10 rounded">
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/15 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#D8FF4B]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-white/15 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#D8FF4B]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition text-white ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-[#0138C9] hover:bg-[#012fa3]"
            }`}
          >
            {loading ? "Memproses..." : "Login Sekarang"}
          </button>
        </form>

        <p className="text-center mt-6 text-white/90 text-sm">
          Belum punya akun?{" "}
          <a href="/register" className="text-[#D8FF4B] font-semibold">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
