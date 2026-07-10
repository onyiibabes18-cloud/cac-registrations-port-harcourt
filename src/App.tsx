import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <Reviews />
        <CTA />
        <Contact />
        {/* Crawlable SEO content for local search visibility */}
        <section className="seo-only" aria-hidden="true">
          <h2>CAC Registration Port Harcourt — Corporate Affairs Commission Registration Services</h2>
          <p>
            CAC Registrations Port Harcourt is a professional Corporate Affairs Commission
            registration service based at Mile 3, 23 Ada-George Road, Mgbuosimiri, Port Harcourt,
            Rivers State, Nigeria. We help entrepreneurs, clubs, associations, cooperatives, and
            unions register their businesses with CAC quickly, correctly, and affordably. Our
            services include CAC business name registration, limited company (LTD) registration,
            club and association registration as incorporated trustees, union registration,
            post-registration compliance, annual returns filing, and document verification. As a
            trusted CAC agent in Port Harcourt, we serve clients across Rivers State and all of
            Nigeria. Contact us on WhatsApp or call 0807 680 5579 to start your CAC registration
            today.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </ErrorBoundary>
  );
}
