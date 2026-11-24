import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NewsArticle, PageRoute } from '../types/bflc';
import { BflcOption3Footer } from './BflcOption3Footer';
import { BflcOption3Header } from './BflcOption3Header';
import { BflcOption3Home } from './BflcOption3Home';
import { BflcOption3Subpages } from './BflcOption3Subpages';
import './option3.css';

interface BflcOption3AppProps {
  currentPage: PageRoute;
  pendingArticleId: string | null;
  onNavigate: (page: PageRoute, articleId?: string) => void;
}

export const BflcOption3App: React.FC<BflcOption3AppProps> = ({
  currentPage,
  pendingArticleId,
  onNavigate,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="bflc3-scope min-h-screen flex flex-col bg-[#f6f4ec] text-[#1a211b]">
      <BflcOption3Header currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-1">
        {currentPage === 'home' ? (
          <BflcOption3Home
            onNavigate={onNavigate}
            onSelectArticle={setSelectedArticle}
          />
        ) : (
          <BflcOption3Subpages
            page={currentPage}
            onNavigate={onNavigate}
            initialArticleId={pendingArticleId}
          />
        )}
      </main>

      <BflcOption3Footer onNavigate={onNavigate} />

      {/* News Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white text-[#1a211b] w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[#e3dfd2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-[#e3dfd2] flex items-center justify-between">
              <span className="text-[12.5px] font-medium text-[#586058]">
                {selectedArticle.date} · {selectedArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close modal"
                className="p-1 text-[#586058] hover:text-[#1a211b]"
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
              <h3 className="text-2xl font-semibold text-[#1a211b]">
                {selectedArticle.title}
              </h3>
              <div className="space-y-4">
                {selectedArticle.body.map((p, idx) => (
                  <p key={idx} className="text-[15px] text-[#3c443d] leading-relaxed">
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
