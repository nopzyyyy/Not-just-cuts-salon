'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { MapEmbed } from './MapEmbed';
import { Phone, MapPin, Navigation, Clock, Car, Accessibility, Instagram, Facebook, Send, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { business } = SALON_DATA;

  return (
    <section id="contact" className="py-20 bg-beige-100/60 relative border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Visit & Contact Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Find Not Just Cuts in Cambridge
          </h2>
          <p className="text-warmgrey text-base sm:text-lg">
            We are conveniently located on King Street East in Cambridge, serving Preston and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Contact Details & Hours */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-beige-200 shadow-soft flex flex-col justify-between space-y-6">
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                {business.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-burgundy shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-charcoal">{business.address.unit}, {business.address.street}</p>
                  <p className="text-sm text-warmgrey">{business.address.city}, {business.address.province} {business.address.postalCode}</p>
                  <p className="text-xs text-gold-dark font-medium mt-0.5">Primary Area: {business.address.area}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 text-burgundy shrink-0" />
                <div>
                  <a
                    href={`tel:${business.phoneClean}`}
                    className="text-base font-bold text-charcoal hover:text-burgundy transition-colors"
                  >
                    {business.phone}
                  </a>
                  <p className="text-xs text-warmgrey">Tap to call for inquiries & bookings</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`tel:${business.phoneClean}`}
                  className="flex items-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white text-xs font-bold px-4 py-3 rounded-xl shadow-soft"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {business.phone}</span>
                </a>

                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-beige-100 hover:bg-beige-200 text-charcoal text-xs font-bold px-4 py-3 rounded-xl border border-beige-300"
                >
                  <Navigation className="w-4 h-4 text-burgundy" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="#appointments"
                  className="flex items-center gap-2 bg-gold-bg hover:bg-gold-light/20 text-gold-dark text-xs font-bold px-4 py-3 rounded-xl border border-gold/30"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online</span>
                </a>
              </div>

              {/* Hours Table Notice */}
              <div className="bg-ivory rounded-2xl p-5 border border-beige-200 mb-6">
                <div className="flex items-center gap-2 text-charcoal font-bold text-sm mb-2">
                  <Clock className="w-4 h-4 text-burgundy" />
                  <span>Business Hours</span>
                </div>
                <p className="text-xs text-warmgrey leading-relaxed font-medium">
                  {business.hoursNote}
                </p>
              </div>

              {/* Parking & Accessibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-charcoal">Parking</p>
                    <p className="text-[11px] text-warmgrey">{business.parkingInfo}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Accessibility className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-charcoal">Accessibility</p>
                    <p className="text-[11px] text-warmgrey">{business.accessibilityInfo}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-beige-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-warmgrey">Connect With Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href={business.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-beige-100 text-charcoal hover:bg-burgundy hover:text-white transition-colors"
                  aria-label="Instagram page placeholder"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={business.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-beige-100 text-charcoal hover:bg-burgundy hover:text-white transition-colors"
                  aria-label="Facebook page placeholder"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Map Embed */}
          <div className="lg:col-span-6 flex">
            <MapEmbed />
          </div>

        </div>

      </div>
    </section>
  );
};
