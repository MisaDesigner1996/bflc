import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { PageRoute } from '../types/bflc';

interface BflcOption4HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const NAV_LINKS: { label: string; route: PageRoute }[] = [
  { label: 'Home', route: 'home' },
  { label: 'About Us', route: 'about' },
  { label: 'Our Business', route: 'business' },
  { label: 'Our Brands', route: 'brands' },
  { label: 'Investor Relations', route: 'investors' },
  { label: 'News & Media', route: 'news' },
  { label: 'Careers', route: 'careers' },
];

export const BflcOption4Header: React.FC<BflcOption4HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isTransparentHero = currentPage === 'home' && !scrolled && !mobileOpen;

  const handleLinkClick = (route: PageRoute) => {
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-250 ${
        isTransparentHero
          ? 'bg-[#171412]/92 backdrop-blur-md border-b border-white/10 text-white'
          : 'bg-white/95 backdrop-blur-md border-b border-[#e4dfd7] text-[#171412]'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between gap-4">
          {/* Brand Logo Lockup */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className={`shrink-0 flex items-center transition-all ${
              isTransparentHero
                ? 'py-1'
                : 'bg-[#171412] rounded-lg px-2.5 py-1 shadow-xs'
            }`}
            aria-label="Bahrain Family Leisure Company B.S.C. — Home"
          >
            <img
              src="/assets/aistudio/Bahrain_Family_Dining_Logo_in_White_0fd67cf2.png"
              alt={BFLC_ASSET_LIBRARY.company.logoAlt}
              referrerPolicy="no-referrer"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7"
          >
            {NAV_LINKS.map((item) => {
              const active = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleLinkClick(item.route)}
                  className={`relative py-2 text-[13.5px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
                    isTransparentHero
                      ? active
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                      : active
                      ? 'text-[#8e1b1b]'
                      : 'text-[#665f57] hover:text-[#171412]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-[2px] rounded-full ${
                        isTransparentHero ? 'bg-[#f3d6d6]' : 'bg-[#8e1b1b]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Right CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex b4-btn-primary text-[13.5px]! px-5! py-2.5! hover:pr-8!"
            >
              Contact Us
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className={`lg:hidden p-2 rounded-lg border transition-colors ${
                isTransparentHero
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-[#e4dfd7] text-[#171412] hover:bg-[#f8f6f2]'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-[#171412] border-t border-[#e4dfd7] px-4 sm:px-6 py-5 space-y-2 shadow-xl">
          {NAV_LINKS.map((item) => {
            const active = currentPage === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleLinkClick(item.route)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-[15px] font-semibold transition-colors ${
                  active
                    ? 'bg-[#f8f6f2] text-[#8e1b1b]'
                    : 'text-[#171412] hover:bg-[#f8f6f2]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="w-full b4-btn-primary justify-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
