import { Mail, Phone, Tag, ShieldCheck, Handshake } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { CtaBand } from '../components/CtaBand';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY, LEADERSHIP_TEAM, type TeamMember } from '../data/company';

const WHY_CHOOSE_FEATURES = [
  {
    number: '01',
    title: 'Competitive Rates',
    description:
      'By manufacturing at source, we reduce unnecessary costs and offer our clients competitive wholesale pricing without compromising on quality.',
    Icon: Tag,
  },
  {
    number: '02',
    title: 'High-Quality Products',
    description:
      'We source from reliable suppliers and focus on maintaining high product quality and consistency to meet international market expectations.',
    Icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Strong Business Connections',
    description:
      'Our established business relationships with producers, chambers of commerce, and distribution networks help support dependable sourcing and smooth business operations.',
    Icon: Handshake,
  },
] as const;

function TeamProfileCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <MotionReveal
      delay={delay}
      className="h-full bg-[#F7F0E3]/65 border border-[#382319]/12 rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C99536]/60 hover:shadow-[0_16px_36px_rgba(56,35,25,0.08)]"
    >
      <div className="flex items-start gap-4 min-w-0">
        <div
          aria-hidden="true"
          className="w-14 h-14 rounded-full bg-[#382319] text-[#FFFCF6] border border-[#C99536]/65 flex items-center justify-center font-serif text-xl font-semibold tracking-wide shrink-0 shadow-xs"
        >
          {member.initials}
        </div>
        <div className="min-w-0 space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#382319] leading-snug break-words">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.09em] text-[#C99536]">
            {member.designation}
          </p>
        </div>
      </div>

      <div className="pt-5 border-t border-[#382319]/12 space-y-1.5 min-w-0">
        {member.phone && member.phoneHref && (
          <a
            href={member.phoneHref}
            className="min-h-[44px] flex items-center gap-2.5 text-sm font-medium text-[#382319] hover:text-[#C99536] transition-colors py-1"
          >
            <Phone className="w-4 h-4 text-[#C99536] shrink-0" />
            <span>{member.phone}</span>
          </a>
        )}
        <a
          href={`mailto:${member.email}`}
          className="min-h-[44px] flex items-center gap-2.5 text-sm text-[#59351F] hover:text-[#C99536] transition-colors py-1 min-w-0"
        >
          <Mail className="w-4 h-4 text-[#C99536] shrink-0" />
          <span className="break-all">{member.email}</span>
        </a>
      </div>
    </MotionReveal>
  );
}

