'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { SALON_DATA } from '@/data/salonData';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Appointments', href: '#appointments' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft py-3 border-b border-beige-200' 
            : 'bg-ivory py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Text-Based Logo */}
          <Link href="#hero" className="group flex flex-col focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal group-hover:text-burgundy transition-colors">
              Not Just Cuts
            </span>
            <span className="text-[11px] tracking-widest uppercase font-medium text-gold-dark -mt-1">
              Hair Salon • Cambridge & Preston
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-burgundy hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${SALON_DATA.business.phoneClean}`}
              className="flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-burgundy transition-colors px-3 py-2 rounded-md focus:ring-2 focus:ring-burgundy"
              aria-label={`Call salon at ${SALON_DATA.business.phone}`}
            >
              <Phone className="w-4 h-4 text-burgundy" />
              <span>{SALON_DATA.business.phone}</span>
            </a>
            
            <a
              href="#appointments"
              className="flex items-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-soft hover:shadow-card transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${SALON_DATA.business.phoneClean}`}
              className="p-2.5 rounded-full bg-beige-100 text-burgundy hover:bg-burgundy hover:text-white transition-colors"
              aria-label="Call salon"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-charcoal hover:bg-beige-100 transition-colors focus:ring-2 focus:ring-burgundy"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
};
