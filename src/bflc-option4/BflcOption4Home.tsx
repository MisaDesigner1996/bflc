import React, { useState } from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import {
  BFLC_ASSETS,
  BRANDS_PORTFOLIO,
  BUSINESS_OPERATIONS,
  COMPANY_HIGHLIGHTS,
  COMPANY_INFO,
  NEWS_ARTICLES,
  WHY_BFLC_PILLARS,
} from '../data/bflcData';
import { NewsArticle, PageRoute } from '../types/bflc';

interface BflcOption4HomeProps {
  onNavigate: (page: PageRoute, articleId?: string) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

const BUSINESS_VISUALS = [
  {
    src: BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior,
    alt: BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.alt,
    caption: "Full-Service Casual Dining · Bennigan's Bahrain",
    isPattern: false,
  },
  {
    src: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
    alt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt,
    caption: 'Homegrown Italian Bistro · Cucina Italiana Juffair',
    isPattern: false,
  },
  {
    src: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
    alt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.patternAlt,
    caption: 'Corporate & Diplomatic Banquets · Kazbah Catering',
    isPattern: true,
  },
  {
    src: BFLC_ASSET_LIBRARY.brands.bennigans.interior,
    alt: BFLC_ASSET_LIBRARY.brands.bennigans.interiorAlt,
    caption: 'Unified Culinary Prep & Supply Standards',
    isPattern: false,
  },
] as const;

export const BflcOption4Home: React.FC<BflcOption4HomeProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const [activeBusinessIdx, setActiveBusinessIdx] = useState(0);
  const currentOp = BUSINESS_OPERATIONS[activeBusinessIdx];
  const currentVisual = BUSINESS_VISUALS[activeBusinessIdx];

  const featuredBrands = [
    {
      brand: BRANDS_PORTFOLIO[0],
      upperType: 'photo' as const,
      upperImage: BFLC_ASSET_LIBRARY.brands.bennigans.interior,
      upperAlt: BFLC_ASSET_LIBRARY.brands.bennigans.interiorAlt,
      logo: BFLC_ASSET_LIBRARY.brands.bennigans.logo,
      logoAlt: BFLC_ASSET_LIBRARY.brands.bennigans.logoAlt,
      panelColor: BFLC_ASSET_LIBRARY.brands.bennigans.panelColor,
    },
    {
      brand: BRANDS_PORTFOLIO[1],
      upperType: 'photo' as const,
      upperImage: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
      upperAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt,
      logo: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logo,
      logoAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logoAlt,
      panelColor: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.panelColor,
    },
    {
      brand: BRANDS_PORTFOLIO[2],
      upperType: 'pattern' as const,
      upperImage: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
      upperAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.patternAlt,
      logo: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo,
      logoAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logoAlt,
      panelColor: BFLC_ASSET_LIBRARY.brands.kazbahCatering.panelColor,
    },
  ];

  return (
    <div>
      {/* 01. HERO SECTION */}
      <section className="relative bg-[#171412] text-white b4-architectural-grid overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <p className="b4-mono text-[12px] uppercase tracking-[0.18em] text-[#f3d6d6]">
                {COMPANY_INFO.legalName} · {COMPANY_INFO.bourseExchange}: {COMPANY_INFO.bourseSymbol}
              </p>

              <h1 className="b4-display text-[2.5rem] sm:text-[3.35rem] lg:text-[4.1rem] font-extrabold leading-[1.06] text-white">
                Bringing People Together Through Hospitality
              </h1>

              <p className="text-[17px] sm:text-[19px] text-white/75 leading-relaxed max-w-2xl">
                BFLC is a Bahrain-based hospitality company focused on creating memorable
                experiences through food, service and carefully managed dining concepts.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="b4-btn-primary"
                >
                  Discover BFLC
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('brands')}
                  className="b4-btn-outline-light"
                >
                  Explore Our Brands
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#171412] shadow-2xl">
                <img
                  src={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url}
                  alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover block"
                />
                <div className="p-5 sm:p-6 bg-[#171412]/95 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-[13px] font-semibold text-white">
                      Kingdom of Bahrain Hospitality
                    </p>
                    <p className="b4-mono text-[11.5px] text-white/65">
                      Established {COMPANY_INFO.establishedYear} · Manama HQ
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('business')}
                    className="text-[13px] font-semibold text-[#f3d6d6] hover:text-white inline-flex items-center gap-1 shrink-0 transition-colors"
                  >
                    <span>Operations</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. ABOUT BFLC */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#e4dfd7]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#e4dfd7] bg-[#f8f6f2]">
                <img
                  src={BFLC_ASSETS.loungeBar}
                  alt={BFLC_ASSET_LIBRARY.restaurants.loungeBar.alt}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover block"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#8e1b1b]">
                About BFLC · Since {COMPANY_INFO.establishedYear}
              </p>

