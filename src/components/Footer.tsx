'use client';

import React from 'react';
import Link from 'next/link';
import { SALON_DATA } from '@/data/salonData';
import { Phone, MapPin, Instagram, Facebook, Calendar, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-24 md:pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-warmgrey-dark/40">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">Not Just Cuts</h3>
            <p className="text-xs text-warmgrey-light leading-relaxed">
              Professional, welcoming hair services for men, women and families in Preston and Cambridge, Ontario.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_DATA.business.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-light text-white hover:bg-burgundy transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_DATA.business.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-light text-white hover:bg-burgundy transition-colors"
                aria-label="Facebook profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-sm text-gold-light uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-warmgrey-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Specialties</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery & Transformations</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#appointments" className="hover:text-white transition-colors">Request Appointment</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Business Contact */}
          <div>
            <h4 className="font-bold text-sm text-gold-light uppercase tracking-wider mb-4">Visit Our Salon</h4>
            <div className="space-y-3 text-xs text-warmgrey-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span>Unit 7, 1453 King Street East, Cambridge, ON N3H 3R3</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-burgundy shrink-0" />
                <a href={`tel:${SALON_DATA.business.phoneClean}`} className="hover:text-white font-semibold">
                  {SALON_DATA.business.phone}
                </a>
              </div>
              <p className="text-[11px] text-warmgrey italic">
                Serving Preston and Cambridge, Ontario
              </p>
            </div>
          </div>

          {/* Col 4: Booking CTA */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-gold-light uppercase tracking-wider">Schedule a Visit</h4>
            <p className="text-xs text-warmgrey-light">
              Ready for a haircut, style refresh, or colour transformation?
            </p>
            <a
              href="#appointments"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white text-xs font-bold px-5 py-3 rounded-xl shadow-soft transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </a>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warmgrey-light">
          <p>© {currentYear} Not Just Cuts. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Accessibility Statement
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[11px] text-gold-light hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
