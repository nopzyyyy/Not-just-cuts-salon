'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { SkillsGrid } from '@/components/SkillsGrid';
import { Gallery } from '@/components/Gallery';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { AppointmentsSection } from '@/components/AppointmentsSection';
import { ContactSection } from '@/components/ContactSection';
import { ReviewsPlaceholder } from '@/components/ReviewsPlaceholder';
import { FAQAccordion } from '@/components/FAQAccordion';
import { MobileActionBar } from '@/components/MobileActionBar';
import { Footer } from '@/components/Footer';
import { SALON_DATA } from '@/data/salonData';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const element = document.getElementById('appointments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data / JSON-LD for LocalBusiness & HairSalon
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    'name': SALON_DATA.business.name,
    'image': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    '@id': 'https://notjustcuts.example.com',
    'url': 'https://notjustcuts.example.com',
    'telephone': SALON_DATA.business.phone,
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${SALON_DATA.business.address.unit}, ${SALON_DATA.business.address.street}`,
      'addressLocality': SALON_DATA.business.address.city,
      'addressRegion': 'ON',
      'postalCode': SALON_DATA.business.address.postalCode,
      'addressCountry': 'CA'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 43.3845,
      'longitude': -80.3621
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Preston, Cambridge, Ontario'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Cambridge, Ontario'
      }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Hair Salon Services',
      'itemListElement': SALON_DATA.services.map((svc, i) => ({
        '@type': 'OfferCatalog',
        'name': svc.name,
        'description': svc.description,
      }))
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': SALON_DATA.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      {/* JSON-LD Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main id="main-content" className="flex-1">
        <Hero />
        <ServicesGrid onSelectService={handleSelectService} />
        <SkillsGrid />
        <Gallery />
        <AboutSection />
        <WhyChooseUs />
        <AppointmentsSection selectedService={selectedService} />
        <ContactSection />
        <ReviewsPlaceholder />
        <FAQAccordion />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
