import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BFLC_ASSETS, COMPANY_INFO } from '../data/bflcData';
import { PageRoute } from '../types/bflc';

interface NavbarProps {
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

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: PageRoute) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Mark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B] rounded-sm"
          aria-label={`${COMPANY_INFO.legalName} — Return to Home`}
        >
          <img
            src={BFLC_ASSETS.logo}
            alt="Bahrain Family Leisure Company B.S.C."
            referrerPolicy="no-referrer"
            className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Clean Single-Line Text Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B] rounded-sm ${
                  isActive
                    ? 'text-[#991B1B]'
                    : 'text-[#44403C] hover:text-[#1C1917]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#991B1B] transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#991B1B] ${
              currentPage === 'contact'
                ? 'bg-[#7F1D1D] text-white'
                : 'bg-[#991B1B] text-white hover:bg-[#7F1D1D]'
            }`}
          >
            Contact Us
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#1C1917] hover:bg-[#F3F1EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E5E0D8] bg-white">
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile Navigation"
          >
            {[
              ...NAV_ITEMS,
              { id: 'careers' as PageRoute, label: 'Careers' },
              { id: 'contact' as PageRoute, label: 'Contact Us' },
            ].map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#F3F1EC] text-[#991B1B]'
                      : 'text-[#1C1917] hover:bg-[#FAF9F6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
