import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, X } from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { BRANDS_PORTFOLIO } from '../data/bflcData';
import { BrandCategory, BrandItem, PageRoute } from '../types/bflc';

interface BrandsPageProps {
  onNavigate: (page: PageRoute) => void;
}

const FILTER_OPTIONS: ('All' | BrandCategory)[] = [
  'All',
  'Casual Dining',
  'Catering',
  'Hospitality Ecosystem',
];

export const BrandsPage: React.FC<BrandsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | BrandCategory>('All');
  const [activeBrand, setActiveBrand] = useState<BrandItem | null>(null);

  const filteredBrands =
    selectedCategory === 'All'
      ? BRANDS_PORTFOLIO
      : BRANDS_PORTFOLIO.filter((b) => b.category === selectedCategory);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
              Our Brands · Hospitality Portfolio
            </p>
            <h1
              className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
            >
              Dining Concepts &amp; Catering Brands
            </h1>
            <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed">
              From established international casual dining franchises to homegrown Italian bistro
              and event catering divisions, explore the portfolio operated by BFLC.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Portfolio Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6">
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3F1EC] border border-[#E5E0D8] rounded-lg"
              role="tablist"
              aria-label="Filter brands by category"
            >
              {FILTER_OPTIONS.map((option) => {
                const isSelected = selectedCategory === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(option)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      isSelected
                        ? 'bg-white text-[#1C1917] shadow-sm'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#78716C] tabular-nums">
              Showing {filteredBrands.length} of {BRANDS_PORTFOLIO.length} portfolio entries
            </p>
          </div>

          {/* Brand Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBrands.map((brand) => (
              <article
                key={brand.id}
                className="bg-white border border-[#E5E0D8] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#A8A29E] transition-colors duration-150"
              >
                <div>
                  {brand.image ? (
                    <div className="aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden border-b border-[#E5E0D8]">
                      <MediaFrame
                        src={brand.image}
                        alt={brand.imageAlt || brand.name}
                        className="w-full h-full"
                        fallbackTitle={brand.name}
                      />
                    </div>
                  ) : (
                    <div className="h-44 w-full bg-[#1C1917] text-[#FAF9F6] flex flex-col justify-end p-6 border-b border-[#292524]">
                      <span className="text-xs text-[#A8A29E]">{brand.origin}</span>
                      <span className="font-display text-2xl font-semibold text-white mt-1">
                        {brand.name}
                      </span>
                    </div>
                  )}

                  <div className="p-7 space-y-4">
                    <div className="text-xs text-[#78716C] flex flex-wrap items-center gap-2">
                      <span>{brand.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{brand.origin}</span>
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-[#1C1917]">
                      {brand.name}
                    </h2>

                    <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                      {brand.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-[#57534E]">
                        <MapPin className="w-4 h-4 text-[#991B1B] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{brand.locations.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-4 border-t border-[#E5E0D8] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveBrand(brand)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#991B1B] hover:text-[#7F1D1D] transition-colors"
                  >
                    <span>Concept Highlights</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-medium text-[#57534E] hover:text-[#1C1917] transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Detail Modal */}
      {activeBrand && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brand-modal-title"
          onClick={() => setActiveBrand(null)}
        >
          <div
            className="bg-white border border-[#E5E0D8] rounded-lg max-w-xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs text-[#78716C]">
                  {activeBrand.category} · {activeBrand.origin}
                </p>
                <h3
                  id="brand-modal-title"
                  className="font-display text-2xl font-semibold text-[#1C1917] mt-1"
                >
                  {activeBrand.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveBrand(null)}
                className="p-2 rounded-md text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3F1EC] transition-colors"
                aria-label="Close brand details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                {activeBrand.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-[#78716C] tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {activeBrand.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#1C1917]">
                      <Check className="w-4 h-4 text-[#991B1B] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#57534E]">
                  Locations: <span className="font-medium text-[#1C1917]">{activeBrand.locations.join(', ')}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveBrand(null);
                    onNavigate('contact');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md transition-colors"
                >
                  <span>Contact Brand Team</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
