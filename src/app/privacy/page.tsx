'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileActionBar } from '@/components/MobileActionBar';
import { SALON_DATA } from '@/data/salonData';
import { Shield, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-burgundy hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-beige-200 shadow-card">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-burgundy/10 rounded-2xl text-burgundy">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-serif text-3xl font-bold text-charcoal">Privacy Policy</h1>
                <p className="text-xs text-warmgrey">Not Just Cuts • Last Updated: Sample Preview</p>
              </div>
            </div>

            {/* Owner Review Notice */}
            <div className="my-6 p-4 bg-gold-bg border border-gold/40 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal leading-relaxed font-medium">
                <strong>Important Notice:</strong> This privacy policy is a customizable template designed for Not Just Cuts MVP website. The final text should be reviewed and approved by the business owner prior to full commercial publication.
              </p>
            </div>

            <div className="space-y-6 text-sm text-warmgrey leading-relaxed">
              
              <section>
                <h2 className="font-serif text-xl font-bold text-charcoal mb-2">1. Information We Collect</h2>
                <p>
                  When you submit an appointment request, quote request, or contact inquiry on our website, we may collect personal details such as your full name, phone number, email address, preferred appointment date, current hair description, and any uploaded inspiration photos.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-charcoal mb-2">2. How We Use Your Information</h2>
                <p>
                  Information collected is used strictly for scheduling appointment requests, providing cost estimates, communicating with you regarding your service inquiries, and improving our customer care. We do not sell or trade your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-charcoal mb-2">3. Uploaded Inspiration Photos</h2>
                <p>
                  Any photos uploaded via our appointment or quote request forms are used exclusively by our hairstylists to evaluate your hair type and style goals before your appointment. Photos will not be shared publicly without your explicit written permission.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-charcoal mb-2">4. Third-Party Services & Maps</h2>
                <p>
                  Our website embeds interactive Google Maps to help customers locate our salon at Unit 2, 1453 King Street East, Cambridge, ON. Interacting with the map may involve third-party cookies subject to Google’s privacy policy.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-charcoal mb-2">5. Data Retention & Deletion Requests</h2>
                <p>
                  You may request the correction or complete deletion of your personal contact details from our records at any time by calling the salon directly at {SALON_DATA.business.phone} or emailing {SALON_DATA.business.email}.
                </p>
              </section>

            </div>

          </div>

        </div>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
