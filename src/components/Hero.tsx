'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Phone, MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_DATA } from '@/data/salonData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 bg-burgundy text-white overflow-hidden">
      
      {/* Decorative Warm Filled Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl opacity-60 -z-0 pointer-events-none transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Local Headline & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold text-gold-light">
              <MapPin className="w-3.5 h-3.5 text-gold-light" />
              <span>Unit 2, 1453 King Street East • Preston & Cambridge</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Haircuts & Styling <br />
              <span className="text-gold-light italic">For the Whole Family</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed font-normal">
              {SALON_DATA.business.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#appointments"
                className="flex items-center justify-center gap-2.5 bg-white text-burgundy hover:bg-ivory text-base font-bold px-8 py-4 rounded-xl shadow-card transition-all transform hover:-translate-y-0.5 text-center"
              >
                <Calendar className="w-5 h-5 text-burgundy" />
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${SALON_DATA.business.phoneClean}`}
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-base font-semibold px-6 py-4 rounded-xl transition-all text-center"
              >
                <Phone className="w-5 h-5 text-gold-light" />
                <span>Call {SALON_DATA.business.phone}</span>
              </a>
            </div>

            {/* Simple Trust Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" />
                <span className="text-xs font-medium text-white/90">Local Cambridge Salon</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-gold-light shrink-0" />
                <span className="text-xs font-medium text-white/90">Friendly Atmosphere</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-light shrink-0" />
                <span className="text-xs font-medium text-white/90">Transparent Starting Prices</span>
              </div>
            </div>

          </div>

          {/* Right Column: Framed Salon Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gold/30 blur-md" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/5] bg-charcoal">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Not Just Cuts Salon in Cambridge Ontario"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Not Just Cuts</p>
                      <p className="text-[11px] text-gold-light">Cambridge & Preston, ON</p>
                    </div>
                    <span className="text-[10px] bg-gold/20 text-gold-light font-bold px-2.5 py-1 rounded-full border border-gold/40">
                      Easy Parking
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
