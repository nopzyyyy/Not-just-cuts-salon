'use client';

import React, { useState } from 'react';
import { SALON_DATA } from '@/data/salonData';
import { ServiceCard } from './ServiceCard';
import { Scissors, Palette, Sparkles, HeartPulse, Info } from 'lucide-react';

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'haircuts' | 'colour' | 'styling' | 'treatments'>('all');

  const categories = [
    { key: 'all', label: 'All Services', icon: Scissors },
    { key: 'haircuts', label: 'Haircuts', icon: Scissors },
    { key: 'colour', label: 'Hair Colour', icon: Palette },
    { key: 'styling', label: 'Styling & Blowouts', icon: Sparkles },
    { key: 'treatments', label: 'Hair Treatments', icon: HeartPulse },
  ];

  const filteredServices = activeCategory === 'all'
    ? SALON_DATA.services
    : SALON_DATA.services.filter(s => s.category === activeCategory);

  const handleServiceClick = (name: string) => {
    if (onSelectService) {
      onSelectService(name);
    }
  };

  return (
    <section id="services" className="py-20 bg-beige-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Our Services & Prices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Quality Hair Services Designed for Your Style
          </h2>
          <p className="text-warmgrey text-base sm:text-lg">
            From quick precision trims to complete balayage transformations, we provide friendly, professional hair care for everyone.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-burgundy text-white shadow-soft scale-105'
                    : 'bg-white text-charcoal hover:bg-beige-200 border border-beige-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-burgundy'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onSelect={handleServiceClick}
            />
          ))}
        </div>

        {/* Mandatory Price Disclaimer Note */}
        <div className="mt-12 bg-white rounded-xl p-5 border border-beige-200 flex items-start gap-4 max-w-3xl mx-auto shadow-soft">
          <Info className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
          <p className="text-xs text-warmgrey leading-relaxed">
            <strong className="text-charcoal font-semibold">Pricing Note: </strong>
            {SALON_DATA.serviceDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
