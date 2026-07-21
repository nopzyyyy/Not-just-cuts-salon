'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SALON_DATA, GalleryItem } from '@/data/salonData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Maximize2, X, Sparkles, Info, Calendar } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haircuts' | 'colour' | 'highlights' | 'styling' | 'mens' | 'children'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'All Showcase Work' },
    { key: 'haircuts', label: 'Haircuts' },
    { key: 'colour', label: 'Colour' },
    { key: 'highlights', label: 'Highlights' },
    { key: 'styling', label: 'Styling' },
    { key: 'mens', label: 'Men’s Cuts' },
    { key: 'children', label: 'Children’s Cuts' },
  ];

  const filteredItems = activeFilter === 'all'
    ? SALON_DATA.gallery
    : SALON_DATA.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-beige-100/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
            Previous Work & Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-4">
            Hairstyling Gallery & Transformations
          </h2>
          <p className="text-warmgrey text-base sm:text-lg">
            Explore sample styles and before-and-after transformations. Drag the slider to compare before and after results!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-beige-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              {item.isBeforeAfter && item.beforeImageUrl ? (
                /* Interactive Before/After Slider */
                <div className="mb-4">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImageUrl}
                    afterImage={item.imageUrl}
                    altText={item.altText}
                    title={item.title}
                  />
                </div>
              ) : (
                /* Regular Image Display */
                <div
                  className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 group cursor-pointer"
                  onClick={() => setActiveLightboxItem(item)}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.altText}
                    fill
                    loading="lazy"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 text-burgundy shadow-card">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-warmgrey leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-warmgrey italic inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-beige-200">
            <Info className="w-3.5 h-3.5 text-gold-dark" />
            <span>{SALON_DATA.galleryDisclaimer}</span>
          </p>
        </div>

        {/* Call To Action Banner Under Gallery */}
        <div className="mt-12 bg-gradient-to-r from-burgundy to-burgundy-soft text-white rounded-3xl p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0">
              <Sparkles className="w-8 h-8 text-gold-light" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Like one of these styles?
              </h3>
              <p className="text-white/90 text-sm mt-1">
                Show us the photo when requesting your appointment online or during your consultation!
              </p>
            </div>
          </div>

          <a
            href="#appointments"
            className="shrink-0 bg-white text-burgundy hover:bg-beige-100 font-semibold px-6 py-3.5 rounded-xl shadow-soft transition-all text-sm flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Request This Style</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-charcoal/70 hover:bg-charcoal text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.altText}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 bg-ivory">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                {activeLightboxItem.title}
              </h3>
              <p className="text-sm text-warmgrey">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
