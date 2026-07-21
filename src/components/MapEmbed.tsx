'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';

export const MapEmbed: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[350px] rounded-2xl overflow-hidden border border-beige-200 shadow-soft bg-beige-100 relative">
      <iframe
        title="Not Just Cuts Cambridge Salon Location Map"
        src={SALON_DATA.business.googleEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '350px' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
};
