'use client';

import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/data/salonData';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-beige-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg font-serif font-bold text-charcoal group-hover:text-burgundy transition-colors">
            {service.name}
          </h3>
          <span className="text-base font-bold text-burgundy bg-beige-50 px-2.5 py-1 rounded-md border border-beige-200 shrink-0">
            {service.startingPrice}
          </span>
        </div>

        <p className="text-xs text-warmgrey mb-3 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="pt-3 border-t border-beige-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-[11px] text-warmgrey">
          <Clock className="w-3.5 h-3.5 text-gold-dark" />
          <span>{service.estimatedDuration}</span>
        </div>

        <a
          href="#appointments"
          onClick={() => onSelect(service.name)}
          className="inline-flex items-center gap-1 text-xs font-bold text-burgundy group-hover:underline"
        >
          <span>Book</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
