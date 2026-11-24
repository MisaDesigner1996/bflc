import React, { useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/bflcData';
import { BFLC_PRIVACY_POLICY_SECTIONS } from '../data/bflcFooterData';

interface BflcPrivacyModalProps {
  open: boolean;
  onClose: () => void;
  variant?: 'option1' | 'option2' | 'option3' | 'option4';
}

export const BflcPrivacyModal: React.FC<BflcPrivacyModalProps> = ({
  open,
  onClose,
  variant = 'option1',
}) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isOption2 = variant === 'option2';
  const isOption3 = variant === 'option3';
  const isOption4 = variant === 'option4';

  const containerRadius = isOption2
    ? 'rounded-[6px]'
    : isOption3 || isOption4
    ? 'rounded-2xl'
    : 'rounded-lg';

  const buttonRadius = isOption2
    ? 'rounded-[4px] bg-[#8e1b1b] hover:bg-[#711414]'
    : isOption3
    ? 'rounded-full bg-[#1b2e1e] hover:bg-[#142316]'
    : isOption4
    ? 'rounded-full bg-[#8e1b1b] hover:bg-[#701414]'
    : 'rounded-md bg-[#991B1B] hover:bg-[#7F1D1D]';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bflc-privacy-title"
      onClick={onClose}
    >
      <div
        className={`bg-white text-[#1C1917] border border-[#E5E0D8] ${containerRadius} max-w-2xl w-full max-h-[86vh] overflow-y-auto shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-[#E5E0D8] sticky top-0 bg-white z-10">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className={`w-5 h-5 mt-1 shrink-0 ${
                isOption3
                  ? 'text-[#1b2e1e]'
                  : 'text-[#8e1b1b]'
              }`}
              aria-hidden="true"
            />
            <div>
              <p className="text-xs font-medium text-[#78716C] tracking-wide">
                {COMPANY_INFO.legalName}
              </p>
              <h2
                id="bflc-privacy-title"
                className="text-2xl font-semibold text-[#171412] mt-0.5"
              >
                Privacy Policy
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#57534E] hover:text-[#171412] rounded-md transition-colors"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {BFLC_PRIVACY_POLICY_SECTIONS.map((section) => (
            <div key={section.heading} className="space-y-1.5">
              <h3 className="text-base font-semibold text-[#171412]">
                {section.heading}
              </h3>
              <p className="text-sm text-[#44403C] leading-relaxed">{section.body}</p>
            </div>
          ))}

          <div className="pt-4 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#57534E]">
            <span>
              Privacy Enquiries:{' '}
              <a
                href={`mailto:${COMPANY_INFO.generalEmail}`}
                className="font-medium text-[#171412] underline"
              >
                {COMPANY_INFO.generalEmail}
              </a>
            </span>
            <button
              type="button"
              onClick={onClose}
              className={`px-5 py-2 text-xs font-semibold text-white transition-colors ${buttonRadius}`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
