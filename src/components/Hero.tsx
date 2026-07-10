import { MessageCircle, Phone, Star, ShieldCheck, Clock, FileCheck, ArrowRight } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';
import { StarRating } from './StarRating';

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Fully CAC Compliant' },
  { icon: Clock, label: 'Fast Turnaround' },
  { icon: FileCheck, label: 'Registered & Certified' },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white dark:from-ink-900 dark:via-ink-950 dark:to-ink-950" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/10" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/10" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: copy */}
          <div className="animate-fade-up">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 shadow-sm dark:border-amber-500/30 dark:bg-amber-500/10">
              <div className="flex items-center gap-1.5">
                <StarRating rating={5} size={16} />
              </div>
              <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                {BUSINESS.rating.toFixed(1)} Google Rating
              </span>
              <span className="text-sm text-ink-500 dark:text-ink-400">
                ({BUSINESS.reviewCount} Reviews)
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white">
              CAC Registration in{' '}
              <span className="relative whitespace-nowrap text-brand-700 dark:text-brand-400">
                Port Harcourt
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C40 4 160 4 198 9"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              — Fast, Affordable &amp; Stress-Free
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Register your Business Name, Company, Club, Association, or Union with the
              Corporate Affairs Commission (CAC) in Port Harcourt, Rivers State. Expert CAC
              agent {BUSINESS.owner} handles your registration quickly, correctly, and at an
              affordable cost — with no hidden charges.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink('Hello Mr. David, I would like to register my business with CAC. Please guide me.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent group"
              >
                <MessageCircle size={20} strokeWidth={2.2} />
                Register on WhatsApp
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-ghost">
                <Phone size={20} strokeWidth={2.2} />
                Call Now: {BUSINESS.phoneDisplay}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-ink-600 dark:text-ink-400">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                    <Icon size={16} strokeWidth={2.2} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <div className="relative animate-scale-in lg:justify-self-end">
            <div className="relative max-w-md">
              {/* Floating stat card */}
              <div className="absolute -left-6 -top-6 z-20 rounded-2xl border border-ink-100 bg-white p-4 shadow-xl shadow-ink-900/10 animate-float dark:border-ink-800 dark:bg-ink-900">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500 dark:bg-amber-500/10">
                    <Star size={22} className="fill-amber-400 text-amber-400" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">5.0</p>
                    <p className="text-xs font-medium text-ink-500 dark:text-ink-400">
                      {BUSINESS.reviewCount} Google Reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Main image card */}
              <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-2xl shadow-brand-900/15 dark:border-ink-800">
                <img
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="CAC business registration consultation in Port Harcourt office with Mr. David"
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                  loading="eager"
                  width="900"
                  height="480"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 backdrop-blur-sm dark:bg-ink-900/90">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                      <ShieldCheck size={20} strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">
                        Trusted CAC Registration Agent
                      </p>
                      <p className="truncate text-xs text-ink-500 dark:text-ink-400">
                        {BUSINESS.addressShort}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-5 -right-5 z-20 rounded-2xl border border-ink-100 bg-white p-4 shadow-xl shadow-ink-900/10 dark:border-ink-800 dark:bg-ink-900 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="font-display text-3xl font-extrabold text-accent-600 dark:text-accent-400">100%</p>
                <p className="text-xs font-medium text-ink-500 dark:text-ink-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
