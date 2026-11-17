import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Check, Globe2, ShieldCheck, Package } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { CountryFlag } from '../components/CountryFlag';
import { useQuoteModal } from '../context/QuoteModalContext';
import { EXPORT_DESTINATIONS } from '../data/company';
import { PRODUCT_CATEGORIES, type ProductCategory } from '../data/products';

interface ProductDetailPageProps {
  category: ProductCategory;
}

export function ProductDetailPage({ category }: ProductDetailPageProps) {
  const { openQuoteModal } = useQuoteModal();
  const [selectedSkuIdx, setSelectedSkuIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    setSelectedSkuIdx(0);
    setOpenFaqIdx(0);
  }, [category.id]);

  const activeSku = category.skus[selectedSkuIdx] || category.skus[0];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: category.name, path: category.path },
  ];

  const relatedCategories = PRODUCT_CATEGORIES.filter((c) => c.id !== category.id).slice(0, 3);

  return (
    <>
      <SeoHead
        title={category.seoTitle}
        description={category.seoDescription}
        path={category.path}
        image={category.heroImage}
        breadcrumbs={breadcrumbs}
        productSchema={{
          name: category.name,
          description: category.fullDescription,
          image: category.heroImage,
          category: category.kicker,
        }}
      />

      {/* Product Hero & Interactive Showcase */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Primary Photography + Variant Selector */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-sm overflow-hidden border border-[#382319]/12 shadow-[0_20px_48px_rgba(56,35,25,0.12)]">
                <ProductMediaFrame
                  src={activeSku ? activeSku.image : category.heroImage}
                  alt={activeSku ? `${category.name} — ${activeSku.name}` : category.heroAlt}
                  fit={activeSku ? activeSku.imageFit : category.heroImageFit}
                  aspectClass="aspect-[4/5]"
                  priority
                />
              </div>

              {activeSku && (
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#59351F] px-1">
                  <span className="font-medium text-[#382319]">{activeSku.name}</span>
                  {activeSku.note && <span>{activeSku.note}</span>}
                </div>
              )}

              {category.skus.length > 1 && (
                <div className="pt-2">
                  <p className="text-xs font-medium text-[#78836A] uppercase tracking-wider mb-3">
                    Supplied Varieties ({category.skus.length})
                  </p>
                  <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-5 gap-2.5">
                    {category.skus.map((sku, idx) => {
                      const isActive = idx === selectedSkuIdx;
                      return (
                        <button
                          key={sku.name}
                          type="button"
                          onClick={() => setSelectedSkuIdx(idx)}
                          title={sku.name}
                          className={`group text-left rounded-sm overflow-hidden border transition-all ${
                            isActive
                              ? 'border-[#C99536] ring-2 ring-[#C99536]/35'
                              : 'border-[#382319]/15 hover:border-[#382319]/45 opacity-85 hover:opacity-100'
                          }`}
                        >
                          <ProductMediaFrame
                            src={sku.image}
                            alt={sku.name}
                            fit={sku.imageFit}
                            aspectClass="aspect-[4/5]"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Product Overview & Contiguous Inquiry Module */}
            <div className="lg:col-span-6 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  {category.kicker}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#382319] leading-[1.08]">
                  {category.name}
                </h1>
                <p className="text-base sm:text-lg text-[#59351F] leading-relaxed">
                  {category.fullDescription}
                </p>
              </div>

              {/* Category Highlights / Uses */}
              {category.highlights.length > 0 && (
                <div className="pt-5 border-t border-[#382319]/12 space-y-3">
                  <h2 className="font-serif text-xl font-semibold text-[#382319]">
                    {category.highlightsTitle || 'Key Highlights'}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[#382319]"
                      >
                        <Check className="w-4 h-4 text-[#C99536] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Export Specifications */}
              <div className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-6 space-y-4">
                <h2 className="font-serif text-xl font-semibold text-[#382319]">
                  Product Specifications
                </h2>
                <dl className="divide-y divide-[#382319]/10">
                  {category.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-sm"
                    >
                      <dt className="text-[#59351F] shrink-0">{spec.label}</dt>
                      {spec.label === 'Export Markets' ? (
                        <dd className="font-medium text-[#382319] flex flex-wrap sm:justify-end gap-x-3 gap-y-1.5">
                          {EXPORT_DESTINATIONS.map((dest) => (
                            <span
                              key={dest.code}
                              className="inline-flex items-center gap-1.5 whitespace-nowrap"
                            >
                              <CountryFlag code={dest.code} className="w-[18px] h-3" />
                              <span>{dest.code === 'AE' ? 'UAE' : dest.name}</span>
                            </span>
                          ))}
                        </dd>
                      ) : (
                        <dd className="font-medium text-[#382319] sm:text-right">{spec.value}</dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal(activeSku ? activeSku.name : undefined)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm"
                >
                  Request a Quote for {activeSku ? activeSku.name : category.shortName}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium rounded-sm border border-[#382319]/25 text-[#382319] hover:border-[#382319] transition-colors"
                >
                  All Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Category-Specific Section: Nut Butters 5-Step Production Process */}
      {category.processSteps && category.processSteps.length > 0 && (
        <section className="py-20 bg-[#FFFCF6] border-b border-[#382319]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <MotionReveal className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Manufacturing Craft
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
                Five-Stage Production Process
              </h2>
            </MotionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {category.processSteps.map((step, i) => (
                <MotionReveal
                  key={step.step}
                  delay={i * 0.05}
                  className="p-6 bg-[#F7F0E3]/65 border border-[#382319]/10 rounded-sm space-y-2.5"
                >
                  <h3 className="font-serif text-xl font-semibold text-[#382319]">{step.step}</h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">{step.detail}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional Category-Specific Section: Pink Himalayan Salt 4 Applications */}
      {category.applications && category.applications.length > 0 && (
        <section className="py-20 bg-[#FFFCF6] border-b border-[#382319]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <MotionReveal className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Khewra Mineral Grades
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
                Four Product Applications
              </h2>
            </MotionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.applications.map((app, idx) => (
                <MotionReveal
                  key={app.name}
                  delay={idx * 0.06}
                  className="p-7 bg-[#F7F0E3] border border-[#382319]/10 rounded-sm space-y-3"
                >
                  <span className="text-xs font-medium text-[#C99536] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#382319]">{app.name}</h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">{app.detail}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Range Gallery when category has multiple SKUs */}
      {category.skus.length > 1 && (
        <section className="py-20 bg-[#FFFCF6] border-b border-[#382319]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <MotionReveal className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Complete Lineup
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
                Available Varieties in {category.name}
              </h2>
            </MotionReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
              {category.skus.map((sku, idx) => (
                <MotionReveal
                  key={sku.name}
                  delay={Math.min(idx * 0.03, 0.25)}
                  className="group bg-[#F7F0E3]/45 border border-[#382319]/10 rounded-sm overflow-hidden flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSkuIdx(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left w-full flex-1 flex flex-col"
                  >
                    <ProductMediaFrame
                      src={sku.image}
                      alt={sku.name}
                      fit={sku.imageFit}
                      aspectClass="aspect-[4/5]"
                      imgClassName="group-hover:scale-[1.03]"
                    />
                    <div className="p-4 space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#382319] group-hover:text-[#C99536] transition-colors">
                        {sku.name}
                      </h3>
                      {sku.note && <p className="text-xs text-[#59351F]">{sku.note}</p>}
                    </div>
                  </button>
                  <div className="px-4 pb-4 pt-1">
                    <button
                      type="button"
                      onClick={() => openQuoteModal(sku.name)}
                      className="w-full min-h-[38px] inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-sm border border-[#C99536]/60 text-[#382319] bg-[#FFFCF6] hover:bg-[#C99536] hover:text-[#FFFCF6] transition-colors"
                    >
                      Request a Quote
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packaging, Quality & Export Grid */}
      <section className="py-20 bg-[#F7F0E3]/65 border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Packaging */}
          <MotionReveal className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm p-7 space-y-4">
            <div className="flex items-center gap-2.5 text-[#382319]">
              <Package className="w-5 h-5 text-[#C99536]" />
              <h2 className="font-serif text-2xl font-semibold">Available Packaging</h2>
            </div>
            <dl className="divide-y divide-[#382319]/10">
              {category.packagingInfo.map((item) => (
                <div key={item.label} className="py-3 space-y-1">
                  <dt className="text-xs font-medium text-[#78836A]">{item.label}</dt>
                  {item.label === 'Export Markets' ? (
                    <dd className="text-sm text-[#382319] leading-relaxed flex flex-wrap gap-x-3.5 gap-y-1.5 pt-0.5">
                      {EXPORT_DESTINATIONS.map((dest) => (
                        <span
                          key={dest.code}
                          className="inline-flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <CountryFlag code={dest.code} className="w-[18px] h-3" />
                          <span>{dest.code === 'AE' ? 'UAE' : dest.name}</span>
                        </span>
                      ))}
                    </dd>
                  ) : (
                    <dd className="text-sm text-[#382319] leading-relaxed">{item.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          </MotionReveal>

          {/* Quality Highlights */}
          <MotionReveal
            delay={0.06}
            className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm p-7 space-y-4"
          >
            <div className="flex items-center gap-2.5 text-[#382319]">
              <ShieldCheck className="w-5 h-5 text-[#C99536]" />
              <h2 className="font-serif text-2xl font-semibold">Quality Highlights</h2>
            </div>
            <ul className="space-y-3 pt-1">
              {category.qualityHighlights.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-sm text-[#59351F] leading-relaxed">
                  <Check className="w-4 h-4 text-[#C99536] shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                to="/quality"
                className="text-xs font-medium text-[#382319] hover:text-[#C99536] underline underline-offset-4"
              >
                Read Our Quality Standards
              </Link>
            </div>
          </MotionReveal>

          {/* Export Information */}
          <MotionReveal
            delay={0.12}
            className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm p-7 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#382319]">
                <Globe2 className="w-5 h-5 text-[#C99536]" />
                <h2 className="font-serif text-2xl font-semibold">Export Information</h2>
              </div>
              <p className="text-sm text-[#59351F] leading-relaxed">{category.exportInfo}</p>
              <div className="pt-1 flex flex-wrap gap-x-4 gap-y-2">
                {EXPORT_DESTINATIONS.map((dest) => (
                  <span
                    key={dest.code}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#382319] whitespace-nowrap"
                  >
                    <CountryFlag code={dest.code} className="w-[18px] h-3" />
                    <span>{dest.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-[#382319]/10">
              <Link
                to="/export"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors"
              >
                Explore Export Markets
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Buyer Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#382319]/12 border-y border-[#382319]/12">
            {category.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-[#382319]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#59351F] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-[#59351F] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-[#F7F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
              Related Product Categories
            </h2>
            <Link
              to="/products"
              className="text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCategories.map((rel) => (
              <Link
                key={rel.id}
                to={rel.path}
                className="group bg-[#FFFCF6] border border-[#382319]/10 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <ProductMediaFrame
                  src={rel.heroImage}
                  alt={rel.heroAlt}
                  fit={rel.heroImageFit}
                  aspectClass="aspect-[4/3]"
                  imgClassName="group-hover:scale-[1.03]"
                />
                <div className="p-6 space-y-2">
                  <p className="text-xs font-medium text-[#78836A]">{rel.kicker}</p>
                  <h3 className="font-serif text-2xl font-semibold text-[#382319] group-hover:text-[#C99536] transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">{rel.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline={`Inquire About ${category.name}`}
        description="Contact our wholesale desk for carton specifications, export compliance sheets and destination quotations."
        buttonLabel="Request a Quote"
        onButtonClick={() => openQuoteModal()}
        variant="brown"
      />
    </>
  );
}
