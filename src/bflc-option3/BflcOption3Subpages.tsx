import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
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
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { OPTION2_BRANDS } from '../bflc-option2/option2Media';
import { BrandCategory, InvestorTab, NewsCategory, PageRoute } from '../types/bflc';

interface BflcOption3SubpagesProps {
  page: Exclude<PageRoute, 'home'>;
  onNavigate: (page: PageRoute) => void;
  initialArticleId?: string | null;
}

export const BflcOption3Subpages: React.FC<BflcOption3SubpagesProps> = ({
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

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactDept, setContactDept] = useState('General Hospitality Enquiry');
  const [contactMsg, setContactMsg] = useState('');
  const [contactDone, setContactDone] = useState(false);

  const renderHeroHeader = (
    kicker: string,
    title: string,
    description: string
  ) => (
    <section className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1340px] mx-auto bg-[#e6e2d1] rounded-2xl p-8 sm:p-12 lg:p-14">
        <p className="text-[12px] font-semibold tracking-wider uppercase text-[#586058] mb-3">
          {kicker}
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold text-[#1a211b] max-w-3xl leading-[1.08]">
          {title}
        </h1>
        <p className="mt-4 text-[15.5px] sm:text-[17px] text-[#3c443d] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );

  if (page === 'about') {
    return (
      <div className="pb-20">
        {renderHeroHeader(
          'About Us',
          'Building welcoming hospitality concepts in Bahrain since 1994',
          `Established on ${COMPANY_INFO.establishedDate} and listed on the ${COMPANY_INFO.bourseExchange} (${COMPANY_INFO.bourseSymbol}), BFLC unites dining expertise, attentive service, and disciplined corporate governance.`
        )}

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-white border border-[#e3dfd2] rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a211b]">
                  A Passion for Hospitality
                </h2>
                <p className="text-[15.5px] text-[#586058] leading-relaxed">
                  BFLC brings together experience, operational expertise and a passion
                  for hospitality. The company’s focus is on developing and operating food
                  and beverage concepts that deliver welcoming experiences and value for
                  guests and partners.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-[#e3dfd2]">
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1a211b]">Vision</h3>
                  <p className="mt-1.5 text-[13.5px] text-[#586058] leading-relaxed">
                    To remain a trusted hospitality group in Bahrain known for guest
                    warmth and reliable food &amp; beverage execution.
                  </p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1a211b]">Mission</h3>
                  <p className="mt-1.5 text-[13.5px] text-[#586058] leading-relaxed">
                    Deliver memorable dining, customized catering, and transparent value
                    to guests, partners, and shareholders.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#e3dfd2] aspect-[4/3] lg:aspect-auto min-h-[340px]">
              <img
                src={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url}
                alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a211b]">
                Board of Directors
              </h2>
              <button
                type="button"
                onClick={() => onNavigate('investors')}
                className="b3-pill-white"
              >
                <span>Investor Relations</span>
                <span className="b3-arrow-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BOARD_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-[#e3dfd2] rounded-2xl p-6 space-y-1.5"
                >
                  <p className="text-[12px] font-semibold text-[#1b2e1e]">
                    {member.role}
                  </p>
                  <h3 className="text-[18px] font-semibold text-[#1a211b]">
                    {member.name}
                  </h3>
                  <p className="text-[13px] text-[#586058]">{member.classification}</p>
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
      <div className="pb-20">
        {renderHeroHeader(
          'Our Business',
          'Full-service restaurant, brand & catering operations',
          'From daily floor hospitality and kitchen operations to bespoke event catering, BFLC manages every discipline under clear corporate accountability.'
        )}

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUSINESS_OPERATIONS.map((op) => (
              <div
                key={op.index}
                className="bg-white border border-[#e3dfd2] rounded-2xl p-8 space-y-4"
              >
                <span className="text-[13px] font-semibold text-[#1b2e1e] tabular-nums">
                  Step {op.index}
                </span>
                <h2 className="text-2xl font-semibold text-[#1a211b]">{op.title}</h2>
                <p className="text-[14.5px] text-[#586058] leading-relaxed">
                  {op.summary}
                </p>
                <ul className="space-y-2 pt-2 border-t border-[#e3dfd2]">
                  {op.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-[13.5px] text-[#1a211b]"
                    >
                      <Check className="w-4 h-4 text-[#1b2e1e] mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_BFLC_PILLARS.map((p) => (
              <div
                key={p.index}
                className="bg-[#e6e2d1] rounded-2xl p-6 space-y-2.5"
              >
                <div className="text-[12px] font-semibold text-[#1b2e1e] tabular-nums">
                  {p.index}
                </div>
                <h3 className="text-[17px] font-semibold text-[#1a211b]">{p.title}</h3>
                <p className="text-[13.5px] text-[#3c443d] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (page === 'brands') {
    const filtered =
      brandFilter === 'All'
        ? BRANDS_PORTFOLIO
        : BRANDS_PORTFOLIO.filter((b) => b.category === brandFilter);

    return (
      <div className="pb-20">
        {renderHeroHeader(
          'Our Brands',
          'Confirmed restaurants & catering concepts across Bahrain',
          'Explore the international franchise and homegrown culinary divisions operated within BFLC’s current hospitality portfolio.'
        )}

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto space-y-8">
            <div className="flex flex-wrap gap-2">
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
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                    brandFilter === cat
                      ? 'bg-[#1b2e1e] text-white border-[#1b2e1e]'
                      : 'bg-white text-[#1a211b] border-[#e3dfd2] hover:border-[#1b2e1e]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((brand) => {
                const match = OPTION2_BRANDS.find((b) => b.id === brand.id);
                return (
                  <div
                    key={brand.id}
                    className="bg-white border border-[#e3dfd2] rounded-2xl overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/9.5] bg-[#1a211b] overflow-hidden">
                        <img
                          src={
                            match?.photo ||
                            brand.image ||
                            BFLC_ASSET_LIBRARY.restaurants.loungeBar.url
                          }
                          alt={brand.imageAlt || brand.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        {match && (
                          <div
                            className="absolute bottom-4 left-4 px-3.5 py-2 rounded-xl"
                            style={{ backgroundColor: match.panelColor }}
                          >
                            <img
                              src={match.logo}
                              alt={match.logoAlt}
                              referrerPolicy="no-referrer"
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <div className="p-7 space-y-3">
                        <p className="text-[12.5px] font-medium text-[#586058]">
                          {brand.category} · {brand.origin}
                        </p>
                        <h2 className="text-2xl font-semibold text-[#1a211b]">
                          {brand.name}
                        </h2>
                        <p className="text-[14px] text-[#586058] leading-relaxed">
                          {brand.description}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {brand.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-[13px] text-[#1a211b]"
                            >
                              <Check className="w-4 h-4 text-[#1b2e1e] mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="px-7 py-4 border-t border-[#e3dfd2] bg-[#f6f4ec] flex items-center justify-between text-[12.5px] text-[#586058]">
                      <span>{brand.locations.join(' · ')}</span>
                      <button
                        type="button"
                        onClick={() => onNavigate('contact')}
                        className="font-semibold text-[#1b2e1e] hover:underline"
                      >
                        Enquire →
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
      <div className="pb-20">
        {renderHeroHeader(
          'Investor Relations',
          'Financial reports, shareholder assemblies & governance',
          `Publicly traded on the ${COMPANY_INFO.bourseExchange} under symbol ${COMPANY_INFO.bourseSymbol}, BFLC provides clear regulatory disclosures and corporate governance documentation.`
        )}

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
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
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                      investorTab === tab.id
                        ? 'bg-[#1b2e1e] text-white border-[#1b2e1e]'
                        : 'bg-white text-[#1a211b] border-[#e3dfd2] hover:border-[#1b2e1e]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <a
                href={`mailto:${COMPANY_INFO.financeEmail}`}
                className="b3-pill-white"
              >
                <span>{COMPANY_INFO.financeEmail}</span>
                <span className="b3-arrow-badge">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white border border-[#e3dfd2] rounded-2xl p-7 space-y-3"
                >
                  <p className="text-[12px] font-medium text-[#586058] tabular-nums">
                    {doc.referenceCode} · {doc.period}
                  </p>
                  <h2 className="text-xl font-semibold text-[#1a211b]">{doc.title}</h2>
                  <p className="text-[14px] text-[#586058] leading-relaxed">
                    {doc.summary}
                  </p>
                  <ul className="space-y-1.5 pt-2 border-t border-[#e3dfd2]">
                    {doc.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[13px] text-[#1a211b]"
                      >
                        <Check className="w-4 h-4 text-[#1b2e1e] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'news') {
    const selected = selectedArticleId
      ? NEWS_ARTICLES.find((a) => a.id === selectedArticleId)
      : null;

    if (selected) {
      return (
        <div className="py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white border border-[#e3dfd2] rounded-2xl p-8 sm:p-12 space-y-6">
            <button
              type="button"
              onClick={() => setSelectedArticleId(null)}
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#1b2e1e]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News &amp; Media</span>
            </button>
            <p className="text-[12.5px] text-[#586058]">
              {selected.date} · {selected.category}
            </p>
            <h1 className="text-2xl sm:text-4xl font-semibold text-[#1a211b]">
              {selected.title}
            </h1>
            {selected.image && (
              <img
                src={selected.image}
                alt={selected.imageAlt || selected.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover rounded-xl"
              />
            )}
            <div className="space-y-4">
              {selected.body.map((para, i) => (
                <p key={i} className="text-[15.5px] text-[#3c443d] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    }

    const filtered =
      newsFilter === 'All'
        ? NEWS_ARTICLES
        : NEWS_ARTICLES.filter((a) => a.category === newsFilter);

    return (
      <div className="pb-20">
        {renderHeroHeader(
          'News & Media',
          'Company updates, hospitality events & disclosures',
          'Stay informed on BFLC brand developments, dining announcements, and Bahrain Bourse corporate communications.'
        )}

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto space-y-8">
            <div className="flex flex-wrap gap-2">
              {(['All', 'Corporate', 'Brands & Dining', 'Investor Disclosures'] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNewsFilter(cat)}
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                      newsFilter === cat
                        ? 'bg-[#1b2e1e] text-white border-[#1b2e1e]'
                        : 'bg-white text-[#1a211b] border-[#e3dfd2] hover:border-[#1b2e1e]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => setSelectedArticleId(article.id)}
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
                      <h2 className="text-lg font-semibold text-[#1a211b]">
                        {article.title}
                      </h2>
                      <p className="text-[13.5px] text-[#586058] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 text-[13px] font-semibold text-[#1b2e1e]">
                    Read release →
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
      <div className="pb-20">
        {renderHeroHeader(
          'Careers at BFLC',
          'Grow with Bahrain’s casual dining & hospitality team',
          'Explore current opportunities across restaurant management, culinary kitchens, event catering, and corporate headquarters.'
        )}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 bg-white border border-[#e3dfd2] rounded-2xl p-4 space-y-3">
              <img
                src={BFLC_ASSET_LIBRARY.company.hospitalityTeam}
                alt={BFLC_ASSET_LIBRARY.company.hospitalityTeamAlt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl"
              />
              <p className="text-[12.5px] text-[#586058] px-1 leading-relaxed">
                Hospitality, kitchen, and service teams across BFLC venues in Bahrain.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#e3dfd2] rounded-2xl p-7 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <p className="text-[12px] font-medium text-[#586058]">
                    {job.department} · {job.location} · {job.employmentType}
                  </p>
                  <h2 className="text-xl font-semibold text-[#1a211b]">{job.title}</h2>
                  <p className="text-[14px] text-[#586058] leading-relaxed">
                    {job.summary}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {job.requirements.map((r) => (
                      <li key={r} className="text-[13px] text-[#1a211b]">
                        • {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="b3-pill-forest"
                  >
                    <span>Apply Now</span>
                    <span className="b3-arrow-badge">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
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

  // Contact Us
  return (
    <div className="pb-20">
      {renderHeroHeader(
        'Contact Us',
        'Get in touch with BFLC’s Manama office',
        'Whether for casual dining partnerships, Kazbah Catering reservations, investor relations, or general corporate matters, our team is ready to assist.'
      )}

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-[#e6e2d1] rounded-2xl p-8 space-y-5">
            <h2 className="text-2xl font-semibold text-[#1a211b]">Head Office</h2>
            <div className="space-y-4 text-[14.5px] text-[#3c443d]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1b2e1e] mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-[#1a211b]">{COMPANY_INFO.legalName}</p>
                  <p>{COMPANY_INFO.addressLine1}</p>
                  <p>{COMPANY_INFO.addressLine2}</p>
                  <p>{COMPANY_INFO.poBox}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1b2e1e] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-semibold text-[#1a211b] tabular-nums"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1b2e1e] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.generalEmail}`}
                  className="font-semibold text-[#1a211b]"
                >
                  {COMPANY_INFO.generalEmail}
                </a>
              </div>
              <p className="text-[13px] pt-3 border-t border-[#d5d0be]">
                {COMPANY_INFO.workingHours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#e3dfd2] rounded-2xl p-8 sm:p-10">
            {contactDone ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#1b2e1e] mx-auto" />
                <h3 className="text-2xl font-semibold text-[#1a211b]">
                  Message Received
                </h3>
                <p className="text-[14.5px] text-[#586058]">
                  Thank you, {contactName}. Our team at Bahrain Tourism Tower will
                  respond to {contactEmail} promptly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (contactName && contactEmail && contactMsg) setContactDone(true);
                }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-[#1a211b]">
                  Send an Enquiry
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#e3dfd2] rounded-xl text-[14px] focus:outline-none focus:border-[#1b2e1e]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-[#e3dfd2] rounded-xl text-[14px] focus:outline-none focus:border-[#1b2e1e]"
                  />
                </div>
                <select
                  value={contactDept}
                  onChange={(e) => setContactDept(e.target.value)}
                  className="w-full px-4 py-3 border border-[#e3dfd2] rounded-xl text-[14px] bg-white focus:outline-none focus:border-[#1b2e1e]"
                >
                  <option>General Hospitality Enquiry</option>
                  <option>Kazbah Catering Enquiry</option>
                  <option>Investor Relations Desk</option>
                  <option>Careers &amp; Recruitment</option>
                </select>
                <textarea
                  rows={4}
                  required
                  placeholder="How can BFLC help? *"
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  className="w-full px-4 py-3 border border-[#e3dfd2] rounded-xl text-[14px] focus:outline-none focus:border-[#1b2e1e]"
                />
                <button type="submit" className="b3-pill-forest">
                  <span>Submit Enquiry</span>
                  <span className="b3-arrow-badge">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
