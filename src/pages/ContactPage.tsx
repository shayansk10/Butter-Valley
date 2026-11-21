import { Mail, MapPin, Facebook, Instagram, Phone } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MotionReveal } from '../components/MotionReveal';
import { RequestQuoteForm } from '../components/RequestQuoteForm';
import { COMPANY } from '../data/company';

export function ContactPage() {
  const { search } = useRouter();
  const params = new URLSearchParams(search);
  const preselectedProduct = params.get('product') || '';

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Get In Touch', path: '/contact' },
  ];

  return (
    <>
      <SeoHead
        title="Get In Touch | Request a Wholesale Quote | Butter Valley Ltd."
        description="Contact Butter Valley Ltd. in SITE Hyderabad, Sindh, Pakistan for wholesale food and Pink Himalayan Salt export inquiries."
        path="/contact"
        breadcrumbs={breadcrumbs}
      />

      {/* Contact Hero */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-18 bg-[#F7F0E3] border-b border-[#382319]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#C99536]">
              Wholesale &amp; Export Inquiries
            </p>
            <h1 className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#382319] leading-[1.14] sm:leading-[1.1]">
              Let's Start a Conversation
            </h1>
            <p className="text-base sm:text-xl text-[#59351F] leading-relaxed">
              Have a wholesale inquiry or want to explore our product range? We'd love to hear from
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Direct Details */}
      <section className="py-16 sm:py-24 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Direct Company Details */}
            <MotionReveal className="lg:col-span-5 space-y-8">
              <div className="space-y-6 bg-[#F7F0E3] border border-[#382319]/12 rounded-sm p-7 sm:p-9">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#382319]">
                  Official Company Details
                </h2>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#C99536] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                        Official Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-base font-medium text-[#382319] hover:text-[#C99536] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#C99536] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                        Manufacturing &amp; Office Address
                      </p>
                      <p className="text-sm sm:text-base text-[#382319] leading-relaxed mt-0.5">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#C99536] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                        Telephone &amp; WhatsApp
                      </p>
                      <div className="mt-1.5 space-y-2">
                        <div className="space-y-1">
                          <p className="text-sm sm:text-base text-[#382319] flex flex-wrap items-baseline gap-x-2">
                            <span className="font-semibold">WhatsApp:</span>
                            <a
                              href="https://wa.me/923360359225"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#382319] hover:text-[#C99536] transition-colors underline underline-offset-4 decoration-[#C99536]/60 py-0.5"
                            >
                              +92 336 0359225
                            </a>
                          </p>
                          <p className="text-sm sm:text-base text-[#382319] flex flex-wrap items-baseline gap-x-2">
                            <span className="font-semibold">Call &amp; Text:</span>
                            <a
                              href="tel:+923153029801"
                              className="font-semibold text-[#382319] hover:text-[#C99536] transition-colors underline underline-offset-4 decoration-[#C99536]/60 py-0.5"
                            >
                              +92 315 3029801
                            </a>
                          </p>
                        </div>
                        <p className="text-sm text-[#59351F] leading-relaxed">
                          Connect with our team directly on WhatsApp for product inquiries,
                          wholesale quotations and export-related assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#382319]/12 space-y-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#78836A]">
                    Official Social Channels
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={COMPANY.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Butter Valley Ltd. on Facebook"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-sm bg-[#FFFCF6] border border-[#382319]/15 text-[#382319] hover:border-[#C99536] hover:text-[#C99536] transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a
                      href={COMPANY.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Butter Valley Ltd. on Instagram"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-sm bg-[#FFFCF6] border border-[#382319]/15 text-[#382319] hover:border-[#C99536] hover:text-[#C99536] transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </MotionReveal>

            {/* Unified Request a Quote Form */}
            <MotionReveal delay={0.08} className="lg:col-span-7">
              <RequestQuoteForm initialProduct={preselectedProduct} variant="embedded" />
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
