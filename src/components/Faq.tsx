import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { BUSINESS, whatsappLink } from '../data/business';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-ink-50/70 dark:bg-ink-900/40">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              CAC Registration in Port Harcourt —{' '}
              <span className="text-brand-700 dark:text-brand-400">Frequently Asked Questions</span>
            </>
          }
          subtitle="Everything you need to know about registering your business with the Corporate Affairs Commission in Port Harcourt. Still have questions? Just message us."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 dark:bg-ink-900 ${
                    isOpen
                      ? 'border-brand-300 shadow-md shadow-brand-700/10 dark:border-brand-700'
                      : 'border-ink-200/80 dark:border-ink-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex items-center gap-3.5">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isOpen
                            ? 'bg-brand-700 text-white'
                            : 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-400'
                        }`}
                      >
                        <HelpCircle size={16} strokeWidth={2.2} />
                      </span>
                      <span className="font-display text-base font-semibold text-ink-900 dark:text-white">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-ink-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-relaxed text-ink-600 dark:text-ink-400 sm:px-6 sm:pl-[4.25rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-600 dark:text-ink-400">Still have questions?</p>
          <a
            href={whatsappLink('Hello Mr. David, I have a question about CAC registration.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-3 inline-flex"
          >
            Ask {BUSINESS.owner} on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
