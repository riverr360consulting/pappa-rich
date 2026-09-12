'use client';

import React from 'react';
import { PRICING } from '@/utils/constants';
import { scrollToSection } from '@/utils/helpers';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export const Pricing: React.FC = () => {
  const handleBooking = (): void => {
    scrollToSection('contact');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide">PRICING PLANS</span>
          <h2 className="section-title mt-2">Affordable Premium Services</h2>
          <p className="section-subtitle">
            Choose the perfect package for your shoe care needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan: PricingPlan, index: number) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl border transition duration-300 ${
                index === 1
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-25 shadow-2xl transform scale-105'
                  : 'border-gray-200 bg-white hover:shadow-lg'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-gray-600 ml-2">per pair</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleBooking}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  index === 1
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
