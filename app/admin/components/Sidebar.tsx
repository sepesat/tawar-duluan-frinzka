// components/Sidebar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    Home,        
    Users,       
    Package,     
    BarChart2,   
    LogOut,      
    Menu,
    FileClock        
} from 'lucide-react';

declare const signOut: any;
declare const auth: any;

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
        } catch (error) {
            console.error("Gagal Logout dari Sidebar:", error);
        }
        toggleSidebar();
    };

    const navItems = [
        { name: 'Laporan Analitik', href: '/admin/laporan', icon: BarChart2 },
        { name: 'Manajemen Petugas', href: '/admin/pengguna', icon: Users },
        { name: 'Pengelolaan Produk', href: '/admin/produk', icon: Package },
        { name: 'Kelola Lelang', href: '/admin/bids', icon: FileClock }, 
    ];

    const sidebarClass = `fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out backdrop-blur-sm border-r border-slate-700/50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:relative lg:flex lg:flex-col lg:h-screen`;

    return (
        <>
            <aside className={sidebarClass}>
                <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
                    <h1 className="text-xl font-extrabold text-white tracking-wider bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        ADMIN PANEL
                    </h1>
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden text-slate-400 hover:text-white p-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (
                            pathname.startsWith(item.href) && item.href !== '/admin/dashboard'
                        );

                        const linkClass = isActive
                            ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/50 transform translate-y-[-2px] hover:shadow-xl hover:shadow-indigo-500/30"
                            : "text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200 hover:shadow-md hover:shadow-slate-600/20";

                        const Icon = item.icon; // Komponen ikon Lucide

                        return (
                            <Link key={item.name} href={item.href}
                                className={`flex items-center p-3 text-sm font-semibold rounded-xl transition duration-200 ease-in-out ${linkClass}`}
                                onClick={toggleSidebar}>
                                <Icon className="w-5 h-5 mr-3" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-700/50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center p-3 text-sm font-semibold text-red-400 rounded-xl border-2 border-red-500/30 bg-slate-800/50 hover:bg-red-500/20 hover:border-red-400 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-red-500/20"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>

            {isOpen && (
                <div
                    id="sidebar-overlay"
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}