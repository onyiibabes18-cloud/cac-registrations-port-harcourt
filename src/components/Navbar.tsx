import { useEffect, useState } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-sm shadow-ink-900/5 dark:bg-ink-950/85'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md shadow-brand-700/30 transition-transform group-hover:scale-105">
            <ShieldCheck size={20} strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-bold tracking-tight text-ink-900 dark:text-white">
              CAC Registrations
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
              Port Harcourt
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-brand-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <a
            href={whatsappLink('Hello Mr. David, I would like to register my business with CAC.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-accent !px-4 !py-2.5 !text-sm sm:inline-flex"
          >
            Register on WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phoneIntl}`}
            className="hidden items-center justify-center rounded-xl border border-ink-200 bg-white p-2.5 text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 sm:inline-flex dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-brand-700"
            aria-label="Call now"
          >
            <Phone size={18} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-ink-200 bg-white p-2.5 text-ink-700 lg:hidden dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 dark:border-ink-800 dark:bg-ink-950/95 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-ink-200 dark:hover:bg-ink-800 dark:hover:text-brand-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink-100 pt-4 dark:border-ink-800">
            <ThemeToggle />
            <a
              href={whatsappLink('Hello Mr. David, I would like to register my business with CAC.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-accent !px-4 !py-2.5 !text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
