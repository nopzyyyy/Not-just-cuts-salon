'use client';

import React, { useState } from 'react';
import { AppointmentForm } from './AppointmentForm';
import { QuoteRequestForm } from './QuoteRequestForm';
import { Calendar, Tag, ShieldCheck, Sparkles } from 'lucide-react';

interface AppointmentsSectionProps {
  selectedService?: string;
}

export const AppointmentsSection: React.FC<AppointmentsSectionProps> = ({ selectedService }) => {
  const [activeTab, setActiveTab] = useState<'appointment' | 'quote'>('appointment');

  return (
    <section id="appointments" className="py-20 bg-ivory relative border-t border-beige-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Online Booking & Quotes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Request an Appointment or Price Quote
          </h2>
          <p className="text-warmgrey text-base sm:text-lg">
            Choose your preferred service, date, and time. Our team will review schedule availability and contact you directly to confirm.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-beige-100 p-1.5 rounded-2xl border border-beige-300 flex items-center gap-2 max-w-md w-full">
            <button
              onClick={() => setActiveTab('appointment')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'appointment'
                  ? 'bg-burgundy text-white shadow-soft'
                  : 'text-charcoal hover:bg-beige-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => setActiveTab('quote')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'quote'
                  ? 'bg-burgundy text-white shadow-soft'
                  : 'text-charcoal hover:bg-beige-200'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Request Colour Quote</span>
            </button>
          </div>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-beige-200 shadow-card">
          {activeTab === 'appointment' ? (
            <AppointmentForm preselectedService={selectedService} />
          ) : (
            <QuoteRequestForm />
          )}
        </div>

      </div>
    </section>
  );
};
