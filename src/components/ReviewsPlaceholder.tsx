'use client';

import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { Star, MessageSquareQuote, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewsPlaceholder: React.FC = () => {
  return (
    <section className="py-16 bg-beige-100/40 relative border-t border-beige-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 text-gold-dark bg-gold-bg px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border border-gold/30">
          <Star className="w-3.5 h-3.5 fill-gold-dark text-gold-dark" />
          <span>Authentic Local Reputation</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-3">
          Client Reviews & Testimonials
        </h2>

        {/* Honest Notice Card */}
        <div className="bg-white rounded-2xl p-6 border border-beige-200 shadow-soft max-w-2xl mx-auto space-y-4">
          <MessageSquareQuote className="w-8 h-8 text-burgundy mx-auto" />
          
          <p className="text-sm text-warmgrey leading-relaxed">
            {SALON_DATA.reviewPlaceholderNotice}
          </p>

          {/* Future Integration Cards */}
          <div className="pt-4 border-t border-beige-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-charcoal font-medium">
            <div className="bg-beige-50 p-2.5 rounded-xl border border-beige-200">
              <span>Google Business Profile Integration</span>
            </div>
            <div className="bg-beige-50 p-2.5 rounded-xl border border-beige-200">
              <span>Facebook Reviews Ready</span>
            </div>
            <div className="bg-beige-50 p-2.5 rounded-xl border border-beige-200">
              <span>Verified Client Testimonials</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
