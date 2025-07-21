"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
// CORRECTED IMPORT PATH:
import { HomeIcon, UserIcon, LayersIcon, SparklesIcon } from '../app/lib/icons'; 

// --- Modernized Header Component with Icons ---
export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/', icon: <HomeIcon className="w-4 h-4" /> },
        { name: 'About', href: '/about', icon: <UserIcon className="w-4 h-4" /> },
        { name: 'Projects', href: '/projects', icon: <LayersIcon className="w-4 h-4" /> },
        { name: 'AI Analyst', href: '/ai-coach', icon: <SparklesIcon className="w-4 h-4" /> },
    ];

    const NavLink = ({ href, children, icon }: { href: string, children: React.ReactNode, icon: React.ReactNode }) => {
        const isActive = pathname === href;
        return (
            <Link 
                href={href} 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${isActive ? 'bg-accent-1/10 text-accent-1' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
            >
                {icon}
                <span className="truncate">{children}</span>
            </Link>
        );
    };

    return (
        <header className="sticky top-4 z-50 mx-auto max-w-5xl">
            <nav className="glass-card flex items-center justify-between p-2.5 rounded-xl">
                <div className="flex-shrink-0">
                    <Link href="/" className="text-white font-heading font-bold text-xl tracking-wider hover:text-accent-1 transition-colors duration-300 p-2">
                        JF
                    </Link>
                </div>
                <div className="hidden md:flex items-baseline space-x-2">
                    {navItems.map((item) => (
                        <NavLink key={item.name} href={item.href} icon={item.icon}>{item.name}</NavLink>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none p-2">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 glass-card rounded-xl p-2 space-y-1">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            onClick={() => setIsOpen(false)} 
                            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-base font-medium transition-colors ${pathname === item.href ? 'bg-accent-1/10 text-accent-1' : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}