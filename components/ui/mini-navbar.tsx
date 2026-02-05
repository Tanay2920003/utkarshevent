"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-gray-400';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-[11px]';

  return (
    <Link href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass} font-bold uppercase tracking-widest`}>
      <div className="flex flex-col transition-transform duration-500 ease-in-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </Link>
  );
};

export function MiniNavbar() {
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');

  const logoElement = (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <span className="absolute w-1.5 h-1.5 rounded-full bg-blue-500 top-0 left-1/2 transform -translate-x-1/2 opacity-80 shadow-[0_0_10px_#3b82f6]"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-blue-500 left-0 top-1/2 transform -translate-y-1/2 opacity-80 shadow-[0_0_10px_#3b82f6]"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-blue-500 right-0 top-1/2 transform -translate-y-1/2 opacity-80 shadow-[0_0_10px_#3b82f6]"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80 shadow-[0_0_10px_#3b82f6]"></span>
    </div>
  );

  const navLinksData = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/timeline' },
    { label: 'Days', href: '/details' },
  ];

  return (
    <header className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50
                       hidden sm:flex items-center
                       pl-8 pr-8 py-4 backdrop-blur-md
                       ${headerShapeClass}
                       border border-white/10 bg-black/40
                       sm:w-auto
                       transition-all duration-300 ease-in-out`}>

      <div className="flex items-center justify-between w-full gap-x-12">
        <div className="flex items-center">
          {logoElement}
          <span className="ml-3 text-[10px] font-black uppercase tracking-[0.3em] text-white italic">
            UTKARSH 2026
          </span>
        </div>

        <nav className="flex items-center space-x-8">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>


        <div className="flex items-center gap-4">
          {/* Register button hidden */}
        </div>
      </div>
    </header>
  );
}
