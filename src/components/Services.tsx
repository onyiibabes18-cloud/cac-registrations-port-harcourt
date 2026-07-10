import { MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { whatsappLink } from '../data/business';
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
              Complete CAC Registration Services in Port Harcourt{' '}
              <span className="text-brand-700 dark:text-brand-400">Under One Roof</span>
            </>
          }
          subtitle="From business name registration to incorporated trustees, our CAC agent handles every type of Corporate Affairs Commission registration."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 70}>
                <article className="card group relative flex h-full flex-col p-6 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-700/10 dark:hover:border-brand-700">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-700/25 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    <MessageCircle size={16} strokeWidth={2.2} />
                    Enquire on WhatsApp
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
