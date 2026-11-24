import type { HTMLAttributeReferrerPolicy } from 'react';
import { IMAGE_MANIFEST } from '../data/imageManifest';

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  pictureClassName?: string;
  width?: number;
  height?: number;
  onError?: () => void;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
}

export function ResponsiveImage({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  fetchPriority,
  className = '',
  pictureClassName = 'block w-full h-full',
  width,
  height,
  onError,
  referrerPolicy = 'no-referrer',
}: ResponsiveImageProps) {
  const entry = IMAGE_MANIFEST[src];
  const imgWidth = width ?? entry?.width;
  const imgHeight = height ?? entry?.height;

  const avifSrcSet = entry?.avif?.map((variant) => `${variant.src} ${variant.width}w`).join(', ');
  const webpSrcSet = entry?.webp?.map((variant) => `${variant.src} ${variant.width}w`).join(', ');

  return (
    <picture className={pictureClassName}>
      {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : fetchPriority}
        referrerPolicy={referrerPolicy}
        onError={onError}
        className={className}
      />
    </picture>
  );
}
