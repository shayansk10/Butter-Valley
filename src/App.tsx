/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { RouterProvider, useRouter, Link } from './context/RouterContext';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { ProductsOverviewPage } from './pages/ProductsOverviewPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QualityPage } from './pages/QualityPage';
import { ExportPage } from './pages/ExportPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { getCategoryBySlug } from './data/products';

function PageView() {
  const { pathname } = useRouter();

  const renderPage = () => {
    if (pathname === '/') return <HomePage />;
    if (pathname === '/about') return <AboutPage />;
    if (pathname === '/our-team') return <OurTeamPage />;
    if (pathname === '/products') return <ProductsOverviewPage />;
    if (pathname === '/quality') return <QualityPage />;
    if (pathname === '/export') return <ExportPage />;
    if (pathname === '/contact') return <ContactPage />;
    if (pathname === '/privacy-policy') return <PrivacyPolicyPage />;
    if (pathname === '/terms-and-conditions') return <TermsConditionsPage />;

    if (pathname.startsWith('/products/')) {
      const slug = pathname.replace('/products/', '');
      const category = getCategoryBySlug(slug);
      if (category) {
        return <ProductDetailPage category={category} />;
      }
    }

    return (
      <section className="pt-40 pb-28 bg-[#FFFCF6] text-center px-4">
        <div className="max-w-xl mx-auto space-y-5">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
            Page Not Found
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#382319]">
            We couldn't find that page
          </h1>
          <p className="text-base text-[#59351F]">
            Explore our wholesale product catalogue or return to the Butter Valley homepage.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 text-sm font-medium rounded-sm bg-[#382319] text-[#FFFCF6] hover:bg-[#59351F] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/products"
              className="px-6 py-3 text-sm font-medium rounded-sm border border-[#382319]/25 text-[#382319] hover:border-[#382319] transition-colors"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <QuoteModalProvider>
          <div className="min-h-screen flex flex-col bg-[#FFFCF6] text-[#28231F]">
            <Header />
            <main className="flex-1">
              <PageView />
            </main>
            <Footer />
            <WhatsAppButton />
            <RequestQuoteModal />
          </div>
        </QuoteModalProvider>
      </RouterProvider>
    </MotionConfig>
  );
}
