import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, FileText } from 'lucide-react';
import {
  AGM_ANNUAL_RESOURCES,
  ANNUAL_REPORTS_ARCHIVE,
  COMPANY_HIGHLIGHTS,
  COMPANY_INFO,
  NEWS_ARTICLES,
} from '../data/bflcData';
import { NewsArticle, PageRoute } from '../types/bflc';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import {
  OPTION2_BRANDS,
  OPTION2_BUSINESS_DIVISIONS,
  OPTION2_CAPABILITIES,
  OPTION2_MEDIA,
  Option2CapabilityCard,
} from './option2Media';

interface BflcOption2HomeProps {
  onNavigate: (page: PageRoute, articleId?: string) => void;
  onSelectCapability: (cap: Option2CapabilityCard) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

const HERO_SPOTLIGHTS = [
  {
    id: 'heritage',
    kicker: 'Est. 1994 · Manama',
    title: 'Three Decades of Bahraini Hospitality',
    image: BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior,
    route: 'about' as PageRoute,
  },
  {
    id: 'cucina',
    kicker: 'Homegrown Concept',
    title: 'Cucina Italiana & Live Evening Dining',
    image: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
    route: 'brands' as PageRoute,
  },
  {
    id: 'bourse',
    kicker: 'Bahrain Bourse · FAMILY',
    title: 'Governance & Investor Disclosures',
    image: BFLC_ASSET_LIBRARY.restaurants.loungeBar.url,
    route: 'investors' as PageRoute,
  },
];

export const BflcOption2Home: React.FC<BflcOption2HomeProps> = ({
  onNavigate,
  onSelectCapability,
  onSelectArticle,
}) => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [activeDivisionId, setActiveDivisionId] = useState<string>(
    OPTION2_BUSINESS_DIVISIONS[0].id
  );
  const [featuredBrandIndex, setFeaturedBrandIndex] = useState(0);
  const [selectedAnnualIdx, setSelectedAnnualIdx] = useState(0);
  const [capProgress, setCapProgress] = useState(0.32);

