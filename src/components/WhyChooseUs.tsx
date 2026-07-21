'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { 
  MessageSquareHeart, 
  MapPin, 
  Users, 
  CircleDollarSign, 
  Sparkles, 
  CalendarCheck, 
  Heart, 
  Lightbulb 
} from 'lucide-react';

const icons = [
  MessageSquareHeart,
  MapPin,
  Users,
  CircleDollarSign,
  Sparkles,
  CalendarCheck,
  Heart,
  Lightbulb
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-beige-100/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Why Choose Not Just Cuts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Built Around Care, Trust and Community
          </h2>
          <p className="text-warmgrey text-base sm:text-lg">
            We focus on creating a welcoming experience for every client who walks through our doors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_DATA.whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-beige-200 shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-burgundy group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2 group-hover:text-burgundy transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
