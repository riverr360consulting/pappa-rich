'use client';

import React from 'react';
import { Droplets } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/utils/constants';
import { scrollToSection } from '@/utils/helpers';
import type { NavLink } from '@/types/index';

export const Footer: React.FC = () => {
  const handleNavClick = (href: string): void => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold">PAPPA RICH</div>
                <div className="text-blue-400 text-xs">SHOE LAUNDRY</div>
              </div>
            </div>
            <p className="text-sm">
              Premium shoe care service in Calicut, Kerala. Professional cleaning, whitening, and restoration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 {CONTACT_INFO.address}</li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition">
                  📱 {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition">
                  📧 {CONTACT_INFO.email}
                </a>
              </li>
              <li>⏰ {CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} Pappa Rich Shoe Laundry. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