  const capSliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % HERO_SPOTLIGHTS.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const handleCapabilitiesScroll = () => {
    const el = capSliderRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setCapProgress(1);
      return;
    }
    const ratio = el.scrollLeft / maxScroll;
    setCapProgress(Math.min(1, Math.max(0.25, 0.25 + ratio * 0.75)));
  };

  const stepCapabilities = (dir: -1 | 1) => {
    const el = capSliderRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeSpotlight = HERO_SPOTLIGHTS[spotlightIndex];
  const activeDivision =
    OPTION2_BUSINESS_DIVISIONS.find((d) => d.id === activeDivisionId) ||
    OPTION2_BUSINESS_DIVISIONS[0];
  const activeBrand = OPTION2_BRANDS[featuredBrandIndex];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#171412] text-white">
        <img
          src={OPTION2_MEDIA.heroHospitality}
          alt="Warm casual dining interior operated by Bahrain Family Leisure Company during evening service"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,20,18,0.45) 0%, rgba(23,20,18,0.22) 45%, rgba(23,20,18,0.82) 100%)',
          }}
        />

        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-5 sm:px-9 pb-12 sm:pb-14 pt-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Bottom-Left Headline & Approved Hero Copy */}
          <div className="max-w-[700px]">
            <p className="text-[13px] font-medium text-white/80 mb-5 flex items-center gap-2">
              <span>{COMPANY_INFO.legalName}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">BHB: {COMPANY_INFO.bourseSymbol}</span>
            </p>

            <h1 className="b2-title-2xl text-white">
              Bringing People Together Through{' '}
              <span className="b2-italic">Hospitality</span>
            </h1>

            <p className="mt-5 b2-desc-l text-white/85 max-w-[500px]">
              BFLC is a Bahrain-based hospitality company focused on creating memorable
              experiences through food, service and carefully managed dining concepts.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToSection('bflc2-about')}
                className="b2-app-button"
              >
                <span>Discover BFLC</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('brands')}
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium text-white border border-white/40 hover:border-white hover:bg-white/10 rounded-[4px] whitespace-nowrap shrink-0 transition-colors"
              >
                <span>Explore Our Brands</span>
              </button>
            </div>
          </div>

          {/* Bottom-Right Floating Hospitality Spotlight Card */}
          <div className="hidden md:flex flex-col gap-2 w-[252px] shrink-0">
            <div className="bg-[#171412]/70 backdrop-blur-md border border-white/15 rounded-[6px] p-3.5 text-white">
              <button
                type="button"
                onClick={() => onNavigate(activeSpotlight.route)}
                className="text-left w-full group"
              >
                <div className="text-[11px] text-white/75">{activeSpotlight.kicker}</div>
                <div className="mt-1 text-[13.5px] leading-[1.32] font-medium text-white group-hover:underline">
                  {activeSpotlight.title}
                </div>
                <div className="mt-3 overflow-hidden rounded-[4px] h-[94px] w-full bg-[#241f1c]">
                  <img
                    src={activeSpotlight.image}
                    alt={activeSpotlight.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </button>

              <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                {HERO_SPOTLIGHTS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSpotlightIndex(idx)}
                    aria-label={`Show ${item.title}`}
                    className="py-1"
                  >
                    <span
                      className={`block h-[2px] w-full rounded-full transition-colors ${
                        idx === spotlightIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full bg-white text-[#171412] hover:bg-[#f8f6f2] transition-colors rounded-[4px] py-3 px-4 text-[13px] font-medium text-center"
            >
              Enquire With BFLC
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT BFLC — Editorial Statement + Leadership Feature */}
      <section id="bflc2-about" className="bg-white pt-24 sm:pt-32">
        {/* Centered Editorial Hospitality Statement */}
        <div className="max-w-[1040px] mx-auto px-5 sm:px-9 text-center pb-20 sm:pb-28">
          <p className="b2-kicker">Hospitality in the Kingdom of Bahrain</p>
          <h2 className="mt-6 b2-title-xl text-[#171412]">
            From <span className="b2-italic">welcoming</span> dining rooms{' '}
            <img
              src={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url}
              alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
              referrerPolicy="no-referrer"
              className="inline-block align-middle w-[52px] h-[34px] sm:w-[92px] sm:h-[60px] object-cover rounded-[6px] mx-1 -translate-y-[3px]"
            />{' '}
            to <span className="b2-italic">bespoke</span> catering, we craft the{' '}
            <span className="b2-italic">tables</span>{' '}
            <img
              src={BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior}
              alt={BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt}
              referrerPolicy="no-referrer"
              className="inline-block align-middle w-[52px] h-[34px] sm:w-[92px] sm:h-[60px] object-cover rounded-[6px] mx-1 -translate-y-[3px]"
            />{' '}
            where families &amp; guests{' '}
            <img
              src={BFLC_ASSET_LIBRARY.restaurants.loungeBar.url}
              alt={BFLC_ASSET_LIBRARY.restaurants.loungeBar.alt}
              referrerPolicy="no-referrer"
              className="inline-block align-middle w-[52px] h-[34px] sm:w-[92px] sm:h-[60px] object-cover rounded-[6px] mx-1 -translate-y-[3px]"
            />{' '}
            gather
          </h2>
        </div>

        {/* About BFLC Intro Block */}
        <div className="border-t border-[#e4dfd7] py-20 sm:py-24 px-5 sm:px-9 text-center">
          <div className="max-w-[780px] mx-auto">
            <p className="b2-kicker">About BFLC</p>
            <h2 className="mt-4 b2-title-l text-[#171412]">
              A <span className="b2-italic">Passion</span> for Hospitality
            </h2>
            <p className="mt-5 b2-desc-l text-[#665f57] max-w-[600px] mx-auto">
              BFLC brings together experience, operational expertise and a passion for
              hospitality. The company’s focus is on developing and operating food and
              beverage concepts that deliver welcoming experiences and value for guests and
              partners.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="b2-app-button"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Hospitality Scene */}
        <div className="w-full h-[360px] sm:h-[540px] lg:h-[620px] overflow-hidden bg-[#171412]">
          <img
            src={BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior}
            alt={BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* 3. OUR BUSINESS — Interactive Division Selector Split */}
      <section className="bg-white py-20 sm:py-28 px-5 sm:px-9 border-b border-[#e4dfd7]">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:min-h-[560px]">
            <div>
              <p className="b2-kicker mb-3">Our Business</p>
              <h2 className="b2-title-l text-[#171412]">
                Dining, catering &amp;{' '}
                <span className="b2-italic">operations</span>
              </h2>

              <div className="mt-8 border-t border-[#e4dfd7]">
                {OPTION2_BUSINESS_DIVISIONS.map((div) => {
                  const active = div.id === activeDivision.id;
                  return (
                    <button
                      key={div.id}
                      type="button"
                      onMouseEnter={() => setActiveDivisionId(div.id)}
                      onClick={() => setActiveDivisionId(div.id)}
                      className={`w-full py-4 border-b border-[#e4dfd7] flex items-center justify-between gap-4 text-left transition-colors group ${
                        active
                          ? 'text-[#171412]'
                          : 'text-[#665f57] hover:text-[#171412]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-[12px] tabular-nums text-[#8e1b1b] font-medium shrink-0">
                          {div.index}
                        </span>
                        <span className="text-[16px] font-medium truncate">
                          {div.title}
                        </span>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          active
                            ? 'translate-x-0.5 text-[#8e1b1b]'
                            : 'text-[#665f57] group-hover:translate-x-1 group-hover:text-[#171412]'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 space-y-5 max-w-[440px]">
              <p className="b2-desc-s text-[#665f57]">{activeDivision.summary}</p>
              <button
                type="button"
                onClick={() => onNavigate('business')}
                className="b2-outline-button"
              >
                <span>Explore Our Business</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Tall Dynamic Hospitality Photography */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative w-full aspect-[4/4.2] overflow-hidden rounded-[6px] bg-[#f8f6f2]">
              {OPTION2_BUSINESS_DIVISIONS.map((div) => (
                <img
                  key={div.id}
                  src={div.image}
                  alt={div.imageAlt}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    div.id === activeDivision.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR BRANDS — Confirmed Portfolio Spotlight & Clean 3-Brand Showcase */}
      <section className="bg-[#f8f6f2] py-20 sm:py-28 px-5 sm:px-9">
        <div className="max-w-[1380px] mx-auto space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[660px] space-y-3">
              <p className="b2-kicker">Our Business, Our Brands</p>
              <h2 className="b2-title-l text-[#171412]">
                Confirmed Hospitality{' '}
                <span className="b2-italic">Portfolio</span>
              </h2>
              <p className="b2-desc-l text-[#665f57]">
                Explore the established franchise and homegrown culinary concepts operated
                by BFLC across casual dining and bespoke event catering.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('brands')}
              className="b2-outline-button bg-white"
            >
              <span>Explore Our Brands</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Featured Brand Interactive Spotlight */}
          <div className="bg-white border border-[#e4dfd7] rounded-[6px] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-[#171412]">
              <img
                src={activeBrand.photo}
                alt={activeBrand.photoAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
              />
              <div
                className="absolute bottom-5 left-5 px-4 py-2.5 rounded-[4px]"
                style={{ backgroundColor: activeBrand.panelColor }}
              >
                <img
                  src={activeBrand.logo}
                  alt={activeBrand.logoAlt}
                  referrerPolicy="no-referrer"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6 p-7 sm:p-11 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[12.5px] text-[#665f57]">
                  <span>{activeBrand.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeBrand.origin}</span>
                </div>

                <h3 className="b2-title-m text-[#171412]">{activeBrand.name}</h3>
                <p className="b2-desc-l text-[#665f57]">{activeBrand.description}</p>

                <ul className="pt-2 space-y-2">
                  {activeBrand.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-[13.5px] text-[#171412]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#e4dfd7] flex flex-wrap items-center justify-between gap-4">
                <span className="text-[12.5px] text-[#665f57]">
                  {activeBrand.locations}
                </span>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFeaturedBrandIndex((prev) =>
                        prev === 0 ? OPTION2_BRANDS.length - 1 : prev - 1
                      )
                    }
                    aria-label="Previous brand"
                    className="p-1.5 text-[#665f57] hover:text-[#171412]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[12px] font-medium text-[#665f57] tabular-nums">
                    {String(featuredBrandIndex + 1).padStart(2, '0')} /{' '}
                    {String(OPTION2_BRANDS.length).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFeaturedBrandIndex((prev) => (prev + 1) % OPTION2_BRANDS.length)
                    }
                    aria-label="Next brand"
                    className="p-1.5 text-[#665f57] hover:text-[#171412]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Equal Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {OPTION2_BRANDS.map((brand, idx) => {
              const selected = idx === featuredBrandIndex;
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => setFeaturedBrandIndex(idx)}
                  className={`group text-left bg-white rounded-[6px] overflow-hidden border transition-colors ${
                    selected
                      ? 'border-[#8e1b1b]'
                      : 'border-[#e4dfd7] hover:border-[#665f57]'
                  }`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#171412]">
                    <img
                      src={brand.photo}
                      alt={brand.photoAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[12px] text-[#665f57]">{brand.category}</span>
                      <span className="text-[12px] text-[#8e1b1b] font-medium">
                        {selected ? 'Selected' : 'View'}
                      </span>
                    </div>
                    <h4 className="b2-title-s text-[#171412]">{brand.name}</h4>
                    <p className="b2-desc-s text-[#665f57]">{brand.summary}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMPANY HIGHLIGHTS — Verified Metrics Architectural Grid */}
      <section className="bg-white pt-20 sm:pt-28">
        <div className="px-5 pb-12 sm:pb-16 text-center max-w-[600px] mx-auto">
          <p className="b2-kicker">Company Highlights</p>
          <h2 className="mt-4 b2-title-m text-[#171412]">
            BFLC at a Glance — verified corporate milestones &amp; presence
          </h2>
        </div>

        <div className="bg-[#171412] text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/15">
          {COMPANY_HIGHLIGHTS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`py-14 sm:py-20 px-7 flex flex-col justify-between text-left border-white/15 border-b ${
                idx < 3 ? 'lg:border-r' : ''
              } ${idx % 2 === 0 ? 'sm:border-r lg:border-r' : 'sm:border-r-0'}`}
            >
              <div>
                <div className="text-[34px] sm:text-[42px] leading-[1.05] tracking-[-0.03em] font-medium tabular-nums text-white">
                  {stat.metric}
                </div>
                <div className="mt-3 text-[13.5px] font-medium text-[#f3d6d6]">
                  {stat.label}
                </div>
              </div>
              <p className="mt-6 text-[13px] leading-[1.55] text-white/70">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ANNUAL REPORTS & GOVERNANCE — Authentic bflc.com.bh Shareholder Archive */}
      <section className="bg-[#f8f6f2] py-20 sm:py-28 px-5 sm:px-9 border-b border-[#e4dfd7]">
        <div className="max-w-[1380px] mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[700px] space-y-3">
              <p className="b2-kicker">
                Annual Reports · {COMPANY_INFO.bourseExchange}: {COMPANY_INFO.bourseSymbol}
              </p>
              <h2 className="b2-title-l text-[#171412]">
                Annual Reports &amp; <span className="b2-italic">Governance</span> Archive
              </h2>
              <p className="b2-desc-l text-[#665f57]">
                Official annual reports, ESG sustainability disclosures, audited financial
                statements, and Annual General Meeting records published by{' '}
                {COMPANY_INFO.legalName}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('investors')}
                className="b2-app-button"
              >
                <span>Investor Relations</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="b2-outline-button bg-white"
              >
                <span>Official Archive</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Year Index */}
            <div className="lg:col-span-5 border-t border-[#e4dfd7]">
              {ANNUAL_REPORTS_ARCHIVE.map((report, idx) => {
                const active = idx === selectedAnnualIdx;
                return (
                  <button
                    key={report.year}
                    type="button"
                    onClick={() => setSelectedAnnualIdx(idx)}
                    className={`w-full py-4 border-b border-[#e4dfd7] flex items-center justify-between gap-4 text-left transition-colors group ${
                      active ? 'text-[#171412]' : 'text-[#665f57] hover:text-[#171412]'
                    }`}
                  >
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[12px] tabular-nums text-[#8e1b1b] font-medium">
                          {report.year}
                        </span>
                        <span className="text-[15.5px] font-medium truncate">
                          {report.reportTitle}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#665f57] truncate">
                        {report.languages}
                        {report.esgTitle ? ` · ${report.esgTitle}` : ''}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        active
                          ? 'translate-x-0.5 text-[#8e1b1b]'
                          : 'text-[#665f57] group-hover:translate-x-1 group-hover:text-[#171412]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Annual Filing Details & AGM Resources */}
            <div className="lg:col-span-7 bg-white border border-[#e4dfd7] rounded-[6px] p-7 sm:p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[12.5px] text-[#665f57]">
                  <span className="text-[#8e1b1b] font-medium">
                    {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].statusLabel}
                  </span>
                  <span>
                    {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].languages} ·{' '}
                    {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].auditor}
                  </span>
                </div>
                <h3 className="b2-title-m text-[#171412]">
                  {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].reportTitle}
                </h3>
                <p className="b2-desc-l text-[#665f57]">
                  {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].keyMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-[#f8f6f2] border border-[#e4dfd7] rounded-[4px] p-3 space-y-0.5"
                    >
                      <p className="text-[11px] uppercase tracking-wider text-[#665f57]">
                        {metric.label}
                      </p>
                      <p className="text-[15.5px] font-semibold text-[#171412] tabular-nums">
                        {metric.value}
                      </p>
                      {metric.note && (
                        <p className="text-[11px] text-[#8e1b1b]">{metric.note}</p>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-[13px] text-[#665f57] leading-relaxed bg-[#f8f6f2] border border-[#e4dfd7] rounded-[4px] p-3.5">
                  {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].governanceNote}
                </p>

                <ul className="pt-1 space-y-2">
                  {ANNUAL_REPORTS_ARCHIVE[selectedAnnualIdx].documents.map((docTitle) => (
                    <li
                      key={docTitle}
                      className="flex items-start gap-2.5 text-[13.5px] text-[#171412]"
                    >
                      <FileText
                        className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{docTitle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#e4dfd7] grid grid-cols-1 sm:grid-cols-2 gap-5">
                {AGM_ANNUAL_RESOURCES.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <h4 className="text-[13.5px] font-medium text-[#171412]">
                      {item.title}
                    </h4>
                    <p className="text-[12.5px] text-[#665f57] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR CAPABILITIES — Why BFLC Horizontal Portrait Strip */}
      <section className="bg-white py-20 sm:py-28 pl-5 sm:pl-9 border-b border-[#e4dfd7]">
        <div className="max-w-[1380px] mx-auto">
          <div className="pr-5 sm:pr-9 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <p className="b2-kicker mb-2">Our Capabilities</p>
              <h2 className="b2-title-l text-[#171412]">
                Built on experience. Driven by{' '}
                <span className="b2-italic">hospitality.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stepCapabilities(-1)}
                  aria-label="Scroll capabilities left"
                  className="p-2 border border-[#e4dfd7] rounded-[4px] text-[#665f57] hover:text-[#171412] hover:border-[#171412] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => stepCapabilities(1)}
                  aria-label="Scroll capabilities right"
                  className="p-2 border border-[#e4dfd7] rounded-[4px] text-[#665f57] hover:text-[#171412] hover:border-[#171412] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="w-[140px] sm:w-[180px] h-[3px] bg-[#e4dfd7] overflow-hidden">
                <div
                  className="h-full bg-[#8e1b1b] transition-all duration-200"
                  style={{ width: `${Math.round(capProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div
            ref={capSliderRef}
            onScroll={handleCapabilitiesScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto b2-no-scrollbar pr-5 sm:pr-9"
          >
            {OPTION2_CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                type="button"
                onClick={() => onSelectCapability(cap)}
                className="shrink-0 w-[275px] sm:w-[320px] lg:w-[340px] text-left group focus-visible:outline-none"
              >
                <div className="w-full aspect-[3/4] overflow-hidden rounded-[6px] bg-[#f8f6f2]">
                  <img
                    src={cap.image}
                    alt={cap.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="b2-desc-m text-[#171412] group-hover:text-[#8e1b1b] transition-colors">
                    {cap.index}. {cap.title}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#665f57] group-hover:text-[#8e1b1b] shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1.5 b2-desc-s text-[#665f57] line-clamp-2">
                  {cap.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWS & MEDIA — Hairline Editorial List */}
      <section className="bg-white px-5 sm:px-9 py-20 sm:py-24">
        <div className="max-w-[1380px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
            <div>
              <p className="b2-kicker mb-2">News &amp; Media</p>
              <h2 className="b2-title-l text-[#171412]">
                The latest from <span className="b2-italic">BFLC</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('news')}
              className="b2-outline-button"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="divide-y divide-[#e4dfd7] border-t border-b border-[#e4dfd7]">
            {NEWS_ARTICLES.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => onSelectArticle(article)}
                className="w-full py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-stretch text-left group focus-visible:outline-none"
              >
                <div className="md:col-span-4 aspect-[16/10] overflow-hidden rounded-[6px] bg-[#f8f6f2]">
                  <img
                    src={article.image || OPTION2_MEDIA.hospitalityLeadership}
                    alt={article.imageAlt || article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="md:col-span-8 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="text-[12.5px] text-[#665f57] flex items-center gap-2">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.category}</span>
                    </div>
                    <h3 className="mt-3 b2-title-s text-[#171412] max-w-[600px] group-hover:text-[#8e1b1b] transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-3 b2-desc-s text-[#665f57] max-w-[580px]">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-[#665f57] group-hover:text-[#171412] transition-colors">
                    <span className="text-[12.5px] font-medium">Read release</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION — Clean Architectural Dining CTA */}
      <section className="relative w-full py-28 sm:py-36 px-5 overflow-hidden bg-[#f8f6f2]">
        <img
          src={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url}
          alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.94) 26%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0.94) 74%, rgba(255,255,255,0.45) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[500px] mx-auto text-center">
          <p className="b2-kicker mb-3">Diplomatic Area · Manama</p>
          <h2 className="b2-title-l text-[#171412]">
            Let’s <span className="b2-italic">connect</span>
          </h2>
          <p className="mt-4 b2-desc-l text-[#665f57]">
            For business enquiries, partnerships, catering bookings, or general corporate
            information, get in touch with BFLC.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="b2-app-button"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('investors')}
              className="b2-outline-button bg-white"
            >
              <span>Investor Relations</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
