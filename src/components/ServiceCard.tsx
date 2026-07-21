'use client';

import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/data/salonData';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-beige-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Popular Tag */}
        {service.popular && (
          <span className="inline-block bg-burgundy/10 text-burgundy text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-wider">
            Popular Choice
          </span>
        )}

        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-burgundy transition-colors">
            {service.name}
          </h3>
          <span className="text-lg font-bold text-burgundy bg-beige-50 px-3 py-1 rounded-lg border border-beige-200 shrink-0">
            {service.startingPrice}
          </span>
        </div>

        <p className="text-sm text-warmgrey mb-4 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="pt-4 border-t border-beige-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-xs text-warmgrey font-medium">
          <Clock className="w-3.5 h-3.5 text-gold-dark" />
          <span>{service.estimatedDuration}</span>
        </div>

        <a
          href="#appointments"
          onClick={() => onSelect(service.name)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy group-hover:text-burgundy-hover hover:underline transition-all"
        >
          <span>Book This</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};
