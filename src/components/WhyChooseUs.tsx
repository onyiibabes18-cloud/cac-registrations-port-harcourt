import { Zap, Wallet, ShieldCheck, Headphones, Lock, Smile } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const REASONS = [
  { icon: Zap, title: 'Fast Processing', description: 'Quick, accurate documentation and direct CAC processing.' },
  { icon: Wallet, title: 'Affordable Pricing', description: 'Fair, transparent fees with no hidden charges.' },
  { icon: ShieldCheck, title: 'Professional Guidance', description: 'Expert advice on the right registration type for you.' },
  { icon: Headphones, title: 'Reliable Customer Support', description: 'Mr. David personally guides you at every step.' },
  { icon: Lock, title: 'Secure & Transparent Process', description: 'Your documents are handled safely and professionally.' },
  { icon: Smile, title: 'Excellent Customer Satisfaction', description: '5.0 Google rating from dozens of happy clients.' },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Why Choose Our CAC Registration Service{' '}
              <span className="text-brand-700 dark:text-brand-400">in Port Harcourt</span>
            </>
          }
          subtitle="Hundreds of business owners trust us with their CAC registration. Here is why."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-700/10 dark:border-ink-800 dark:bg-ink-900">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150 dark:bg-brand-950/40" />
                  <div className="relative">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-700 p-3.5 text-white shadow-lg shadow-brand-700/25 transition-transform group-hover:scale-110">
                      <Icon size={24} strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
