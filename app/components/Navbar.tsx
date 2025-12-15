"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.name) setUser({ name: data.name });
        else setUser(null);
      })
      .catch(() => setUser(null));
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-[#0138C9] w-full py-4 px-6 flex items-center justify-between fixed top-0 z-50 shadow-xl">
  
      <div className="flex items-center flex-1">
        <img src="/images/logo.png" alt="Logo TDI" className="h-8" />
      </div>

      <div className="hidden md:flex justify-center flex-grow">
        <ul className="flex items-center gap-10 text-white font-medium">
          <li><Link href="/" className="hover:underline">Beranda</Link></li>

          <li className="relative group min-h-12 flex items-center">
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              Jelajahi
              <svg className="w-3 h-3" fill="white" viewBox="0 0 20 20">
                <path d="M5.25 7.75L10 12.25L14.75 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <ul className="absolute left-0 top-full w-48 bg-white text-[#0138C9] rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-400 z-10">
              <li><Link href="/jelajahi" className="block px-6 py-2 hover:bg-[#f0f4ff]">Semua Mobil</Link></li>
              <li><a href="#sedang-ramai" className="block px-6 py-2 hover:bg-[#f0f4ff]">Sedang Ramai</a></li>
              <li><a href="#segera-berakhir" className="block px-6 py-2 hover:bg-[#f0f4ff]">Segera Berakhir</a></li>
              <li><a href="#dibawah-100-juta" className="block px-6 py-2 hover:bg-[#f0f4ff]">Di Bawah 100 Juta</a></li>
              <li><a href="#baru-masuk" className="block px-6 py-2 hover:bg-[#f0f4ff]">Baru Masuk</a></li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="relative group min-h-12 flex items-center">
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              Koleksi Saya
              <svg className="w-3 h-3" fill="white" viewBox="0 0 20 20"><path d="M5.25 7.75L10 12.25L14.75 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <ul className="absolute left-0 top-full w-48 bg-white text-[#0138C9] rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
              <li><Link href="/koleksi-saya/watchlist" className="block px-6 py-2 hover:bg-[#f0f4ff]">Watchlist</Link></li>
              <li><Link href="/koleksi-saya/bid-saya" className="block px-6 py-2 hover:bg-[#f0f4ff]">Bid Saya</Link></li>
              <li><Link href="/koleksi-saya/profil" className="block px-6 py-2 hover:bg-[#f0f4ff]">Profil</Link></li>
              <li><Link href="/koleksi-saya/pengaturan" className="block px-6 py-2 hover:bg-[#f0f4ff]">Pengaturan</Link></li>
            </ul>
          </li>

          {/* Dropdown 3 */}
          <li className="relative group min-h-12 flex items-center">
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              Bantuan
              <svg className="w-3 h-3" fill="white" viewBox="0 0 20 20"><path d="M5.25 7.75L10 12.25L14.75 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <ul className="absolute left-0 top-full w-48 bg-white text-[#0138C9] rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
              <li><Link href="/bantuan/cara-kerja" className="block px-6 py-2 hover:bg-[#f0f4ff]">Cara Kerja</Link></li>
              <li><Link href="/bantuan/faq" className="block px-6 py-2 hover:bg-[#f0f4ff]">FAQ</Link></li>
              <li><Link href="/bantuan/pusat-bantuan" className="block px-6 py-2 hover:bg-[#f0f4ff]">Pusat Bantuan</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* USER GREETING or DAFTAR BUTTON (DESKTOP) */}
      <div className="hidden md:inline-block">
        {user ? (
          <span className="text-white font-semibold px-6">Hi, {user.name}</span>
        ) : (
          <Link href="/register" className="text-white border border-white rounded-full px-6 py-1 hover:bg-white hover:text-[#0138C9] transition">
            Daftar
          </Link>
        )}
      </div>

      {/* MOBILE BUTTON */}
      <button className="md:hidden ml-4 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
        </svg>
      </button>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[64px] left-0 w-full bg-[#0138C9] shadow-lg py-2 z-40">
          <ul className="flex flex-col text-white font-medium">
            <li><Link href="/" className="block px-6 py-3 hover:bg-blue-800">Beranda</Link></li>

            {/* Mobile Dropdowns */}
            <li>
              <button onClick={() => toggleDropdown("jelajahi")} className="flex justify-between items-center w-full px-6 py-3 hover:bg-blue-800">
                Jelajahi
                <span className={`${openDropdown === "jelajahi" ? "rotate-180" : ""} transition`}>⌄</span>
              </button>
              {openDropdown === "jelajahi" && (
                <ul className="bg-blue-900/50">
                  <li><Link href="/jelajahi" className="block px-10 py-2 hover:bg-blue-900">Semua Mobil</Link></li>
                  <li><a href="#sedang-ramai" className="block px-10 py-2 hover:bg-blue-900">Sedang Ramai</a></li>
                  <li><a href="#segera-berakhir" className="block px-10 py-2 hover:bg-blue-900">Segera Berakhir</a></li>
                  <li><a href="#dibawah-100-juta" className="block px-10 py-2 hover:bg-blue-900">Di Bawah 100 Juta</a></li>
                  <li><a href="#baru-masuk" className="block px-10 py-2 hover:bg-blue-900">Baru Masuk</a></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleDropdown("koleksi")} className="flex justify-between items-center w-full px-6 py-3 hover:bg-blue-800">
                Koleksi Saya
                <span className={`${openDropdown === "koleksi" ? "rotate-180" : ""} transition`}>⌄</span>
              </button>
              {openDropdown === "koleksi" && (
                <ul className="bg-blue-900/50">
                  <li><Link href="/koleksi-saya/watchlist" className="block px-10 py-2 hover:bg-blue-900">Watchlist</Link></li>
                  <li><Link href="/koleksi-saya/bid-saya" className="block px-10 py-2 hover:bg-blue-900">Bid Saya</Link></li>
                  <li><Link href="/koleksi-saya/profil" className="block px-10 py-2 hover:bg-blue-900">Profil</Link></li>
                  <li><Link href="/koleksi-saya/pengaturan" className="block px-10 py-2 hover:bg-blue-900">Pengaturan</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleDropdown("help")} className="flex justify-between items-center w-full px-6 py-3 hover:bg-blue-800">
                Bantuan
                <span className={`${openDropdown === "help" ? "rotate-180" : ""} transition`}>⌄</span>
              </button>
              {openDropdown === "help" && (
                <ul className="bg-blue-900/50">
                  <li><Link href="/how-it-works" className="block px-10 py-2 hover:bg-blue-900">Cara Kerja</Link></li>
                  <li><Link href="/faq" className="block px-10 py-2 hover:bg-blue-900">FAQ</Link></li>
                  <li><Link href="/help" className="block px-10 py-2 hover:bg-blue-900">Pusat Bantuan</Link></li>
                </ul>
              )}
            </li>

            {/* USER GREETING or DAFTAR/MASUK (MOBILE) */}
            <li className="p-4">
              {user ? (
                <span className="block text-center bg-white/10 text-white font-bold rounded-full py-2">Hi, {user.name}</span>
              ) : (
                <Link href="/register" className="block text-center bg-white text-[#0138C9] font-bold rounded-full py-2">
                  Daftar / Masuk
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
