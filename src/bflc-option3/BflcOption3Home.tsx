import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from 'lucide-react';
import {
  BUSINESS_OPERATIONS,
  COMPANY_HIGHLIGHTS,
  COMPANY_INFO,
  NEWS_ARTICLES,
  WHY_BFLC_PILLARS,
} from '../data/bflcData';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { OPTION2_BRANDS } from '../bflc-option2/option2Media';
import { NewsArticle, PageRoute } from '../types/bflc';

interface BflcOption3HomeProps {
  onNavigate: (page: PageRoute, articleId?: string) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

const VERIFIED_FAQS = [
  {
    q: 'When was Bahrain Family Leisure Company B.S.C. (BFLC) established?',
    a: `BFLC was established on ${COMPANY_INFO.establishedDate} in the Kingdom of Bahrain as a public shareholding hospitality company.`,
  },
  {
    q: 'Where is BFLC publicly listed?',
    a: `BFLC is listed on the ${COMPANY_INFO.bourseExchange} under the trading symbol ${COMPANY_INFO.bourseSymbol}, publishing audited annual and quarterly reports in its Investor Relations hub.`,
  },
  {
    q: 'Which restaurant and catering brands form BFLC’s core portfolio?',
    a: "BFLC confirms its active hospitality concepts across Bennigan's (Al Safir Hotel Juffair & Amwaj Islands), homegrown Italian bistro Cucina Italiana (Est. 2012 in Juffair), and Kazbah Catering (Est. 2012).",
  },
  {
    q: 'Does BFLC provide corporate and private event catering?',
    a: 'Yes. Through its dedicated Kazbah Catering division, BFLC delivers customized international, Arabic, and specialty menus with trained service teams across the Kingdom of Bahrain.',
  },
  {
    q: 'Where is BFLC’s corporate head office located?',
    a: `Our headquarters is located at ${COMPANY_INFO.addressLine1}, ${COMPANY_INFO.addressLine2}, ${COMPANY_INFO.poBox}. Office hours are ${COMPANY_INFO.workingHours}.`,
  },
];

export const BflcOption3Home: React.FC<BflcOption3HomeProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const scrollToHighlights = () => {
    const el = document.getElementById('bflc3-highlights');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pb-16 space-y-20 sm:space-y-24">
      {/* 1. HERO BANNER + BELOW-HERO SAND INTRO */}
      <section className="pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto space-y-5">
          {/* Framed Rounded Hospitality Hero */}
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] sm:min-h-[560px] flex items-end bg-[#1b2e1e]">
            <img
              src={BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior}
              alt={BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.alt}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(20,33,22,0.86) 0%, rgba(20,33,22,0.58) 55%, rgba(20,33,22,0.25) 100%)',
              }}
            />

            <div className="relative z-10 p-7 sm:p-12 lg:p-16 max-w-3xl space-y-5">
              <p className="text-[12px] font-semibold tracking-wider uppercase text-white/80">
                {COMPANY_INFO.legalName} · {COMPANY_INFO.bourseExchange}:{' '}
                {COMPANY_INFO.bourseSymbol}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold text-white leading-[1.05] text-balance">
                Bringing People Together Through Hospitality
              </h1>

              <p className="text-[15.5px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl">
                BFLC is a Bahrain-based hospitality company focused on creating memorable
                experiences through food, service and carefully managed dining concepts.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={scrollToHighlights}
                  className="b3-pill-white"
                >
                  <span>Discover BFLC</span>
                  <span className="b3-arrow-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('brands')}
                  className="b3-pill-glass"
                >
                  <span>Explore Our Brands</span>
                  <span className="b3-arrow-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Warm Sand Summary Banner Directly Below Hero */}
          <div className="bg-[#e6e2d1] rounded-2xl p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1a211b]">
                A Passion for Hospitality
              </h2>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1b2e1e] hover:underline underline-offset-4"
              >
                <span>Learn more about us</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            <div className="lg:col-span-7 space-y-3 text-[14.5px] sm:text-[15.5px] text-[#3c443d] leading-relaxed">
              <p>
                BFLC brings together experience, operational expertise and a passion for
                hospitality. The company’s focus is on developing and operating food and
                beverage concepts that deliver welcoming experiences and value for guests
                and partners.
              </p>
              <p>
                From vibrant neighborhood dining rooms in Juffair and Amwaj Islands to
                custom catering across the Kingdom, every venue reflects three decades of
                Bahraini hospitality stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#1a211b] leading-[1.28] max-w-4xl">
            Bahrain Family Leisure Company B.S.C. (BFLC) operates full-service casual
            dining restaurants, homegrown Italian cuisine, and corporate catering across
            Manama, Juffair, and Amwaj Islands — uniting welcoming guest service with
            transparent Bahrain Bourse governance since 1994.
          </p>
        </div>
      </section>

      {/* 2. COMPANY HIGHLIGHTS — Sticky Split + Stacked Metric Cards */}
      <section id="bflc3-highlights" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058]">
              Company Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1a211b] leading-[1.1] text-balance">
              BFLC at a Glance — verified heritage in Bahrain hospitality
            </h2>
            <p className="text-[15px] text-[#586058] leading-relaxed">
              Founded in 1994 and traded publicly on the Bahrain Bourse under ticker{' '}
              <strong className="font-semibold text-[#1a211b]">FAMILY</strong>, BFLC
              combines hands-on kitchen and floor execution with transparent
              board oversight and shareholder reporting.
            </p>
            <p className="text-[15px] text-[#586058] leading-relaxed">
              Every milestone presented here reflects verified corporate and portfolio
              information across our dining restaurants, central kitchen network, and
              Manama headquarters.
            </p>
          </div>

          {/* Right Stacked Verified Metric Cards */}
          <div className="lg:col-span-6 space-y-4">
            {COMPANY_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[#e3dfd2] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              >
                <div className="sm:w-44 shrink-0">
                  <div className="text-3xl sm:text-[34px] font-semibold text-[#1b2e1e] tabular-nums leading-none">
                    {item.metric}
                  </div>
                  <div className="mt-1.5 text-[12px] font-semibold text-[#586058]">
                    {item.label}
                  </div>
                </div>
                <p className="text-[14px] text-[#586058] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('investors')}
                className="b3-pill-forest"
              >
                <span>Investor Relations &amp; Reports</span>
                <span className="b3-arrow-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR BUSINESS — Asymmetric Bento Mosaic */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058]">
                Our Business
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1a211b] leading-[1.1]">
                Everything BFLC operates, under one hospitality group
              </h2>
            </div>
            <p className="text-[14.5px] text-[#586058] max-w-sm leading-relaxed">
              Restaurant operations, homegrown culinary concepts, central kitchen
              preparation, and Kingdom-wide event catering.
            </p>
          </div>

          {/* Bento Grid Row 1: 2-col featured + 1-col + 1-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Wide Featured Operations Card */}
            <div className="md:col-span-2 bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between">
              <div className="p-3 pb-0">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#1a211b]">
                  <img
                    src={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url}
                    alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1a211b]">
                  {BUSINESS_OPERATIONS[0].title}
                </h3>
                <p className="text-[14px] text-[#586058] leading-relaxed">
                  {BUSINESS_OPERATIONS[0].summary}
                </p>
                <ul className="space-y-2 pt-1">
                  {BUSINESS_OPERATIONS[0].capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-[13.5px] text-[#1a211b]"
                    >
                      <Check
                        className="w-4 h-4 text-[#1b2e1e] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('business')}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1b2e1e] hover:underline underline-offset-4"
                  >
                    <span>Explore operations</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Homegrown Concept Creation */}
            <div className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between">
              <div className="p-3 pb-0">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#1a211b]">
                  <img
                    src={BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior}
                    alt={BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#1a211b]">
                    {BUSINESS_OPERATIONS[1].title}
                  </h3>
                  <p className="text-[13.5px] text-[#586058] leading-relaxed">
                    {BUSINESS_OPERATIONS[1].summary}
                  </p>
                  <ul className="space-y-1.5">
                    {BUSINESS_OPERATIONS[1].capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-[13px] text-[#1a211b]"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#1b2e1e] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('business')}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1b2e1e] hover:underline underline-offset-4 pt-2"
                >
                  <span>Explore concept craft</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Card 3: Corporate & Private Catering */}
            <div className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between">
              <div className="p-3 pb-0">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#47C8F2]">
                  <img
                    src={BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern}
                    alt={BFLC_ASSET_LIBRARY.brands.kazbahCatering.patternAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#1a211b]">
                    {BUSINESS_OPERATIONS[2].title}
                  </h3>
                  <p className="text-[13.5px] text-[#586058] leading-relaxed">
                    {BUSINESS_OPERATIONS[2].summary}
                  </p>
                  <ul className="space-y-1.5">
                    {BUSINESS_OPERATIONS[2].capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-[13px] text-[#1a211b]"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#1b2e1e] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('business')}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1b2e1e] hover:underline underline-offset-4 pt-2"
                >
                  <span>View catering scope</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Bento Grid Row 2: Central Kitchen Card + Hospitality Team Card + Wide Sand Enquiry Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between">
              <div className="p-3 pb-0">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#1a211b]">
                  <img
                    src={BFLC_ASSET_LIBRARY.brands.bennigans.interior}
                    alt={BFLC_ASSET_LIBRARY.brands.bennigans.interiorAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-[#1a211b]">
                  {BUSINESS_OPERATIONS[3].title}
                </h3>
                <p className="text-[13.5px] text-[#586058] leading-relaxed">
                  {BUSINESS_OPERATIONS[3].summary}
                </p>
                <ul className="space-y-1.5">
                  {BUSINESS_OPERATIONS[3].capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-[13px] text-[#1a211b]"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-[#1b2e1e] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between">
              <div className="p-3 pb-0">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#1a211b]">
                  <img
                    src={BFLC_ASSET_LIBRARY.restaurants.loungeBar.url}
                    alt={BFLC_ASSET_LIBRARY.restaurants.loungeBar.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-[#1a211b]">
                  Guest-Centered Dining Rooms
                </h3>
                <p className="text-[13.5px] text-[#586058] leading-relaxed">
                  Indoor and outdoor venues designed around live entertainment nights,
                  family meals, and business hospitality across Bahrain.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('brands')}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1b2e1e] hover:underline underline-offset-4 pt-1"
                >
                  <span>Browse dining venues</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Wide Sand Highlight Card matching "Free site visit" block */}
            <div className="md:col-span-2 bg-[#e6e2d1] rounded-2xl p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-3 max-w-lg">
                <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058]">
                  Corporate &amp; Event Desk
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a211b]">
                  Plan a bespoke catering event or hospitality partnership
                </h3>
                <p className="text-[14.5px] text-[#3c443d] leading-relaxed">
                  Whether coordinating corporate catering with Kazbah Catering or
                  connecting with BFLC’s Diplomatic Area head office, our team responds
                  directly from Bahrain Tourism Tower.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="b3-pill-forest"
                >
                  <span>Contact Our Office</span>
                  <span className="b3-arrow-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="b3-pill-white tabular-nums"
                >
                  <span>Call {COMPANY_INFO.phone}</span>
                  <span className="b3-arrow-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR BRANDS — 3 Rounded Confirmed Portfolio Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058]">
                Our Brands
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1a211b] leading-[1.1]">
                Restaurant concepts &amp; catering confirmed in our portfolio
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('brands')}
              className="b3-pill-white w-fit"
            >
              <span>See All Brands</span>
              <span className="b3-arrow-badge">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPTION2_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-[#1a211b] overflow-hidden">
                    <img
                      src={brand.photo}
                      alt={brand.photoAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute bottom-3.5 left-3.5 px-3 py-2 rounded-xl"
                      style={{ backgroundColor: brand.panelColor }}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.logoAlt}
                        referrerPolicy="no-referrer"
                        className="h-7 sm:h-8 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <p className="text-[12px] font-semibold text-[#586058]">
                      {brand.category} · {brand.origin}
                    </p>
                    <h3 className="text-xl font-semibold text-[#1a211b]">
                      {brand.name}
                    </h3>
                    <p className="text-[14px] text-[#586058] leading-relaxed">
                      {brand.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#e3dfd2] flex items-center justify-between text-[12.5px]">
                  <span className="text-[#586058] truncate pr-3">{brand.locations}</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('brands')}
                    className="font-semibold text-[#1b2e1e] hover:underline shrink-0"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. OUR EXPERTISE & WHY BFLC — 4-Card Row + Split Feature Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2">
            <div>
              <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058] mb-2">
                Our Expertise · Why BFLC
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a211b]">
                Built on Experience. Driven by Hospitality.
              </h2>
            </div>
            <p className="text-[14.5px] text-[#586058] max-w-md leading-relaxed">
              Four foundational operational pillars guiding daily food service, guest
              experience, and brand stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_BFLC_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-[#e3dfd2] rounded-2xl p-6 sm:p-7 space-y-3"
              >
                <span className="text-[12.5px] font-semibold text-[#1b2e1e] tabular-nums">
                  {pillar.index}.
                </span>
                <h3 className="text-lg font-semibold text-[#1a211b]">{pillar.title}</h3>
                <p className="text-[13.5px] text-[#586058] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* 2-Column Visual Feature Split matching screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden min-h-[280px] flex items-end p-8 bg-[#1b2e1e]">
              <img
                src={BFLC_ASSET_LIBRARY.restaurants.loungeBar.url}
                alt={BFLC_ASSET_LIBRARY.restaurants.loungeBar.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#142116]/90 via-[#142116]/50 to-transparent"
              />
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-semibold text-white">
                  Transparent governance since 1994
                </h3>
                <p className="text-[14px] text-white/80 max-w-md">
                  Access audited IFRS statements, AGM/EGM circulars, and Bahrain Bourse
                  (FAMILY) disclosures directly.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('investors')}
                  className="b3-pill-white"
                >
                  <span>Why partner with BFLC</span>
                  <span className="b3-arrow-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-[#e6e2d1] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div className="text-4xl font-semibold text-[#1a211b]">One</div>
              <div className="space-y-2 pt-8">
                <p className="text-[15px] font-medium text-[#1a211b]">
                  unified hospitality platform across Bahrain — combining culinary R&amp;D,
                  front-of-house teams, and central supply discipline.
                </p>
                <p className="text-[13.5px] text-[#3c443d]">
                  Serving guests at Juffair, Amwaj Islands, and private event venues
                  across the Kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS & MEDIA + VERIFIED ACCORDION Q&A */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto space-y-16">
          {/* News Cards */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058] mb-2">
                  News &amp; Media
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a211b]">
                  The Latest from BFLC
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('news')}
                className="b3-pill-white w-fit"
              >
                <span>View All News</span>
                <span className="b3-arrow-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS_ARTICLES.map((article) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden text-left hover:border-[#1b2e1e] transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-[#1a211b]">
                      <img
                        src={article.image || BFLC_ASSET_LIBRARY.brands.bennigans.interior}
                        alt={article.imageAlt || article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-2.5">
                      <p className="text-[12px] text-[#586058]">
                        {article.date} · {article.category}
                      </p>
                      <h3 className="text-lg font-semibold text-[#1a211b] leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[13.5px] text-[#586058] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 text-[13px] font-semibold text-[#1b2e1e]">
                    Read more →
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Corporate Questions Accordion */}
          <div className="space-y-6">
            <div>
              <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058] mb-2">
                Key Information
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a211b]">
                Questions guests &amp; shareholders ask
              </h2>
            </div>

            <div className="space-y-3">
              {VERIFIED_FAQS.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={item.q}
                    className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    >
                      <span className="text-[15.5px] font-semibold text-[#1a211b]">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <Minus
                          className="w-4 h-4 text-[#1b2e1e] shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <Plus
                          className="w-4 h-4 text-[#586058] shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-[14.5px] text-[#586058] leading-relaxed border-t border-[#e3dfd2]/70 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Centered Corporate Summary Statement */}
      <section className="px-4 sm:px-6 lg:px-8 pt-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058]">
            About BFLC
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a211b] leading-[1.15] text-balance">
            Discover who we are, how we operate, and why families across Bahrain gather
            at our tables.
          </h2>
          <div>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="b3-pill-forest"
            >
              <span>About Us</span>
              <span className="b3-arrow-badge">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto bg-[#e6e2d1] rounded-2xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a211b]">
              Have a hospitality or catering enquiry?
            </h2>
            <p className="text-[15px] text-[#3c443d] leading-relaxed">
              Give our Diplomatic Area office a call or send an enquiry directly for
              partnerships, corporate catering, careers, or shareholder support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="b3-pill-forest tabular-nums"
            >
              <span>Call {COMPANY_INFO.phone}</span>
              <span className="b3-arrow-badge">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="b3-pill-white"
            >
              <span>Send Enquiry</span>
              <span className="b3-arrow-badge">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('careers')}
              className="b3-pill-white"
            >
              <span>Careers at BFLC</span>
              <span className="b3-arrow-badge">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
