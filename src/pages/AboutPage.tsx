import React from 'react';
import { ArrowRight, Building2, Landmark, ShieldCheck } from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { BFLC_ASSETS, BOARD_MEMBERS, COMPANY_INFO } from '../data/bflcData';
import { PageRoute } from '../types/bflc';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
              About Us · {COMPANY_INFO.legalName}
            </p>
            <h1
              className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
            >
              Three Decades of Hospitality Excellence in Bahrain
            </h1>
            <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed">
              Established on {COMPANY_INFO.establishedDate} and listed on the{' '}
              {COMPANY_INFO.bourseExchange}, Bahrain Family Leisure Company B.S.C. develops and
              operates casual dining restaurants, homegrown culinary concepts, and catering
              services across the Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & History */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium text-[#78716C] tracking-wide">
                  01. Company Overview &amp; Heritage
                </p>
                <h2 className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight">
                  Rooted in Bahraini Hospitality Since 1994
                </h2>
              </div>

              <div className="space-y-4 text-base text-[#44403C] leading-relaxed">
                <p>
                  Bahrain Family Leisure Company B.S.C. (BFLC) was incorporated in the Kingdom of
                  Bahrain in 1994 under national initiatives encouraging private-sector leadership
                  in tourism, dining, and family leisure. Registered with the Ministry of
                  Industry and Commerce and publicly traded on the Bahrain Bourse (Ticker:{' '}
                  <span className="font-mono-tabular font-medium text-[#1C1917]">FAMILY</span>),
                  the company has built a lasting reputation in casual dining management.
                </p>
                <p>
                  Over the years, BFLC introduced and operated prominent international casual
                  dining franchises—anchored by Bennigan’s—while expanding its capabilities into
                  original homegrown hospitality in 2012 with the launch of Cucina Italiana and
                  Kazbah Catering.
                </p>
                <p>
                  Through strategic portfolio evolution, including its integration with Truffle
                  Hospitality Holding, BFLC continues to strengthen its multi-brand operating
                  backbone across casual dining, specialty cafés, and centralized culinary
                  production.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-lg overflow-hidden border border-[#E5E0D8] bg-white p-2">
                <div className="aspect-[4/3] rounded overflow-hidden">
                  <MediaFrame
                    src={BFLC_ASSETS.diningRoom}
                    alt="Warm casual dining interior at BFLC restaurant venue"
                    className="w-full h-full"
                    fallbackTitle="BFLC Dining Heritage"
                  />
                </div>
              </div>

              <div className="bg-white border border-[#E5E0D8] rounded-lg p-6 space-y-4">
                <h3 className="text-sm font-semibold text-[#1C1917]">
                  Corporate Registration Profile
                </h3>
                <dl className="divide-y divide-[#E5E0D8] text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#78716C]">Legal Name</dt>
                    <dd className="text-right font-medium text-[#1C1917]">
                      {COMPANY_INFO.legalName}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#78716C]">Established</dt>
                    <dd className="text-right font-medium text-[#1C1917] tabular-nums">
                      {COMPANY_INFO.establishedDate}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#78716C]">Exchange Listing</dt>
                    <dd className="text-right font-medium text-[#1C1917] font-mono-tabular">
                      {COMPANY_INFO.bourseExchange} ({COMPANY_INFO.bourseSymbol})
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#78716C]">Headquarters</dt>
                    <dd className="text-right font-medium text-[#1C1917]">
                      Diplomatic Area, Manama
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-medium text-[#78716C] tracking-wide">
              02. Purpose &amp; Direction
            </p>
            <h2 className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight">
              Vision, Mission &amp; Stewardship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] border border-[#E5E0D8] rounded-lg p-7 space-y-3">
              <Landmark className="w-5 h-5 text-[#991B1B]" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-[#1C1917]">Our Vision</h3>
              <p className="text-sm text-[#44403C] leading-relaxed">
                To be a trusted leader in Bahrain’s hospitality and casual dining landscape,
                recognized for enduring culinary concepts, operational integrity, and welcoming
                guest experiences.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E5E0D8] rounded-lg p-7 space-y-3">
              <Building2 className="w-5 h-5 text-[#991B1B]" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-[#1C1917]">Our Mission</h3>
              <p className="text-sm text-[#44403C] leading-relaxed">
                To develop, manage, and scale distinctive food, beverage, and catering concepts
                that deliver consistent quality for guests, rewarding careers for our teams, and
                long-term value for shareholders and partners.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E5E0D8] rounded-lg p-7 space-y-3">
              <ShieldCheck className="w-5 h-5 text-[#991B1B]" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-[#1C1917]">
                Governance &amp; Care
              </h3>
              <p className="text-sm text-[#44403C] leading-relaxed">
                We uphold transparent public-company governance, rigorous food safety and hygiene
                standards, and respectful hospitality across every guest interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                03. Leadership &amp; Governance
              </p>
              <h2 className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight">
                Board of Directors
              </h2>
              <p className="text-sm sm:text-base text-[#44403C]">
                Guiding BFLC’s strategic direction, financial oversight, and corporate governance
                in accordance with Bahrain Bourse standards.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('investors')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#991B1B] hover:text-[#7F1D1D] whitespace-nowrap shrink-0"
            >
              <span>View Governance Disclosures</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-[#E5E0D8] rounded-lg p-6 space-y-2"
              >
                <div className="text-xs text-[#78716C]">
                  {member.role} · {member.classification}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1C1917]">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('business')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#292524] rounded-md transition-colors"
            >
              <span>Explore Our Business</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('careers')}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#1C1917] bg-white border border-[#D6D3D1] hover:border-[#1C1917] rounded-md transition-colors"
            >
              Explore Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
