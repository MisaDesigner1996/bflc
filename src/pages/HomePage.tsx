import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  TrendingUp,
  Users,
} from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import {
  BFLC_ASSETS,
  COMPANY_HIGHLIGHTS,
  COMPANY_INFO,
  NEWS_ARTICLES,
  WHY_BFLC_PILLARS,
} from '../data/bflcData';
import { PageRoute } from '../types/bflc';

interface HomePageProps {
  onNavigate: (page: PageRoute, articleId?: string) => void;
}

const BUSINESS_SHOWCASE_CARDS = [
  {
    id: 'bennigans',
    name: "Bennigan's",
    topImage: BFLC_ASSET_LIBRARY.brands.bennigans.interior,
    topAlt: BFLC_ASSET_LIBRARY.brands.bennigans.interiorAlt,
    logoImage: BFLC_ASSET_LIBRARY.brands.bennigans.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.bennigans.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.bennigans.panelColor,
  },
  {
    id: 'cucina-italiana',
    name: 'Cucina Italiana',
    topImage: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
    topAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt,
    logoImage: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.panelColor,
  },
  {
    id: 'kazbah-catering',
    name: 'Kazbah Catering',
    topImage: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
    topAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.patternAlt,
    logoImage: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.kazbahCatering.panelColor,
  },
] as const;

