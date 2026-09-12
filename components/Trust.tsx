'use client';

import React from 'react';
import { TRUST_ITEMS } from '@/utils/constants';
import type { TrustItem } from '@/types/index';

export const Trust: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item: TrustItem) => (
            <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition">
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
