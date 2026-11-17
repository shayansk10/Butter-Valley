import { useId } from 'react';

export type ExportCountryCode = 'AE' | 'SA' | 'GB' | 'US';

interface CountryFlagProps {
  code: ExportCountryCode;
  className?: string;
  label?: string;
}

export function CountryFlag({ code, className = 'w-6 h-4', label }: CountryFlagProps) {
  const clipId = useId();
  const baseClass = `${className} inline-block shrink-0 rounded-[2px] overflow-hidden ring-1 ring-[#382319]/15 shadow-[0_1px_2px_rgba(56,35,25,0.12)]`;

  switch (code) {
    case 'AE':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="8" y="0" fill="#00732F" />
          <rect width="36" height="8" y="8" fill="#FFFFFF" />
          <rect width="36" height="8" y="16" fill="#000000" />
          <rect width="9.5" height="24" x="0" y="0" fill="#CE1126" />
        </svg>
      );

    case 'SA':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="24" fill="#006C35" />
          {/* Stylized Shahada script motif */}
          <g fill="#FFFFFF">
            <rect x="9.5" y="7.2" width="1.3" height="4.4" rx="0.4" />
            <rect x="12.2" y="6.8" width="1.2" height="4.8" rx="0.4" />
            <rect x="14.6" y="7.5" width="1.2" height="4.1" rx="0.4" />
            <rect x="17" y="6.8" width="1.2" height="4.8" rx="0.4" />
            <rect x="19.6" y="7.4" width="1.2" height="4.2" rx="0.4" />
            <rect x="22" y="6.8" width="1.2" height="4.8" rx="0.4" />
            <rect x="24.5" y="7.3" width="1.3" height="4.3" rx="0.4" />
            <path d="M9.5 11.4 Q13.5 12.8 18 11.5 Q22 12.8 26.2 11.4 L26.2 12.6 Q22 13.9 18 12.7 Q13.5 13.9 9.5 12.6 Z" />
            {/* Sword beneath Shahada pointing left */}
            <path d="M9 15.7 L23.5 15.7 L24.5 14.9 L25.6 15.7 L26.8 15.7 L26.8 16.7 L24.8 16.7 L24.5 17.5 L23.6 16.7 L10.2 16.7 L8.6 16.2 Z" />
          </g>
        </svg>
      );

    case 'GB':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <clipPath id={clipId}>
            <rect width="36" height="24" />
          </clipPath>
          <g clipPath={`url(#${clipId})`}>
            <rect width="36" height="24" fill="#012169" />
            <path d="M0 0 L36 24 M36 0 L0 24" stroke="#FFFFFF" strokeWidth="4.8" />
            {/* Counterchanged red diagonals */}
            <path d="M0 0 L18 12" stroke="#C8102E" strokeWidth="2.1" transform="translate(0, 0.8)" />
            <path d="M18 12 L36 24" stroke="#C8102E" strokeWidth="2.1" transform="translate(0, -0.8)" />
            <path d="M36 0 L18 12" stroke="#C8102E" strokeWidth="2.1" transform="translate(-0.8, 0)" />
            <path d="M18 12 L0 24" stroke="#C8102E" strokeWidth="2.1" transform="translate(0.8, 0)" />
            {/* Center white cross */}
            <rect x="14.4" y="0" width="7.2" height="24" fill="#FFFFFF" />
            <rect x="0" y="8.4" width="36" height="7.2" fill="#FFFFFF" />
            {/* Center red cross */}
            <rect x="15.8" y="0" width="4.4" height="24" fill="#C8102E" />
            <rect x="0" y="9.8" width="36" height="4.4" fill="#C8102E" />
          </g>
        </svg>
      );

    case 'US':
      return (
        <svg
          viewBox="0 0 39 26"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="39" height="26" fill="#FFFFFF" />
          {/* 7 red stripes across 13 total stripes (each stripe 2 units tall) */}
          <rect y="0" width="39" height="2" fill="#B22234" />
          <rect y="4" width="39" height="2" fill="#B22234" />
          <rect y="8" width="39" height="2" fill="#B22234" />
          <rect y="12" width="39" height="2" fill="#B22234" />
          <rect y="16" width="39" height="2" fill="#B22234" />
          <rect y="20" width="39" height="2" fill="#B22234" />
          <rect y="24" width="39" height="2" fill="#B22234" />
          {/* Blue canton (7 stripes tall = 14) */}
          <rect x="0" y="0" width="16.5" height="14" fill="#3C3B6E" />
          {/* Crisp star grid */}
          <g fill="#FFFFFF">
            {[2.2, 5.1, 8.0, 10.9, 13.8].map((cx) =>
              [2.2, 5.8, 9.4, 12.4].map((cy) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.65" />
              ))
            )}
            {[3.65, 6.55, 9.45, 12.35].map((cx) =>
              [4.0, 7.6, 10.9].map((cy) => (
                <circle key={`s-${cx}-${cy}`} cx={cx} cy={cy} r="0.65" />
              ))
            )}
          </g>
        </svg>
      );
  }
}
