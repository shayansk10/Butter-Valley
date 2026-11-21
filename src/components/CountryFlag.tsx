import { useId } from 'react';

export type ExportCountryCode =
  | 'AE'
  | 'SA'
  | 'QA'
  | 'KW'
  | 'BH'
  | 'OM'
  | 'GB'
  | 'EU'
  | 'US';

interface CountryFlagProps {
  code: ExportCountryCode;
  className?: string;
  label?: string;
}

function getStarPoints(cx: number, cy: number, outerR: number, innerR: number): string {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = ((i * 36 - 90) * Math.PI) / 180;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`);
  }
  return points.join(' ');
}

const EU_STARS = Array.from({ length: 12 }, (_, idx) => {
  const angle = ((idx * 30 - 90) * Math.PI) / 180;
  const cx = 18 + 7.2 * Math.cos(angle);
  const cy = 12 + 7.2 * Math.sin(angle);
  return getStarPoints(cx, cy, 1.15, 0.48);
});

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
          <g fill="#FFFFFF">
            <rect x="9.5" y="7.2" width="1.3" height="4.4" rx="0.4" />
            <rect x="12.2" y="6.8" width="1.2" height="4.8" rx="0.4" />
            <rect x="14.6" y="7.5" width="1.2" height="4.1" rx="0.4" />
            <rect x="17" y="6.8" width="1.2" height="4.8" rx="0.4" />
            <rect x="19.6" y="7.4" width="1.2" height="4.2" rx="0.4" />
            <rect x="22" y="6.8" width="1.2" height="4.8" rx="0.4" />
            <rect x="24.5" y="7.3" width="1.3" height="4.3" rx="0.4" />
            <path d="M9.5 11.4 Q13.5 12.8 18 11.5 Q22 12.8 26.2 11.4 L26.2 12.6 Q22 13.9 18 12.7 Q13.5 13.9 9.5 12.6 Z" />
            <path d="M9 15.7 L23.5 15.7 L24.5 14.9 L25.6 15.7 L26.8 15.7 L26.8 16.7 L24.8 16.7 L24.5 17.5 L23.6 16.7 L10.2 16.7 L8.6 16.2 Z" />
          </g>
        </svg>
      );

    case 'QA':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="24" fill="#8D1B3D" />
          <path
            d="M0 0 L9.8 0 L12.8 1.33 L9.8 2.67 L12.8 4 L9.8 5.33 L12.8 6.67 L9.8 8 L12.8 9.33 L9.8 10.67 L12.8 12 L9.8 13.33 L12.8 14.67 L9.8 16 L12.8 17.33 L9.8 18.67 L12.8 20 L9.8 21.33 L12.8 22.67 L9.8 24 L0 24 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'KW':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="8" y="0" fill="#007A3D" />
          <rect width="36" height="8" y="8" fill="#FFFFFF" />
          <rect width="36" height="8" y="16" fill="#CE1126" />
          <path d="M0 0 L9.6 8 L9.6 16 L0 24 Z" fill="#000000" />
        </svg>
      );

    case 'BH':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="24" fill="#CE1126" />
          <path
            d="M0 0 L9.2 0 L13.4 2.4 L9.2 4.8 L13.4 7.2 L9.2 9.6 L13.4 12 L9.2 14.4 L13.4 16.8 L9.2 19.2 L13.4 21.6 L9.2 24 L0 24 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'OM':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="8" y="0" fill="#FFFFFF" />
          <rect width="36" height="8" y="8" fill="#DB161B" />
          <rect width="36" height="8" y="16" fill="#008000" />
          <rect width="10.5" height="24" x="0" y="0" fill="#DB161B" />
          {/* Stylized white national emblem in upper hoist */}
          <g stroke="#FFFFFF" strokeWidth="0.9" fill="none" strokeLinecap="round">
            <line x1="2.8" y1="2.5" x2="7.7" y2="6.7" />
            <line x1="7.7" y1="2.5" x2="2.8" y2="6.7" />
            <path d="M5.25 1.9 L5.25 6.8 Q5.25 7.6 6.2 7.4" />
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
            <path d="M0 0 L18 12" stroke="#C8102E" strokeWidth="2.1" transform="translate(0, 0.8)" />
            <path d="M18 12 L36 24" stroke="#C8102E" strokeWidth="2.1" transform="translate(0, -0.8)" />
            <path d="M36 0 L18 12" stroke="#C8102E" strokeWidth="2.1" transform="translate(-0.8, 0)" />
            <path d="M18 12 L0 24" stroke="#C8102E" strokeWidth="2.1" transform="translate(0.8, 0)" />
            <rect x="14.4" y="0" width="7.2" height="24" fill="#FFFFFF" />
            <rect x="0" y="8.4" width="36" height="7.2" fill="#FFFFFF" />
            <rect x="15.8" y="0" width="4.4" height="24" fill="#C8102E" />
            <rect x="0" y="9.8" width="36" height="4.4" fill="#C8102E" />
          </g>
        </svg>
      );

    case 'EU':
      return (
        <svg
          viewBox="0 0 36 24"
          className={baseClass}
          role={label ? 'img' : undefined}
          aria-label={label}
          aria-hidden={label ? undefined : true}
        >
          <rect width="36" height="24" fill="#003399" />
          <g fill="#FFCC00">
            {EU_STARS.map((pts, i) => (
              <polygon key={i} points={pts} />
            ))}
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
          <rect y="0" width="39" height="2" fill="#B22234" />
          <rect y="4" width="39" height="2" fill="#B22234" />
          <rect y="8" width="39" height="2" fill="#B22234" />
          <rect y="12" width="39" height="2" fill="#B22234" />
          <rect y="16" width="39" height="2" fill="#B22234" />
          <rect y="20" width="39" height="2" fill="#B22234" />
          <rect y="24" width="39" height="2" fill="#B22234" />
          <rect x="0" y="0" width="16.5" height="14" fill="#3C3B6E" />
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
