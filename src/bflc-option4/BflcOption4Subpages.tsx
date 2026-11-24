import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
  Send,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import {
  BFLC_ASSETS,
  BOARD_MEMBERS,
  BRANDS_PORTFOLIO,
  BUSINESS_OPERATIONS,
  COMPANY_HIGHLIGHTS,
  COMPANY_INFO,
  INVESTOR_DOCUMENTS,
  JOB_OPENINGS,
  NEWS_ARTICLES,
  WHY_BFLC_PILLARS,
} from '../data/bflcData';
import { NewsArticle, PageRoute } from '../types/bflc';

interface BflcOption4SubpagesProps {
  page: Exclude<PageRoute, 'home'>;
  onNavigate: (page: PageRoute) => void;
  initialArticleId?: string | null;
}

export const BflcOption4Subpages: React.FC<BflcOption4SubpagesProps> = ({
  page,
  onNavigate,
  initialArticleId,
}) => {
  // Interactive state across subpages
  const [brandFilter, setBrandFilter] = useState<string>('All');
  const [investorTab, setInvestorTab] = useState<'all' | 'reports' | 'agm' | 'governance'>('all');
  const [newsCategory, setNewsCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  // Career application state
  const [applyingRole, setApplyingRole] = useState<string | null>(null);
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Corporate Hospitality Enquiry',
    message: '',
  });
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    if (page === 'news' && initialArticleId) {
      const matched = NEWS_ARTICLES.find((a) => a.id === initialArticleId);
      if (matched) setActiveArticle(matched);
    } else if (page !== 'news') {
      setActiveArticle(null);
    }
  }, [page, initialArticleId]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactError('Please complete your full name, valid email address, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())) {
      setContactError('Please enter a valid email address.');
      return;
    }
    setContactError(null);
    setContactSubmitted(true);
  };

  /* -------------------- ABOUT US -------------------- */
  if (page === 'about') {
    return (
      <div>
        <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
              About BFLC · Established {COMPANY_INFO.establishedDate}
            </p>
            <h1 className="b4-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-[1.08]">
              Three Decades of Dedicated Hospitality in the Kingdom of Bahrain
            </h1>
            <p className="text-[17px] text-white/75 max-w-2xl leading-relaxed">
              {COMPANY_INFO.legalName} ({COMPANY_INFO.arabicName}) is a publicly listed
              hospitality enterprise trading on the {COMPANY_INFO.bourseExchange} under ticker{' '}
              <span className="b4-mono text-white">{COMPANY_INFO.bourseSymbol}</span>.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24 border-b border-[#e4dfd7]">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <img
                src={BFLC_ASSETS.diningRoom}
                alt={BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-[#e4dfd7]"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <h2 className="b4-display text-3xl font-extrabold text-[#171412]">
                Corporate Heritage &amp; Strategic Focus
              </h2>
              <p className="text-[16px] text-[#665f57] leading-relaxed">
                Since July 13, 1994, BFLC has grown alongside Bahrain’s dining and leisure
                landscape—operating beloved American casual dining venues alongside
                homegrown Italian bistro and banquet catering concepts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#f8f6f2] border border-[#e4dfd7] rounded-xl p-5 space-y-2">
                  <p className="b4-mono text-[11.5px] uppercase tracking-wider text-[#8e1b1b]">
                    Vision
                  </p>
                  <p className="text-[14.5px] text-[#171412] leading-relaxed">
                    To remain Bahrain’s trusted hospitality operator creating warm, memorable
                    dining experiences for families and communities.
                  </p>
                </div>
                <div className="bg-[#f8f6f2] border border-[#e4dfd7] rounded-xl p-5 space-y-2">
                  <p className="b4-mono text-[11.5px] uppercase tracking-wider text-[#8e1b1b]">
                    Mission
                  </p>
                  <p className="text-[14.5px] text-[#171412] leading-relaxed">
                    Deliver culinary consistency, disciplined operations, and transparent
                    governance for guests, partners, and shareholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 lg:py-24">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-2xl space-y-2">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#8e1b1b]">
                Leadership &amp; Governance
              </p>
              <h2 className="b4-display text-3xl font-extrabold text-[#171412]">
                Board of Directors
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BOARD_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-[#e4dfd7] rounded-2xl p-6 space-y-2"
                >
                  <p className="text-[12.5px] font-semibold text-[#8e1b1b]">
                    {member.role} · {member.classification}
                  </p>
                  <h3 className="b4-display text-lg font-bold text-[#171412]">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* -------------------- OUR BUSINESS -------------------- */
  if (page === 'business') {
    return (
      <div>
        <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
              Our Business
            </p>
            <h1 className="b4-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-[1.08]">
              Integrated Restaurant &amp; Catering Operations
            </h1>
            <p className="text-[17px] text-white/75 max-w-2xl leading-relaxed">
              Disciplined multi-unit management connecting kitchen procurement, culinary R&amp;D,
              dining room hospitality, and off-premise catering.
            </p>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 lg:py-24 border-b border-[#e4dfd7]">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-7">
            {BUSINESS_OPERATIONS.map((op) => (
              <div
                key={op.index}
                className="bg-white border border-[#e4dfd7] rounded-2xl p-8 space-y-5"
              >
                <span className="b4-mono text-[13px] font-medium text-[#8e1b1b]">
                  {op.index}
                </span>
                <h2 className="b4-display text-2xl font-bold text-[#171412]">{op.title}</h2>
                <p className="text-[15.5px] text-[#665f57] leading-relaxed">{op.summary}</p>
                <ul className="space-y-2.5 pt-2">
                  {op.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-[14.5px] text-[#171412]">
                      <Check className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="b4-display text-3xl font-extrabold text-[#171412]">
              Core Operational Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_BFLC_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="bg-[#f8f6f2] border border-[#e4dfd7] rounded-2xl p-6 space-y-3"
                >
                  <span className="b4-mono text-[12px] text-[#8e1b1b]">{pillar.index}</span>
                  <h3 className="b4-display text-lg font-bold text-[#171412] capitalize">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-[#665f57] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* -------------------- OUR BRANDS -------------------- */
  if (page === 'brands') {
    const categories = ['All', 'Casual Dining', 'Catering', 'Hospitality Ecosystem'];
    const filteredBrands =
      brandFilter === 'All'
        ? BRANDS_PORTFOLIO
        : BRANDS_PORTFOLIO.filter((b) => b.category === brandFilter);

    return (
      <div>
        <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
              Our Brands
            </p>
            <h1 className="b4-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-[1.08]">
              Hospitality Concepts Across Bahrain
            </h1>
            <p className="text-[17px] text-white/75 max-w-2xl leading-relaxed">
              Combining established international casual dining franchises with homegrown
              culinary concepts and kingdom-wide catering.
            </p>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 lg:py-24">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setBrandFilter(cat)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-colors ${
                    brandFilter === cat
                      ? 'bg-[#8e1b1b] text-white'
                      : 'bg-white text-[#665f57] border border-[#e4dfd7] hover:text-[#171412]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {filteredBrands.map((brand) => (
                <article
                  key={brand.id}
                  className="bg-white border border-[#e4dfd7] rounded-2xl overflow-hidden flex flex-col"
                >
                  {brand.image && (
                    <div className="h-60 overflow-hidden bg-[#171412]">
                      <img
                        src={brand.image}
                        alt={brand.imageAlt || brand.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-[12.5px] font-semibold text-[#8e1b1b]">
                        {brand.category} · {brand.origin}
                      </p>
                      <h2 className="b4-display text-2xl font-bold text-[#171412]">
                        {brand.name}
                      </h2>
                      <p className="text-[15.5px] text-[#665f57] leading-relaxed">
                        {brand.description}
                      </p>

                      <ul className="space-y-2 pt-2">
                        {brand.highlights.map((hl) => (
                          <li key={hl} className="flex items-start gap-2.5 text-[14px] text-[#171412]">
                            <Check className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#e4dfd7] flex items-center gap-2 text-[13px] text-[#665f57]">
                      <MapPin className="w-4 h-4 text-[#8e1b1b] shrink-0" aria-hidden="true" />
                      <span>{brand.locations.join(' · ')}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* -------------------- INVESTOR RELATIONS -------------------- */
  if (page === 'investors') {
    const filteredDocs =
      investorTab === 'all'
        ? INVESTOR_DOCUMENTS
        : INVESTOR_DOCUMENTS.filter((d) => d.category === investorTab);

    return (
      <div>
        <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4 max-w-3xl">
              <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
                Investor Relations · {COMPANY_INFO.bourseExchange}: {COMPANY_INFO.bourseSymbol}
              </p>
              <h1 className="b4-display text-4xl sm:text-5xl font-extrabold leading-[1.08]">
                Shareholder Disclosures &amp; Governance Resources
              </h1>
              <p className="text-[17px] text-white/75 leading-relaxed">
                Statutory audited financials, interim reviews, AGM/EGM circulars, and corporate
                governance charters published in alignment with Central Bank of Bahrain and
                Bahrain Bourse requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/12">
              {COMPANY_HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <p className="b4-display text-2xl font-extrabold text-white">{item.metric}</p>
                  <p className="text-[13px] text-white/65">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 lg:py-24">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { id: 'all', label: 'All Disclosures' },
                    { id: 'reports', label: 'Financial & ESG Reports' },
                    { id: 'agm', label: 'AGM & EGM Meetings' },
                    { id: 'governance', label: 'Corporate Governance' },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setInvestorTab(t.id)}
                    className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-colors ${
                      investorTab === t.id
                        ? 'bg-[#8e1b1b] text-white'
                        : 'bg-white text-[#665f57] border border-[#e4dfd7] hover:text-[#171412]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <a
                href={`mailto:${COMPANY_INFO.financeEmail}`}
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#8e1b1b] hover:underline"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Shareholder Desk: {COMPANY_INFO.financeEmail}</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map((doc) => (
                <article
                  key={doc.id}
                  className="bg-white border border-[#e4dfd7] rounded-2xl p-7 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-[12.5px]">
                      <span className="font-medium text-[#8e1b1b]">
                        {doc.period} · {doc.publishedDate}
                      </span>
                      <span className="b4-mono text-[#665f57]">{doc.referenceCode}</span>
                    </div>
                    <h2 className="b4-display text-xl font-bold text-[#171412]">{doc.title}</h2>
                    <p className="text-[14.5px] text-[#665f57] leading-relaxed">{doc.summary}</p>
                    <ul className="space-y-2 pt-2">
                      {doc.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#665f57]">
                          <FileText className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#e4dfd7] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] text-[#665f57]">
                      <ShieldCheck className="w-4 h-4 text-[#8e1b1b]" aria-hidden="true" />
                      Official Statutory Filing
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="text-[13px] font-semibold text-[#8e1b1b] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Request Copy</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* -------------------- NEWS & MEDIA -------------------- */
  if (page === 'news') {
    if (activeArticle) {
      return (
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#8e1b1b] hover:text-[#171412]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to News &amp; Media</span>
            </button>

            <div className="space-y-4">
              <p className="text-[13px] font-medium text-[#665f57]">
                {activeArticle.date} · {activeArticle.category}
              </p>
              <h1 className="b4-display text-3xl sm:text-4xl font-extrabold text-[#171412] leading-tight">
                {activeArticle.title}
              </h1>
            </div>

            {activeArticle.image && (
              <img
                src={activeArticle.image}
                alt={activeArticle.imageAlt || activeArticle.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/9] object-cover rounded-2xl border border-[#e4dfd7]"
              />
            )}

            <div className="space-y-5">
              {activeArticle.body.map((paragraph, idx) => (
                <p key={idx} className="text-[16.5px] text-[#665f57] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      );
    }

    const cats = ['All', 'Corporate', 'Brands & Dining', 'Investor Disclosures'];
    const filteredNews =
      newsCategory === 'All'
        ? NEWS_ARTICLES
        : NEWS_ARTICLES.filter((a) => a.category === newsCategory);

    return (
      <div>
        <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
              News &amp; Media
            </p>
            <h1 className="b4-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-[1.08]">
              Company Announcements &amp; Dining Updates
            </h1>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 lg:py-24">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setNewsCategory(c)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-colors ${
                    newsCategory === c
                      ? 'bg-[#8e1b1b] text-white'
                      : 'bg-white text-[#665f57] border border-[#e4dfd7] hover:text-[#171412]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#e4dfd7] rounded-2xl overflow-hidden flex flex-col"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/10] object-cover"
                    />
                  )}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <p className="text-[12.5px] font-medium text-[#665f57]">
                        {article.date} · {article.category}
                      </p>
                      <h2 className="b4-display text-xl font-bold text-[#171412]">
                        {article.title}
                      </h2>
                      <p className="text-[14.5px] text-[#665f57] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#8e1b1b] hover:text-[#171412] self-start"
                    >
                      <span>Read full update</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* -------------------- CAREERS -------------------- */
  if (page === 'careers') {
    return (
      <div>
        <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
                  Careers at BFLC
                </p>
                <h1 className="b4-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-[1.08]">
                  Build Your Hospitality Career in Bahrain
                </h1>
                <p className="text-[17px] text-white/75 max-w-2xl leading-relaxed">
                  Join dedicated dining room leaders, culinary professionals, catering coordinators,
                  and corporate teams across our Bahrain venues and Diplomatic Area HQ.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="bg-white rounded-2xl p-2 border border-white/15 max-w-[235px] w-full shadow-2xl">
                  <img
                    src={BFLC_ASSET_LIBRARY.company.hospitalityTeam}
                    alt={BFLC_ASSET_LIBRARY.company.hospitalityTeamAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16 lg:py-24">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {JOB_OPENINGS.map((job) => (
                <article
                  key={job.id}
                  className="bg-white border border-[#e4dfd7] rounded-2xl p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[12.5px]">
                      <span className="font-semibold text-[#8e1b1b]">
                        {job.department} · {job.employmentType}
                      </span>
                      <span className="text-[#665f57]">{job.location}</span>
                    </div>
                    <h2 className="b4-display text-2xl font-bold text-[#171412]">{job.title}</h2>
                    <p className="text-[15px] text-[#665f57] leading-relaxed">{job.summary}</p>
                    <ul className="space-y-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2.5 text-[14px] text-[#665f57]">
                          <Users className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0" aria-hidden="true" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setApplyingRole(job.title);
                        setCareerSubmitted(false);
                      }}
                      className="b4-btn-primary"
                    >
                      Apply for Position
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {applyingRole && (
              <div className="bg-white border border-[#8e1b1b]/40 rounded-2xl p-8 max-w-2xl space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-5 h-5 text-[#8e1b1b]" aria-hidden="true" />
                    <h3 className="b4-display text-xl font-bold text-[#171412]">
                      Application: {applyingRole}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setApplyingRole(null)}
                    className="text-[13px] font-medium text-[#665f57] hover:text-[#171412]"
                  >
                    Close
                  </button>
                </div>

                {careerSubmitted ? (
                  <p className="text-[15px] text-[#171412] bg-[#f8f6f2] p-4 rounded-xl border border-[#e4dfd7]">
                    Thank you. Your interest in <strong>{applyingRole}</strong> has been noted.
                    Our recruitment desk can also receive CVs directly at{' '}
                    <a
                      href={`mailto:${COMPANY_INFO.generalEmail}`}
                      className="text-[#8e1b1b] font-semibold underline"
                    >
                      {COMPANY_INFO.generalEmail}
                    </a>
                    .
                  </p>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCareerSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] focus:outline-none focus:border-[#8e1b1b]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] focus:outline-none focus:border-[#8e1b1b]"
                      />
                    </div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Brief overview of your hospitality experience"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] focus:outline-none focus:border-[#8e1b1b]"
                    />
                    <button type="submit" className="b4-btn-primary">
                      Submit Expression of Interest
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  /* -------------------- CONTACT US -------------------- */
  return (
    <div>
      <section className="bg-[#171412] text-white py-16 lg:py-24 b4-architectural-grid">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="b4-mono text-[12px] uppercase tracking-[0.16em] text-[#f3d6d6]">
            Contact Us
          </p>
          <h1 className="b4-display text-4xl sm:text-5xl font-extrabold max-w-3xl leading-[1.08]">
            Corporate Office &amp; Hospitality Enquiries
          </h1>
          <p className="text-[17px] text-white/75 max-w-2xl leading-relaxed">
            Connect with {COMPANY_INFO.legalName} at our Manama headquarters.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f6f2] py-16 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details */}
          <div className="lg:col-span-5 bg-white border border-[#e4dfd7] rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <Building2 className="w-6 h-6 text-[#8e1b1b]" aria-hidden="true" />
              <h2 className="b4-display text-2xl font-bold text-[#171412]">
                Head Office — Manama
              </h2>
              <p className="text-[14px] text-[#665f57]">{COMPANY_INFO.workingHours}</p>
            </div>

            <div className="space-y-4 text-[14.5px] text-[#665f57]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8e1b1b] mt-1 shrink-0" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {COMPANY_INFO.addressLine1}
                  <br />
                  {COMPANY_INFO.addressLine2}
                  <br />
                  {COMPANY_INFO.poBox}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8e1b1b] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="b4-mono font-medium text-[#171412] hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-[#8e1b1b] shrink-0" aria-hidden="true" />
                <span className="b4-mono">{COMPANY_INFO.fax}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8e1b1b] shrink-0" aria-hidden="true" />
                <div className="space-y-0.5">
                  <p>
                    General:{' '}
                    <a
                      href={`mailto:${COMPANY_INFO.generalEmail}`}
                      className="text-[#8e1b1b] font-semibold hover:underline"
                    >
                      {COMPANY_INFO.generalEmail}
                    </a>
                  </p>
                  <p>
                    Finance &amp; Investors:{' '}
                    <a
                      href={`mailto:${COMPANY_INFO.financeEmail}`}
                      className="text-[#8e1b1b] font-semibold hover:underline"
                    >
                      {COMPANY_INFO.financeEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#e4dfd7] rounded-2xl p-8 sm:p-10">
            <h2 className="b4-display text-2xl font-bold text-[#171412] mb-2">
              Send an Enquiry
            </h2>
            <p className="text-[14.5px] text-[#665f57] mb-6">
              Select a topic and submit your details for our hospitality, catering, or investor
              relations teams.
            </p>

            {contactSubmitted ? (
              <div className="bg-[#f8f6f2] border border-[#8e1b1b]/30 rounded-2xl p-6 space-y-3">
                <p className="b4-display text-lg font-bold text-[#171412]">
                  Enquiry Received
                </p>
                <p className="text-[15px] text-[#665f57]">
                  Thank you, {contactForm.name}. Our team at {COMPANY_INFO.legalName} will review
                  your message and respond via {contactForm.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactSubmitted(false);
                    setContactForm({
                      name: '',
                      email: '',
                      subject: 'Corporate Hospitality Enquiry',
                      message: '',
                    });
                  }}
                  className="text-[13.5px] font-semibold text-[#8e1b1b] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {contactError && (
                  <p className="text-[13.5px] text-[#8e1b1b] bg-[#8e1b1b]/8 px-4 py-2.5 rounded-xl">
                    {contactError}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#171412] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] focus:outline-none focus:border-[#8e1b1b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#171412] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] focus:outline-none focus:border-[#8e1b1b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#171412] mb-1.5">
                    Enquiry Department
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) =>
                      setContactForm((f) => ({ ...f, subject: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] bg-white focus:outline-none focus:border-[#8e1b1b]"
                  >
                    <option>Corporate Hospitality Enquiry</option>
                    <option>Kazbah Catering Proposal</option>
                    <option>Franchise &amp; Real Estate Partnerships</option>
                    <option>Investor &amp; Shareholder Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#171412] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e4dfd7] text-[14.5px] focus:outline-none focus:border-[#8e1b1b]"
                  />
                </div>

                <button type="submit" className="b4-btn-primary inline-flex items-center gap-2">
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
