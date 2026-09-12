'use client';

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/utils/constants';
import { openWhatsApp } from '@/utils/helpers';

export const CTA: React.FC = () => {

  const handleWhatsApp = (): void => {
    openWhatsApp(
      CONTACT_INFO.whatsapp,
      'Hi Pappa Rich! I would like to book your shoe cleaning service.'
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Revive Your Shoes?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book our premium shoe care services today and give your favorite pair a second life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg inline-block"
          >
            📅 Book an Appointment
          </Link>
          <button
            onClick={handleWhatsApp}
            className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
          >
            💬 Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