              <h2 className="b4-display text-3xl sm:text-[2.65rem] font-extrabold leading-[1.12] text-[#171412]">
                A Passion for Hospitality
              </h2>

              <p className="text-[17px] text-[#665f57] leading-relaxed">
                Founded on {COMPANY_INFO.establishedDate} and listed on the{' '}
                {COMPANY_INFO.bourseExchange}, {COMPANY_INFO.legalName} has shaped casual
                dining and event catering across the Kingdom of Bahrain for over three decades.
              </p>

              <p className="text-[15.5px] text-[#665f57] leading-relaxed">
                By uniting recognized international franchises with homegrown restaurant and
                catering concepts, BFLC delivers consistent culinary quality, welcoming guest
                environments, and accountable corporate stewardship.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-[13.5px] font-medium text-[#171412]">
                <span>Public Shareholding Company</span>
                <span className="text-[#e4dfd7]">·</span>
                <span>Casual Dining &amp; Catering</span>
                <span className="text-[#e4dfd7]">·</span>
                <span>Diplomatic Area, Manama</span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="b4-btn-outline-dark"
                >
                  Read Company Overview
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. OUR BUSINESS — INTERACTIVE TABBED SHOWCASE */}
      <section className="bg-[#f8f6f2] py-20 lg:py-28 border-b border-[#e4dfd7]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#8e1b1b]">
              Our Business Activities
            </p>
            <h2 className="b4-display text-3xl sm:text-[2.65rem] font-extrabold leading-[1.12] text-[#171412]">
              Hospitality Operations Built for Scale &amp; Consistency
            </h2>
            <p className="text-[16.5px] text-[#665f57] leading-relaxed">
              Four integrated operational pillars sustain BFLC’s restaurants, bespoke
              event catering, and centralized kitchen governance.
            </p>
          </div>