const PILLAR_ICONS = [Compass, Users, CheckCircle2, TrendingUp];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about-bflc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('about');
    }
  };

  return (
    <div>
      {/* 01. Hero Section */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Hero Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="text-xs font-medium tracking-wide text-[#D6D3D1] flex items-center gap-2">
                <span>{COMPANY_INFO.legalName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular">BHB: {COMPANY_INFO.bourseSymbol}</span>
              </div>

              <h1
                className="font-display font-semibold tracking-tight text-white text-balance leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
              >
                Bringing People Together Through Hospitality
              </h1>

              <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed max-w-xl">
                BFLC is a Bahrain-based hospitality company focused on creating memorable
                experiences through food, service and carefully managed dining concepts.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToAbout}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#B91C1C] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1917] focus-visible:ring-white"
                >
                  <span>Discover BFLC</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('brands')}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#FAF9F6] border border-[#44403C] hover:border-[#A8A29E] hover:bg-[#292524] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Explore Our Brands
                </button>
              </div>
            </div>

            {/* Hero Hospitality Dining Photography */}
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-lg overflow-hidden border border-[#292524] bg-[#292524] flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden">
                  <MediaFrame
                    src={BFLC_ASSETS.diningRoom}
                    alt="Warm casual dining room operated by Bahrain Family Leisure Company with timber tables and ambient lighting"
                    className="w-full h-full"
                    imgClassName="transition-transform duration-500 hover:scale-[1.02]"
                    fallbackTitle="BFLC Casual Dining"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent pointer-events-none"
                  />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-[#E7E5E4]">
                    <span>Kingdom of Bahrain</span>
                    <span aria-hidden="true">·</span>
                    <span>Casual Dining &amp; Hospitality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. About BFLC */}
      <section id="about-bflc" className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden border border-[#E5E0D8] bg-white p-2">
                <div className="aspect-[4/3] rounded overflow-hidden">
                  <MediaFrame
                    src={BFLC_ASSETS.loungeBar}
                    alt="Warm hospitality lounge and restaurant table setting"
                    className="w-full h-full"
                    fallbackTitle="BFLC Hospitality Operations"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                02. About BFLC
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight text-balance">
                A Passion for Hospitality
              </h2>
              <p className="text-base text-[#44403C] leading-relaxed max-w-xl">
                BFLC brings together experience, operational expertise and a passion for
                hospitality. The company’s focus is on developing and operating food and
                beverage concepts that deliver welcoming experiences and value for guests and
                partners.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1C1917] bg-white border border-[#D6D3D1] hover:border-[#1C1917] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Our Business & Brands */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                03. Our Business &amp; Brands
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight text-balance">
                Our Business, Our Brands
              </h2>
              <p className="text-base text-[#44403C] leading-relaxed">
                Discover BFLC’s activities across food and beverage, restaurant operations and
                catering. Explore the brands and concepts that form the company’s portfolio.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('business')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#292524] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
              >
                <span>Explore Our Business</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Three Branded Business Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {BUSINESS_SHOWCASE_CARDS.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => onNavigate('brands')}
                aria-label={`Explore ${card.name}`}
                className="group w-full max-w-[270px] mx-auto md:max-w-none h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#991B1B]"
                style={{ backgroundColor: card.panelColor }}
              >
                {/* Upper Visual Portion with White V-Shaped Divider */}
                <div className="relative w-full aspect-[204/226] overflow-hidden shrink-0">
                  <img
                    src={card.topImage}
                    alt={card.topAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center block"
                  />
                  <svg
                    viewBox="0 0 204 29"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="absolute -bottom-[1px] left-0 w-full h-[13%] pointer-events-none block"
                  >
                    <polygon
                      points="0,0 102,21 204,0 204,8 102,29 0,8"
                      fill="#FFFFFF"
                    />
                    <polygon
                      points="0,8 102,29 204,8 204,29 0,29"
                      fill={card.panelColor}
                    />
                  </svg>
                </div>

                {/* Bottom Branded Color Panel with Logo */}
                <div
                  className="flex-1 w-full flex items-center justify-center px-5 pt-3 pb-6 min-h-[118px]"
                  style={{ backgroundColor: card.panelColor }}
                >
                  <img
                    src={card.logoImage}
                    alt={card.logoAlt}
                    referrerPolicy="no-referrer"
                    className="w-full max-w-[194px] h-auto object-contain select-none"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Why BFLC */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                04. Why BFLC
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight text-balance">
                Built on Experience. Driven by Hospitality.
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Our operational discipline and dedication to warm service guide every venue we
                manage across the Kingdom of Bahrain.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {WHY_BFLC_PILLARS.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                return (
                  <div
                    key={pillar.index}
                    className="pt-5 border-t border-[#D6D3D1] space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-[#78716C]">
                      <span className="font-mono-tabular text-xs font-medium">
                        {pillar.index}.
                      </span>
                      <Icon className="w-4 h-4 text-[#991B1B]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1C1917]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#44403C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 05. Company Highlights */}
      <section className="py-16 lg:py-20 bg-[#1C1917] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292524] pb-8">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
                05. Company Highlights
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                BFLC at a Glance
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('investors')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#E7E5E4] hover:text-white whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              <Building2 className="w-4 h-4 text-[#FCA5A5]" aria-hidden="true" />
              <span>Investor Relations &amp; Disclosures</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="font-display text-3xl sm:text-4xl font-semibold text-white tabular-nums tracking-tight">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-[#FCA5A5]">
                  {item.label}
                </div>
                <p className="text-sm text-[#A8A29E] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. News & Updates */}
      <section className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                06. News &amp; Updates
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
                The Latest from BFLC
              </h2>
              <p className="text-base text-[#44403C] leading-relaxed">
                Feature the latest company announcements, brand updates, events, partnerships and
                other relevant news.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1C1917] bg-white border border-[#D6D3D1] hover:border-[#1C1917] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between bg-white border border-[#E5E0D8] rounded-lg overflow-hidden hover:border-[#A8A29E] transition-colors duration-150"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#E5E0D8]">
                    <MediaFrame
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      className="w-full h-full"
                      fallbackTitle={article.category}
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-[#78716C] flex items-center gap-2">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.category}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#1C1917] leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#44403C] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('news', article.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#991B1B] hover:text-[#7F1D1D] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Contact CTA Band */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F3F1EC] border border-[#E5E0D8] rounded-lg px-6 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                07. Connect With Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
                Let’s Connect
              </h2>
              <p className="text-base text-[#44403C] leading-relaxed">
                For business enquiries, partnerships or general information, get in touch with
                BFLC.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#991B1B]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('careers')}
                className="inline-flex items-center px-5 py-3 text-sm font-semibold text-[#1C1917] bg-white border border-[#D6D3D1] hover:border-[#1C1917] rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
              >
                Careers at BFLC
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
