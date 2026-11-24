import { useState, useEffect } from 'react';
import { Package } from 'lucide-react';
import { ResponsiveImage } from './ResponsiveImage';

interface ProductMediaFrameProps {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
  aspectClass?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  compact?: boolean;
  sizes?: string;
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
  sizes = '(max-width: 767px) 100vw, 50vw',
}: ProductMediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${
        fit === 'contain' ? 'bg-[#F7F0E3]' : 'bg-[#EFE6D5]'
      } ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <ResponsiveImage
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
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
