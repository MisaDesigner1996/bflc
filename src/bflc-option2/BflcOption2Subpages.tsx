import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import {
  BOARD_MEMBERS,
  BRANDS_PORTFOLIO,
  BUSINESS_OPERATIONS,
  COMPANY_INFO,
  INVESTOR_DOCUMENTS,
  JOB_OPENINGS,
  NEWS_ARTICLES,
  WHY_BFLC_PILLARS,
} from '../data/bflcData';
import { BrandCategory, InvestorTab, NewsCategory, PageRoute } from '../types/bflc';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { OPTION2_BRANDS } from './option2Media';

interface SubpageProps {
  page: Exclude<PageRoute, 'home'>;
  onNavigate: (page: PageRoute) => void;
  initialArticleId?: string | null;
}

export const BflcOption2Subpages: React.FC<SubpageProps> = ({
  page,
  onNavigate,
  initialArticleId,
}) => {
  const [brandFilter, setBrandFilter] = useState<'All' | BrandCategory>('All');
  const [investorTab, setInvestorTab] = useState<InvestorTab>('reports');
  const [newsFilter, setNewsFilter] = useState<'All' | NewsCategory>('All');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    initialArticleId || null
  );

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('General Hospitality Enquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
    setContactSubmitted(true);
  };

  // Shared Editorial Subpage Header Banner
  const renderSubHeader = (
    kicker: string,
    title: string,
    italicWord: string,
    subtitle: string
  ) => (
    <section className="bg-[#f8f6f2] border-b border-[#e4dfd7] pt-32 pb-16 sm:pb-20 px-5 sm:px-9">
      <div className="max-w-[1380px] mx-auto">
        <p className="b2-kicker mb-4">{kicker}</p>
        <h1 className="b2-title-xl text-[#171412] max-w-[900px]">
          {title} <span className="b2-italic">{italicWord}</span>
        </h1>
        <p className="mt-5 b2-desc-l text-[#665f57] max-w-[660px]">{subtitle}</p>
      </div>
    </section>
  );

  if (page === 'about') {
    return (
      <div>
        {renderSubHeader(
          'About Us',
          'Heritage, leadership & operational',
          'hospitality',
          `Established on ${COMPANY_INFO.establishedDate}, ${COMPANY_INFO.legalName} develops and operates casual dining and catering concepts across the Kingdom of Bahrain.`
        )}

        <section className="py-20 px-5 sm:px-9 bg-white">
          <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="b2-kicker">Company Overview</p>
              <h2 className="b2-title-l text-[#171412]">
                A Passion for <span className="b2-italic">Hospitality</span>
              </h2>
              <p className="b2-desc-l text-[#665f57]">
                BFLC brings together three decades of market expertise, disciplined kitchen
                and dining operations, and enduring hospitality values. Publicly listed on the{' '}
                {COMPANY_INFO.bourseExchange} under ticker{' '}
                <strong className="font-medium text-[#171412]">
                  {COMPANY_INFO.bourseSymbol}
                </strong>
                , BFLC focuses on welcoming guest experiences and sustainable value for
                partners and shareholders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#e4dfd7]">
                <div>
                  <h3 className="text-[15px] font-medium text-[#171412]">Our Vision</h3>
                  <p className="mt-2 b2-desc-s text-[#665f57]">
                    To be Bahrain’s premier casual dining and bespoke hospitality operator,
                    admired for culinary consistency and enduring guest trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-[#171412]">Our Mission</h3>
                  <p className="mt-2 b2-desc-s text-[#665f57]">
                    To nurture welcoming dining concepts and catering teams through high
                    service standards, responsible governance, and continuous innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden rounded-[6px] aspect-[4/3] bg-[#f8f6f2]">
              <img
                src={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url}
                alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-20 px-5 sm:px-9 bg-[#f8f6f2] border-t border-[#e4dfd7]">
          <div className="max-w-[1380px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10">
              <div>
                <p className="b2-kicker mb-2">Leadership &amp; Governance</p>
                <h2 className="b2-title-l text-[#171412]">
                  Board of <span className="b2-italic">Directors</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('investors')}
                className="b2-outline-button bg-white"
              >
                <span>Governance Disclosures</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BOARD_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-[#e4dfd7] rounded-[6px] p-6 space-y-2"
                >
                  <p className="text-[12px] text-[#8e1b1b] font-medium">{member.role}</p>
                  <h3 className="b2-title-s text-[#171412]">{member.name}</h3>
                  <p className="b2-desc-s text-[#665f57]">{member.classification}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'business') {
    return (
      <div>
        {renderSubHeader(
          'Our Business',
          'Integrated dining & culinary',
          'operations',
          'Discover BFLC’s core operational pillars across full-service casual dining, homegrown brand development, corporate catering, and central kitchen discipline.'
        )}

        <section className="py-20 px-5 sm:px-9 bg-white">
          <div className="max-w-[1380px] mx-auto divide-y divide-[#e4dfd7] border-t border-b border-[#e4dfd7]">
            {BUSINESS_OPERATIONS.map((op) => (
              <div
                key={op.index}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-5 flex items-baseline gap-4">
                  <span className="text-[14px] font-medium tabular-nums text-[#8e1b1b]">
                    {op.index}.
                  </span>
                  <h2 className="b2-title-m text-[#171412]">{op.title}</h2>
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <p className="b2-desc-l text-[#665f57]">{op.summary}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {op.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2.5 text-[13.5px] text-[#171412]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[1380px] mx-auto pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_BFLC_PILLARS.map((pillar) => (
              <div key={pillar.index} className="space-y-2.5">
                <div className="text-[12px] font-medium text-[#8e1b1b] tabular-nums">
                  {pillar.index}.
                </div>
                <h3 className="b2-title-s text-[#171412]">{pillar.title}</h3>
                <p className="b2-desc-s text-[#665f57]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (page === 'brands') {
    const filteredBrands =
      brandFilter === 'All'
        ? BRANDS_PORTFOLIO
        : BRANDS_PORTFOLIO.filter((b) => b.category === brandFilter);

    return (
      <div>
        {renderSubHeader(
          'Our Brands',
          'Confirmed dining & catering',
          'concepts',
          'BFLC manages an established international casual dining franchise alongside distinctive homegrown culinary and catering concepts in Bahrain.'
        )}

        <section className="py-16 sm:py-24 px-5 sm:px-9 bg-white">
          <div className="max-w-[1380px] mx-auto space-y-12">
            {/* Segmented Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e4dfd7] pb-6">
              {(
                [
                  'All',
                  'Casual Dining',
                  'Catering',
                  'Hospitality Ecosystem',
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setBrandFilter(cat)}
                  className={`px-4 py-2 text-[13px] font-medium rounded-[4px] border transition-colors ${
                    brandFilter === cat
                      ? 'bg-[#8e1b1b] text-white border-[#8e1b1b]'
                      : 'bg-white text-[#171412] border-[#e4dfd7] hover:border-[#171412]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBrands.map((brand) => {
                const mediaMatch = OPTION2_BRANDS.find((b) => b.id === brand.id);
                const imageUrl =
                  mediaMatch?.photo ||
                  brand.image ||
                  BFLC_ASSET_LIBRARY.restaurants.loungeBar.url;
                return (
                  <div
                    key={brand.id}
                    className="border border-[#e4dfd7] rounded-[6px] overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/9.5] bg-[#171412] overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={brand.imageAlt || brand.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {mediaMatch && (
                          <div
                            className="absolute bottom-4 left-4 px-3.5 py-2 rounded-[4px]"
                            style={{ backgroundColor: mediaMatch.panelColor }}
                          >
                            <img
                              src={mediaMatch.logo}
                              alt={mediaMatch.logoAlt}
                              referrerPolicy="no-referrer"
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <div className="p-7 space-y-4">
                        <div className="text-[12.5px] text-[#665f57] flex items-center gap-2">
                          <span>{brand.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{brand.origin}</span>
                        </div>
                        <h2 className="b2-title-m text-[#171412]">{brand.name}</h2>
                        <p className="b2-desc-s text-[#665f57]">{brand.description}</p>
                        <ul className="space-y-2 pt-2">
                          {brand.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2.5 text-[13px] text-[#171412]"
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
                    </div>

                    <div className="px-7 py-4 border-t border-[#e4dfd7] bg-[#f8f6f2] flex items-center justify-between text-[12.5px] text-[#665f57]">
                      <span>{brand.locations.join(' · ')}</span>
                      <button
                        type="button"
                        onClick={() => onNavigate('contact')}
                        className="text-[#8e1b1b] font-medium hover:underline"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'investors') {
    const docs = INVESTOR_DOCUMENTS.filter((d) => d.category === investorTab);
    return (
      <div>
        {renderSubHeader(
          'Investor Relations',
          'Shareholder disclosures &',
          'governance',
          `Listed on the ${COMPANY_INFO.bourseExchange} under ticker ${COMPANY_INFO.bourseSymbol}, BFLC upholds transparent statutory financial reporting and corporate governance.`
        )}

        <section className="py-16 sm:py-24 px-5 sm:px-9 bg-white">
          <div className="max-w-[1380px] mx-auto space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e4dfd7] pb-6">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'reports' as InvestorTab, label: 'Financial & ESG Reports' },
                  { id: 'agm' as InvestorTab, label: 'AGM & EGM Notices' },
                  { id: 'governance' as InvestorTab, label: 'Corporate Governance' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setInvestorTab(tab.id)}
                    className={`px-4 py-2 text-[13px] font-medium rounded-[4px] border transition-colors ${
                      investorTab === tab.id
                        ? 'bg-[#8e1b1b] text-white border-[#8e1b1b]'
                        : 'bg-white text-[#171412] border-[#e4dfd7] hover:border-[#171412]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <a
                href={`mailto:${COMPANY_INFO.financeEmail}`}
                className="b2-outline-button"
              >
                <Mail className="w-4 h-4" />
                <span>{COMPANY_INFO.financeEmail}</span>
              </a>
            </div>

            <div className="divide-y divide-[#e4dfd7] border-t border-b border-[#e4dfd7]">
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                >
                  <div className="lg:col-span-5 space-y-1.5">
                    <div className="text-[12px] text-[#665f57] flex items-center gap-2 tabular-nums">
                      <span>{doc.referenceCode}</span>
                      <span aria-hidden="true">·</span>
                      <span>{doc.period}</span>
                    </div>
                    <h2 className="b2-title-s text-[#171412]">{doc.title}</h2>
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <p className="b2-desc-s text-[#665f57]">{doc.summary}</p>
                    <ul className="space-y-1.5">
                      {doc.highlights.map((h) => (
                        <li key={h} className="text-[13px] text-[#171412]">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'news') {
    const selectedArticle = selectedArticleId
      ? NEWS_ARTICLES.find((a) => a.id === selectedArticleId)
      : null;

    if (selectedArticle) {
      return (
        <div className="pt-32 pb-24 px-5 sm:px-9 bg-white">
          <div className="max-w-[820px] mx-auto space-y-8">
            <button
              type="button"
              onClick={() => setSelectedArticleId(null)}
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#665f57] hover:text-[#171412]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All News</span>
            </button>

            <div className="space-y-3">
              <div className="text-[13px] text-[#665f57] flex items-center gap-2">
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.category}</span>
              </div>
              <h1 className="b2-title-l text-[#171412]">{selectedArticle.title}</h1>
            </div>

            {selectedArticle.image && (
              <div className="aspect-[16/9] overflow-hidden rounded-[6px] bg-[#f8f6f2]">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.imageAlt || selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-5 pt-2">
              {selectedArticle.body.map((para, idx) => (
                <p key={idx} className="b2-desc-l text-[#171412]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    }

    const filteredNews =
      newsFilter === 'All'
        ? NEWS_ARTICLES
        : NEWS_ARTICLES.filter((a) => a.category === newsFilter);

    return (
      <div>
        {renderSubHeader(
          'News & Media',
          'Corporate announcements &',
          'stories',
          'Official updates across BFLC’s hospitality brands, community dining events, and Bahrain Bourse shareholder disclosures.'
        )}

        <section className="py-16 sm:py-24 px-5 sm:px-9 bg-white">
          <div className="max-w-[1380px] mx-auto space-y-10">
            <div className="flex flex-wrap gap-2">
              {(['All', 'Corporate', 'Brands & Dining', 'Investor Disclosures'] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNewsFilter(cat)}
                    className={`px-4 py-2 text-[13px] font-medium rounded-[4px] border transition-colors ${
                      newsFilter === cat
                        ? 'bg-[#8e1b1b] text-white border-[#8e1b1b]'
                        : 'bg-white text-[#171412] border-[#e4dfd7] hover:border-[#171412]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            <div className="divide-y divide-[#e4dfd7] border-t border-b border-[#e4dfd7]">
              {filteredNews.map((article) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => setSelectedArticleId(article.id)}
                  className="w-full py-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-left group"
                >
                  <div className="md:col-span-4 aspect-[16/10] overflow-hidden rounded-[6px] bg-[#f8f6f2]">
                    <img
                      src={article.image || BFLC_ASSET_LIBRARY.brands.bennigans.interior}
                      alt={article.imageAlt || article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="md:col-span-8 space-y-3">
                    <div className="text-[12.5px] text-[#665f57] flex items-center gap-2">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.category}</span>
                    </div>
                    <h2 className="b2-title-m text-[#171412] group-hover:text-[#8e1b1b] transition-colors">
                      {article.title}
                    </h2>
                    <p className="b2-desc-s text-[#665f57]">{article.excerpt}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'careers') {
    return (
      <div>
        {renderSubHeader(
          'Careers at BFLC',
          'Build your career in Bahrain',
          'hospitality',
          'Join culinary, restaurant operations, catering, and corporate finance teams supporting hospitality venues across the Kingdom.'
        )}

        <section className="py-16 sm:py-24 px-5 sm:px-9 bg-white">
          <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 bg-[#f8f6f2] border border-[#e4dfd7] rounded-[6px] p-4 space-y-3">
              <div className="bg-white rounded-[4px] p-2 border border-[#e4dfd7]">
                <img
                  src={BFLC_ASSET_LIBRARY.company.hospitalityTeam}
                  alt={BFLC_ASSET_LIBRARY.company.hospitalityTeamAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-[2px]"
                />
              </div>
              <p className="text-[12.5px] text-[#665f57] leading-relaxed">
                Culinary chefs, dining room hosts, and operations leaders across Cucina Italiana and Bennigan’s Bahrain.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="border border-[#e4dfd7] rounded-[6px] p-7 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[12.5px] text-[#665f57] flex items-center gap-2">
                    <span>{job.department}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.employmentType}</span>
                  </div>
                  <h2 className="b2-title-s text-[#171412]">{job.title}</h2>
                  <p className="b2-desc-s text-[#665f57]">{job.summary}</p>
                  <ul className="space-y-1.5 pt-2">
                    {job.requirements.map((req) => (
                      <li key={req} className="text-[13px] text-[#171412]">
                        • {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="b2-app-button"
                  >
                    <span>Apply via Corporate Office</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Contact Page
  return (
    <div>
      {renderSubHeader(
        'Contact Us',
        'Connect with our Manama',
        'headquarters',
        `Reach ${COMPANY_INFO.legalName} at our Diplomatic Area office for brand partnerships, private catering, investor queries, or general information.`
      )}

      <section className="py-16 sm:py-24 px-5 sm:px-9 bg-white">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="b2-title-m text-[#171412]">Head Office Details</h2>
            <div className="space-y-4 text-[14.5px] text-[#665f57]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8e1b1b] mt-1 shrink-0" />
                <div>
                  <p className="text-[#171412] font-medium">{COMPANY_INFO.legalName}</p>
                  <p>{COMPANY_INFO.addressLine1}</p>
                  <p>{COMPANY_INFO.addressLine2}</p>
                  <p>{COMPANY_INFO.poBox}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8e1b1b] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-[#171412] hover:text-[#8e1b1b] tabular-nums"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8e1b1b] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.generalEmail}`}
                  className="text-[#171412] hover:text-[#8e1b1b]"
                >
                  {COMPANY_INFO.generalEmail}
                </a>
              </div>
              <p className="text-[13px] pt-2 border-t border-[#e4dfd7]">
                Office Hours: {COMPANY_INFO.workingHours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#f8f6f2] border border-[#e4dfd7] rounded-[6px] p-7 sm:p-10">
            {contactSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#15803d] mx-auto" />
                <h3 className="b2-title-m text-[#171412]">Enquiry Received</h3>
                <p className="b2-desc-s text-[#665f57] max-w-[440px] mx-auto">
                  Thank you, {contactName}. Our hospitality corporate team in Manama will
                  review your message and reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactSubmitted(false);
                    setContactMessage('');
                  }}
                  className="mt-4 b2-outline-button bg-white"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <h2 className="b2-title-m text-[#171412]">Send an Enquiry</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#665f57] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#e4dfd7] rounded-[4px] text-[14px] focus:outline-none focus:border-[#8e1b1b]"
                    />
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-medium text-[#665f57] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#e4dfd7] rounded-[4px] text-[14px] focus:outline-none focus:border-[#8e1b1b]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12.5px] font-medium text-[#665f57] mb-1.5">
                    Enquiry Department
                  </label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#e4dfd7] rounded-[4px] text-[14px] focus:outline-none focus:border-[#8e1b1b]"
                  >
                    <option>General Hospitality Enquiry</option>
                    <option>Kazbah Catering Booking</option>
                    <option>Investor Relations &amp; Shareholder Desk</option>
                    <option>Careers &amp; Recruitment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12.5px] font-medium text-[#665f57] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#e4dfd7] rounded-[4px] text-[14px] focus:outline-none focus:border-[#8e1b1b]"
                  />
                </div>
                <button type="submit" className="b2-app-button">
                  <span>Submit Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
