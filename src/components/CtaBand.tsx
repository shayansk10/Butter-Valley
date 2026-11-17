import { ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';

interface CtaBandProps {
  eyebrow?: string;
  headline: string;
  description: string;
  buttonLabel?: string;
  buttonTo?: string;
  onButtonClick?: () => void;
  secondaryLabel?: string;
  secondaryTo?: string;
  variant?: 'cream' | 'brown';
}

export function CtaBand({
  eyebrow = 'Wholesale & Export Partnerships',
  headline,
  description,
  buttonLabel = 'Request a Quote',
  buttonTo = '/contact',
  onButtonClick,
  secondaryLabel,
  secondaryTo,
  variant = 'cream',
}: CtaBandProps) {
  const isBrown = variant === 'brown';

  return (
    <section
      className={`py-20 sm:py-24 border-t ${
        isBrown
          ? 'bg-[#382319] text-[#FFFCF6] border-[#C99536]/20'
          : 'bg-[#F7F0E3] text-[#382319] border-[#382319]/10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536] mb-4">
          {eyebrow}
        </p>
        <h2
          className={`font-serif text-3xl sm:text-5xl font-semibold leading-tight mb-5 ${
            isBrown ? 'text-[#FFFCF6]' : 'text-[#382319]'
          }`}
        >
          {headline}
        </h2>
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9 ${
            isBrown ? 'text-[#F7F0E3]/85' : 'text-[#59351F]'
          }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {onButtonClick ? (
            <button
              type="button"
              onClick={onButtonClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm"
            >
              {buttonLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              to={buttonTo}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm"
            >
              {buttonLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm border transition-colors ${
                isBrown
                  ? 'border-[#F7F0E3]/30 text-[#FFFCF6] hover:border-[#C99536] hover:text-[#C99536]'
                  : 'border-[#382319]/25 text-[#382319] hover:border-[#382319] hover:bg-[#382319]/5'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
