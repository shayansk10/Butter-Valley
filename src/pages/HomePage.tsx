import { ArrowRight, ShieldCheck, Factory, Layers, Globe2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { CountryFlag } from '../components/CountryFlag';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY, EXPORT_DESTINATIONS, QUALITY_CREDENTIALS } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

export function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const shouldReduceMotion = useReducedMotion();

  const saltCategory = PRODUCT_CATEGORIES.find((c) => c.slug === 'pink-himalayan-salt')!;
  const featuredCategories = PRODUCT_CATEGORIES;

  return (
    <>
      <SeoHead
        title="Butter Valley Ltd. | Pakistani Food & Pink Himalayan Salt Exporters"
        description="Discover Butter Valley, a Pakistani food manufacturer and exporter of Pink Himalayan Salt, nut butters, spices, recipe mixes, desserts, Shilajit and saffron."
        path="/"
        image={COMPANY.homeHeroImage}
      />

      {/* SECTION A — HERO */}
      <section className="relative bg-[#1d140f] overflow-hidden lg:aspect-[1835/857] lg:flex lg:items-center">
        {/* Top clearance for fixed transparent header on mobile/tablet so zero image is hidden under navbar; absolute full-bleed on desktop so hero text sits cleanly on the left */}
        <div className="pt-[72px] sm:pt-20 w-full lg:pt-0 lg:absolute lg:inset-0 lg:pointer-events-none">
          <div className="relative w-full aspect-[1835/857] lg:aspect-auto lg:w-full lg:h-full">
            <img
              src={COMPANY.homeHeroImage}
              alt="Golden saffron bottle, brass mortar and pestle, vanilla pods and Pink Himalayan Salt crystals"
              width={1835}
              height={857}
              fetchPriority="high"
              decoding="sync"
              referrerPolicy="no-referrer"
              className="block w-full h-full object-contain object-center"
            />
            {/* Gentle bottom edge transition on mobile/tablet */}
            <div
              aria-hidden="true"
              className="lg:hidden absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#1d140f] to-transparent pointer-events-none"
            />
          </div>
        </div>

        {/* Localized dark editorial gradient on desktop left side only so text reads crisply while saffron bottle, mortar & pestle, vanilla pods and pink salt remain bright and clear */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(18,12,8,0.88)_0%,rgba(22,15,10,0.72)_22%,rgba(22,15,10,0.34)_36%,rgba(22,15,10,0)_50%)]"
        />
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-[#140d09]/65 to-transparent"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-14 sm:pt-8 sm:pb-16 lg:max-w-none lg:mx-0 lg:pl-12 lg:pr-8 lg:pt-16 lg:pb-4 xl:pl-14 xl:pt-20 xl:pb-6 2xl:pl-20 2xl:pt-20 2xl:pb-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl lg:max-w-[355px] xl:max-w-[390px] 2xl:max-w-[490px]"
          >
            <p className="text-xs sm:text-sm lg:text-xs xl:text-[13px] font-medium tracking-[0.16em] uppercase text-[#C99536] mb-3 lg:mb-2.5 xl:mb-3.5 lg:drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]">
              Butter Valley Ltd. — Spread The Love
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[34px] xl:text-[40px] 2xl:text-[52px] font-semibold text-[#FFFCF6] leading-[1.08] lg:leading-[1.06] tracking-tight mb-4 lg:mb-3 xl:mb-4 lg:drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
              Quality Food Exports From Pakistan
            </h1>

            <p className="text-sm sm:text-base xl:text-[15px] 2xl:text-[17px] text-[#F7F0E3]/90 lg:text-[#F7F0E3]/95 leading-relaxed lg:leading-[1.6] max-w-md xl:max-w-[375px] 2xl:max-w-[455px] mb-6 lg:mb-5 xl:mb-7 lg:drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              Discover premium Pink Himalayan Salt, artisanal spreads, spices and authentic food
              products crafted with care and supplied to international markets.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 xl:px-7 xl:py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm lg:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-2 px-6 py-3 xl:px-7 xl:py-3.5 text-sm font-medium rounded-sm border border-[#F7F0E3]/45 lg:border-[#F7F0E3]/60 lg:bg-[#140d09]/45 lg:backdrop-blur-[2px] text-[#FFFCF6] hover:border-[#C99536] hover:bg-[#FFFCF6]/8 transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION B — BRAND INTRODUCTION */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <MotionReveal className="lg:col-span-6 space-y-6">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Heritage &amp; Manufacturing
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                From Our Roots to Your Table
              </h2>
              <p className="text-base sm:text-lg text-[#59351F] leading-relaxed">
                Butter Valley is a Pakistani food manufacturer and exporter based in Hyderabad,
                Sindh. We supply Pink Himalayan Salt from the Khewra Salt Mine in Punjab, alongside
                artisanal nut spreads, spices, recipe mixes, desserts and organic wellness products.
              </p>

              <div className="pt-4 border-t border-[#382319]/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-medium text-[#78836A] uppercase tracking-wider mb-1">
                    Manufacturing Base
                  </p>
                  <p className="text-sm font-medium text-[#382319]">
                    SITE Hyderabad, Sindh, Pakistan
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#78836A] uppercase tracking-wider mb-1">
                    Mineral Sourcing
                  </p>
                  <p className="text-sm font-medium text-[#382319]">
                    Khewra Salt Mine, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors group"
                >
                  Learn More About Butter Valley
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.12} className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4 sm:gap-6 items-end">
                <div className="col-span-7 overflow-hidden rounded-sm shadow-[0_18px_42px_rgba(56,35,25,0.1)]">
                  <ProductMediaFrame
                    src="/assets/aistudio/Dessert_f403ebb5.jpg"
                    alt="Traditional Pakistani dessert bowl garnished with pistachios, almonds and saffron"
                    fit="cover"
                    aspectClass="aspect-[4/5]"
                    imgClassName="hover:scale-[1.03]"
                  />
                </div>
                <div className="col-span-5 overflow-hidden rounded-sm shadow-[0_18px_42px_rgba(56,35,25,0.1)] -mt-8 sm:-mt-12">
                  <ProductMediaFrame
                    src="/assets/aistudio/organic_Shilajit___Pure_Saffron_5afc8e49.jpg"
                    alt="Pure crimson saffron threads and organic Shilajit resin in glass jars"
                    fit="cover"
                    aspectClass="aspect-[3/4]"
                    imgClassName="hover:scale-[1.03]"
                  />
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* SECTION C — PRODUCT COLLECTION (Asymmetric Editorial Grid) */}
      <section className="py-20 sm:py-28 bg-[#F7F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Export Catalogue
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Our World of Quality Products
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors shrink-0"
            >
              View Full Catalogue
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {featuredCategories.map((category, idx) => {
              // Asymmetric editorial layout: items 0 and 3 span 7 columns, companion items span 5, bottom row 6/6
              const colSpanClass =
                idx === 0
                  ? 'md:col-span-7'
                  : idx === 1
                    ? 'md:col-span-5'
                    : idx === 2
                      ? 'md:col-span-5'
                      : idx === 3
                        ? 'md:col-span-7'
                        : 'md:col-span-6';

              const isWideFeature = idx === 0 || idx === 3;

              return (
                <MotionReveal key={category.id} delay={idx * 0.05} className={colSpanClass}>
                  <article className="group h-full bg-[#FFFCF6] border border-[#382319]/10 rounded-sm overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(56,35,25,0.09)]">
                    <div
                      className={`grid ${
                        isWideFeature ? 'grid-cols-1 sm:grid-cols-12 h-full' : 'grid-cols-1 flex-1'
                      }`}
                    >
                      <Link
                        to={category.path}
                        className={`block overflow-hidden ${
                          isWideFeature ? 'sm:col-span-6' : ''
                        }`}
                      >
                        <ProductMediaFrame
                          src={category.heroImage}
                          alt={category.heroAlt}
                          fit={category.heroImageFit}
                          aspectClass={isWideFeature ? 'aspect-[4/5] sm:h-full sm:aspect-auto' : 'aspect-[4/3]'}
                          imgClassName="group-hover:scale-[1.03]"
                        />
                      </Link>

                      <div
                        className={`p-6 sm:p-8 flex flex-col justify-between ${
                          isWideFeature ? 'sm:col-span-6' : ''
                        }`}
                      >
                        <div className="space-y-3">
                          <p className="text-xs font-medium text-[#78836A]">
                            0{idx + 1} · {category.kicker}
                          </p>
                          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319] leading-snug">
                            <Link
                              to={category.path}
                              className="hover:text-[#C99536] transition-colors"
                            >
                              {category.name}
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                            {category.shortDescription}
                          </p>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[#382319]/8 flex items-center justify-between">
                          <Link
                            to={category.path}
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#382319] group-hover:text-[#C99536] transition-colors"
                          >
                            Explore Collection
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D — WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6] border-y border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <MotionReveal className="lg:col-span-5 space-y-5">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Why Butter Valley
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Quality You Can Trust. Products You Can Love.
              </h2>
              <p className="text-base text-[#59351F] leading-relaxed">
                Built for wholesale importers, retail groups and international distributors seeking
                direct Pakistani manufacturing and consistent export reliability.
              </p>
            </MotionReveal>

            <div className="lg:col-span-7 divide-y divide-[#382319]/12 border-y border-[#382319]/12">
              <MotionReveal delay={0.05} className="py-7 sm:py-8 flex items-start gap-5">
                <div className="w-11 h-11 rounded-sm bg-[#F7F0E3] flex items-center justify-center text-[#382319] shrink-0">
                  <Factory className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                    Straight From The Source
                  </h3>
                  <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                    We manufacture at source, so there are no extra middlemen between you and the
                    product. You get wholesale pricing without cutting corners.
                  </p>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.1} className="py-7 sm:py-8 flex items-start gap-5">
                <div className="w-11 h-11 rounded-sm bg-[#F7F0E3] flex items-center justify-center text-[#382319] shrink-0">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                    Quality You Can Verify
                  </h3>
                  <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                    Our products are supported by quality testing, Halal certification and a PCSIR
                    test report.
                  </p>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.15} className="py-7 sm:py-8 flex items-start gap-5">
                <div className="w-11 h-11 rounded-sm bg-[#F7F0E3] flex items-center justify-center text-[#382319] shrink-0">
                  <Layers className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                    One Supplier, Many Shelves
                  </h3>
                  <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                    Pink Himalayan Salt, nut butters, spices, recipe mixes, desserts and organic
                    wellness products from one trusted partner.
                  </p>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — PINK HIMALAYAN SALT SPOTLIGHT */}
      <section className="py-20 sm:py-28 bg-[#382319] text-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <MotionReveal className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden ring-1 ring-[#C99536]/35 shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
                <ProductMediaFrame
                  src={saltCategory.heroImage}
                  alt={saltCategory.heroAlt}
                  fit={saltCategory.heroImageFit}
                  aspectClass="aspect-[4/5]"
                />
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1} className="lg:col-span-7 space-y-6">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Khewra Salt Mine · Punjab, Pakistan
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                Straight From The Heart of Pakistan
              </h2>
              <p className="text-base sm:text-lg text-[#F7F0E3]/85 leading-relaxed max-w-2xl">
                Discover Pink Himalayan Salt sourced from the Khewra Salt Mine in Punjab, Pakistan.
                Available for edible, spa, de-icing and industrial applications.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {['Edible', 'Spa', 'De-icing', 'Industrial'].map((grade, i) => (
                  <div
                    key={grade}
                    className="p-4 rounded-sm bg-[#28231F]/60 border border-[#C99536]/25"
                  >
                    <span className="block text-xs text-[#C99536] tabular-nums mb-1">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-xl font-semibold text-[#FFFCF6]">{grade}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/products/pink-himalayan-salt"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors"
                >
                  Explore Himalayan Salt
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* SECTION F — QUALITY */}
      <section className="py-20 sm:py-28 bg-[#F7F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl space-y-4 mb-14">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Quality &amp; Compliance
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
              Committed to Quality at Every Step
            </h2>
            <p className="text-base text-[#59351F] leading-relaxed">
              Every shipment is backed by disciplined quality control, laboratory verification and
              recognized trade credentials.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_CREDENTIALS.map((cred, index) => (
              <MotionReveal
                key={cred.title}
                delay={index * 0.06}
                className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm p-7 flex flex-col justify-between space-y-5"
              >
                <div>
                  <span className="inline-block text-xs font-medium text-[#C99536] tabular-nums mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#382319] mb-3">
                    {cred.title}
                  </h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">{cred.summary}</p>
                </div>
                <div className="pt-4 border-t border-[#382319]/8 text-xs font-medium text-[#78836A]">
                  Verified Export Standard
                </div>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm border border-[#382319] text-[#382319] hover:bg-[#382319] hover:text-[#FFFCF6] transition-colors"
            >
              Explore Our Quality Standards
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION G — EXPORT */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6] border-t border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <MotionReveal className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                <Globe2 className="w-4 h-4" />
                <span>Global Reach</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Connecting Pakistani Quality With The World
              </h2>
              <p className="text-base text-[#59351F] leading-relaxed">
                From SITE Hyderabad and Khewra Salt Mine to retail shelves and commercial buyers
                across four established international export destinations.
              </p>
              <div className="pt-2">
                <Link
                  to="/export"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#382319] text-[#FFFCF6] hover:bg-[#59351F] transition-colors"
                >
                  Explore Our Export Network
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </MotionReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {EXPORT_DESTINATIONS.map((dest, idx) => (
                <MotionReveal
                  key={dest.code}
                  delay={idx * 0.06}
                  className="p-6 sm:p-7 rounded-sm bg-[#F7F0E3] border border-[#382319]/10 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#382319]/10 pb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                      {dest.region}
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-[#C99536]">
                      {dest.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#382319] flex items-center gap-2.5 min-w-0">
                    <CountryFlag code={dest.code} className="w-6 h-4 shrink-0" />
                    <span className="min-w-0 leading-snug">{dest.name}</span>
                  </h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">{dest.summary}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H — FINAL CTA */}
      <CtaBand
        headline="Let's Bring Quality to Your Market"
        description="Looking for a reliable Pakistani food manufacturing and export partner? Connect with Butter Valley to explore our products and discuss your wholesale requirements."
        buttonLabel="Request a Quote"
        onButtonClick={() => openQuoteModal()}
        secondaryLabel="Browse Product Catalogue"
        secondaryTo="/products"
        variant="brown"
      />
    </>
  );
}
