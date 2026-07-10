import { Building2, Phone, MapPin, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#how-it-works', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200/60 bg-ink-50/50 dark:border-ink-800/60 dark:bg-ink-950">
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-700/25">
                <Building2 size={22} strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-bold text-ink-900 dark:text-white">
                CAC Registrations <span className="text-brand-700 dark:text-brand-400">Port Harcourt</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Professional CAC registration services in Port Harcourt, Rivers State. Business Name,
              Company, Club, Association &amp; Union registration.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-500 transition-colors hover:text-brand-700 dark:text-ink-400 dark:hover:text-brand-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-ink-500 dark:text-ink-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {BUSINESS.address}
              </li>
              <li>
                <a href={`tel:${BUSINESS.phoneIntl}`} className="flex items-center gap-2.5 text-sm text-ink-500 transition-colors hover:text-brand-700 dark:text-ink-400 dark:hover:text-brand-300">
                  <Phone size={16} className="shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink('Hello Mr. David, I would like to register my business.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400">
                  <MessageCircle size={16} className="shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 text-sm text-ink-500 transition-colors hover:text-brand-700 dark:text-ink-400 dark:hover:text-brand-300">
                  <Mail size={16} className="shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-200/60 pt-6 sm:flex-row dark:border-ink-800/60">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-500 transition-colors hover:text-brand-700 dark:text-ink-400 dark:hover:text-brand-300">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
