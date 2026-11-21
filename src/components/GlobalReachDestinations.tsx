import { MotionReveal } from './MotionReveal';
import { CountryFlag, type ExportCountryCode } from './CountryFlag';
import { GLOBAL_REACH_REGIONS } from '../data/company';

interface DestinationItem {
  readonly name: string;
  readonly code: ExportCountryCode;
  readonly region: string;
  readonly summary: string;
}

function DestinationCard({
  dest,
  delay = 0,
  isDark = false,
}: {
  dest: DestinationItem;
  delay?: number;
  isDark?: boolean;
}) {
  return (
    <MotionReveal
      delay={delay}
      className={`h-full p-6 sm:p-7 rounded-sm border flex flex-col justify-between space-y-3 transition-all duration-300 hover:-translate-y-0.5 ${
        isDark
          ? 'bg-[#2C1B13]/92 border-[#C99536]/24 hover:border-[#C99536]/65 hover:shadow-[0_14px_30px_rgba(0,0,0,0.35)]'
          : 'bg-[#F7F0E3] border-[#382319]/12 hover:border-[#C99536]/55 hover:shadow-[0_14px_30px_rgba(56,35,25,0.08)]'
      }`}
    >
      <div className="space-y-3">
        <div
          className={`flex items-center justify-between gap-2 border-b pb-3 ${
            isDark ? 'border-[#C99536]/18' : 'border-[#382319]/10'
          }`}
        >
          <span
            className={`text-xs font-medium uppercase tracking-wider truncate ${
              isDark ? 'text-[#C99536]/90' : 'text-[#78836A]'
            }`}
          >
            {dest.region}
          </span>
          <span className="text-xs font-semibold tracking-widest text-[#C99536] shrink-0">
            {dest.code}
          </span>
        </div>
        <h4
          className={`font-serif text-xl sm:text-2xl font-semibold flex items-center gap-2.5 min-w-0 ${
            isDark ? 'text-[#FFFCF6]' : 'text-[#382319]'
          }`}
        >
          <CountryFlag code={dest.code} className="w-6 h-4 shrink-0" />
          <span className="min-w-0 leading-snug break-words">{dest.name}</span>
        </h4>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-[#F7F0E3]/82' : 'text-[#59351F]'}`}>
          {dest.summary}
        </p>
      </div>
    </MotionReveal>
  );
}

export function GlobalReachDestinations({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  const headingClass = isDark
    ? 'font-serif text-2xl sm:text-3xl font-semibold text-[#FFFCF6] shrink-0'
    : 'font-serif text-2xl sm:text-3xl font-semibold text-[#382319] shrink-0';
  const dividerClass = isDark ? 'h-px flex-1 bg-[#C99536]/22' : 'h-px flex-1 bg-[#382319]/12';

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Middle East / GCC */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <h3 className={headingClass}>{GLOBAL_REACH_REGIONS.gcc.title}</h3>
          <div className={dividerClass} aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {GLOBAL_REACH_REGIONS.gcc.destinations.map((dest, idx) => (
            <DestinationCard key={dest.code} dest={dest} delay={idx * 0.04} isDark={isDark} />
          ))}
        </div>
      </div>

      {/* Europe & North America */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-5 items-stretch">
        {/* Europe (United Kingdom + European Markets) */}
        <div className="lg:col-span-8 flex flex-col space-y-5">
          <div className="flex items-center gap-4">
            <h3 className={headingClass}>{GLOBAL_REACH_REGIONS.europe.title}</h3>
            <div className={dividerClass} aria-hidden="true" />
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {GLOBAL_REACH_REGIONS.europe.destinations.map((dest, idx) => (
              <DestinationCard key={dest.code} dest={dest} delay={idx * 0.05} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* North America (United States retained) */}
        <div className="lg:col-span-4 flex flex-col space-y-5">
          <div className="flex items-center gap-4">
            <h3 className={headingClass}>{GLOBAL_REACH_REGIONS.northAmerica.title}</h3>
            <div className={dividerClass} aria-hidden="true" />
          </div>
          <div className="flex-1 grid grid-cols-1 gap-4 sm:gap-5">
            {GLOBAL_REACH_REGIONS.northAmerica.destinations.map((dest, idx) => (
              <DestinationCard key={dest.code} dest={dest} delay={idx * 0.05} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
