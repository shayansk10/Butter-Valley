import { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { EXPORT_OPERATIONS_CONTENT, type OperationsPhoto } from '../data/operationsGallery';
import { acquireScrollLock } from '../utils/scrollLock';

export function StockOperationsGallery() {
  const photos = EXPORT_OPERATIONS_CONTENT.photos;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const portraitPhotos = photos.filter((p) => p.orientation === 'portrait');
  const landscapePhotos = photos.filter((p) => p.orientation === 'landscape');

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const showPrev = useCallback(() => {
    setLightboxIdx((curr) => (curr === null ? null : (curr - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const showNext = useCallback(() => {
    setLightboxIdx((curr) => (curr === null ? null : (curr + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;

    const releaseScrollLock = acquireScrollLock();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      releaseScrollLock();
    };
  }, [lightboxIdx, closeLightbox, showPrev, showNext]);

  const activePhoto: OperationsPhoto | null = lightboxIdx !== null ? photos[lightboxIdx] : null;

  const renderCard = (photo: OperationsPhoto, delay: number) => {
    const photoIndex = photos.findIndex((p) => p.id === photo.id);
    const aspectClass = photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]';

    return (
      <MotionReveal key={photo.id} delay={delay}>
        <button
          type="button"
          onClick={() => setLightboxIdx(photoIndex)}
          aria-label={`View full-size photograph: ${photo.title}`}
          className="group w-full h-full text-left bg-[#FFFCF6] border border-[#382319]/12 hover:border-[#C99536]/65 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_18px_40px_rgba(56,35,25,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99536]"
        >
          <div className={`relative w-full overflow-hidden bg-[#EFE6D5] ${aspectClass}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#241610]/80 backdrop-blur-[2px] text-[#FFFCF6] text-xs font-medium opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 border border-[#C99536]/40"
            >
              <Expand className="w-3.5 h-3.5 text-[#C99536]" />
              <span>Expand</span>
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-1.5 border-t border-[#382319]/10 flex-1">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#382319] group-hover:text-[#C99536] transition-colors">
              {photo.title}
            </h3>
            <p className="text-sm text-[#59351F] leading-relaxed">{photo.caption}</p>
          </div>
        </button>
      </MotionReveal>
    );
  };

  return (
    <>
      <div className="space-y-6 lg:space-y-8">
        {/* Portrait Row (780x1040 3:4 photographs matched side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portraitPhotos.map((photo, idx) => renderCard(photo, idx * 0.05))}
        </div>

        {/* Landscape Row (1600x1200 4:3 photographs matched side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {landscapePhotos.map((photo, idx) => renderCard(photo, idx * 0.05))}
        </div>
      </div>

      {/* Click-to-Expand Lightbox */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          className="fixed inset-0 z-[110] bg-[#140d09]/90 backdrop-blur-xs flex flex-col justify-between p-3 sm:p-6"
        >
          {/* Top Bar */}
          <div className="max-w-6xl w-full mx-auto flex items-center justify-between gap-4 text-[#FFFCF6]">
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Our Stock &amp; Export Operations · {lightboxIdx! + 1} / {photos.length}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold truncate">
                {activePhoto.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo lightbox"
              className="w-11 h-11 inline-flex items-center justify-center rounded-sm bg-[#241610] border border-[#C99536]/40 text-[#FFFCF6] hover:bg-[#C99536] transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image & Navigation Controls */}
          <div className="relative flex-1 min-h-0 max-w-6xl w-full mx-auto my-3 flex items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous photograph"
              className="w-11 h-11 inline-flex items-center justify-center rounded-sm bg-[#241610]/85 border border-[#C99536]/40 text-[#FFFCF6] hover:bg-[#C99536] transition-colors shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="relative flex-1 h-full flex items-center justify-center min-w-0">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[72dvh] max-w-full w-auto h-auto object-contain rounded-sm border border-[#C99536]/30 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next photograph"
              className="w-11 h-11 inline-flex items-center justify-center rounded-sm bg-[#241610]/85 border border-[#C99536]/40 text-[#FFFCF6] hover:bg-[#C99536] transition-colors shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption */}
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-xs sm:text-sm text-[#F7F0E3]/85 leading-relaxed">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
