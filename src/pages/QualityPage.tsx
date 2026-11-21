import {
  ShieldCheck,
  FlaskConical,
  FileCheck2,
  Building2,
  Check,
  FileText,
  Sparkles,
  Scale,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { CtaBand } from '../components/CtaBand';
import { OFFICIAL_REGISTRATIONS } from '../data/company';

const CREDENTIAL_ICONS = [FileCheck2, FileText, Building2, ShieldCheck, FlaskConical];

const QUALITY_PILLARS = [
  {
    icon: FlaskConical,
    title: 'Testing for Purity & Mineral Content',
    description:
      'Continuous lot-level checks across Pink Himalayan Salt and manufactured batches verify composition, natural purity and consistent grade specifications.',
  },
  {
    icon: Sparkles,
    title: 'Food Safety & Handling Principles',
    description:
      'Processing, blending, sealing and export packing at our SITE Hyderabad facility follow disciplined hygiene and safe food handling standards.',
  },
  {
    icon: Scale,
    title: 'Quality Assurance & Compliance',
    description:
      'Structured pre-shipment verification and accurate documentation support smooth customs clearance and international buyer compliance.',
  },
] as const;

const QUALITY_PRACTICES = [
  'Constant testing for purity and mineral content across production and sourcing lots',
  'Adherence to hygienic food safety and handling protocols at our SITE Hyderabad facility',
  'Compliance with relevant export quality requirements for UAE, Saudi Arabia, UK and US buyers',
  'Protected, export-grade carton sealing to safeguard product integrity in transit',
];

export function QualityPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Quality & Certifications', path: '/quality' },
  ];

  return (
    <>
      <SeoHead
        title="Quality & Certifications | Halal & PCSIR Tested Exports | Butter Valley Ltd."
        description="Discover R&J Butter Valley's quality control standards, Halal certification (htc/RJBV/2022/1), PCSIR test report (ILD/ATR/2022-17512), PSW registration (UN-00-4901518), NTN and Chamber of Commerce membership."
        path="/quality"
        breadcrumbs={breadcrumbs}
      />

      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#382319] text-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} tone="light" />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Quality Assurance &amp; Governance
            </p>
            <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#FFFCF6] leading-[1.14] sm:leading-[1.1]">
              Quality Is Not Just a Promise. It's Our Commitment.
            </h1>
            <p className="text-base sm:text-lg text-[#F7F0E3]/85 leading-relaxed">
              International food and mineral buyers rely on consistent specifications, verified
              purity and compliant export documentation from every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <MotionReveal className="lg:col-span-5 space-y-4">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Operational Discipline
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Quality Control
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                Every stage from raw material sourcing at Khewra Salt Mine and Hyderabad processing
                through finished carton packing is guided by documented quality checks.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.1} className="lg:col-span-7 space-y-8">
              <p className="font-serif text-xl sm:text-2xl lg:text-[28px] text-[#382319] leading-[1.55]">
                “Through strict quality control, we maintain the quality of our products by constant
                testing for purity and mineral content, adherence to food safety and handling
                standards, and compliance with relevant quality requirements.”
              </p>

              <ul className="space-y-3.5 pt-6 border-t border-[#382319]/12">
                {QUALITY_PRACTICES.map((practice) => (
                  <li
                    key={practice}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#59351F] leading-relaxed"
                  >
                    <Check className="w-5 h-5 text-[#C99536] shrink-0 mt-0.5" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {QUALITY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <MotionReveal
                  key={pillar.title}
                  delay={idx * 0.05}
                  className="bg-[#F7F0E3]/70 border border-[#382319]/12 rounded-sm p-7 space-y-4"
                >
                  <div className="w-11 h-11 rounded-sm bg-[#FFFCF6] border border-[#382319]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C99536]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#59351F] leading-relaxed">{pillar.description}</p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration & Certification Information */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Official Credentials
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              Registration &amp; Certification Details
            </h2>
            <p className="text-base text-[#59351F] leading-relaxed">
              Verified business registrations, Halal certification and PCSIR laboratory reporting
              held by R&amp;J Butter Valley for domestic and export compliance.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {OFFICIAL_REGISTRATIONS.map((reg, idx) => {
              const Icon = CREDENTIAL_ICONS[idx] || ShieldCheck;
              const colSpanClass = idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
              return (
                <MotionReveal
                  key={reg.label}
                  delay={idx * 0.05}
                  className={`${colSpanClass} bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-7 sm:p-8 flex flex-col justify-between space-y-5`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 border-b border-[#382319]/10 pb-4">
                      <div className="w-11 h-11 rounded-sm bg-[#F7F0E3] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#C99536]" strokeWidth={1.6} />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                        {reg.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-semibold text-[#382319]">
                        {reg.label}
                      </h3>
                      <p className="text-sm text-[#59351F] leading-relaxed">{reg.summary}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#382319]/10 flex items-baseline justify-between gap-3">
                    <span className="text-xs uppercase tracking-wider text-[#78836A]">
                      Reference No.
                    </span>
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#382319] break-all text-right">
                      {reg.code}
                    </span>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Request Quality & Testing Documentation"
        description="Wholesale buyers and import compliance teams can request product test reports and export credentials directly through our team."
        buttonLabel="Contact Export Compliance"
        buttonTo="/contact"
        secondaryLabel="Explore Our Products"
        secondaryTo="/products"
        variant="brown"
      />
    </>
  );
}
