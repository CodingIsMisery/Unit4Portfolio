"use client";

import { useRouter } from 'next/navigation';

interface ModernButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  isExternal?: boolean;
}

export default function ModernButton({ children, href, className = '', isExternal = false }: ModernButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 font-medium py-2 px-4 rounded-lg transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}