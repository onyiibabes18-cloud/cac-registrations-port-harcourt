import { ShieldCheck, Phone, MapPin, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const SERVICE_LINKS = [
  'Business Name Registration',
  'Company Registration',
  'Club & Association Registration',
  'Union Registration',
  'Post-Registration Compliance',
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                <ShieldCheck size={20} strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold text-white">CAC Registrations</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-400">Port Harcourt</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Fast, affordable, and stress-free CAC registration for businesses, clubs, associations,
              and unions in Port Harcourt and across Nigeria.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1.5">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-xs font-medium text-ink-300">
                {BUSINESS.rating.toFixed(1)} · {BUSINESS.reviewCount} Google Reviews
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-400 transition-colors hover:text-brand-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-ink-400 transition-colors hover:text-brand-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <span className="text-sm text-ink-400">{BUSINESS.address}</span>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phoneIntl}`} className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-brand-300">
                  <Phone size={17} className="shrink-0 text-brand-400" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-brand-300">
                  <Mail size={17} className="shrink-0 text-brand-400" />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink('Hello Mr. David, I would like to register my business with CAC.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-ink-500">Led by {BUSINESS.owner}</p>
            <a
              href="#home"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-colors hover:border-brand-500 hover:text-brand-400"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
