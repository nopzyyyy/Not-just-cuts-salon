'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { Scissors, Zap, Palette, Smile } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Scissors,
  Zap,
  Palette,
  Smile
};

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-ivory relative border-t border-beige-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-gold-bg px-3 py-1 rounded-full">
            Our Care & Craftsmanship
          </span>
          <h2 className="font-serif text-3xl font-bold text-charcoal mt-3 mb-2">
            Hairstyling for Every Family Member
          </h2>
          <p className="text-warmgrey text-sm">
            Providing experienced, friendly hair services right here in Cambridge.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_DATA.skills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Scissors;
            return (
              <div
                key={skill.id}
                className="bg-white rounded-xl p-5 border border-beige-200 shadow-soft hover:shadow-card transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-burgundy/10 group-hover:bg-burgundy group-hover:text-white text-burgundy flex items-center justify-center mb-4 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-base font-serif font-bold text-charcoal mb-1">
                  {skill.title}
                </h3>

                <p className="text-xs text-warmgrey leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
