import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NewsArticle, PageRoute } from '../types/bflc';
import { BflcOption4Footer } from './BflcOption4Footer';
import { BflcOption4Header } from './BflcOption4Header';
import { BflcOption4Home } from './BflcOption4Home';
import { BflcOption4Subpages } from './BflcOption4Subpages';
import './option4.css';

interface BflcOption4AppProps {
  currentPage: PageRoute;
  pendingArticleId: string | null;
  onNavigate: (page: PageRoute, articleId?: string) => void;
}

export const BflcOption4App: React.FC<BflcOption4AppProps> = ({
  currentPage,
  pendingArticleId,
  onNavigate,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="bflc4-scope min-h-screen flex flex-col bg-white text-[#171412]">
      <BflcOption4Header currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-1">
        {currentPage === 'home' ? (
          <BflcOption4Home
            onNavigate={onNavigate}
            onSelectArticle={setSelectedArticle}
          />
        ) : (
          <BflcOption4Subpages
            page={currentPage}
            onNavigate={onNavigate}
            initialArticleId={pendingArticleId}
          />
        )}
      </main>

      <BflcOption4Footer onNavigate={onNavigate} />

      {/* News Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white text-[#171412] w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[#e4dfd7] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-[#e4dfd7] flex items-center justify-between">
              <span className="text-[12.5px] font-medium text-[#665f57]">
                {selectedArticle.date} · {selectedArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close modal"
                className="p-1 text-[#665f57] hover:text-[#171412]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              {selectedArticle.image && (
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.imageAlt || selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-60 object-cover rounded-xl"
                />
              )}
              <h3 className="b4-display text-2xl font-bold text-[#171412]">
                {selectedArticle.title}
              </h3>
              <div className="space-y-4">
                {selectedArticle.body.map((p, idx) => (
                  <p key={idx} className="text-[15px] text-[#665f57] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
