import { Mail, Globe, MessageCircle } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { COMPANY } from '../data/company';

const TERMS_SECTIONS = [
  {
    number: '01',
    title: 'Introduction',
    paragraphs: [
      'These Terms & Conditions govern your access to and use of the Butter Valley website (https://buttervalley.org/). By accessing or browsing this website, you agree to comply with these terms.',
      'If you do not agree with any part of these Terms & Conditions, please discontinue use of the website.',
    ],
  },
  {
    number: '02',
    title: 'About Butter Valley',
    paragraphs: [
      'Butter Valley is a Pakistani food products brand supplying food and mineral products—including artisanal nut butters and spreads, recipe mixes, pure spices, Pink Himalayan Salt, desserts and pantry staples, and organic Shilajit and pure saffron—to domestic and international wholesale markets.',
    ],
  },
  {
    number: '03',
    title: 'Products and Information',
    paragraphs: [
      'All product descriptions, photographs, category summaries and other details displayed on this website are provided for general informational purposes.',
      'While we strive to keep displayed information clear and accurate, product availability, packaging formats, specifications and other commercial details are subject to confirmation directly with Butter Valley prior to order placement.',
    ],
  },
  {
    number: '04',
    title: 'Quotations and Inquiries',
    paragraphs: [
      'Visitors and prospective buyers may submit quotation requests through our website forms or contact channels.',
    ],
    bullets: [
      'Submitting a quotation request or inquiry through the website does not constitute a confirmed purchase, contract or binding order.',
      'All quotations, trade proposals and commercial terms are subject to formal review and confirmation by Butter Valley.',
      'Prices, minimum quantities, product availability, payment arrangements and delivery terms must be agreed separately in writing between the buyer and Butter Valley.',
    ],
  },
  {
    number: '05',
    title: 'Product Specifications',
    paragraphs: [
      'Product specifications, pack weights, carton configurations, labeling details and grade classifications presented on the website are indicative and should be confirmed directly with Butter Valley before placing any commercial or wholesale order.',
    ],
  },
  {
    number: '06',
    title: 'International Orders and Exports',
    paragraphs: [
      'International trade inquiries, export arrangements, shipping schedules, customs documentation, import duties, taxes, regulatory clearances and delivery terms are subject to individual commercial agreement and applicable laws and regulations in both Pakistan and the destination jurisdiction.',
    ],
  },
  {
    number: '07',
    title: 'Intellectual Property',
    paragraphs: [
      'All website content, branding, trademarks, logos, product photographs, written descriptions, visual designs and layout materials appearing on this website belong to Butter Valley or their respective rights holders.',
      'No material from this website may be copied, reproduced, modified, republished, distributed or used for commercial purposes without prior written authorization from the rightful owner.',
    ],
  },
  {
    number: '08',
    title: 'Website Usage',
    paragraphs: [
      'You agree to use this website only for lawful informational and business inquiry purposes. You must not misuse the website, attempt unauthorized access to any systems or forms, introduce malicious code, perform automated scraping or take any action that could impair, disrupt or interfere with the normal operation of the website.',
    ],
  },
  {
    number: '09',
    title: 'Third-Party Links',
    paragraphs: [
      'This website may include links to external websites or third-party communication platforms, such as WhatsApp and social media channels. Those external services operate independently and are outside Butter Valley’s direct control. Butter Valley is not responsible for the content, availability or practices of third-party websites or platforms.',
    ],
  },
  {
    number: '10',
    title: 'Limitation of Liability',
    paragraphs: [
      'This website and its informational contents are provided on an "as available" basis without warranties of any kind regarding uninterrupted availability or completeness for any specific commercial purpose.',
      'To the fullest extent permitted by applicable law, Butter Valley shall not be liable for any indirect, incidental, consequential or commercial losses arising out of or in connection with your access to, use of, or inability to use this website or reliance on general informational content displayed on it.',
    ],
  },
  {
    number: '11',
    title: 'Changes to These Terms',
    paragraphs: [
      'Butter Valley may revise or update these Terms & Conditions from time to time when necessary to reflect operational, commercial or website changes. Any updated terms take effect upon being posted on this page, and continued use of the website constitutes acceptance of the current terms.',
    ],
  },
];

export function TermsConditionsPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  return (
    <>
      <SeoHead
        title="Terms & Conditions | Butter Valley"
        description="Review the Terms & Conditions governing your use of the Butter Valley website, product information, quotation requests and international export inquiries."
        path="/terms-and-conditions"
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
            <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#382319] leading-[1.14] sm:leading-[1.1]">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-xl text-[#59351F] leading-relaxed max-w-3xl">
              Please read these Terms &amp; Conditions carefully before browsing the Butter Valley
              website or submitting a wholesale or product quotation inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="divide-y divide-[#382319]/12 border-t border-[#382319]/12">
            {TERMS_SECTIONS.map((section) => (
              <article key={section.number} className="py-8 sm:py-10 space-y-3.5">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                  {section.number}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2.5 max-w-3xl pt-1">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#59351F] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C99536] shrink-0 mt-2.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {/* 12. Contact Information */}
            <article className="pt-8 sm:pt-10 space-y-5">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536] tabular-nums">
                12
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base text-[#59351F] leading-relaxed max-w-3xl">
                For questions regarding these Terms &amp; Conditions or to confirm commercial
                product and export details directly, please contact us:
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
                        href={`mailto:${COMPANY.email}`}
                        className="text-[#382319] font-medium hover:text-[#C99536] underline underline-offset-4 transition-colors break-all"
                      >
                        {COMPANY.email}
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
                  These terms are drafted for general informational website use and may be updated
                  when required.
                </p>
                <Link
                  to="/privacy-policy"
                  className="font-medium text-[#382319] hover:text-[#C99536] underline underline-offset-4 transition-colors"
                >
                  Read Privacy Policy
                </Link>
              </div>
            </article>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