          {/* Interactive Pillar Tabs */}
          <div
            role="tablist"
            aria-label="BFLC Business Operations"
            className="flex flex-wrap gap-2.5 border-b border-[#e4dfd7] pb-5"
          >
            {BUSINESS_OPERATIONS.map((op, idx) => {
              const active = idx === activeBusinessIdx;
              return (
                <button
                  key={op.index}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveBusinessIdx(idx)}
                  className={`px-4 py-2.5 rounded-full text-[13.5px] font-semibold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#8e1b1b] text-white shadow-xs'
                      : 'bg-white text-[#665f57] border border-[#e4dfd7] hover:border-[#8e1b1b]/40 hover:text-[#171412]'
                  }`}
                >
                  <span className="b4-mono text-[11.5px] mr-1.5 opacity-80">{op.index}</span>
                  {op.title}
                </button>
              );
            })}
          </div>

          {/* Active Showcase Card */}
          <div className="bg-white border border-[#e4dfd7] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <span className="b4-mono inline-block text-[12px] font-medium uppercase tracking-widest text-[#8e1b1b]">
                  Pillar {currentOp.index}
                </span>
                <h3 className="b4-display text-2xl sm:text-3xl font-bold text-[#171412]">
                  {currentOp.title}
                </h3>
                <p className="text-[16px] text-[#665f57] leading-relaxed">
                  {currentOp.summary}
                </p>

                <ul className="space-y-3 pt-2">
                  {currentOp.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-[15px] text-[#171412]">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#8e1b1b]/10 text-[#8e1b1b] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('business')}
                  className="b4-btn-primary"
                >
                  Explore Operations
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative bg-[#171412] flex flex-col">
              {currentVisual.isPattern ? (
                <div
                  className="flex-1 min-h-[280px] relative flex items-center justify-center p-10 overflow-hidden"
                  style={{ backgroundColor: BFLC_ASSET_LIBRARY.brands.kazbahCatering.panelColor }}
                >
                  <img
                    src={currentVisual.src}
                    alt={currentVisual.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  <img
                    src={BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo}
                    alt={BFLC_ASSET_LIBRARY.brands.kazbahCatering.logoAlt}
                    referrerPolicy="no-referrer"
                    className="relative z-10 max-w-[210px] w-full h-auto object-contain drop-shadow-sm"
                  />
                </div>
              ) : (
                <div className="flex-1 min-h-[280px]">
                  <img
                    src={currentVisual.src}
                    alt={currentVisual.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover block"
                  />
                </div>
              )}
              <div className="px-6 py-4 bg-[#171412] text-white/85 text-[12.5px] font-medium border-t border-white/10">
                {currentVisual.caption}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. OUR BRANDS */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#e4dfd7]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#8e1b1b]">
                Our Brands Portfolio
              </p>
              <h2 className="b4-display text-3xl sm:text-[2.65rem] font-extrabold leading-[1.12] text-[#171412]">
                Distinct Dining &amp; Catering Concepts
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('brands')}
              className="b4-btn-outline-dark self-start md:self-auto"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredBrands.map((item) => (
              <article
                key={item.brand.id}
                className="group bg-[#f8f6f2] border border-[#e4dfd7] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[#8e1b1b]/50"
              >
                {/* Brand Visual & Authentic Signature Panel */}
                <div className="flex flex-col">
                  <div
                    className="relative h-56 overflow-hidden"
                    style={
                      item.upperType === 'pattern'
                        ? { backgroundColor: item.panelColor }
                        : undefined
                    }
                  >
                    <img
                      src={item.upperImage}
                      alt={item.upperAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Crisp White V-shaped architectural divider */}
                    <svg
                      viewBox="0 0 400 32"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 w-full h-7 pointer-events-none block"
                    >
                      <polygon points="0,0 200,26 400,0 400,32 0,32" fill="#ffffff" />
                      <polygon
                        points="0,6 200,32 400,6 400,32 0,32"
                        fill={item.panelColor}
                      />
                    </svg>
                  </div>

                  <div
                    className="px-6 py-5 flex items-center justify-center min-h-[88px]"
                    style={{ backgroundColor: item.panelColor }}
                  >
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      referrerPolicy="no-referrer"
                      className="max-h-11 w-auto max-w-[185px] object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-white">
                  <div className="space-y-3">
                    <p className="text-[12.5px] font-semibold text-[#8e1b1b]">
                      {item.brand.category} · {item.brand.origin}
                    </p>
                    <h3 className="b4-display text-xl font-bold text-[#171412]">
                      {item.brand.name}
                    </h3>
                    <p className="text-[14.5px] text-[#665f57] leading-relaxed">
                      {item.brand.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e4dfd7] flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] text-[#665f57]">
                      <MapPin className="w-3.5 h-3.5 text-[#8e1b1b] shrink-0" aria-hidden="true" />
                      <span className="truncate">{item.brand.locations.join(' · ')}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('brands')}
                      className="text-[13.5px] font-semibold text-[#8e1b1b] hover:text-[#171412] inline-flex items-center gap-1 shrink-0 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05. COMPANY HIGHLIGHTS — OVERSIZED METRICS & AWARDS BAND */}
      <section className="bg-[#171412] text-white py-20 lg:py-24 b4-architectural-grid">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
                Corporate Scale &amp; Recognition
              </p>
              <h2 className="b4-display text-3xl sm:text-[2.65rem] font-extrabold leading-[1.12] text-white">
                Publicly Listed Governance Rooted in Bahrain
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('investors')}
              className="b4-btn-outline-light self-start md:self-auto"
            >
              Investor Relations
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-white/12 divide-y sm:divide-y-0 sm:divide-x divide-white/12">
            {COMPANY_HIGHLIGHTS.map((stat) => (
              <div key={stat.label} className="py-8 sm:px-6 lg:px-8 first:sm:pl-0 last:lg:pr-0 space-y-3">
                <p className="b4-display text-[2.25rem] sm:text-[2.5rem] font-extrabold tracking-tight text-white tabular-nums">
                  {stat.metric}
                </p>
                <p className="text-[14px] font-semibold text-[#f3d6d6]">{stat.label}</p>
                <p className="text-[14px] text-white/70 leading-relaxed">{stat.detail}</p>
              </div>
            ))}
          </div>

          {/* Official Awards Strip */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-2">
            <div className="space-y-1">
              <p className="text-[14px] font-semibold text-white">
                Hospitality Awards &amp; Accolades
              </p>
              <p className="text-[13.5px] text-white/65">
                Recognized by FACT Dining Awards Bahrain and Time Out Bahrain Restaurant Awards.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3 w-full max-w-[360px]">
              {BFLC_ASSET_LIBRARY.awards.map((award) => (
                <div
                  key={award.id}
                  className="bg-white rounded-lg p-1 flex items-center justify-center"
                >
                  <img
                    src={award.image}
                    alt={award.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-14 object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. OUR CAPABILITIES */}
      <section className="bg-[#f8f6f2] py-20 lg:py-28 border-b border-[#e4dfd7]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#8e1b1b]">
              Why BFLC · Core Capabilities
            </p>
            <h2 className="b4-display text-3xl sm:text-[2.65rem] font-extrabold leading-[1.12] text-[#171412]">
              Disciplined Execution Across Every Dining Room
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_BFLC_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-[#e4dfd7] rounded-2xl p-8 sm:p-10 space-y-4 hover:border-[#8e1b1b]/45 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="b4-mono text-[13px] font-medium text-[#8e1b1b]">
                    {pillar.index}
                  </span>
                </div>
                <h3 className="b4-display text-2xl font-bold text-[#171412] capitalize">
                  {pillar.title}
                </h3>
                <p className="text-[15.5px] text-[#665f57] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. NEWS & MEDIA */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#e4dfd7]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#8e1b1b]">
                News &amp; Media
              </p>
              <h2 className="b4-display text-3xl sm:text-[2.65rem] font-extrabold leading-[1.12] text-[#171412]">
                Corporate Updates &amp; Venue Announcements
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('news')}
              className="b4-btn-outline-dark self-start md:self-auto"
            >
              All News &amp; Media
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="group bg-[#f8f6f2] border border-[#e4dfd7] rounded-2xl overflow-hidden flex flex-col hover:border-[#8e1b1b]/45 transition-colors"
              >
                {article.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-[#171412]">
                    <img
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-white">
                  <div className="space-y-3">
                    <p className="text-[12.5px] font-medium text-[#665f57]">
                      {article.date} · {article.category}
                    </p>
                    <h3 className="b4-display text-lg sm:text-xl font-bold text-[#171412] leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[14.5px] text-[#665f57] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectArticle(article)}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#8e1b1b] hover:text-[#171412] self-start transition-colors"
                  >
                    <span>Read update</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08. CONTACT CTA BANNER */}
      <section className="bg-[#f8f6f2] py-16 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#171412] text-white p-8 sm:p-12 lg:p-16 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center b4-architectural-grid">
            <div className="lg:col-span-8 space-y-4">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
                Connect With BFLC
              </p>
              <h2 className="b4-display text-3xl sm:text-[2.5rem] font-extrabold leading-[1.12] text-white">
                Hospitality Partnerships, Catering &amp; Investor Enquiries
              </h2>
              <p className="text-[16px] text-white/75 leading-relaxed max-w-2xl">
                Reach our Diplomatic Area corporate office in Manama for franchise discussions,
                corporate catering proposals, career opportunities, or shareholder resources.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:flex-col items-start lg:items-end gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="b4-btn-primary"
              >
                Contact Our Office
              </button>
              <button
                type="button"
                onClick={() => onNavigate('investors')}
                className="b4-btn-outline-light"
              >
                Investor Portal
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
