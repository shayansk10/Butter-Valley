import { ArrowRight, Check } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { ProductMediaFrame } from '../components/ProductMediaFrame';
import { CtaBand } from '../components/CtaBand';
import { COMPANY } from '../data/company';
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

export function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <SeoHead
        title="About Us | Butter Valley Ltd. — Pakistani Food Manufacturer & Exporter"
        description="Learn about Butter Valley Ltd., a Pakistani food manufacturer and exporter in Hyderabad, Sindh supplying Pink Himalayan Salt, nut spreads, spices and recipe mixes."
        path="/about"
        breadcrumbs={breadcrumbs}
      />

      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              About {COMPANY.name}
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#382319] leading-[1.08]">
              Crafted in Pakistan for International Tables
            </h1>
            <p className="text-base sm:text-xl text-[#59351F] leading-relaxed">
              Butter Valley is a food manufacturer and exporter based in Hyderabad, Sindh, Pakistan.
              The company supplies Pink Himalayan Salt from the Khewra Salt Mine in Punjab,
              alongside artisanal nut spreads, spices, recipe mixes, desserts and organic wellness
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Brand Visuals */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <MotionReveal className="lg:col-span-6 space-y-6">
              <div className="rounded-sm overflow-hidden shadow-[0_20px_44px_rgba(56,35,25,0.12)]">
                <ProductMediaFrame
                  src={COMPANY.heroImage}
                  alt="Butter Valley ingredients including saffron, brass mortar and pestle, and Pink Himalayan Salt"
                  fit="cover"
                  aspectClass="aspect-[16/10]"
                />
              </div>
              <div className="p-6 bg-[#F7F0E3] border border-[#382319]/10 rounded-sm flex items-center gap-5">
                <div className="h-24 w-[92px] rounded-md overflow-hidden bg-black p-1.5 ring-1 ring-[#C99536]/60 shrink-0">
                  <img
                    src={COMPANY.logo}
                    alt="Butter Valley Co. official seal"
                    width={400}
                    height={415}
                    decoding="sync"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-[#382319]">
                    {COMPANY.name} — {COMPANY.tagline}
                  </p>
                  <p className="text-sm text-[#59351F] mt-1">{COMPANY.cityRegion}</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1} className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
                  Our Mission
                </p>
                <blockquote className="font-serif text-2xl sm:text-4xl font-semibold text-[#382319] leading-snug">
                  “To be a trusted, reliable Pakistani supplier of premium food products, known
                  worldwide for quality, sustainability and customer satisfaction.”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#382319]/12 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                  Direct From Manufacturing &amp; Mining Regions
                </h2>
                <p className="text-base text-[#59351F] leading-relaxed">
                  Operating from SITE Hyderabad in Sindh, Butter Valley manufactures spreads, pure
                  spices, recipe mixes and pantry staples directly at source, eliminating
                  unnecessary intermediaries for international wholesale partners.
                </p>
                <p className="text-base text-[#59351F] leading-relaxed">
                  Our mineral division sources authentic Pink Himalayan Salt directly from the
                  Khewra Salt Mine in Punjab, serving edible, spa, de-icing and industrial buyers.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3] border-y border-[#382319]/10">
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
                className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm p-7 sm:p-8 space-y-3"
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
      <section className="py-20 sm:py-24 bg-[#FFFCF6]">
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
              <Link
                key={category.id}
                to={category.path}
                className="group bg-[#F7F0E3]/65 border border-[#382319]/10 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <ProductMediaFrame
                  src={category.heroImage}
                  alt={category.heroAlt}
                  fit={category.heroImageFit}
                  aspectClass="aspect-[4/3]"
                  imgClassName="group-hover:scale-[1.03]"
                />
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#382319] group-hover:text-[#C99536] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[#59351F] leading-relaxed">
                      {category.shortDescription}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#382319]">
                    Explore Category <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
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
