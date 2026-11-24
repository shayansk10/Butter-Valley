import { ArrowRight, ShieldCheck, Factory, Layers, Globe2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { GlobalReachDestinations } from '../components/GlobalReachDestinations';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY, QUALITY_CREDENTIALS } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';
import { PINK_SALT_LAMPS_COLLECTION } from '../data/saltLamps';
import { EXPORT_OPERATIONS_CONTENT } from '../data/operationsGallery';

export function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const shouldReduceMotion = useReducedMotion();

  const saltCategory = PRODUCT_CATEGORIES.find((c) => c.slug === 'pink-himalayan-salt')!;
  const featuredCategories = PRODUCT_CATEGORIES;

  return (
    <div className="relative bg-[#1B100A] text-[#FFFCF6]">
      <SeoHead
        title="Butter Valley Ltd. | Pakistani Food & Pink Himalayan Salt Exporters"
        description="Discover Butter Valley, a Pakistani food manufacturer and exporter of Pink Himalayan Salt, nut butters, spices, recipe mixes, desserts, Shilajit and saffron."
        path="/"
        image={COMPANY.homeHeroImage}
      />

      {/* FIXED BACKGROUND CANVAS — GPU-composited viewport-locked layer for smooth parallax scrolling across desktop, tablet & mobile */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#1B100A] transform-gpu"
      >
        {/* Mobile & Tablet (< lg): natural-aspect centered scene feathered softly into #1B100A so portrait screens avoid extreme zoom */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-[125%] max-w-none sm:w-full aspect-[1835/857] shrink-0">
            <ResponsiveImage
              src={COMPANY.homeHeroImage}
              alt=""
              width={1835}
              height={857}
              sizes="100vw"
              priority
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#1B100A] via-[#1B100A]/65 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-20 bg-gradient-to-t from-[#1B100A] via-[#1B100A]/65 to-transparent" />
          </div>
        </div>

        {/* Desktop (lg+): preserved full-bleed fixed cover canvas */}
        <ResponsiveImage
          src={COMPANY.homeHeroImage}
          alt=""
          width={1835}
          height={857}
          sizes="100vw"
          priority
          pictureClassName="hidden lg:block w-full h-full"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1B100A]/36 lg:bg-[#1B100A]/28" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(20,11,7,0.58)_100%)]" />
      </div>

      {/* SECTION A — HERO */}
      <section className="relative z-10 overflow-hidden lg:min-h-[88vh] lg:flex lg:items-center">
        {/* Mobile & Tablet crisp visual band below transparent header so the full still-life scene displays without cropping */}
        <div className="pt-[72px] sm:pt-20 lg:hidden">
          <div className="relative w-full aspect-[1835/857] bg-[#1B100A]">
            <ResponsiveImage
              src={COMPANY.homeHeroImage}
              alt="Golden saffron bottle, brass mortar and pestle, vanilla pods and Pink Himalayan Salt crystals"
              width={1835}
              height={857}
              sizes="100vw"
              priority
              className="block w-full h-full object-contain object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#1D110B] to-transparent pointer-events-none"
            />
          </div>
        </div>

        {/* Desktop localized editorial chocolate scrim on left so typography reads sharply while saffron, mortar & salt glow clearly on the right */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(23,13,8,0.92)_0%,rgba(24,14,9,0.78)_32%,rgba(24,14,9,0.34)_54%,rgba(24,14,9,0.08)_100%)]"
        />
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-[#140B07]/70 to-transparent"
        />
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-[#1D110B]/85 to-transparent"
        />

        {/* Mobile/Tablet hero text backdrop transitioning smoothly into Section B */}
        <div className="relative w-full bg-[#1D110B]/92 lg:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-28 lg:pb-16">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl lg:max-w-[520px] xl:max-w-[560px]"
            >
              <p className="text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-[#C99536] mb-3.5">
                Butter Valley Ltd. — Spread The Love
              </p>

              <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[52px] xl:text-[58px] font-semibold text-[#FFFCF6] leading-[1.12] sm:leading-[1.08] tracking-tight mb-5 lg:drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
                Quality Food Exports From Pakistan
              </h1>

              <p className="text-sm sm:text-base xl:text-[17px] text-[#F7F0E3]/90 leading-[1.65] max-w-lg mb-7 lg:drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]">
                Discover premium Pink Himalayan Salt, artisanal spreads, spices and authentic food
                products crafted with care and supplied to international markets.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  to="/products"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium rounded-sm border border-[#F7F0E3]/50 bg-[#1B100A]/55 backdrop-blur-[2px] text-[#FFFCF6] hover:border-[#C99536] hover:text-[#C99536] transition-colors"
                >
                  Request a Quote
                </button>
              </div>

              <div className="mt-8 pt-5 border-t border-[#C99536]/25 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#F7F0E3]/75">
                <span>SITE Hyderabad, Sindh</span>
                <span aria-hidden="true" className="text-[#C99536]">
                  ·
                </span>
                <span>Khewra Salt Mine, Punjab</span>
                <span aria-hidden="true" className="text-[#C99536]">
                  ·
                </span>
                <span>Halal &amp; PCSIR Supported</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCROLLING FOREGROUND CONTENT LAYER OVER FIXED CHOCOLATE-BROWN BACKGROUND */}
      <div className="relative z-10">
        {/* SECTION B — BRAND INTRODUCTION */}
        <section className="py-20 sm:py-28 bg-[#241610]/88 backdrop-blur-[2px] border-t border-[#C99536]/22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <MotionReveal className="lg:col-span-6 space-y-6">
                <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  Heritage &amp; Manufacturing
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                  From Our Roots to Your Table
                </h2>
                <p className="text-base sm:text-lg text-[#F7F0E3]/85 leading-relaxed">
                  Butter Valley is a Pakistani food manufacturer and exporter based in Hyderabad,
                  Sindh. We supply Pink Himalayan Salt from the Khewra Salt Mine in Punjab, alongside
                  artisanal nut spreads, spices, recipe mixes, desserts and organic wellness products.
                </p>

                <div className="pt-5 border-t border-[#C99536]/20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-medium text-[#C99536] uppercase tracking-wider mb-1">
                      Manufacturing Base
                    </p>
                    <p className="text-sm font-medium text-[#FFFCF6]">
                      SITE Hyderabad, Sindh, Pakistan
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#C99536] uppercase tracking-wider mb-1">
                      Mineral Sourcing
                    </p>
                    <p className="text-sm font-medium text-[#FFFCF6]">
                      Khewra Salt Mine, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#FFFCF6] hover:text-[#C99536] transition-colors group"
                  >
                    Learn More About Butter Valley
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.12} className="lg:col-span-6">
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-end">
                  <div className="col-span-7 overflow-hidden rounded-sm ring-1 ring-[#C99536]/30 shadow-[0_22px_48px_rgba(0,0,0,0.45)]">
                    <ProductMediaFrame
                      src="/assets/aistudio/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2.png"
                      alt="Butter Valley Badami Kheer Mix and Sheer Khurma Mix packs with almonds, pistachios, saffron and dates"
                      fit="cover"
                      aspectClass="aspect-[10/13]"
                      imgClassName="object-center hover:scale-[1.03]"
                      sizes="(max-width: 1023px) 58vw, 28vw"
                    />
                  </div>
                  <div className="col-span-5">
                    <Link
                      to="/products/shilajit"
                      className="block overflow-hidden rounded-sm ring-1 ring-[#C99536]/30 shadow-[0_18px_40px_rgba(0,0,0,0.4)] group"
                    >
                      <ProductMediaFrame
                        src="/assets/aistudio/Butter_Valley_Shilajit_Nature_Poster_9d26d1db.png"
                        alt="Butter Valley Himalayan Shilajit pure resin jar and raw solid mineral chunks"
                        fit="cover"
                        aspectClass="aspect-[2/3]"
                        imgClassName="object-center group-hover:scale-[1.03]"
                        sizes="(max-width: 1023px) 42vw, 20vw"
                      />
                    </Link>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* SECTION C — PRODUCT COLLECTION (Cream Cards Pop Against Rich Chocolate Fixed Canvas) */}
        <section className="py-20 sm:py-28 bg-[#1B100A]/80 backdrop-blur-[1.5px] border-t border-[#C99536]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  Export Catalogue
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                  Our World of Quality Products
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#F7F0E3] hover:text-[#C99536] transition-colors shrink-0"
              >
                View Full Catalogue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
              {featuredCategories.map((category, idx) => {
                // Asymmetric editorial layout: items 0 and 3 span 7 columns, companion items span 5, bottom rows 6/6
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
                const isSaltCard = category.id === 'pink-himalayan-salt';

                return (
                  <MotionReveal key={category.id} delay={idx * 0.05} className={colSpanClass}>
                    <article className="group h-full bg-[#FFFCF6] border border-[#C99536]/30 rounded-sm overflow-hidden flex flex-col shadow-[0_20px_48px_rgba(0,0,0,0.36)] transition-all duration-300 hover:border-[#C99536]/65 hover:shadow-[0_24px_54px_rgba(0,0,0,0.48)]">
                      <div
                        className={
                          isWideFeature
                            ? isSaltCard
                              ? 'grid grid-cols-1 sm:grid-cols-12 lg:flex lg:flex-col h-full'
                              : 'grid grid-cols-1 sm:grid-cols-12 h-full'
                            : 'flex flex-col flex-1'
                        }
                      >
                        <Link
                          to={category.path}
                          className={`block overflow-hidden bg-[#F7F0E3] ${
                            isWideFeature
                              ? isSaltCard
                                ? 'sm:col-span-6 lg:w-full lg:shrink-0'
                                : 'sm:col-span-6'
                              : 'shrink-0'
                          }`}
                        >
                          <ProductMediaFrame
                            src={category.heroImage}
                            alt={category.heroAlt}
                            fit="contain"
                            className="w-full"
                            aspectClass={
                              isWideFeature
                                ? isSaltCard
                                  ? 'aspect-square sm:h-full sm:aspect-auto lg:aspect-square lg:h-auto'
                                  : 'aspect-square sm:h-full sm:aspect-auto'
                                : 'aspect-square'
                            }
                            imgClassName="object-center group-hover:scale-[1.03]"
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          />
                        </Link>

                        <div
                          className={`p-6 sm:p-8 flex-1 flex flex-col justify-between ${
                            isWideFeature
                              ? isSaltCard
                                ? 'sm:col-span-6 lg:flex-1'
                                : 'sm:col-span-6'
                              : ''
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

                          <div className="pt-6 mt-6 border-t border-[#382319]/10 flex items-center justify-between">
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
        <section className="py-20 sm:py-28 bg-[#261710]/88 backdrop-blur-[2px] border-t border-[#C99536]/22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <MotionReveal className="lg:col-span-5 space-y-5">
                <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  Why Butter Valley
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                  Quality You Can Trust. Products You Can Love.
                </h2>
                <p className="text-base text-[#F7F0E3]/82 leading-relaxed">
                  Built for wholesale importers, retail groups and international distributors seeking
                  direct Pakistani manufacturing and consistent export reliability.
                </p>
              </MotionReveal>

              <div className="lg:col-span-7 divide-y divide-[#C99536]/20 border-y border-[#C99536]/20">
                <MotionReveal delay={0.05} className="py-7 sm:py-8 flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-[#382319] border border-[#C99536]/30 flex items-center justify-center text-[#C99536] shrink-0">
                    <Factory className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#FFFCF6]">
                      Straight From The Source
                    </h3>
                    <p className="text-sm sm:text-base text-[#F7F0E3]/80 leading-relaxed">
                      We manufacture at source, so there are no extra middlemen between you and the
                      product. You get wholesale pricing without cutting corners.
                    </p>
                  </div>
                </MotionReveal>

                <MotionReveal delay={0.1} className="py-7 sm:py-8 flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-[#382319] border border-[#C99536]/30 flex items-center justify-center text-[#C99536] shrink-0">
                    <ShieldCheck className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#FFFCF6]">
                      Quality You Can Verify
                    </h3>
                    <p className="text-sm sm:text-base text-[#F7F0E3]/80 leading-relaxed">
                      Our products are supported by quality testing, Halal certification and a PCSIR
                      test report.
                    </p>
                  </div>
                </MotionReveal>

                <MotionReveal delay={0.15} className="py-7 sm:py-8 flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-[#382319] border border-[#C99536]/30 flex items-center justify-center text-[#C99536] shrink-0">
                    <Layers className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#FFFCF6]">
                      One Supplier, Many Shelves
                    </h3>
                    <p className="text-sm sm:text-base text-[#F7F0E3]/80 leading-relaxed">
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
        <section className="py-20 sm:py-28 bg-[#1D120C]/84 backdrop-blur-[2px] border-t border-[#C99536]/22 text-[#FFFCF6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <MotionReveal className="lg:col-span-5">
                <div className="rounded-sm overflow-hidden ring-1 ring-[#C99536]/40 shadow-[0_24px_50px_rgba(0,0,0,0.45)]">
                  <ProductMediaFrame
                    src={saltCategory.heroImage}
                    alt={saltCategory.heroAlt}
                    fit="cover"
                    aspectClass="aspect-square"
                    imgClassName="object-center"
                    sizes="(max-width: 1023px) 100vw, 42vw"
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
                      className="p-4 rounded-sm bg-[#2D1B12]/90 border border-[#C99536]/28"
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
                    className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors"
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
        <section className="py-20 sm:py-28 bg-[#25160F]/88 backdrop-blur-[2px] border-t border-[#C99536]/22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionReveal className="max-w-3xl space-y-4 mb-14">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Quality &amp; Compliance
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                Committed to Quality at Every Step
              </h2>
              <p className="text-base text-[#F7F0E3]/82 leading-relaxed">
                Every shipment is backed by disciplined quality control, laboratory verification and
                recognized trade credentials.
              </p>
            </MotionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUALITY_CREDENTIALS.map((cred, index) => (
                <MotionReveal
                  key={cred.title}
                  delay={index * 0.06}
                  className="bg-[#1B100A]/82 border border-[#C99536]/24 rounded-sm p-7 flex flex-col justify-between space-y-5 hover:border-[#C99536]/55 transition-colors"
                >
                  <div>
                    <span className="inline-block text-xs font-medium text-[#C99536] tabular-nums mb-3">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#FFFCF6] mb-3">
                      {cred.title}
                    </h3>
                    <p className="text-sm text-[#F7F0E3]/80 leading-relaxed">{cred.summary}</p>
                  </div>
                  <div className="pt-4 border-t border-[#C99536]/18 text-xs font-medium text-[#C99536]/85">
                    Verified Export Standard
                  </div>
                </MotionReveal>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/quality"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm border border-[#C99536]/60 text-[#FFFCF6] hover:bg-[#C99536] hover:border-[#C99536] transition-colors"
              >
                Explore Our Quality Standards
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION F2 — NEW COLLECTION: PINK SALT LAMPS */}
        <section className="relative py-20 sm:py-28 bg-[#1E120C]/86 backdrop-blur-[2px] border-t border-[#C99536]/22 text-[#FFFCF6] overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,54,0.12),transparent_60%)]"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <MotionReveal className="lg:col-span-5 space-y-6">
                <p className="text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-[#C99536]">
                  {PINK_SALT_LAMPS_COLLECTION.kicker}
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                  {PINK_SALT_LAMPS_COLLECTION.homeHeading}
                </h2>
                <p className="text-base sm:text-lg text-[#F7F0E3]/85 leading-relaxed">
                  {PINK_SALT_LAMPS_COLLECTION.homeDescription}
                </p>
                <p className="text-xs sm:text-sm text-[#F7F0E3]/75 pt-3 border-t border-[#C99536]/25 leading-relaxed">
                  Natural Ambient Lighting Collection · Wholesale and export specifications available
                  upon inquiry.
                </p>
                <div className="pt-1">
                  <Link
                    to={PINK_SALT_LAMPS_COLLECTION.sectionPath}
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm"
                  >
                    {PINK_SALT_LAMPS_COLLECTION.buttonLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </MotionReveal>

              <div className="lg:col-span-7 grid grid-cols-2 gap-3.5 sm:gap-5">
                {PINK_SALT_LAMPS_COLLECTION.items.map((lamp, idx) => (
                  <MotionReveal key={lamp.id} delay={idx * 0.05}>
                    <Link
                      to={`/products/pink-himalayan-salt?lamp=${lamp.slug}#pink-salt-lamps`}
                      className="group block h-full bg-[#241610] border border-[#C99536]/28 hover:border-[#C99536]/75 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                    >
                      <ProductMediaFrame
                        src={lamp.image}
                        alt={lamp.alt}
                        fit="cover"
                        aspectClass="aspect-square"
                        imgClassName="object-center group-hover:scale-[1.04]"
                        sizes="(max-width: 1023px) 46vw, 24vw"
                      />
                      <div className="p-3.5 sm:p-4 border-t border-[#C99536]/18 space-y-1">
                        <h3 className="font-serif text-base sm:text-xl font-semibold text-[#FFFCF6] group-hover:text-[#C99536] transition-colors leading-snug">
                          {lamp.name}
                        </h3>
                        <p className="text-xs text-[#F7F0E3]/75 leading-snug">{lamp.shortNote}</p>
                      </div>
                    </Link>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION G — EXPORT */}
        <section className="py-20 sm:py-28 bg-[#25160F]/88 backdrop-blur-[2px] border-t border-[#C99536]/22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
            <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  <Globe2 className="w-4 h-4" />
                  <span>Global Reach</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                  Connecting Pakistani Quality With The World
                </h2>
                <p className="text-base text-[#F7F0E3]/82 leading-relaxed">
                  From SITE Hyderabad and Khewra Salt Mine to wholesale buyers and retail shelves
                  across the Gulf, the United Kingdom, European Markets and the United States.
                </p>
              </div>
              <Link
                to="/export"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shrink-0 self-start lg:self-auto"
              >
                Explore Our Export Network
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionReveal>

            <GlobalReachDestinations theme="dark" />
          </div>
        </section>

        {/* SECTION G2 — STOCK & EXPORT OPERATIONS PREVIEW */}
        <section className="py-16 sm:py-20 bg-[#1D120C]/84 backdrop-blur-[2px] border-t border-[#C99536]/22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <MotionReveal className="lg:col-span-5 space-y-4">
                <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  {EXPORT_OPERATIONS_CONTENT.subheading}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FFFCF6] leading-tight">
                  {EXPORT_OPERATIONS_CONTENT.homeHeading}
                </h2>
                <p className="text-base text-[#F7F0E3]/82 leading-relaxed">
                  {EXPORT_OPERATIONS_CONTENT.homeDescription}
                </p>
                <div className="pt-2">
                  <Link
                    to={EXPORT_OPERATIONS_CONTENT.sectionPath}
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors"
                  >
                    {EXPORT_OPERATIONS_CONTENT.homeButtonLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.06} className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                  {EXPORT_OPERATIONS_CONTENT.photos.map((photo) => (
                    <Link
                      key={photo.id}
                      to={EXPORT_OPERATIONS_CONTENT.sectionPath}
                      aria-label={`${photo.title} — ${EXPORT_OPERATIONS_CONTENT.homeButtonLabel}`}
                      className="group block bg-[#2B1B13] border border-[#C99536]/28 hover:border-[#C99536]/75 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.45)]"
                    >
                      <div className="aspect-square overflow-hidden bg-[#241610]">
                        <ResponsiveImage
                          src={photo.src}
                          alt={photo.alt}
                          sizes="(max-width: 639px) 46vw, 15vw"
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* SECTION H — FINAL CTA */}
        <section className="py-20 sm:py-24 bg-[#241610]/90 backdrop-blur-[2px] text-[#FFFCF6] border-t border-[#C99536]/25">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536] mb-4">
              Wholesale &amp; Export Partnerships
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight mb-5">
              Let&apos;s Bring Quality to Your Market
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9 text-[#F7F0E3]/85">
              Looking for a reliable Pakistani food manufacturing and export partner? Connect with
              Butter Valley to explore our products and discuss your wholesale requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] transition-colors shadow-sm"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/products"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded-sm border border-[#F7F0E3]/35 text-[#FFFCF6] hover:border-[#C99536] hover:text-[#C99536] transition-colors"
              >
                Browse Product Catalogue
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
