'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SALON_DATA, GalleryItem } from '@/data/salonData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Maximize2, X, Sparkles, Calendar } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haircuts' | 'colour' | 'mens' | 'children'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'haircuts', label: 'Haircuts' },
    { key: 'colour', label: 'Colour' },
    { key: 'mens', label: 'Men’s Cuts' },
    { key: 'children', label: 'Children’s Cuts' },
  ];

  const filteredItems = activeFilter === 'all'
    ? SALON_DATA.gallery
    : SALON_DATA.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-beige-100/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Work Showcase
          </span>
          <h2 className="font-serif text-3xl font-bold text-charcoal mt-3 mb-2">
            Haircut & Colour Examples
          </h2>
          <p className="text-warmgrey text-sm">
            Take a look at sample transformations and cuts. Drag the slider to compare before and after.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter.key
                  ? 'bg-burgundy text-white shadow-soft'
                  : 'bg-white text-charcoal hover:bg-beige-200 border border-beige-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-beige-200 shadow-soft hover:shadow-card transition-all"
            >
              {item.isBeforeAfter && item.beforeImageUrl ? (
                <div className="mb-3">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImageUrl}
                    afterImage={item.imageUrl}
                    altText={item.altText}
                    title={item.title}
                  />
                </div>
              ) : (
                <div
                  className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 group cursor-pointer"
                  onClick={() => setActiveLightboxItem(item)}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.altText}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-2.5 text-burgundy shadow-card">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}

              <h3 className="text-base font-serif font-bold text-charcoal mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-warmgrey">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-burgundy text-white rounded-2xl p-6 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-gold-light shrink-0" />
            <p className="text-xs sm:text-sm text-white/95">
              Found a haircut or style you like? Show us when requesting your appointment!
            </p>
          </div>

          <a
            href="#appointments"
            className="shrink-0 bg-white text-burgundy font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-ivory transition-colors"
          >
            Request Appointment
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-charcoal/80 text-white rounded-full"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.altText}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 bg-ivory">
              <h3 className="font-serif text-xl font-bold text-charcoal">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs text-warmgrey mt-1">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
