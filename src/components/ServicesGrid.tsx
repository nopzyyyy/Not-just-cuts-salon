'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { ServiceCard } from './ServiceCard';
import { Scissors, Palette, Info } from 'lucide-react';

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const haircutsAndStyling = SALON_DATA.services.filter(s => s.category === 'haircuts' || s.category === 'styling');
  const hairColour = SALON_DATA.services.filter(s => s.category === 'colour');

  const handleServiceClick = (name: string) => {
    if (onSelectService) {
      onSelectService(name);
    }
  };

  return (
    <section id="services" className="py-16 bg-beige-100/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Services & Transparent Prices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-3">
            Simple, Quality Hair Care Prices
          </h2>
          <p className="text-warmgrey text-sm sm:text-base">
            Affordable haircuts and essential hair colouring for women, men, seniors, and kids.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Haircuts & Styling */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b-2 border-burgundy">
              <Scissors className="w-5 h-5 text-burgundy" />
              <h3 className="font-serif text-xl font-bold text-charcoal">Haircuts & Everyday Styling</h3>
            </div>
            
            <div className="space-y-4">
              {haircutsAndStyling.map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onSelect={handleServiceClick}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Hair Colour */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b-2 border-burgundy">
              <Palette className="w-5 h-5 text-burgundy" />
              <h3 className="font-serif text-xl font-bold text-charcoal">Essential Hair Colour</h3>
            </div>

            <div className="space-y-4">
              {hairColour.map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onSelect={handleServiceClick}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Mandatory Price Disclaimer */}
        <div className="mt-10 bg-white rounded-xl p-4 border border-beige-200 flex items-start gap-3 max-w-2xl mx-auto shadow-soft">
          <Info className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
          <p className="text-xs text-warmgrey leading-relaxed">
            <strong className="text-charcoal font-semibold">Pricing Note: </strong>
            {SALON_DATA.serviceDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
