'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { 
  Scissors, 
  Sparkles, 
  Zap, 
  Smile, 
  Palette, 
  Sun, 
  Heart, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Sparkles,
  Zap,
  Smile,
  Palette,
  Sun,
  Heart,
  ShieldCheck
};

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-ivory relative border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-gold-bg px-3 py-1 rounded-full">
            Our Skills & Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Hairstyling Expertise for Every Look
          </h2>
          <p className="text-warmgrey text-base sm:text-lg">
            Whether you want clean classic lines, modern dimensional color, or gentle styling for your kids, we bring skilled care to every client.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_DATA.skills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Scissors;
            return (
              <div
                key={skill.id}
                className="bg-white rounded-2xl p-6 border border-beige-200 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-beige-100 group-hover:bg-burgundy group-hover:text-white text-burgundy flex items-center justify-center mb-5 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-serif font-bold text-charcoal mb-2 group-hover:text-burgundy transition-colors">
                  {skill.title}
                </h3>

                <p className="text-xs text-warmgrey leading-relaxed mb-4">
                  {skill.description}
                </p>

                <a
                  href="#gallery"
                  className="inline-flex items-center text-xs font-semibold text-gold-dark hover:text-burgundy transition-colors"
                >
                  <span>See example work</span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Salon Owner Editable Disclaimer */}
        <div className="mt-12 bg-beige-50 rounded-xl p-4 border border-gold/30 flex items-center gap-3 max-w-2xl mx-auto">
          <AlertCircle className="w-5 h-5 text-gold-dark shrink-0" />
          <p className="text-xs text-warmgrey italic">
            {SALON_DATA.skillDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
