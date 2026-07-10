import { MessageCircle, FileText, ClipboardCheck, Award } from 'lucide-react';
import { whatsappLink } from '../data/business';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const STEPS = [
  { icon: MessageCircle, step: '01', title: 'Contact Us', description: 'Message us on WhatsApp or call. Tell us what you want to register.' },
  { icon: FileText, step: '02', title: 'Submit Your Details', description: 'Send your documents via WhatsApp or bring them to our office.' },
  { icon: ClipboardCheck, step: '03', title: 'We Handle the Registration', description: 'We process everything with CAC and keep you updated at every stage.' },
  { icon: Award, step: '04', title: 'Receive Your CAC Certificate', description: 'Collect your original CAC certificate and documents. Done!' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-ink-50/70 dark:bg-ink-900/40">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Four Simple Steps to{' '}
              <span className="text-brand-700 dark:text-brand-400">Register Your Business</span>
            </>
          }
          subtitle="Getting your CAC registration done has never been easier."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-brand-200 via-accent-300 to-brand-200 lg:block dark:from-brand-800 dark:via-accent-800 dark:to-brand-800" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i * 110}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-200 bg-white shadow-lg shadow-brand-700/10 transition-transform hover:scale-105 dark:border-brand-800 dark:bg-ink-900">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                        <Icon size={26} strokeWidth={2} />
                      </span>
                    </div>
                    <span className="mt-4 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-700 dark:bg-accent-950/50 dark:text-accent-400">
                      Step {step.step}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-ink-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-14 text-center">
          <a href={whatsappLink('Hello Mr. David, I would like to start my CAC registration. What documents do I need?')} target="_blank" rel="noopener noreferrer" className="btn-accent inline-flex">
            <MessageCircle size={20} strokeWidth={2.2} />
            Start Your Registration Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
