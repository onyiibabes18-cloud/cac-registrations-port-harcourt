import { useEffect, useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#how-it-works', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/60 bg-white/90 backdrop-blur-md dark:border-ink-800/60 dark:bg-ink-950/90'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-18">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-700/25">
              <Building2 size={22} strokeWidth={2.2} />
            </span>
            <span className="font-display text-base font-bold text-ink-900 dark:text-white">
              CAC Registrations <span className="text-brand-700 dark:text-brand-400">PH</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-brand-300">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button type="button" onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 lg:hidden dark:border-ink-700 dark:text-ink-200" aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-ink-200/60 py-3 lg:hidden dark:border-ink-800/60">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-brand-300">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
