'use client';

import React from 'react';
import { Phone, Calendar, MapPin, X } from 'lucide-react';
import { SALON_DATA } from '@/data/salonData';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, links }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-ivory animate-fadeIn">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-beige-200">
        <div>
          <span className="font-serif text-2xl font-bold text-charcoal">Not Just Cuts</span>
          <p className="text-xs text-warmgrey">Hair Salon • Cambridge & Preston</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-charcoal hover:bg-beige-100 transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium text-charcoal hover:text-burgundy transition-colors py-2 border-b border-beige-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons in Drawer */}
        <div className="mt-8 pt-6 border-t border-beige-200 flex flex-col space-y-3">
          <a
            href="#appointments"
            onClick={onClose}
            className="flex items-center justify-center gap-2 bg-burgundy text-white font-semibold py-3.5 px-6 rounded-xl text-center shadow-soft"
          >
            <Calendar className="w-5 h-5" />
            <span>Request an Appointment</span>
          </a>

          <a
            href={`tel:${SALON_DATA.business.phoneClean}`}
            className="flex items-center justify-center gap-2 border border-burgundy text-burgundy font-semibold py-3.5 px-6 rounded-xl text-center hover:bg-burgundy/5 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Call {SALON_DATA.business.phone}</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-xs text-warmgrey pt-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span>Unit 7, 1453 King St E, Cambridge</span>
          </div>
        </div>
      </div>
    </div>
  );
};
