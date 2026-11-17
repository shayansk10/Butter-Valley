import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { RequestQuoteForm } from './RequestQuoteForm';
import { acquireScrollLock } from '../utils/scrollLock';

export function RequestQuoteModal() {
  const { isOpen, preselectedProduct, sessionKey, closeQuoteModal } = useQuoteModal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const releaseScrollLock = acquireScrollLock({
      canScrollTarget: (target) => {
        if (!target) return null;
        if (target instanceof Element) {
          const innerList = target.closest('[data-scroll-container="true"]');
          if (innerList instanceof HTMLElement && innerList.scrollHeight > innerList.clientHeight) {
            return innerList;
          }
        }
        const container = scrollContainerRef.current;
        if (container && container.contains(target)) {
          return container;
        }
        return null;
      },
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeQuoteModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    }, 30);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimer);
      releaseScrollLock();
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a Quote"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#1d140f]/65 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeQuoteModal();
        }
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#F7F0E3] border border-[#382319]/15 rounded-md shadow-[0_24px_64px_rgba(24,15,10,0.35)] overflow-hidden flex flex-col max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)]">
        {/* Top Close Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 bg-[#FFFCF6] border-b border-[#382319]/10 shrink-0">
          <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
            Butter Valley Ltd. — Wholesale Quotation
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeQuoteModal}
            aria-label="Close Request a Quote form"
            className="w-10 h-10 -mr-2 inline-flex items-center justify-center rounded-sm text-[#382319] hover:bg-[#F7F0E3] hover:text-[#C99536] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C99536]/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div
          ref={scrollContainerRef}
          className="overflow-y-auto overscroll-contain touch-pan-y px-5 py-6 sm:px-8 sm:py-8"
        >
          <RequestQuoteForm
            key={sessionKey}
            initialProduct={preselectedProduct}
            onClose={closeQuoteModal}
            variant="modal"
          />
        </div>
      </div>
    </div>
  );
}
