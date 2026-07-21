'use client';

import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { SALON_DATA } from '@/data/salonData';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-beige-300 shadow-card py-2.5 px-4">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Action */}
        <a
          href={`tel:${SALON_DATA.business.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-beige-100 text-charcoal hover:bg-burgundy hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5 text-burgundy group-hover:text-white mb-0.5" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* Directions Action */}
        <a
          href={SALON_DATA.business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-beige-100 text-charcoal hover:bg-burgundy hover:text-white transition-colors"
        >
          <Navigation className="w-5 h-5 text-burgundy group-hover:text-white mb-0.5" />
          <span className="text-[11px] font-bold">Directions</span>
        </a>

        {/* Book Action */}
        <a
          href="#appointments"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-burgundy text-white shadow-soft"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold">Book</span>
        </a>

      </div>
    </div>
  );
};
