import { useState } from 'react';
import { Package } from 'lucide-react';

interface ProductMediaFrameProps {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
  aspectClass?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  compact?: boolean;
}

export function ProductMediaFrame({
  src,
  alt,
  fit = 'contain',
  aspectClass = 'aspect-square',
  className = '',
  imgClassName = '',
  priority = false,
  compact = false,
}: ProductMediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        fit === 'contain' ? 'bg-[#F7F0E3]' : 'bg-[#EFE6D5]'
      } ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`w-full h-full transition-transform duration-700 ease-out ${
            fit === 'contain'
              ? compact
                ? 'object-contain p-1'
                : 'object-contain'
              : 'object-cover'
          } ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F7F0E3] text-[#59351F]">
          <Package className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
          <span className="font-serif text-lg">{alt}</span>
        </div>
      )}
    </div>
  );
}
