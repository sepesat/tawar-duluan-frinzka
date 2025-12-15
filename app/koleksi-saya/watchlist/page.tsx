"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";




interface WatchlistCar {
  id: string;
  img?: string;
  name: string;
  spec: string;
  price: string;
  priceLabel: string;
  status: string;
  endTime?: number;
  countdown?: string;
  button: { label: string; style: string; disabled: boolean };
  sold: boolean;
}
export default function Watchlist() {
  const [cars, setCars] = useState<WatchlistCar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/watchlist')
      .then(res => res.ok ? res.json() : [])
      .then((data: any[]) => {
        const mapped: WatchlistCar[] = data.map((item) => ({
          id: item.id,
          img: item.image_url,
          name: item.nama_barang,
          spec: [item.merk_mobil, item.tipe_mobil, item.tahun].filter(Boolean).join(' '),
          price: item.harga_awal ? `Rp ${item.harga_awal.toLocaleString('id-ID')}` : '-',
          priceLabel: item.kategori || '',
          status: 'Lelang Berlangsung',
          endTime: undefined,
          countdown: '',
          button: { label: 'Lihat', style: 'bg-blue-600 text-white', disabled: false },
          sold: false,
        }));
        setCars(mapped);
      })
      .catch(() => setCars([]))
      .finally(() => setLoading(false));
  }, []);

  // 🔥 live countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prev) =>
        prev.map((car) => {
          if (!car.endTime) return car;

          const remaining = car.endTime - Date.now();

          if (remaining <= 0) {
            return {
              ...car,
              countdown: "BERAKHIR",
              status: "Lelang Berakhir",
              button: { label: "Lihat Hasil", style: "bg-gray-300 text-gray-600 cursor-not-allowed", disabled: true },
              sold: true,
            };
          }

          const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((remaining / 1000 / 60) % 60);
          const seconds = Math.floor((remaining / 1000) % 60);

          return {
            ...car,
            countdown: `${days}h ${hours}j ${minutes}m ${seconds}d`,
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-full max-w-6xl mx-auto px-4 mt-12 pt-20 pb-12">
        <div className="bg-gradient-to-r from-[#0138C9] to-[#0056b3] text-white p-6 rounded-2xl shadow-2xl mb-8">
          <h1 className="text-4xl font-extrabold mb-2 flex items-center">
            ⭐ Koleksi Saya (Watchlist)
          </h1>
          <p className="text-lg opacity-90">Pantau mobil favorit Anda dengan mudah</p>
        </div>

        {/* Header Table (Desktop) */}
        <div className="hidden md:grid md:grid-cols-12 text-sm font-bold text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-2xl shadow-lg border-b-2 border-gray-300">
          <div className="col-span-4">Detail Mobil</div>
          <div className="col-span-2 text-center">Harga Jual</div>
          <div className="col-span-3 text-center">Status Lelang / Waktu Sisa</div>
          <div className="col-span-3 text-right">Aksi</div>
        </div>

        {/* Item List */}
        <div className="space-y-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className={`grid grid-cols-1 md:grid-cols-12 items-center p-6 rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 ${
                car.sold
                  ? "opacity-60 bg-gradient-to-r from-gray-100 to-gray-200 border-l-8 border-gray-400"
                  : "bg-gradient-to-r from-white to-gray-50 border-l-8 hover:shadow-2xl border-[#0138C9]"
              }`}
            >
              {/* Detail Mobil */}
              <div className="col-span-4 flex items-center mb-4 md:mb-0">
                <img
                  src={car.img}
                  alt={car.name}
                  className={`w-24 h-20 object-cover rounded-xl mr-6 shadow-md ${car.sold ? "grayscale" : ""}`}
                />
                <div>
                  <h3 className={`text-xl font-bold ${car.sold ? "text-gray-500" : "text-[#0138C9]"}`}>
                    {car.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{car.spec}</p>
                </div>
              </div>
              {/* Harga */}
              <div className="col-span-2 text-left md:text-center mb-4 md:mb-0 border-b md:border-b-0 pb-2 md:pb-0">
                <p className={`text-xl font-bold ${car.sold ? "text-gray-500 line-through" : "text-red-600"}`}>
                  {car.price}
                </p>
                {car.priceLabel && (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${car.sold ? "text-gray-500 bg-gray-200" : "text-green-700 bg-green-100"}`}>
                    {car.priceLabel}
                  </span>
                )}
              </div>
              {/* Status / Countdown */}
              <div className="col-span-3 text-left md:text-center mb-4 md:mb-0 border-b md:border-b-0 pb-2 md:pb-0">
                {!car.endTime ? (
                  <>
                    <div className="bg-gradient-to-r from-[#ABD905] to-[#8BC34A] text-[#0138C9] font-bold py-2 px-4 rounded-full text-sm inline-block shadow-md">
                      {car.status}
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-medium">Non-Lelang</p>
                  </>
                ) : car.countdown !== "BERAKHIR" ? (
                  <>
                    <div className="bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-2 px-4 rounded-full text-sm inline-block animate-pulse shadow-md">
                      {car.countdown}
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-medium">{car.status}</p>
                  </>
                ) : (
                  <>
                    <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold py-2 px-4 rounded-full text-sm inline-block shadow-md">
                      BERAKHIR
                    </div>
                    <p className="text-xs text-gray-500 mt-2 font-medium">Lelang Berakhir</p>
                  </>
                )}
              </div>
              {/* Action */}
              <div className="col-span-3 flex justify-start md:justify-end space-x-3">
                <button
                  disabled={car.button.disabled}
                  className={`${car.button.style} font-bold py-3 px-5 text-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  {car.button.label}
                </button>
                <button className="text-gray-500 hover:text-red-500 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-red-50 transition-all duration-300">
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
