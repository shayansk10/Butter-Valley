import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';
import { COUNTRIES } from '../data/countries';

interface CountrySelectProps {
  id: string;
  value: string;
  onChange: (country: string) => void;
  hasError?: boolean;
  ariaDescribedBy?: string;
}

export function CountrySelect({
  id,
  value,
  onChange,
  hasError = false,
  ariaDescribedBy,
}: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredCountries = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((country) => country.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    // Focus search box cleanly on open without jumping scroll
    const timer = window.setTimeout(() => {
      searchInputRef.current?.focus({ preventScroll: true });
    }, 20);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [open]);

  const handleSelect = (country: string) => {
    onChange(country);
    setQuery('');
    setOpen(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredCountries.length > 0) {
      e.preventDefault();
      handleSelect(filteredCountries[0]);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-describedby={ariaDescribedBy}
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full min-h-[46px] px-4 py-3 bg-[#FFFCF6] border rounded-sm text-left text-sm flex items-center justify-between gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C99536]/50 ${
          hasError
            ? 'border-[#8B2E2E]'
            : open
              ? 'border-[#C99536]'
              : 'border-[#382319]/20 hover:border-[#382319]/40'
        }`}
      >
        <span className={value ? 'text-[#28231F] truncate' : 'text-[#59351F]/45 truncate'}>
          {value || 'Select your country'}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#59351F] shrink-0 transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="mt-1.5 w-full bg-[#FFFCF6] border border-[#382319]/20 rounded-sm shadow-[0_12px_28px_rgba(56,35,25,0.1)] overflow-hidden">
          <div className="p-2 border-b border-[#382319]/10 bg-[#F7F0E3]/55 flex items-center gap-2">
            <Search className="w-4 h-4 text-[#59351F]/70 shrink-0 ml-1" />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search country..."
              aria-label="Search country"
              className="w-full bg-transparent text-sm text-[#28231F] placeholder:text-[#59351F]/45 py-1.5 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear country search"
                onClick={() => setQuery('')}
                className="p-1 text-[#59351F]/70 hover:text-[#382319]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <ul
            ref={listRef}
            role="listbox"
            aria-label="Country options"
            data-scroll-container="true"
            className="max-h-52 overflow-y-auto overscroll-contain touch-pan-y divide-y divide-[#382319]/6"
          >
            {filteredCountries.length === 0 ? (
              <li className="px-4 py-3 text-sm text-[#59351F]/75">No matching countries found.</li>
            ) : (
              filteredCountries.map((country) => {
                const isSelected = country === value;
                return (
                  <li key={country} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => handleSelect(country)}
                      className={`w-full min-h-[44px] px-4 py-2.5 text-left text-sm flex items-center justify-between gap-2 transition-colors ${
                        isSelected
                          ? 'bg-[#F7F0E3] text-[#382319] font-medium'
                          : 'text-[#28231F] hover:bg-[#F7F0E3]/65'
                      }`}
                    >
                      <span className="truncate">{country}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#C99536] shrink-0" />}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