export function OurTeamPage() {
  const { openQuoteModal } = useQuoteModal();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/our-team' },
  ];

  const founders = LEADERSHIP_TEAM.filter((member) => Boolean(member.phone));
  const executives = LEADERSHIP_TEAM.filter((member) => !member.phone);

  return (
    <>
      <SeoHead
        title={`Our Team | Leadership & Management | ${COMPANY.name}`}
        description="Meet the leadership and team behind R&J Butter Valley (Butter Valley Ltd.), driving quality manufacturing, domestic wholesale partnerships and global food exports."
        path="/our-team"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Our Team · {COMPANY.legalName}
            </p>
            <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#382319] leading-[1.14] sm:leading-[1.1]">
              The People Behind Butter Valley
            </h1>
            <p className="text-base sm:text-xl text-[#59351F] leading-relaxed">
              Meet the leadership and team behind our commitment to quality, trusted partnerships
              and global food exports.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-16 sm:py-24 bg-[#FFFCF6] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <MotionReveal className="lg:col-span-5 space-y-3">
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
                Who We Are
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319] leading-tight">
                Driven by Quality, Partnership &amp; Global Export Care
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.08} className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-[#59351F] leading-relaxed">
                At Butter Valley, we believe lasting business relationships are built on quality,
                trust, and reliability. From sourcing and production to customer coordination and
                export operations, our team works together to deliver dependable products and build
                long-term partnerships with businesses around the world.
              </p>
              <div className="pt-5 border-t border-[#382319]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#78836A]">
                <span>{COMPANY.name}</span>
                <span aria-hidden="true" className="text-[#C99536]">
                  ·
                </span>
                <span>{COMPANY.cityRegion}</span>
                <span aria-hidden="true" className="text-[#C99536]">
                  ·
                </span>
                <span>{COMPANY.saltOrigin}</span>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. Our Mission */}
      <section className="relative py-20 sm:py-24 bg-[#382319] text-[#FFFCF6] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(201,149,54,0.14),transparent_60%)]"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal className="space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-[#C99536]">
                Our Purpose &amp; Guiding Standard
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FFFCF6] leading-tight">
                Our Mission
              </h2>
            </div>

            <div className="w-16 h-px bg-[#C99536]/65 mx-auto" aria-hidden="true" />

            <blockquote className="font-serif text-xl sm:text-3xl lg:text-[34px] font-medium text-[#F7F0E3] leading-[1.48] max-w-4xl mx-auto">
              &ldquo;To be recognized globally as a{' '}
              <span className="text-[#C99536] font-semibold">trusted</span> and{' '}
              <span className="text-[#C99536] font-semibold">reliable</span> supplier of Pink
              Himalayan Salt and quality products, committed to{' '}
              <span className="text-[#C99536] font-semibold">customer satisfaction</span>,
              sustainability, <span className="text-[#C99536] font-semibold">reliability</span>, and
              maintaining the highest standards of{' '}
              <span className="text-[#C99536] font-semibold">quality</span>.&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-[#F7F0E3]/15 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm tracking-wide text-[#F7F0E3]/80">
              <span className="text-[#FFFCF6] font-medium">Quality</span>
              <span aria-hidden="true" className="text-[#C99536]">
                ·
              </span>
              <span className="text-[#FFFCF6] font-medium">Trust</span>
              <span aria-hidden="true" className="text-[#C99536]">
                ·
              </span>
              <span className="text-[#FFFCF6] font-medium">Reliability</span>
              <span aria-hidden="true" className="text-[#C99536]">
                ·
              </span>
              <span className="text-[#FFFCF6] font-medium">Customer Satisfaction</span>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 4. Why Choose Butter Valley? */}
      <section className="py-20 sm:py-24 bg-[#F7F0E3] border-y border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          <MotionReveal className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Why Partner With Us
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#382319] leading-tight">
              Why Choose Butter Valley?
            </h2>
            <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
              Practical wholesale advantages built around source manufacturing, dependable quality
              control and established trade relationships.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CHOOSE_FEATURES.map((feature, idx) => {
              const Icon = feature.Icon;
              return (
                <MotionReveal
                  key={feature.title}
                  delay={idx * 0.06}
                  className="bg-[#FFFCF6] border border-[#382319]/12 rounded-sm p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#C99536]/55 hover:shadow-[0_14px_32px_rgba(56,35,25,0.07)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-sm bg-[#382319] border border-[#C99536]/40 flex items-center justify-center text-[#C99536]">
                        <Icon className="w-5 h-5" strokeWidth={1.6} />
                      </div>
                      <span className="text-xs font-medium text-[#C99536] tabular-nums">
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#382319] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Executive Leadership & Management Directory */}
      <section className="py-20 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Leadership &amp; Direct Contacts
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
              Founders &amp; Executive Team
            </h2>
            <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
              Reach out directly to our Co-founders, finance department, commercial sales desk, or
              technical assistance lead for wholesale, compliance, and export coordination.
            </p>
          </MotionReveal>

          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {founders.map((member, idx) => (
                <TeamProfileCard key={member.id} member={member} delay={idx * 0.05} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {executives.map((member, idx) => (
                <TeamProfileCard key={member.id} member={member} delay={(idx + 2) * 0.05} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing Contact Us / Request a Quote */}
      <CtaBand
        headline="Connect With Our Wholesale & Export Team"
        description="Have an inquiry regarding product specifications, wholesale carton orders, or international export requirements? Reach out to our leadership or request a quotation directly."
        buttonLabel="Request a Quote"
        onButtonClick={() => openQuoteModal()}
        secondaryLabel="Contact Desk"
        secondaryTo="/contact"
        variant="brown"
      />
    </>
  );
}
