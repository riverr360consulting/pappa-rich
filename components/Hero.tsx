'use client';

import React from 'react';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/utils/constants';
import { scrollToSection, openWhatsApp } from '@/utils/helpers';

export const Hero: React.FC = () => {
  const handleBookNow = (): void => {
    scrollToSection('contact');
  };

  const handleWhatsApp = (): void => {
    openWhatsApp(
      CONTACT_INFO.whatsapp,
      'Hi Pappa Rich! I would like to book your shoe cleaning service.'
    );
  };

  return (
    <section
      id="home"
      className="pt-0 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-600 relative overflow-hidden"
    >
      {/* Top spacing for header */}
      <div className="h-16"></div>
      <div className="container-custom pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
              <span className="text-blue-400 text-sm font-semibold">PREMIUM SHOE CARE</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Give Your Shoes
              <br />
              <span className="text-blue-400">a Second Life</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-md">
              Professional shoe cleaning, whitening & restoration services that make your shoes look brand new.
            </p>

            <div className="flex items-center space-x-2 text-white">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{CONTACT_INFO.address} ({CONTACT_INFO.city})</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleBookNow}
                className="btn-primary flex items-center justify-center gap-2"
              >
                📅 Book Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                💬 WhatsApp Us
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Safe Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Quick Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right - Shoe Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center animate-slide-in">
            {/* Background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute w-64 h-64 bg-blue-400/5 rounded-full blur-2xl top-12 right-12"></div>
            </div>

            {/* Shoe Image with Icons */}
            <div className="relative z-10 text-center">
              {/* Icons around shoe */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-blue-500">
                  <span className="text-2xl">👟</span>
                </div>
              </div>
              <div className="absolute top-12 -right-12">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-blue-500">
                  <span className="text-2xl">💧</span>
                </div>
              </div>
              <div className="absolute bottom-12 -left-12">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-blue-500">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
              <div className="absolute -bottom-12 right-1/4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-blue-500">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>

              {/* Shoe Image */}
              <div className="relative w-96 h-96 mx-auto md:w-full md:max-w-2xl md:h-96">
                <img 
                  src="/shoe-hero.png" 
                  alt="Professional shoe cleaning kit" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-16 text-white"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ fill: 'currentColor' }}
      >
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"></path>
      </svg>
    </section>
  );
};
