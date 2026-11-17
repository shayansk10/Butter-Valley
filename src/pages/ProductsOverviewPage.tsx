import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PRODUCT_CATEGORIES } from '../data/products';

export function ProductsOverviewPage() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
  ];

  const visibleCategories =
    selectedFilter === 'all'
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.id === selectedFilter);

  return (
    <>
      <SeoHead
        title="Our Products | Wholesale Food & Pink Himalayan Salt Catalogue | Butter Valley Ltd."
        description="Explore Butter Valley's six export categories: Nut Butters & Spreads, Recipe Mixes, Pure Spices, Pink Himalayan Salt, Desserts & Pantry Staples, and Organic Shilajit & Pure Saffron."
        path="/products"
        breadcrumbs={breadcrumbs}
      />

      {/* Catalogue Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Wholesale &amp; Export Catalogue
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#382319] leading-[1.08]">
                Our Products
              </h1>
              <p className="text-base sm:text-lg text-[#59351F] leading-relaxed">
                Six core product divisions manufactured in SITE Hyderabad and sourced from Khewra,
                Pakistan for international wholesale buyers, distributors and retail shelves.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shrink-0"
            >
              Request Wholesale Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-[#382319] text-[#FFFCF6]'
                  : 'bg-[#FFFCF6] text-[#59351F] border border-[#382319]/15 hover:border-[#382319]'
              }`}
            >
              All Categories ({PRODUCT_CATEGORIES.length})
            </button>
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedFilter(category.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap ${
                  selectedFilter === category.id
                    ? 'bg-[#382319] text-[#FFFCF6]'
                    : 'bg-[#FFFCF6] text-[#59351F] border border-[#382319]/15 hover:border-[#382319]'
                }`}
              >
                {category.shortName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {visibleCategories.map((category, idx) => (
            <MotionReveal
              key={category.id}
              delay={idx * 0.04}
              className="bg-[#F7F0E3]/55 border border-[#382319]/12 rounded-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <Link
                  to={category.path}
                  className="lg:col-span-5 block overflow-hidden group"
                >
                  <ProductMediaFrame
                    src={category.heroImage}
                    alt={category.heroAlt}
                    fit={category.heroImageFit}
                    aspectClass="aspect-[4/5] lg:h-full lg:aspect-auto min-h-[320px]"
                    imgClassName="group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <p className="text-xs font-medium text-[#78836A]">
                      Category 0{PRODUCT_CATEGORIES.findIndex((c) => c.id === category.id) + 1} ·{' '}
                      {category.kicker}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
                      {category.name}
                    </h2>
                    <p className="text-base text-[#59351F] leading-relaxed">
                      {category.fullDescription}
                    </p>

                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#382319]/10">
                      {category.specifications.slice(0, 4).map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-xs font-medium text-[#78836A]">{spec.label}</dt>
                          <dd className="text-sm font-medium text-[#382319] mt-0.5">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      to={category.path}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-[#382319] text-[#FFFCF6] hover:bg-[#59351F] transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => openQuoteModal()}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm border border-[#C99536] text-[#382319] hover:bg-[#C99536] hover:text-[#FFFCF6] transition-colors"
                    >
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      <CtaBand
        headline="Need Custom Cartons or Mixed Container Inquiries?"
        description="Share your target market and product mix with our export team for wholesale carton allocations, export documentation and destination quotations."
        buttonLabel="Request a Quote"
        onButtonClick={() => openQuoteModal()}
        variant="brown"
      />
    </>
  );
}
