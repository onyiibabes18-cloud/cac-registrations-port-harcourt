import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';
import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section id="cta" className="section-pad">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 px-6 py-16 text-center shadow-2xl shadow-brand-900/30 sm:px-12 sm:py-20">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Register Your Business with CAC?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
                Start your CAC registration today. Message {BUSINESS.owner} on WhatsApp or call now —
                fast, affordable, and stress-free.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappLink('Hello Mr. David, I am ready to register my business with CAC. Please help me get started.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/30 transition-all duration-300 hover:bg-accent-600 hover:-translate-y-0.5"
                >
                  <MessageCircle size={22} strokeWidth={2.2} />
                  Register on WhatsApp
                  <ArrowRight size={18} />
                </a>
                <a
                  href={`tel:${BUSINESS.phoneIntl}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                >
                  <Phone size={22} strokeWidth={2.2} />
                  Call Now: {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
