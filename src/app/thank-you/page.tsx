'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileActionBar } from '@/components/MobileActionBar';
import { SALON_DATA } from '@/data/salonData';
import { CheckCircle2, Phone, Navigation, ArrowLeft, Calendar, Info } from 'lucide-react';

interface RequestSummary {
  name?: string;
  service?: string;
  date?: string;
  time?: string;
  phone?: string;
}

export default function ThankYouPage() {
  const [summary, setSummary] = useState<RequestSummary | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('lastAppointmentRequest');
      if (saved) {
        try {
          setSummary(JSON.parse(saved));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />

      <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-beige-200 shadow-card space-y-6">
            
            {/* Success Icon */}
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-soft">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Thank You for Your Request!
            </h1>

            <p className="text-warmgrey text-base leading-relaxed">
              We have received your online request for <strong className="text-charcoal">{SALON_DATA.business.name}</strong>.
            </p>

            {/* Reminder Box */}
            <div className="bg-beige-100 p-4 rounded-2xl border border-beige-300 flex items-start gap-3 text-left">
              <Info className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal leading-relaxed">
                <strong>Important Reminder: </strong>
                Your appointment is <em>not confirmed yet</em>. Our salon staff will contact you shortly via phone or email to confirm your exact time slot.
              </p>
            </div>

            {/* Request Summary Card if available */}
            {summary && (
              <div className="bg-ivory rounded-2xl p-5 border border-beige-200 text-left space-y-2 text-xs">
                <p className="font-bold text-charcoal text-sm border-b border-beige-200 pb-2">Request Details Summary:</p>
                {summary.name && <p><strong>Name:</strong> {summary.name}</p>}
                {summary.service && <p><strong>Requested Service:</strong> {summary.service}</p>}
                {summary.date && <p><strong>Preferred Date:</strong> {summary.date}</p>}
                {summary.time && <p><strong>Preferred Time:</strong> {summary.time}</p>}
                {summary.phone && <p><strong>Contact Phone:</strong> {summary.phone}</p>}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${SALON_DATA.business.phoneClean}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-soft transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Salon: {SALON_DATA.business.phone}</span>
              </a>

              <a
                href={SALON_DATA.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-beige-100 hover:bg-beige-200 text-charcoal text-sm font-bold px-6 py-3.5 rounded-xl border border-beige-300 transition-colors"
              >
                <Navigation className="w-4 h-4 text-burgundy" />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-warmgrey hover:text-burgundy transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
