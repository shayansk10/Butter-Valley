import { useEffect } from 'react';
import { ArrowRight, Globe2, ShieldCheck, Check, PackageCheck, Ship } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { GlobalReachDestinations } from '../components/GlobalReachDestinations';
import { CountryFlag } from '../components/CountryFlag';
import { StockOperationsGallery } from '../components/StockOperationsGallery';
import { useQuoteModal } from '../context/QuoteModalContext';
import { EXPORT_DESTINATIONS, QUALITY_CREDENTIALS } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';
import { EXPORT_OPERATIONS_CONTENT } from '../data/operationsGallery';

export function ExportPage() {
  const { openQuoteModal } = useQuoteModal();
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Export', path: '/export' },
  ];

  useEffect(() => {
    if (window.location.hash !== '#export-operations') return;
    const timer = window.setTimeout(() => {
      document.getElementById('export-operations')?.scrollIntoView({ behavior: 'smooth' });
    }, 260);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <SeoHead
        title="Export Network | Pakistani Food & Pink Salt Exports to UAE, KSA, UK & USA | Butter Valley Ltd."
        description="Butter Valley exports Pink Himalayan Salt, artisanal nut spreads, recipe mixes, pure spices, desserts, organic Shilajit and saffron to the UAE, Saudi Arabia, UK and USA."
        path="/export"
        breadcrumbs={breadcrumbs}
      />

      {/* Export Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#382319] text-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} tone="light" />
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              <Globe2 className="w-4 h-4" />
              <span>International Wholesale Trade</span>
            </div>
            <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#FFFCF6] leading-[1.14] sm:leading-[1.1]">
              Taking Pakistani Quality to the World
            </h1>
            <p className="text-base sm:text-xl text-[#F7F0E3]/85 leading-relaxed">
              Butter Valley supplies artisanal spreads, recipe mixes, pure spices, Pink Himalayan
              Salt, desserts, organic Salajit and pure Zafraan to international wholesale buyers.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors"
              >
                Request an Export Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <MotionReveal className="lg:col-span-5 space-y-4">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Proven International Experience
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Export Capabilities
              </h2>
              <p className="text-base text-[#59351F] leading-relaxed">
                With direct origin sourcing from the Khewra Salt Mine and manufacturing at SITE
                Hyderabad, R&amp;J Butter Valley brings practical product export experience across
                international retail and bulk wholesale channels.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm text-[#382319]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C99536] shrink-0 mt-0.5" />
                  <span>PSW Registered Exporter (UN-00-4901518) · NTN 4901518</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C99536] shrink-0 mt-0.5" />
                  <span>Halal Certification (htc/RJBV/2022/1) &amp; PCSIR Test Report (ILD/ATR/2022-17512)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C99536] shrink-0 mt-0.5" />
                  <span>Chamber of Commerce Membership (1045) for institutional buyer confidence</span>
                </li>
              </ul>
            </MotionReveal>

            <MotionReveal delay={0.08} className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-6 space-y-2.5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#C99536]">
                    01 · Food &amp; Pantry Range
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#382319]">
                    Retail &amp; Wholesale Packaging
                  </h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">
                    Export-ready sealed jars (12 units/carton), shelf-friendly 75g recipe &amp; dessert
                    packs, 400g spice cartons (24 units/carton) and sealed glass jars.
                  </p>
                </div>

                <div className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-6 space-y-2.5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#C99536]">
                    02 · Mineral Supply
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#382319]">
                    Bulk Grades &amp; Salt Lamps
                  </h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">
                    Edible, spa, de-icing and industrial Pink Himalayan Salt grades alongside carved
                    ambient salt lamps prepared for international shipment.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-6 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#382319]/10 pb-3">
                  <h3 className="font-serif text-xl font-semibold text-[#382319]">
                    Established Product Export Experience
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                    Active Corridors
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXPORT_DESTINATIONS.map((dest) => (
                    <div
                      key={dest.code}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-sm bg-[#F7F0E3]/80 border border-[#382319]/10"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <CountryFlag code={dest.code} className="w-6 h-4 shrink-0" />
                        <span className="font-serif text-lg font-semibold text-[#382319] truncate">
                          {dest.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold tracking-widest text-[#C99536] shrink-0">
                        {dest.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* International Export Destinations */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              International Markets
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              Our Export Destinations
            </h2>
            <p className="text-base text-[#59351F] leading-relaxed">
              Serving established wholesale channels and expanding international trade outreach across
              the Middle East / GCC, the United Kingdom, European Markets and the United States.
            </p>
          </MotionReveal>

          <GlobalReachDestinations />
        </div>
      </section>

      {/* Product Export Portfolio */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <MotionReveal className="max-w-2xl space-y-3">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Exportable Range
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
                Product Export Portfolio
              </h2>
            </MotionReveal>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors"
            >
              Explore Full Specifications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <MotionReveal
                key={category.id}
                delay={idx * 0.04}
                className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm overflow-hidden flex flex-col"
              >
                <Link to={category.path} className="block group overflow-hidden">
                  <ProductMediaFrame
                    src={category.heroImage}
                    alt={category.heroAlt}
                    fit="contain"
                    aspectClass="aspect-square"
                    imgClassName="object-center group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                      <Link to={category.path} className="hover:text-[#C99536] transition-colors">
                        {category.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#59351F] leading-relaxed">
                      {category.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={category.path}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors"
                  >
                    View Export Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export Quality Highlights */}
      <section className="py-20 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <MotionReveal className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#C99536]">
                <ShieldCheck className="w-4 h-4" />
                <span>Compliance Readiness</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
                Quality Highlights for International Buyers
              </h2>
              <p className="text-base text-[#59351F] leading-relaxed">
                Every wholesale shipment is prepared with verifiable documentation and direct
                manufacturer oversight from SITE Hyderabad and Khewra.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.08} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUALITY_CREDENTIALS.map((cred) => (
                <div
                  key={cred.title}
                  className="p-5 bg-[#F7F0E3]/60 border border-[#382319]/10 rounded-sm flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-[#C99536] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#382319]">
                      {cred.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#59351F] mt-1 leading-relaxed">
                      {cred.summary}
                    </p>
                  </div>
                </div>
              ))}
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Our Stock & Export Operations */}
      <section
        id="export-operations"
        className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-24 bg-[#F7F0E3] border-t border-[#382319]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              <PackageCheck className="w-4 h-4" />
              <span>{EXPORT_OPERATIONS_CONTENT.subheading}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              {EXPORT_OPERATIONS_CONTENT.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#59351F] leading-relaxed">
              {EXPORT_OPERATIONS_CONTENT.description}
            </p>
          </MotionReveal>

          <StockOperationsGallery />
        </div>
      </section>

      {/* Global Sea Freight & Container Shipping */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6] border-t border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <MotionReveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                <Ship className="w-4 h-4" />
                <span>Sea Freight System · Container Logistics</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Global Sea Freight &amp; Container Shipping
              </h2>

              <p className="text-base sm:text-lg text-[#59351F] leading-relaxed">
                Butter Valley supports international export shipments through sea freight and
                container-based cargo transportation for deliveries to different international
                destinations. With access to 20 ft and 40 ft container availability from Karachi and
                Lahore, wholesale orders can be coordinated cleanly for ocean transit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#F7F0E3]/75 border border-[#382319]/12 rounded-sm p-5 space-y-1.5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#C99536]">
                    Container Sizes
                  </p>
                  <p className="font-serif text-xl font-semibold text-[#382319]">
                    20 ft &amp; 40 ft Containers
                  </p>
                  <p className="text-xs sm:text-sm text-[#59351F]">
                    Container availability in Karachi &amp; Lahore
                  </p>
                </div>

                <div className="bg-[#F7F0E3]/75 border border-[#382319]/12 rounded-sm p-5 space-y-1.5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#C99536]">
                    Cargo Mode
                  </p>
                  <p className="font-serif text-xl font-semibold text-[#382319]">
                    International Sea Freight
                  </p>
                  <p className="text-xs sm:text-sm text-[#59351F]">
                    Container-based ocean cargo transportation
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F0E3]/55 border border-[#382319]/12 rounded-sm p-5 sm:p-6 space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                  Referenced Container Shipping Destinations
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-[#382319]">
                  {[
                    'Malaysia',
                    'Indonesia',
                    'Vietnam',
                    'Korea',
                    'Thailand',
                    'Sri Lanka',
                    'Japan',
                    'Saudi Arabia',
                    'China',
                    'Singapore',
                    'Bangladesh',
                  ].map((country) => (
                    <div key={country} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C99536] shrink-0" />
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#382319] text-[#FFFCF6] hover:bg-[#59351F] transition-colors shadow-sm"
                >
                  Request Sea Freight Export Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08} className="lg:col-span-6">
              <div className="max-w-lg mx-auto lg:max-w-none bg-[#F7F0E3] border border-[#382319]/15 rounded-sm p-3 sm:p-4 shadow-[0_20px_48px_rgba(56,35,25,0.12)]">
                <img
                  src="/assets/aistudio/Sea_Freight_Container_Availability_Poster_2310a7fa.png"
                  alt="Sea Freight System poster showing 20/40 ft containers available in Karachi and Lahore for Malaysia, Indonesia, Vietnam, Korea, Thailand, Sri Lanka, Japan, Saudi Arabia, China, Singapore, and Bangladesh"
                  width={1187}
                  height={1326}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block rounded-sm"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Looking for a Reliable Pakistani Export Partner?"
        description="Connect with Butter Valley Ltd. to discuss wholesale carton pricing, destination requirements and product samples."
        buttonLabel="Request a Quote"
        onButtonClick={() => openQuoteModal()}
        secondaryLabel="View Quality Standards"
        secondaryTo="/quality"
        variant="brown"
      />
    </>
  );
}
