"use client"; // ← tambahkan ini di paling atas
import React, { ReactNode } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { useAdminData } from "@/app/hooks/useAdminData";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const { adminData, loading } = useAdminData();

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header toggleSidebar={toggleSidebar} adminData={adminData} loading={loading} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
