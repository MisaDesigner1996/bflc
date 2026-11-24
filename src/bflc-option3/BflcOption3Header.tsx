import React, { useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { COMPANY_INFO } from '../data/bflcData';
import { PageRoute } from '../types/bflc';

interface BflcOption3HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const NAV_ITEMS: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'business', label: 'Our Business' },
  { id: 'brands', label: 'Our Brands' },
  { id: 'investors', label: 'Investor Relations' },
  { id: 'news', label: 'News & Media' },
];

export const BflcOption3Header: React.FC<BflcOption3HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (page: PageRoute) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e3dfd2]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-6">
        {/* Zone 1: BFLC Brand Logo */}
        <button
          type="button"
          onClick={() => go('home')}
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b2e1e] rounded-sm"
          aria-label={`${COMPANY_INFO.legalName} — Home`}
        >
          <img
            src={BFLC_ASSET_LIBRARY.company.logo}
            alt={BFLC_ASSET_LIBRARY.company.logoAlt}
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 lg:h-11 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`py-2 text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'text-[#1b2e1e] underline underline-offset-8 decoration-2'
                    : 'text-[#586058] hover:text-[#1a211b]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Direct Phone + Pill CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1a211b] hover:text-[#1b2e1e] tabular-nums whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#1b2e1e]" aria-hidden="true" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden lg:inline-flex b3-pill-forest"
          >
            <span>Contact Us</span>
            <span className="b3-arrow-badge">
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#1a211b] hover:bg-[#f6f4ec]"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e3dfd2] px-4 py-4 space-y-1">
          {[
            ...NAV_ITEMS,
            { id: 'careers' as PageRoute, label: 'Careers' },
            { id: 'contact' as PageRoute, label: 'Contact Us' },
          ].map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-[15px] font-medium ${
                  active
                    ? 'bg-[#e6e2d1] text-[#1b2e1e]'
                    : 'text-[#1a211b] hover:bg-[#f6f4ec]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
