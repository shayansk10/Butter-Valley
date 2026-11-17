import { ShieldCheck, FlaskConical, FileCheck2, Building2, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { CtaBand } from '../components/CtaBand';
import { QUALITY_CREDENTIALS } from '../data/company';

const CREDENTIAL_ICONS = [ShieldCheck, FlaskConical, FileCheck2, Building2];

const QUALITY_PRACTICES = [
  'Constant testing for purity and mineral content across production and sourcing lots',
  'Adherence to hygienic food safety and handling protocols at our SITE Hyderabad facility',
  'Compliance with relevant export quality requirements for GCC, UK and US buyers',
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
        description="Discover Butter Valley's quality control standards, Halal certification, PCSIR laboratory test reports, PSW registration and Chamber of Commerce membership."
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
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#FFFCF6] leading-[1.08]">
              Quality Is Not Just a Promise. It's Our Commitment.
            </h1>
            <p className="text-base sm:text-lg text-[#F7F0E3]/85 leading-relaxed">
              International food and mineral buyers rely on consistent specifications, verified
              purity and compliant export documentation from every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Quality Control */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <MotionReveal className="lg:col-span-5 space-y-4">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Operational Discipline
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
                Our Quality Control
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1} className="lg:col-span-7 space-y-8">
              <p className="font-serif text-2xl sm:text-3xl text-[#382319] leading-relaxed">
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
        </div>
      </section>

      {/* Four Credentials */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Recognized Credentials
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319]">
              Certifications &amp; Trade Registrations
            </h2>
            <p className="text-base text-[#59351F] leading-relaxed">
              Documentation supporting wholesale buyer verification and export clearance is
              available directly upon inquiry.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {QUALITY_CREDENTIALS.map((cred, idx) => {
              const Icon = CREDENTIAL_ICONS[idx] || ShieldCheck;
              return (
                <MotionReveal
                  key={cred.title}
                  delay={idx * 0.06}
                  className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-8 sm:p-10 space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#382319]/10 pb-4">
                    <div className="w-11 h-11 rounded-sm bg-[#F7F0E3] flex items-center justify-center text-[#382319]">
                      <Icon className="w-5 h-5 text-[#C99536]" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-medium text-[#78836A] tabular-nums">
                      Credential 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                    {cred.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                    {cred.summary}
                  </p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Request Quality &amp; Testing Documentation"
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
