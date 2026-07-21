'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Phone, MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_DATA } from '@/data/salonData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-ivory">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige-100 rounded-full blur-3xl opacity-60 -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-bg rounded-full blur-2xl opacity-70 -z-10 transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-beige-100 border border-beige-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-charcoal">
              <MapPin className="w-3.5 h-3.5 text-burgundy" />
              <span>Serving Preston & Cambridge, Ontario</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.15]">
              Haircuts and Styling <br className="hidden sm:block" />
              <span className="text-burgundy italic">Made for You</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-warmgrey max-w-2xl leading-relaxed font-normal">
              {SALON_DATA.business.subtitle}
            </p>

            {/* Mobile-Friendly Stacked / Desktop Inline Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#appointments"
                className="flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white text-base font-semibold px-8 py-4 rounded-xl shadow-card hover:shadow-floating transition-all transform hover:-translate-y-0.5 text-center focus:ring-2 focus:ring-burgundy"
              >
                <Calendar className="w-5 h-5" />
                <span>Request an Appointment</span>
              </a>

              <a
                href={`tel:${SALON_DATA.business.phoneClean}`}
                className="flex items-center justify-center gap-2 bg-beige-100 hover:bg-beige-200 text-charcoal border border-beige-300 text-base font-semibold px-6 py-4 rounded-xl transition-all text-center focus:ring-2 focus:ring-burgundy"
              >
                <Phone className="w-5 h-5 text-burgundy" />
                <span>Call {SALON_DATA.business.phone}</span>
              </a>
            </div>

            {/* Small Trust Badges (No fake ratings or counts) */}
            <div className="pt-6 border-t border-beige-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0" />
                <span className="text-xs font-medium text-charcoal/90">Local Cambridge Salon</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-gold-dark flex-shrink-0" />
                <span className="text-xs font-medium text-charcoal/90">Personal Service</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-burgundy flex-shrink-0" />
                <span className="text-xs font-medium text-charcoal/90">Easy Online Requests</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backing Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/20 via-beige-200 to-burgundy/10 transform rotate-1 blur-sm" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-white border border-beige-200 aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern salon interior and hair styling space at Not Just Cuts"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Floating Location Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-beige-200 shadow-soft">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-burgundy/10 rounded-lg text-burgundy">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-charcoal">Not Just Cuts</p>
                      <p className="text-[11px] text-warmgrey">Unit 2, 1453 King Street East, Cambridge</p>
                      <p className="text-[10px] text-gold-dark font-medium mt-0.5">Easy parking in front</p>
                    </div>
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
