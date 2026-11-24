import { ArrowRight, Check, Tag, ShieldCheck, Handshake } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { COMPANY, WHY_CHOOSE_BUTTER_VALLEY } from '../data/company';
import { PRODUCT_CATEGORIES } from '../data/products';

const BRAND_VALUES = [
  {
    title: 'Direct Source Integrity',
    description:
      'By manufacturing at our SITE Hyderabad facility and sourcing Pink Himalayan Salt directly from Khewra, we maintain clear oversight from raw ingredient selection to final export packing.',
  },
  {
    title: 'Verified Food Safety & Purity',
    description:
      'Every product line is supported by structured quality testing, Halal certification and PCSIR laboratory reporting to give wholesale importers confidence across borders.',
  },
  {
    title: 'Sustainability & Care',
    description:
      'We build enduring supplier partnerships rooted in responsible sourcing, consistent product standards and responsive service for buyers worldwide.',
  },
  {
    title: 'Multi-Category Convenience',
    description:
      'Importers and distributors can consolidate Pink Himalayan Salt, artisanal nut spreads, pure spices, recipe mixes, desserts and specialty botanicals under one export partner.',
  },
];

const WHY_CHOOSE_ICONS = [Tag, ShieldCheck, Handshake];

export function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <SeoHead
        title="About Us | Butter Valley — Pakistani Manufacturer & Exporter"
        description="Learn about Butter Valley, a Pakistani exporter of Pink Himalayan Salt from the Khewra Salt Mine alongside artisanal nut spreads, spices, recipe mixes, desserts and organic wellness products."
        path="/about"
        breadcrumbs={breadcrumbs}
      />

      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              About {COMPANY.legalName}
            </p>
            <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#382319] leading-[1.14] sm:leading-[1.1]">
              Crafted in Pakistan for International Tables
            </h1>
            <p className="text-base sm:text-xl text-[#59351F] leading-relaxed">
              {COMPANY.legalName} is a Pakistani exporter of Pink Himalayan Salt sourced from the
              Khewra Salt Mine, alongside artisanal nut spreads, spices, recipe mixes, desserts and
              organic wellness products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Our Mission */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <MotionReveal className="lg:col-span-6 space-y-6">
              <div className="rounded-sm overflow-hidden shadow-[0_20px_44px_rgba(56,35,25,0.12)]">
                <ProductMediaFrame
                  src="/assets/aistudio/Golden_Saffron_Spice_Still_Life_ea78f56b.png"
                  alt="Butter Valley ingredients including golden saffron bottle, brass mortar and pestle, vanilla pods and Pink Himalayan Salt crystals"
                  fit="cover"
                  aspectClass="aspect-[1835/857]"
                  imgClassName="object-center"
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  priority
                />
              </div>
              <div className="p-6 bg-[#F7F0E3] border border-[#382319]/10 rounded-sm flex items-center gap-5">
                <div className="h-24 w-[92px] rounded-md overflow-hidden bg-black p-1.5 ring-1 ring-[#C99536]/60 shrink-0">
                  <ResponsiveImage
                    src={COMPANY.logo}
                    alt="Butter Valley Co. official seal"
                    width={400}
                    height={415}
                    sizes="96px"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-xl font-semibold text-[#382319]">
                    {COMPANY.legalName} — {COMPANY.tagline}
                  </p>
                  <p className="text-sm text-[#59351F] mt-1">
                    {COMPANY.name} · {COMPANY.cityRegion}
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1} className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  Our Mission
                </p>
                <blockquote className="font-serif text-xl sm:text-3xl lg:text-[34px] font-semibold text-[#382319] leading-[1.35]">
                  “{COMPANY.mission}”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#382319]/12 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                  Direct From Manufacturing &amp; Mining Regions
                </h2>
                <p className="text-base text-[#59351F] leading-relaxed">
                  Operating from SITE Hyderabad in Sindh, {COMPANY.legalName} manufactures nut
                  butters, pure spices, recipe mixes and pantry staples directly at source,
                  streamlining supply for international wholesale buyers.
                </p>
                <p className="text-base text-[#59351F] leading-relaxed">
                  Our mineral division sources authentic Pink Himalayan Salt directly from the
                  Khewra Salt Mine in Punjab, serving edible, spa, de-icing and industrial buyers
                  with natural salt products and lamps.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Butter Valley? */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3] border-y border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Our Competitive Strengths
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              Why Choose Butter Valley?
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CHOOSE_BUTTER_VALLEY.map((item, idx) => {
              const Icon = WHY_CHOOSE_ICONS[idx] || Tag;
              return (
                <MotionReveal
                  key={item.title}
                  delay={idx * 0.05}
                  className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-7 sm:p-8 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#382319]/10 pb-4">
                      <div className="w-11 h-11 rounded-sm bg-[#F7F0E3] flex items-center justify-center text-[#382319]">
                        <Icon className="w-5 h-5 text-[#C99536]" strokeWidth={1.6} />
                      </div>
                      <span className="text-xs font-medium text-[#78836A] tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-2xl space-y-3 mb-12">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              How We Operate
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              Our Core Brand Values
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {BRAND_VALUES.map((val, idx) => (
              <MotionReveal
                key={val.title}
                delay={idx * 0.05}
                className="bg-[#F7F0E3]/65 border border-[#382319]/10 rounded-sm p-7 sm:p-8 space-y-3"
              >
                <div className="flex items-center gap-2.5 text-[#78836A]">
                  <Check className="w-4 h-4 text-[#C99536]" />
                  <span className="text-xs font-medium uppercase tracking-wider tabular-nums">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#382319]">{val.title}</h3>
                <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                  {val.description}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Portfolio Preview */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Export Range
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
                Product Portfolio Preview
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors"
            >
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group bg-[#FFFCF6] border border-[#382319]/10 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <Link to={category.path} className="block overflow-hidden">
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
                    <h3 className="font-serif text-2xl font-semibold text-[#382319] group-hover:text-[#C99536] transition-colors">
                      <Link to={category.path}>{category.name}</Link>
                    </h3>
                    <p className="text-sm text-[#59351F] leading-relaxed">
                      {category.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={category.path}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors"
                  >
                    Explore Category <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Partner With Butter Valley Ltd."
        description="Connect with our Hyderabad export desk to discuss product specifications, wholesale cartons and international shipping."
        buttonLabel="Get In Touch"
        buttonTo="/contact"
        secondaryLabel="View Quality Standards"
        secondaryTo="/quality"
        variant="brown"
      />
    </>
  );
}
