import React, { useEffect, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { NEWS_ARTICLES } from '../data/bflcData';
import { NewsArticle, NewsCategory } from '../types/bflc';

interface NewsPageProps {
  initialArticleId?: string | null;
  onClearInitialArticle?: () => void;
}

const CATEGORIES: ('All' | NewsCategory)[] = [
  'All',
  'Corporate',
  'Brands & Dining',
  'Investor Disclosures',
];

export const NewsPage: React.FC<NewsPageProps> = ({
  initialArticleId,
  onClearInitialArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | NewsCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (initialArticleId) {
      const match = NEWS_ARTICLES.find((a) => a.id === initialArticleId);
      if (match) {
        setActiveArticle(match);
      }
      onClearInitialArticle?.();
    }
  }, [initialArticleId, onClearInitialArticle]);

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Header */}
      <section className="bg-[#1C1917] text-[#FAF9F6] border-b border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium text-[#A8A29E] tracking-wide">
              News &amp; Media · Corporate Announcements
            </p>
            <h1
              className="font-display font-semibold text-white tracking-tight text-balance leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
            >
              The Latest from BFLC
            </h1>
            <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed">
              Official company announcements, brand updates, hospitality events, and shareholder
              news from Bahrain Family Leisure Company B.S.C.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6">
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3F1EC] border border-[#E5E0D8] rounded-lg"
              role="tablist"
              aria-label="Filter news by category"
            >
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      isSelected
                        ? 'bg-white text-[#1C1917] shadow-sm'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search
                className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news & updates..."
                aria-label="Search news and updates"
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#D6D3D1] rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#991B1B]"
              />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-white border border-[#E5E0D8] rounded-lg p-12 text-center space-y-3">
              <p className="font-display text-xl text-[#1C1917]">No matching updates found</p>
              <p className="text-sm text-[#57534E]">
                Try clearing your search filter or selecting another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-sm font-semibold text-[#991B1B] border border-[#E5E0D8] rounded-md hover:bg-[#FAF9F6]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#E5E0D8] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#A8A29E] transition-colors duration-150"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#E5E0D8]">
                      <MediaFrame
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        className="w-full h-full"
                        fallbackTitle={article.category}
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="text-xs text-[#78716C] flex items-center gap-2">
                        <span>{article.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.category}</span>
                      </div>
                      <h2 className="font-display text-xl font-semibold text-[#1C1917] leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[#44403C] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#991B1B] hover:text-[#7F1D1D] transition-colors"
                    >
                      <span>Read full update</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-modal-title"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white border border-[#E5E0D8] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-[#E5E0D8] sticky top-0 bg-white z-10">
              <div>
                <p className="text-xs text-[#78716C]">
                  {activeArticle.date} · {activeArticle.category}
                </p>
                <h3
                  id="news-modal-title"
                  className="font-display text-2xl font-semibold text-[#1C1917] mt-1"
                >
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-md text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3F1EC] transition-colors shrink-0"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {activeArticle.image && (
                <div className="aspect-[16/9] rounded-md overflow-hidden border border-[#E5E0D8]">
                  <MediaFrame
                    src={activeArticle.image}
                    alt={activeArticle.imageAlt || activeArticle.title}
                    className="w-full h-full"
                    fallbackTitle={activeArticle.category}
                  />
                </div>
              )}

              <div className="space-y-4 text-sm sm:text-base text-[#44403C] leading-relaxed">
                {activeArticle.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
