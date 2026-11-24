import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface MediaFrameProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackTitle = 'BFLC Hospitality',
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#292524] via-[#1C1917] to-[#44403C] text-[#FAF9F6] p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Utensils className="w-8 h-8 text-[#D6D3D1] mb-3 opacity-80" strokeWidth={1.5} />
        <span className="font-display text-lg tracking-tight text-center text-[#FAF9F6]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1C1917] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};
