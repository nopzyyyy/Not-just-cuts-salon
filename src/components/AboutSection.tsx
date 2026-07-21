'use client';

import React from 'react';
import Image from 'next/image';
import { SALON_DATA } from '@/data/salonData';
import { UserCheck, Award, Heart, Sparkles, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { about } = SALON_DATA;

  return (
    <section id="about" className="py-20 bg-ivory relative border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-beige-200 aspect-[4/5] bg-beige-100">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="Salon interior and welcoming seating area at Not Just Cuts"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                  Cambridge Salon Community
                </span>
                <p className="font-serif text-xl font-bold mt-1">
                  Unit 2, 1453 King Street East
                </p>
                <p className="text-xs text-white/80 mt-0.5">
                  Serving Preston & Cambridge, ON
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                About Not Just Cuts
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
                {about.heading}
              </h2>
            </div>

            <p className="text-warmgrey text-base sm:text-lg leading-relaxed">
              {about.story}
            </p>

            {/* Editable Owner / Stylist Placeholders Card */}
            <div className="bg-beige-100/70 rounded-2xl p-6 border border-beige-200 space-y-3">
              <div className="flex items-center gap-2 text-charcoal font-semibold text-sm">
                <UserCheck className="w-4 h-4 text-burgundy" />
                <span>Salon Owner & Team Details (Editable Placeholders):</span>
              </div>
              <ul className="text-xs text-warmgrey space-y-1.5 list-disc list-inside">
                <li><strong>Owner / Lead Stylist:</strong> {about.placeholders.ownerName}</li>
                <li><strong>Salon Background:</strong> {about.placeholders.history}</li>
                <li><strong>Experience:</strong> {about.placeholders.experience}</li>
                <li><strong>Certifications & Training:</strong> {about.placeholders.training}</li>
                <li><strong>Languages Spoken:</strong> {about.placeholders.languages}</li>
              </ul>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {about.values.map((val, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-beige-200 shadow-soft">
                  <div className="w-8 h-8 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-charcoal">{val.title}</h3>
                  <p className="text-xs text-warmgrey mt-1">{val.text}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
