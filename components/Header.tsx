'use client';

import React, { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS, CONTACT_INFO } from '@/utils/constants';
import { openWhatsApp } from '@/utils/helpers';
import type { NavLink } from '@/types/index';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleBookNow = (): void => {
    // Will redirect to contact page
  };

  const handleWhatsApp = (): void => {
    openWhatsApp(
      CONTACT_INFO.whatsapp,
      'Hi Pappa Rich! I would like to book your shoe cleaning service.'
    );
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-blue-500/20 shadow-lg">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">PAPPA RICH</div>
              <div className="text-blue-400 text-xs tracking-wide">SHOE LAUNDRY</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-white hover:text-blue-400 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="border-2 border-white hover:bg-white/10 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
            >
              💬 WhatsApp
            </button>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition inline-block"
            >
              📅 Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-slate-800">
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.id}
                href={link.href}
                className="block w-full text-left text-white hover:text-blue-400 py-2 px-2 rounded hover:bg-slate-800/50 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleWhatsApp}
                className="w-full border-2 border-white text-white py-2 rounded-lg font-semibold"
              >
                💬 WhatsApp
              </button>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-center"
              >
                📅 Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
