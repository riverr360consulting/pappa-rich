'use client';

import React from 'react';
import { SERVICES } from '@/utils/constants';
import type { Service } from '@/types/index';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide">OUR SERVICES</span>
          <h2 className="section-title mt-2">Expert Care For Every Pair</h2>
          <p className="section-subtitle">
            We use premium products and advanced techniques to ensure the best care for your favorite shoes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center gap-2">
                Learn More
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
