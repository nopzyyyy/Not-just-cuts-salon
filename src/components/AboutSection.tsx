'use client';

import React from 'react';
import Image from 'next/image';
import { SALON_DATA } from '@/data/salonData';
import { UserCheck, MapPin, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { about } = SALON_DATA;

  return (
    <section id="about" className="py-16 bg-ivory relative border-t border-beige-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-beige-200 aspect-[4/5] bg-beige-100">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="Welcoming seating area at Not Just Cuts"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-light">
                  Cambridge & Preston Community
                </span>
                <p className="font-serif text-lg font-bold mt-0.5">
                  Unit 7, 1453 King Street East
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                About Our Salon
              </span>
              <h2 className="font-serif text-3xl font-bold text-charcoal mt-3 mb-3">
                {about.heading}
              </h2>
            </div>

            <p className="text-warmgrey text-base leading-relaxed">
              {about.story}
            </p>

            {/* Editable Owner / Team Details Card */}
            <div className="bg-beige-100/70 rounded-xl p-5 border border-beige-200 space-y-2">
              <div className="flex items-center gap-2 text-charcoal font-semibold text-xs uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-burgundy" />
                <span>Salon Owner & Team Details (Editable):</span>
              </div>
              <ul className="text-xs text-warmgrey space-y-1 list-disc list-inside">
                <li><strong>Owner / Lead Stylist:</strong> {about.placeholders.ownerName}</li>
                <li><strong>Salon Background:</strong> {about.placeholders.history}</li>
                <li><strong>Languages Spoken:</strong> {about.placeholders.languages}</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
