import React, { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Check,
  FileText,
  Mail,
  Phone,
  X,
} from 'lucide-react';
import { COMPANY_INFO, INVESTOR_DOCUMENTS } from '../data/bflcData';
import { InvestorDocument, InvestorTab, PageRoute } from '../types/bflc';

interface InvestorRelationsPageProps {
  onNavigate: (page: PageRoute) => void;
}

const TABS: { id: InvestorTab; label: string }[] = [
  { id: 'reports', label: 'Financial Reports' },
  { id: 'agm', label: 'AGM & EGM Information' },
  { id: 'governance', label: 'Corporate Governance' },
];

export const InvestorRelationsPage: React.FC<InvestorRelationsPageProps> = ({
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<InvestorTab>('reports');
  const [selectedDoc, setSelectedDoc] = useState<InvestorDocument | null>(null);

  const visibleDocs = INVESTOR_DOCUMENTS.filter((doc) => doc.category === activeTab);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
                Investor Relations · {COMPANY_INFO.bourseExchange}
              </p>
              <h1
                className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
              >
                Shareholder Information &amp; Disclosures
              </h1>
              <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed">
                Dedicated financial reporting, general assembly notices, and corporate governance
                resources for shareholders of Bahrain Family Leisure Company B.S.C.
              </p>
            </div>

            <div className="bg-[#292524] border border-[#44403C] rounded-lg p-5 shrink-0 min-w-[260px] space-y-2">
              <div className="text-xs text-[#A8A29E]">Exchange Listing</div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl font-semibold text-white font-mono-tabular">
                  {COMPANY_INFO.bourseSymbol}
                </span>
                <span className="text-xs text-[#D6D3D1]">{COMPANY_INFO.bourseExchange}</span>
              </div>
              <a
                href="https://www.bahrainbourse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FCA5A5] hover:text-white pt-1 transition-colors"
              >
                <span>Visit Bahrain Bourse Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 8 Cols: Tabbed Document Repository */}
          <div className="lg:col-span-8 space-y-8">
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3F1EC] border border-[#E5E0D8] rounded-lg"
              role="tablist"
              aria-label="Investor relations categories"
            >
              {TABS.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      isSelected
                        ? 'bg-white text-[#1C1917] shadow-sm'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="space-y-4">
              {visibleDocs.map((doc) => (
                <article
                  key={doc.id}
                  className="bg-white border border-[#E5E0D8] rounded-lg p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#A8A29E] transition-colors duration-150"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="text-xs text-[#78716C] flex flex-wrap items-center gap-2">
                      <span className="font-mono-tabular">{doc.referenceCode}</span>
                      <span aria-hidden="true">·</span>
                      <span>{doc.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{doc.publishedDate}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-[#1C1917]">
                      {doc.title}
                    </h2>
                    <p className="text-sm text-[#44403C] leading-relaxed">{doc.summary}</p>
                  </div>

                  <div className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setSelectedDoc(doc)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#1C1917] bg-[#FAF9F6] border border-[#D6D3D1] hover:border-[#1C1917] rounded-md whitespace-nowrap shrink-0 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-[#991B1B]" aria-hidden="true" />
                      <span>Review Brief</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right 4 Cols: Shareholder Resources & IR Contact */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E5E0D8] rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#991B1B]" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold text-[#1C1917]">
                  Shareholder Contact
                </h3>
              </div>
              <p className="text-sm text-[#44403C] leading-relaxed">
                For dividend enquiries, shareholder registry assistance, or statutory financial
                document requests, please reach our Finance &amp; Investor Relations desk.
              </p>

              <div className="pt-2 space-y-3 text-sm">
                <div className="flex items-center gap-2.5 text-[#1C1917]">
                  <Mail className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${COMPANY_INFO.financeEmail}`}
                    className="hover:underline font-medium"
                  >
                    {COMPANY_INFO.financeEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#1C1917]">
                  <Phone className="w-4 h-4 text-[#991B1B] shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-mono-tabular hover:underline"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E0D8]">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-md transition-colors"
                >
                  Submit Shareholder Enquiry
                </button>
              </div>
            </div>

            <div className="bg-[#F3F1EC] border border-[#E5E0D8] rounded-lg p-6 space-y-3">
              <h3 className="text-sm font-semibold text-[#1C1917]">
                Official Regulatory Filings
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Approved quarterly results, audited annual financial statements, and material
                disclosures are published concurrently on the official Bahrain Bourse issuer
                profile and BFLC corporate channels.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Document Summary Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ir-doc-title"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white border border-[#E5E0D8] rounded-lg max-w-xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-[#E5E0D8]">
              <div>
                <p className="text-xs text-[#78716C] font-mono-tabular">
                  {selectedDoc.referenceCode} · {selectedDoc.period}
                </p>
                <h3
                  id="ir-doc-title"
                  className="font-display text-2xl font-semibold text-[#1C1917] mt-1"
                >
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="p-2 rounded-md text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3F1EC] transition-colors"
                aria-label="Close document summary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                {selectedDoc.summary}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-[#78716C] tracking-wide">
                  Included Disclosures
                </h4>
                <ul className="space-y-2">
                  {selectedDoc.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#1C1917]">
                      <Check className="w-4 h-4 text-[#991B1B] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#78716C]">
                  Request official signed copy via {COMPANY_INFO.financeEmail}
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.financeEmail}?subject=${encodeURIComponent(
                    `Request: ${selectedDoc.title} (${selectedDoc.referenceCode})`
                  )}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#292524] rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Request Copy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
