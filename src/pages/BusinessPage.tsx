import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { BFLC_ASSETS, BUSINESS_OPERATIONS } from '../data/bflcData';
import { PageRoute } from '../types/bflc';

interface BusinessPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
                Our Business · Hospitality Operations
              </p>
              <h1
                className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
              >
                Integrated Food, Beverage &amp; Hospitality Operations
              </h1>
              <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed max-w-2xl">
                BFLC combines front-of-house hospitality, kitchen craftsmanship, and centralized
                operational governance to run casual dining restaurants, homegrown concepts, and
                event catering across Bahrain.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#292524] aspect-[4/3]">
                <MediaFrame
                  src={BFLC_ASSETS.loungeBar}
                  alt="Restaurant bar and dining setup showing BFLC hospitality operations"
                  className="w-full h-full"
                  fallbackTitle="Hospitality Operations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Divisions */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-[#78716C] tracking-wide">
              01. Core Activities
            </p>
            <h2 className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight">
              Four Pillars of Operational Delivery
            </h2>
            <p className="text-base text-[#44403C] leading-relaxed">
              Every BFLC venue and catering engagement is backed by structured culinary workflows,
              food safety discipline, and dedicated hospitality teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUSINESS_OPERATIONS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-[#E5E0D8] rounded-lg p-8 space-y-5"
              >
                <div className="space-y-2">
                  <span className="font-mono-tabular text-xs font-medium text-[#991B1B]">
                    {pillar.index}.
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <ul className="pt-4 border-t border-[#E5E0D8] space-y-2.5">
                  {pillar.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-sm text-[#44403C]"
                    >
                      <Check
                        className="w-4 h-4 text-[#991B1B] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Franchising CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight">
              Partnering for Hospitality Growth
            </h2>
            <p className="text-base text-[#44403C] leading-relaxed">
              Whether exploring brand collaborations, corporate catering agreements, or real estate
              and franchise opportunities in Bahrain, our leadership team welcomes enquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('brands')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md transition-colors"
            >
              <span>View Our Brand Portfolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-5 py-3 text-sm font-semibold text-[#1C1917] bg-white border border-[#D6D3D1] hover:border-[#1C1917] rounded-md transition-colors"
            >
              Business Enquiries
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
