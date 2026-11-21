import { Mail, MapPin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

export function Footer() {
  const { openQuoteModal } = useQuoteModal();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#382319] text-[#F7F0E3] border-t border-[#C99536]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="h-20 w-[77px] rounded-md overflow-hidden bg-black p-1 ring-1 ring-[#C99536]/60 shrink-0">
                <img
                  src={COMPANY.logo}
                  alt="Butter Valley Co. Spread The Love logo"
                  width={400}
                  height={415}
                  decoding="sync"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-serif text-2xl font-semibold text-[#FFFCF6] tracking-tight">
                  {COMPANY.name}
                </div>
                <div className="text-xs tracking-wider uppercase text-[#C99536]">
                  {COMPANY.tagline}
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#F7F0E3]/80 max-w-sm">
              A Pakistani food manufacturer and international exporter based in Hyderabad, Sindh,
              supplying Pink Himalayan Salt, artisanal nut spreads, pure spices, recipe mixes,
              desserts and organic wellness products.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Butter Valley Ltd. on Facebook"
                className="w-10 h-10 rounded-full border border-[#F7F0E3]/20 flex items-center justify-center text-[#F7F0E3] hover:border-[#C99536] hover:text-[#C99536] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Butter Valley Ltd. on Instagram"
                className="w-10 h-10 rounded-full border border-[#F7F0E3]/20 flex items-center justify-center text-[#F7F0E3] hover:border-[#C99536] hover:text-[#C99536] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#FFFCF6]">Company</h3>
            <ul className="space-y-2.5 text-sm text-[#F7F0E3]/80">
              <li>
                <Link to="/" className="hover:text-[#C99536] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C99536] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#C99536] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="hover:text-[#C99536] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#C99536] transition-colors">
                  Quality &amp; Certifications
                </Link>
              </li>
              <li>
                <Link to="/export" className="hover:text-[#C99536] transition-colors">
                  Export Network
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C99536] transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#FFFCF6]">Product Portfolio</h3>
            <ul className="space-y-2.5 text-sm text-[#F7F0E3]/80">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link to={category.path} className="hover:text-[#C99536] transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Desk & Address */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#FFFCF6]">Export Desk</h3>
            <div className="space-y-3.5 text-sm text-[#F7F0E3]/80">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C99536] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#C99536] transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99536] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </div>
              {COMPANY.phone && (
                <p className="text-xs text-[#F7F0E3]/75">Telephone: {COMPANY.phone}</p>
              )}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C99536] hover:text-[#FFFCF6] transition-colors"
                >
                  Request a Wholesale Quote
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#F7F0E3]/12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#F7F0E3]/65">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p>
              &copy; {year} {COMPANY.name} All rights reserved.
            </p>
            <span className="hidden sm:inline text-[#F7F0E3]/30" aria-hidden="true">
              ·
            </span>
            <p>SITE Hyderabad, Sindh, Pakistan · Halal &amp; PCSIR Supported Exports</p>
          </div>
          <nav aria-label="Legal navigation" className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Link
              to="/privacy-policy"
              className="py-2 min-h-[36px] inline-flex items-center text-[#F7F0E3]/80 hover:text-[#C99536] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="py-2 min-h-[36px] inline-flex items-center text-[#F7F0E3]/80 hover:text-[#C99536] transition-colors underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>

        <div className="mt-5 pt-4 border-t border-[#F7F0E3]/8 text-center">
          <p className="text-[11px] sm:text-xs tracking-wide text-[#F7F0E3]/55">
            Made by{' '}
            <a
              href="https://www.instagram.com/solve_xsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#C99536]/90 hover:text-[#FFFCF6] underline-offset-4 hover:underline transition-colors"
            >
              Solvex Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
