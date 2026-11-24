import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { NewsArticle, PageRoute } from '../types/bflc';
import { BflcOption2Footer } from './BflcOption2Footer';
import { BflcOption2Header } from './BflcOption2Header';
import { BflcOption2Home } from './BflcOption2Home';
import { BflcOption2Subpages } from './BflcOption2Subpages';
import { Option2CapabilityCard } from './option2Media';
import './option2.css';

interface BflcOption2AppProps {
  currentPage: PageRoute;
  pendingArticleId: string | null;
  onNavigate: (page: PageRoute, articleId?: string) => void;
}

export const BflcOption2App: React.FC<BflcOption2AppProps> = ({
  currentPage,
  pendingArticleId,
  onNavigate,
}) => {
  const [selectedCapability, setSelectedCapability] =
    useState<Option2CapabilityCard | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const handleSelectArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
  };

  return (
    <div className="bflc2-scope min-h-screen flex flex-col bg-white text-[#171412]">
      <BflcOption2Header currentPage={currentPage} onNavigate={onNavigate} />

      <main className="flex-1">
        {currentPage === 'home' ? (
          <BflcOption2Home
            onNavigate={onNavigate}
            onSelectCapability={setSelectedCapability}
            onSelectArticle={handleSelectArticle}
          />
        ) : (
          <BflcOption2Subpages
            page={currentPage}
            onNavigate={onNavigate}
            initialArticleId={pendingArticleId}
          />
        )}
      </main>

      <BflcOption2Footer onNavigate={onNavigate} />

      {/* Capability Detail Modal */}
      {selectedCapability && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCapability(null)}
        >
          <div
            className="bg-white text-[#171412] w-full max-w-xl max-h-[88vh] overflow-y-auto rounded-[8px] border border-[#e4dfd7] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-[#e4dfd7] flex items-center justify-between">
              <span className="b2-kicker">BFLC Capabilities</span>
              <button
                type="button"
                onClick={() => setSelectedCapability(null)}
                aria-label="Close modal"
                className="p-1 text-[#665f57] hover:text-[#171412]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-5">
              <img
                src={selectedCapability.image}
                alt={selectedCapability.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-60 object-cover rounded-[6px]"
              />
              <h3 className="b2-title-m text-[#171412]">
                {selectedCapability.index}. {selectedCapability.title}
              </h3>
              <p className="b2-desc-l text-[#665f57]">
                {selectedCapability.description}
              </p>
              <ul className="space-y-2.5 border-t border-[#e4dfd7] pt-4">
                {selectedCapability.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-[13.5px] text-[#171412]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8e1b1b] mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* News Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white text-[#171412] w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-[8px] border border-[#e4dfd7] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-[#e4dfd7] flex items-center justify-between">
              <span className="b2-kicker">
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
                  className="w-full h-60 object-cover rounded-[6px]"
                />
              )}
              <h3 className="b2-title-m text-[#171412]">{selectedArticle.title}</h3>
              <div className="space-y-4">
                {selectedArticle.body.map((para, i) => (
                  <p key={i} className="b2-desc-l text-[#171412]">
                    {para}
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
