import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS, whatsappLink } from '../data/business';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Services() {
  return (
    <section id="services" className="section-pad bg-ink-50/70 dark:bg-ink-900/40">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Complete CAC Registration Services{' '}
              <span className="text-brand-700 dark:text-brand-400">Under One Roof</span>
            </>
          }
          subtitle="From business names to incorporated trustees, we handle every type of CAC registration with precision and care."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 70}>
                <article className="card group relative flex h-full flex-col p-6 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-700/10 dark:hover:border-brand-700">
                  {service.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-accent-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-700 dark:bg-accent-950/50 dark:text-accent-400">
                      Popular
                    </span>
                  )}
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-700/25 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-300">
                        <Check size={15} className="shrink-0 text-accent-600 dark:text-accent-400" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello Mr. David, I'm interested in: ${service.title}. Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    Get started
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 to-accent-50 p-7 sm:flex-row sm:gap-6 dark:border-brand-900/50 dark:from-brand-950/40 dark:to-accent-950/30">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                Not sure which registration you need?
              </h3>
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">
                Chat with {BUSINESS.owner} on WhatsApp for free guidance on the right CAC registration for you.
              </p>
            </div>
            <a
              href={whatsappLink('Hello Mr. David, I need guidance on which CAC registration is right for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent shrink-0"
            >
              Get Free Guidance
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
