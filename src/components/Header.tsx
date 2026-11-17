import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { acquireScrollLock } from '../utils/scrollLock';
import { COMPANY } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

export function Header() {
  const { pathname } = useRouter();
  const { openQuoteModal } = useQuoteModal();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const resetScrollOnCloseRef = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (document.body.dataset.scrollLocked === 'true') return;
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const mq = window.matchMedia('(min-width: 1024px)');
    const handleBreakpoint = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setMobileOpen(false);
      }
    };
    handleBreakpoint(mq);

    const releaseScrollLock = acquireScrollLock({
      canScrollTarget: (target) => {
        const drawer = drawerRef.current;
        if (drawer && target && drawer.contains(target)) {
          return drawer;
        }
        return null;
      },
    });

    mq.addEventListener('change', handleBreakpoint);

    return () => {
      mq.removeEventListener('change', handleBreakpoint);
      const shouldReset = resetScrollOnCloseRef.current;
      resetScrollOnCloseRef.current = false;
      releaseScrollLock({
        resetToTop: shouldReset,
        onUnlocked: () => {
          setScrolled(window.scrollY > 36);
        },
      });
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const handleMobileNavClick = () => {
    resetScrollOnCloseRef.current = true;
    setMobileOpen(false);
  };

  const isTransparent = isHome && !scrolled && !mobileOpen;

  const openDropdown = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 160);
  };

  const linkClass = (active: boolean) =>
    `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#C99536] after:transition-all after:duration-200 ${
      active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    } ${
      isTransparent
        ? active
          ? 'text-[#FFFCF6]'
          : 'text-[#F7F0E3]/90 hover:text-[#FFFCF6]'
        : active
          ? 'text-[#382319]'
          : 'text-[#59351F] hover:text-[#382319]'
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-[#28231F]/80 via-[#28231F]/45 to-transparent border-b border-transparent'
          : 'bg-[#F7F0E3]/95 backdrop-blur-md border-b border-[#382319]/10 shadow-[0_2px_18px_rgba(56,35,25,0.06)]'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] sm:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Zone */}
        <Link
          to="/"
          onClick={() => {
            if (mobileOpen) {
              resetScrollOnCloseRef.current = true;
              setMobileOpen(false);
            }
          }}
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99536] rounded-sm"
          aria-label="Butter Valley Ltd. Home"
        >
          <div className="h-14 w-[54px] sm:h-16 sm:w-[62px] rounded-md overflow-hidden bg-black p-1 ring-1 ring-[#C99536]/50 shrink-0">
            <img
              src={COMPANY.logo}
              alt="Butter Valley Co. Spread The Love logo"
              width={400}
              height={415}
              loading="eager"
              decoding="sync"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span
            className={`font-serif text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap shrink-0 transition-colors ${
              isTransparent ? 'text-[#FFFCF6]' : 'text-[#382319]'
            }`}
          >
            Butter Valley
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 xl:gap-7">
          <Link to="/" className={linkClass(pathname === '/')}>
            Home
          </Link>
          <Link to="/about" className={linkClass(pathname === '/about')}>
            About Us
          </Link>

          {/* Products Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/products"
                className={linkClass(pathname.startsWith('/products'))}
              >
                Our Products
              </Link>
              <button
                type="button"
                aria-label="Toggle product categories menu"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                className={`p-1 rounded transition-colors ${
                  isTransparent
                    ? 'text-[#F7F0E3]/85 hover:text-[#FFFCF6]'
                    : 'text-[#59351F] hover:text-[#382319]'
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {dropdownOpen && (
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleCloseDropdown}
                className="absolute left-0 top-full pt-3 w-72"
              >
                <div className="bg-[#FFFCF6] border border-[#382319]/12 rounded-md shadow-[0_18px_40px_rgba(56,35,25,0.14)] py-2 overflow-hidden">
                  <Link
                    to="/products"
                    className="block px-4 py-2.5 text-sm font-medium text-[#382319] hover:bg-[#F7F0E3] border-b border-[#382319]/8 transition-colors"
                  >
                    All Product Categories
                  </Link>
                  <div className="py-1">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        to={category.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === category.path
                            ? 'bg-[#F7F0E3] text-[#382319] font-medium'
                            : 'text-[#59351F] hover:bg-[#F7F0E3]/70 hover:text-[#382319]'
                        }`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/quality" className={linkClass(pathname === '/quality')}>
            Quality &amp; Certifications
          </Link>
          <Link to="/export" className={linkClass(pathname === '/export')}>
            Export
          </Link>
          <Link to="/contact" className={linkClass(pathname === '/contact')}>
            Contact
          </Link>
        </nav>

        {/* Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99536]"
          >
            Request a Quote
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm transition-colors ${
              isTransparent
                ? 'text-[#FFFCF6] hover:bg-white/10'
                : 'text-[#382319] hover:bg-[#382319]/8'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop + Drawer */}
      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-x-0 top-[72px] sm:top-20 bottom-0 bg-[#1d140f]/40 touch-none"
          />
          <div
            ref={drawerRef}
            className="lg:hidden relative z-10 bg-[#FFFCF6] border-t border-[#382319]/10 shadow-xl max-h-[calc(100dvh-72px)] sm:max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain touch-pan-y"
          >
            <nav aria-label="Mobile navigation" className="px-5 py-6 flex flex-col gap-1">
              <Link
                to="/"
                onClick={handleMobileNavClick}
                className={`py-3 text-base font-medium border-b border-[#382319]/8 ${
                  pathname === '/' ? 'text-[#C99536]' : 'text-[#382319]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleMobileNavClick}
                className={`py-3 text-base font-medium border-b border-[#382319]/8 ${
                  pathname === '/about' ? 'text-[#C99536]' : 'text-[#382319]'
                }`}
              >
                About Us
              </Link>

              <div className="border-b border-[#382319]/8">
                <div className="flex items-center justify-between">
                  <Link
                    to="/products"
                    onClick={handleMobileNavClick}
                    className={`py-3 text-base font-medium flex-1 ${
                      pathname.startsWith('/products') ? 'text-[#C99536]' : 'text-[#382319]'
                    }`}
                  >
                    Our Products
                  </Link>
                  <button
                    type="button"
                    aria-label="Expand product categories"
                    aria-expanded={mobileProductsOpen}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                    className="p-3 text-[#59351F]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileProductsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileProductsOpen && (
                  <div className="pb-3 pl-4 flex flex-col gap-1">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        to={category.path}
                        onClick={handleMobileNavClick}
                        className={`py-2 text-sm ${
                          pathname === category.path
                            ? 'text-[#C99536] font-medium'
                            : 'text-[#59351F]'
                        }`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/quality"
                onClick={handleMobileNavClick}
                className={`py-3 text-base font-medium border-b border-[#382319]/8 ${
                  pathname === '/quality' ? 'text-[#C99536]' : 'text-[#382319]'
                }`}
              >
                Quality &amp; Certifications
              </Link>
              <Link
                to="/export"
                onClick={handleMobileNavClick}
                className={`py-3 text-base font-medium border-b border-[#382319]/8 ${
                  pathname === '/export' ? 'text-[#C99536]' : 'text-[#382319]'
                }`}
              >
                Export
              </Link>
              <Link
                to="/contact"
                onClick={handleMobileNavClick}
                className={`py-3 text-base font-medium border-b border-[#382319]/8 ${
                  pathname === '/contact' ? 'text-[#C99536]' : 'text-[#382319]'
                }`}
              >
                Contact
              </Link>

              <div className="pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
