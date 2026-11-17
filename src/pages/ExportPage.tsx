import { ArrowRight, Globe2, ShieldCheck, Check } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { CountryFlag } from '../components/CountryFlag';
import { useQuoteModal } from '../context/QuoteModalContext';
import { EXPORT_DESTINATIONS, QUALITY_CREDENTIALS } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

export function ExportPage() {
  const { openQuoteModal } = useQuoteModal();
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Export', path: '/export' },
  ];

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
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#FFFCF6] leading-[1.08]">
              Taking Pakistani Quality to the World
            </h1>
            <p className="text-base sm:text-xl text-[#F7F0E3]/85 leading-relaxed">
              Butter Valley supplies artisanal spreads, recipe mixes, pure spices, Pink Himalayan
              Salt, desserts, organic Shilajit and pure saffron to international wholesale buyers.
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

      {/* Established Export Destinations */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Established Markets
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              Our Export Destinations
            </h2>
            <p className="text-base text-[#59351F] leading-relaxed">
              Direct Pakistani export supply serving importers, regional distributors and specialty
              retailers across four established international markets.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {EXPORT_DESTINATIONS.map((dest, idx) => (
              <MotionReveal
                key={dest.code}
                delay={idx * 0.06}
                className="bg-[#F7F0E3] border border-[#382319]/12 rounded-sm p-8 sm:p-10 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#382319]/12 pb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                    {dest.region}
                  </span>
                  <span className="font-serif text-2xl font-semibold text-[#C99536]">
                    {dest.code}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319] flex items-center gap-3 min-w-0">
                  <CountryFlag code={dest.code} className="w-6 h-4 sm:w-7 sm:h-[19px] shrink-0" />
                  <span className="min-w-0 leading-snug">{dest.name}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                  {dest.summary}
                </p>
              </MotionReveal>
            ))}
          </div>
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
                    fit={category.heroImageFit}
                    aspectClass="aspect-[4/3]"
                    imgClassName="group-hover:scale-[1.03]"
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
