import { Link } from '../context/RouterContext';
import type { BreadcrumbItem } from './SeoHead';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  tone?: 'light' | 'dark';
}

export function Breadcrumbs({ items, tone = 'dark' }: BreadcrumbsProps) {
  const mutedText = tone === 'light' ? 'text-[#F7F0E3]/75' : 'text-[#59351F]/75';
  const activeText = tone === 'light' ? 'text-[#FFFCF6]' : 'text-[#382319] font-medium';
  const hoverText = tone === 'light' ? 'hover:text-[#C99536]' : 'hover:text-[#C99536]';

  return (
    <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm ${mutedText}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-2">
              {idx > 0 && (
                <span aria-hidden="true" className="opacity-50">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className={activeText}>
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className={`transition-colors ${hoverText}`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
