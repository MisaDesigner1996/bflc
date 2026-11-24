import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/bflcData';
import { PageRoute } from '../types/bflc';
import { OPTION2_MEDIA } from './option2Media';

interface BflcOption2HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const APPROVED_NAV: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'business', label: 'Our Business' },
  { id: 'brands', label: 'Our Brands' },
  { id: 'investors', label: 'Investor Relations' },
  { id: 'news', label: 'News & Media' },
];

export const BflcOption2Header: React.FC<BflcOption2HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isOverlayHero = currentPage === 'home' && !scrolled && !mobileOpen;

  const go = (page: PageRoute) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isOverlayHero
          ? 'bg-gradient-to-b from-[#171412]/70 to-transparent text-white'
          : 'bg-white/95 backdrop-blur-md text-[#171412] border-b border-[#e4dfd7]'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-9 h-[64px] sm:h-[76px] flex items-center justify-between gap-8">
        {/* Zone 1: Single Clean BFLC Logo Mark */}
        <button
          type="button"
          onClick={() => go('home')}
          className={`flex items-center shrink-0 rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8e1b1b] ${
            isOverlayHero ? 'py-1' : 'bg-[#171412] px-2.5 py-1.5'
          }`}
          aria-label={`${COMPANY_INFO.legalName} — Home`}
        >
          <img
            src={OPTION2_MEDIA.bflcLogo}
            alt="Bahrain Family Leisure Company B.S.C."
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Clean Single-Line Text Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Primary Navigation"
        >
          {APPROVED_NAV.map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                data-active={active}
                aria-current={active ? 'page' : undefined}
                className={`b2-underline-link py-1.5 text-[14px] font-medium whitespace-nowrap shrink-0 transition-opacity ${
                  active
                    ? isOverlayHero
                      ? 'text-white'
                      : 'text-[#8e1b1b]'
                    : isOverlayHero
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#171412]/80 hover:text-[#171412]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => go('contact')}
            className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-all duration-300 ${
              isOverlayHero
                ? 'bg-white text-[#171412] hover:bg-[#f8f6f2] rounded-[4px]'
                : 'b2-app-button'
            }`}
          >
            Contact Us
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-[4px] transition-colors ${
              isOverlayHero
                ? 'text-white hover:bg-white/15'
                : 'text-[#171412] hover:bg-[#f8f6f2]'
            }`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-[#171412] border-t border-[#e4dfd7] px-5 py-5 space-y-1 max-h-[82vh] overflow-y-auto">
          {[
            ...APPROVED_NAV,
            { id: 'careers' as PageRoute, label: 'Careers' },
            { id: 'contact' as PageRoute, label: 'Contact Us' },
          ].map((item) => {
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`w-full text-left px-3 py-3 rounded-[4px] text-[15px] font-medium transition-colors ${
                  active
                    ? 'bg-[#f8f6f2] text-[#8e1b1b]'
                    : 'text-[#171412] hover:bg-[#f8f6f2]'
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
