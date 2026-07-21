'use client';

import React, { useState } from 'react';
import { SALON_DATA } from '@/data/salonData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-ivory relative border-t border-beige-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-warmgrey text-base">
            Everything you need to know about booking, services, pricing and salon policies.
          </p>
        </div>

        <div className="space-y-4">
          {SALON_DATA.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-beige-200 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-charcoal text-base sm:text-lg hover:text-burgundy focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-burgundy shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-warmgrey shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-burgundy' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-warmgrey text-sm leading-relaxed border-t border-beige-100/80 bg-beige-50/50">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
