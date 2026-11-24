import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { COMPANY_INFO } from '../data/bflcData';
import {
  BFLC_FOOTER_ABOUT_LINKS,
  BFLC_FOOTER_AWARDS,
  BFLC_FOOTER_BRANDS,
  BFLC_FOOTER_BRAND_LINKS,
  BFLC_FOOTER_CAREER_LINKS,
  BFLC_FOOTER_EVENTS_LINKS,
  BFLC_FOOTER_FOLLOW_ICONS,
  BFLC_FOOTER_INVESTOR_LINKS,
  BFLC_FOOTER_STANDALONE_LINKS,
  FooterNavItem,
  FooterSocialIconItem,
} from '../data/bflcFooterData';
import { PageRoute } from '../types/bflc';
import { BflcPrivacyModal } from './BflcPrivacyModal';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

const renderOrangeSocialGlyph = (platform: FooterSocialIconItem['platform']) => {
  if (platform === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M14.5 21v-8.2h2.75l.41-3.2H14.5V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13c-.29-.04-1.3-.13-2.48-.13-2.45 0-4.13 1.5-4.13 4.25V9.6H8.4v3.2h2.78V21h3.32z" />
      </svg>
    );
  }
  if (platform === 'x') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <span className="flex flex-col items-center leading-[0.82] font-bold tracking-tight text-[8.5px]" aria-hidden="true">
      <span>You</span>
      <span>Tube</span>
    </span>
  );
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNavClick = (item: FooterNavItem) => {
    if (item.action === 'privacy') {
      setPrivacyOpen(true);
    } else if (item.route) {
      onNavigate(item.route);
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#E7E5E4] border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Top Corporate Identity, Contact & Brand Logos Strip */}
        <div className="pb-9 border-b border-[#292524] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-block bg-white rounded-md px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
                aria-label="BFLC Home"
              >
                <img
                  src={BFLC_ASSET_LIBRARY.company.logo}
                  alt={BFLC_ASSET_LIBRARY.company.logoAlt}
                  referrerPolicy="no-referrer"
                  className="h-9 w-auto object-contain"
                />
              </button>
              <div>
                <p className="text-sm font-semibold text-white">{COMPANY_INFO.legalName}</p>
                <p className="text-xs text-[#A8A29E]">
                  {COMPANY_INFO.arabicName} · {COMPANY_INFO.bourseExchange}: {COMPANY_INFO.bourseSymbol}
                </p>
              </div>
            </div>

            <div className="text-xs text-[#A8A29E] space-y-1.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#D6D3D1]" aria-hidden="true" />
                <address className="not-italic">
                  {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLine2}, {COMPANY_INFO.poBox}
                </address>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-mono-tabular hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D6D3D1]" aria-hidden="true" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.fax.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-mono-tabular hover:text-white transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-[#D6D3D1]" aria-hidden="true" />
                  <span>{COMPANY_INFO.fax}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.generalEmail}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D6D3D1]" aria-hidden="true" />
                  <span>{COMPANY_INFO.generalEmail}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.financeEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.financeEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 lg:self-center">
            {BFLC_FOOTER_BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={brand.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${brand.name} official website (${brand.websiteLabel})`}
                className="group flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-md border border-[#292524] hover:border-white/50 transition-colors"
                style={{ backgroundColor: brand.panelColor }}
              >
                <img
                  src={brand.logo}
                  alt={brand.logoAlt}
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto max-w-[120px] object-contain"
                />
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Exact 6-Column Footer Navigation & Awards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* 1. About */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-white">About</h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#A8A29E]">
              {BFLC_FOOTER_ABOUT_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Our Brands */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-white">Our Brands</h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#A8A29E]">
              {BFLC_FOOTER_BRAND_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Events & Media */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-white">Events &amp; Media</h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#A8A29E]">
              {BFLC_FOOTER_EVENTS_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Investors/Stockholders */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-white">Investors/Stockholders</h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#A8A29E]">
              {BFLC_FOOTER_INVESTOR_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="hover:text-white transition-colors text-left leading-snug"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Careers + Standalone Links */}
          <div className="lg:col-span-2 space-y-5">
            <div className="space-y-3.5">
              <h3 className="text-sm font-semibold text-white">Careers</h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#A8A29E]">
                {BFLC_FOOTER_CAREER_LINKS.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="space-y-2.5 text-sm font-medium text-white pt-1">
              {BFLC_FOOTER_STANDALONE_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="hover:text-[#FCA5A5] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Awards & Accolades (2x2 Original Badges Grid) */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-semibold text-white">Awards &amp; Accolades</h3>
            <div className="grid grid-cols-2 gap-2.5 max-w-[230px]">
              {BFLC_FOOTER_AWARDS.map((award) => (
                <div
                  key={award.id}
                  className="bg-white rounded-sm overflow-hidden p-0.5 flex items-center justify-center"
                >
                  <img
                    src={award.image}
                    alt={award.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Follow Us + Orange Icons + INVEST WITH US! + Copyright */}
        <div className="pt-8 border-t border-[#44403C]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium text-white mr-1">Follow Us</span>

            <div className="flex items-center gap-2">
              {BFLC_FOOTER_FOLLOW_ICONS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-7 h-7 rounded-[3px] bg-[#F48120] hover:bg-[#ff943a] text-[#1C1917] flex items-center justify-center transition-colors"
                >
                  {renderOrangeSocialGlyph(social.platform)}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onNavigate('investors')}
              className="ml-1 px-4 py-1.5 rounded-[3px] bg-[#F48120] hover:bg-[#ff943a] text-[#1C1917] text-xs font-bold uppercase tracking-wide transition-colors whitespace-nowrap"
            >
              INVEST WITH US!
            </button>
          </div>

          <p className="text-xs text-[#E7E5E4]">
            © {currentYear}. BFLC. All Rights Reserved.
          </p>
        </div>
      </div>

      <BflcPrivacyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        variant="option1"
      />
    </footer>
  );
};
