import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { BflcOption2App } from './bflc-option2/BflcOption2App';
import { BflcOption3App } from './bflc-option3/BflcOption3App';
import { BflcOption4App } from './bflc-option4/BflcOption4App';
import { AboutPage } from './pages/AboutPage';
import { BrandsPage } from './pages/BrandsPage';
import { BusinessPage } from './pages/BusinessPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { InvestorRelationsPage } from './pages/InvestorRelationsPage';
import { NewsPage } from './pages/NewsPage';
import { PageRoute } from './types/bflc';

type DesignOption = 'option1' | 'option2' | 'option3' | 'option4';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'about',
  'business',
  'brands',
  'investors',
  'news',
  'careers',
  'contact',
];

function parseHash(): { option: DesignOption; page: PageRoute } {
  const raw = window.location.hash.replace('#', '').toLowerCase();
  if (raw.startsWith('option1/')) {
    const sub = raw.replace('option1/', '') as PageRoute;
    return {
      option: 'option1',
      page: VALID_ROUTES.includes(sub) ? sub : 'home',
    };
  }
  if (raw.startsWith('option2/')) {
    const sub = raw.replace('option2/', '') as PageRoute;
    return {
      option: 'option2',
      page: VALID_ROUTES.includes(sub) ? sub : 'home',
    };
  }
  if (raw.startsWith('option3/')) {
    const sub = raw.replace('option3/', '') as PageRoute;
    return {
      option: 'option3',
      page: VALID_ROUTES.includes(sub) ? sub : 'home',
    };
  }
  if (raw.startsWith('option4/')) {
    const sub = raw.replace('option4/', '') as PageRoute;
    return {
      option: 'option4',
      page: VALID_ROUTES.includes(sub) ? sub : 'home',
    };
  }
  if (VALID_ROUTES.includes(raw as PageRoute)) {
    return { option: 'option1', page: raw as PageRoute };
  }
  return { option: 'option4', page: 'home' };
}

export default function App() {
  const initial = parseHash();
  const [designOption, setDesignOption] = useState<DesignOption>(initial.option);
  const [currentPage, setCurrentPage] = useState<PageRoute>(initial.page);
  const [pendingArticleId, setPendingArticleId] = useState<string | null>(null);
  const [switcherCollapsed, setSwitcherCollapsed] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const next = parseHash();
      setDesignOption(next.option);
      setCurrentPage(next.page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = 'Bahrain Family Leisure Company B.S.C. | BFLC';
  }, [designOption]);

  const navigateTo = useCallback(
    (page: PageRoute, articleId?: string) => {
      setCurrentPage(page);
      setPendingArticleId(articleId || null);
      const nextHash =
        designOption === 'option1' ? `#${page}` : `#${designOption}/${page}`;
      window.history.replaceState(null, '', nextHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [designOption]
  );

  const switchDesign = useCallback(
    (option: DesignOption) => {
      setDesignOption(option);
      const nextHash =
        option === 'option1' ? `#${currentPage}` : `#${option}/${currentPage}`;
      window.history.replaceState(null, '', nextHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [currentPage]
  );

  const clearPendingArticle = useCallback(() => {
    setPendingArticleId(null);
  }, []);

  return (
    <>
      {designOption === 'option4' ? (
        <BflcOption4App
          currentPage={currentPage}
          pendingArticleId={pendingArticleId}
          onNavigate={navigateTo}
        />
      ) : designOption === 'option3' ? (
        <BflcOption3App
          currentPage={currentPage}
          pendingArticleId={pendingArticleId}
          onNavigate={navigateTo}
        />
      ) : designOption === 'option2' ? (
        <BflcOption2App
          currentPage={currentPage}
          pendingArticleId={pendingArticleId}
          onNavigate={navigateTo}
        />
      ) : (
        <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1917]">
          <Navbar currentPage={currentPage} onNavigate={navigateTo} />

          <main className="flex-1">
            {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
            {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
            {currentPage === 'business' && <BusinessPage onNavigate={navigateTo} />}
            {currentPage === 'brands' && <BrandsPage onNavigate={navigateTo} />}
            {currentPage === 'investors' && (
              <InvestorRelationsPage onNavigate={navigateTo} />
            )}
            {currentPage === 'news' && (
              <NewsPage
                initialArticleId={pendingArticleId}
                onClearInitialArticle={clearPendingArticle}
              />
            )}
            {currentPage === 'careers' && <CareersPage />}
            {currentPage === 'contact' && <ContactPage />}
          </main>

          <Footer onNavigate={navigateTo} />
        </div>
      )}

      {/* Discreet 4-Way Design Option Switcher */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-3 z-[60]">
        {switcherCollapsed ? (
          <button
            type="button"
            onClick={() => setSwitcherCollapsed(false)}
            className="px-3.5 py-1.5 rounded-full bg-[#171412]/85 backdrop-blur-md text-white text-[11px] font-medium border border-white/15 shadow-lg hover:bg-[#171412] whitespace-nowrap"
          >
            {designOption === 'option4'
              ? 'BFLC · Design Option 4'
              : designOption === 'option3'
              ? 'BFLC · Design Option 3'
              : designOption === 'option2'
              ? 'BFLC · Design Option 2'
              : 'BFLC · Design Option 1'}
          </button>
        ) : (
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#171412]/90 backdrop-blur-md text-white border border-white/15 shadow-xl">
            {(
              [
                { id: 'option1', label: 'Option 1' },
                { id: 'option2', label: 'Option 2' },
                { id: 'option3', label: 'Option 3' },
                { id: 'option4', label: 'Option 4' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => switchDesign(opt.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 ${
                  designOption === opt.id
                    ? 'bg-white text-[#171412]'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSwitcherCollapsed(true)}
              aria-label="Minimize design switcher"
              className="px-2 py-1 text-[11px] text-white/65 hover:text-white"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </>
  );
}
