import { Mail, Globe, MessageCircle } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';

const COLLECTED_FORM_FIELDS = [
  'Full Name',
  'Email Address',
  'Product / Interested In',
  'Complete Address',
  'Phone Number',
  'Country',
  'Optional Message',
];

const USAGE_PURPOSES = [
  'Responding to quotation requests submitted through our website',
  'Communicating with potential buyers, distributors and prospective customers',
  'Providing product information, packaging details and specification sheets',
  'Processing and reviewing business, retail and commercial inquiries',
  'Discussing wholesale carton volumes, destination logistics and export requirements',
  'Improving customer communication and responsiveness across our export desk',
];

export function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  return (
    <>
      <SeoHead
        title="Privacy Policy | Butter Valley"
        description="Read the Privacy Policy for Butter Valley explaining how visitor information submitted via quotation requests and WhatsApp inquiries is collected, used and protected."
        path="/privacy-policy"
        breadcrumbs={breadcrumbs}
      />

      {/* Page Hero */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-16 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Legal Information
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#382319] leading-[1.08]">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-xl text-[#59351F] leading-relaxed max-w-3xl">
              This Privacy Policy outlines how Butter Valley handles personal and business contact
              information shared when you browse our website, submit a quotation request or contact
              us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="divide-y divide-[#382319]/12 border-t border-[#382319]/12">
            {/* 01. Introduction */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                01
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Introduction
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                Butter Valley respects the privacy of visitors, prospective wholesale buyers and
                business partners who interact with our website. We are committed to handling
                personal and business inquiry details thoughtfully, transparently and solely for
                legitimate commercial communication connected to our food and mineral products.
              </p>
            </article>

            {/* 02. Information We Collect */}
            <article className="py-8 sm:py-10 space-y-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                02
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                We collect personal and business contact details that you voluntarily provide when
                completing the Request a Quote form on our website, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl pt-1">
                {COLLECTED_FORM_FIELDS.map((field) => (
                  <li
                    key={field}
                    className="flex items-center gap-2.5 text-sm sm:text-base text-[#382319] bg-[#F7F0E3]/65 border border-[#382319]/10 rounded-sm px-4 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99536] shrink-0" />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl pt-1">
                In addition, if you choose to contact us through WhatsApp or by direct email, we
                receive the contact number, profile details and any inquiry information or messages
                that you voluntarily share during that conversation.
              </p>
            </article>

            {/* 03. How We Use Information */}
            <article className="py-8 sm:py-10 space-y-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                03
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                How We Use Information
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                Information submitted through our website or communication channels may be used for
                the following purposes:
              </p>
              <ul className="space-y-2.5 max-w-3xl">
                {USAGE_PURPOSES.map((purpose) => (
                  <li
                    key={purpose}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#59351F] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99536] shrink-0 mt-2.5" />
                    <span>{purpose}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* 04. Information Sharing */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                04
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Information Sharing
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                Butter Valley does not intend to sell, rent or trade your personal information to
                third parties. Submitted inquiry information may be shared internally or with
                relevant communication, hosting or logistics service providers only where
                reasonably necessary to operate business communications, prepare requested
                quotations, coordinate wholesale inquiries or comply with applicable legal
                obligations.
              </p>
            </article>

            {/* 05. Data Security */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                05
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Data Security
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                We take reasonable administrative and operational measures to protect information
                shared with us against unauthorized access, misuse or disclosure. However, no
                internet-based transmission or electronic communication channel can be guaranteed to
                be completely immune from risk, and visitors share inquiry details over public
                networks at their own discretion.
              </p>
            </article>

            {/* 06. Data Retention */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                06
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Data Retention
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                Butter Valley retains inquiry details only for as long as reasonably necessary to
                respond to quotation requests, maintain ongoing wholesale or export correspondence,
                keep routine business records and fulfill applicable legal requirements.
              </p>
            </article>

            {/* 07. Cookies and Website Analytics */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                07
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Cookies and Website Analytics
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                This website does not currently deploy advertising cookies, cross-site behavioral
                tracking or third-party website analytics tools. Standard technical connection data
                (such as browser requests, IP address or access timestamps) may be processed
                briefly by hosting infrastructure and external asset providers (such as web font
                delivery services) strictly to load and serve website pages reliably. Should cookies
                or analytics tools be introduced in the future, this policy will be updated
                accordingly.
              </p>
            </article>

            {/* 08. Third-Party Services */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                08
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Third-Party Services
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                Our website includes direct links to external communication platforms and social
                channels, including WhatsApp and official social media pages. When you click to open
                WhatsApp or visit an external platform, your interaction is governed by that
                third-party provider&apos;s own privacy policy and terms, over which Butter Valley
                has no direct control.
              </p>
            </article>

            {/* 09. International Visitors */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                09
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                International Visitors
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                Because Butter Valley serves domestic and international buyers across multiple
                countries, inquiry details submitted from outside Pakistan may be received, reviewed
                and processed in locations where our team or communication providers operate, as
                necessary to respond to your wholesale or export request.
              </p>
            </article>

            {/* 10. User Privacy Rights */}
            <article className="py-8 sm:py-10 space-y-3">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                10
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                User Privacy Rights
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                You may contact Butter Valley at any time to request access to the personal
                information you have shared with us, ask us to correct inaccurate contact details
                or request deletion of your inquiry records. We will review and respond to such
                requests in a reasonable timeframe, subject to applicable legal requirements and
                legitimate business recordkeeping obligations.
              </p>
            </article>

            {/* 11. Contact Information */}
            <article className="pt-8 sm:pt-10 space-y-5">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                11
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                If you have questions about this Privacy Policy or wish to submit a privacy-related
                request, please contact us using the details below:
              </p>

              <div className="bg-[#F7F0E3] border border-[#382319]/12 rounded-sm p-6 sm:p-8 max-w-2xl">
                <dl className="divide-y divide-[#382319]/10 text-sm sm:text-base">
                  <div className="py-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <dt className="text-[#59351F] font-medium">Business</dt>
                    <dd className="text-[#382319] font-semibold">Butter Valley</dd>
                  </div>
                  <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <dt className="text-[#59351F] font-medium inline-flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C99536]" />
                      <span>Email</span>
                    </dt>
                    <dd>
                      <a
                        href="mailto:buttervalley30@gmail.com"
                        className="text-[#382319] font-medium hover:text-[#C99536] underline underline-offset-4 transition-colors break-all"
                      >
                        buttervalley30@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <dt className="text-[#59351F] font-medium inline-flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#C99536]" />
                      <span>Website</span>
                    </dt>
                    <dd>
                      <a
                        href="https://buttervalley.org/"
                        className="text-[#382319] font-medium hover:text-[#C99536] underline underline-offset-4 transition-colors break-all"
                      >
                        https://buttervalley.org/
                      </a>
                    </dd>
                  </div>
                  <div className="py-3 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <dt className="text-[#59351F] font-medium inline-flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#C99536]" />
                      <span>WhatsApp</span>
                    </dt>
                    <dd>
                      <a
                        href="https://wa.me/923360359225"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#382319] font-medium hover:text-[#C99536] underline underline-offset-4 transition-colors"
                      >
                        +92 336 0359225
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#59351F]/80">
                <p>
                  This policy draft is provided for informational website use and may be updated
                  from time to time.
                </p>
                <Link
                  to="/terms-and-conditions"
                  className="font-medium text-[#382319] hover:text-[#C99536] underline underline-offset-4 transition-colors"
                >
                  Read Terms &amp; Conditions
                </Link>
              </div>
            </article>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
