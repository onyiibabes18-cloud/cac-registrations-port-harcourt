import { useState, useRef, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
  ExternalLink,
  Mail,
  AlertTriangle,
} from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';
import { SERVICES } from '../data/services';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

// NOTE: Replace this URL with the uploaded office interior photo.
const INTERIOR_PHOTO =
  'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1000';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const SUPABASE_AVAILABLE = Boolean(
  SUPABASE_URL && SUPABASE_URL !== 'your-supabase-url' &&
  SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'your-supabase-anon-key',
);

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  // Lazily initialise the Supabase client only when env vars are present
  const supabaseRef = useRef<import('@supabase/supabase-js').SupabaseClient | null>(null);

  async function getSupabase() {
    if (!SUPABASE_AVAILABLE) return null;
    if (!supabaseRef.current) {
      const { createClient } = await import('@supabase/supabase-js');
      supabaseRef.current = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
    }
    return supabaseRef.current;
  }

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      const client = await getSupabase();
      if (!client) throw new Error('Database not configured');
      const { error } = await client.from('contact_submissions').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        service: form.service || null,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputCls =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500';

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Get in Touch &amp;{' '}
              <span className="text-brand-700 dark:text-brand-400">Register Your Business with CAC Today</span>
            </>
          }
          subtitle="Send us a message, call, or visit our CAC registration office on Ada-George Road, Port Harcourt. We respond quickly."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: form + info */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                  Send a Message
                </h3>
                <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
                  Fill the form and {BUSINESS.owner} will get back to you shortly.
                </p>

                {!SUPABASE_AVAILABLE && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700/50 dark:bg-amber-950/30 dark:text-amber-300">
                    <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                    <span>
                      The contact form is temporarily unavailable. Please call or message us on{' '}
                      <a
                        href={whatsappLink('Hello Mr. David, I would like to register my business.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline underline-offset-2"
                      >
                        WhatsApp
                      </a>{' '}
                      directly.
                    </span>
                  </div>
                )}

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      required
                      disabled={!SUPABASE_AVAILABLE}
                      value={form.full_name}
                      onChange={(e) => update('full_name', e.target.value)}
                      placeholder="e.g. Chinedu Okafor"
                      className={`${inputCls} disabled:cursor-not-allowed disabled:opacity-50`}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      disabled={!SUPABASE_AVAILABLE}
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="e.g. 0801 234 5678"
                      className={`${inputCls} disabled:cursor-not-allowed disabled:opacity-50`}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={!SUPABASE_AVAILABLE}
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className={`${inputCls} disabled:cursor-not-allowed disabled:opacity-50`}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      disabled={!SUPABASE_AVAILABLE}
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={`${inputCls} disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      disabled={!SUPABASE_AVAILABLE}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us about the business you want to register..."
                      className={`${inputCls} resize-none disabled:cursor-not-allowed disabled:opacity-50`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !SUPABASE_AVAILABLE}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} strokeWidth={2.2} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-accent-50 px-4 py-3 text-sm font-medium text-accent-700 dark:bg-accent-950/40 dark:text-accent-300">
                    <CheckCircle2 size={18} className="shrink-0" />
                    Message sent! We will contact you shortly. For urgent matters, message us on WhatsApp.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300">
                    Something went wrong. Please call {BUSINESS.phoneDisplay} or message us on WhatsApp.
                  </div>
                )}
              </form>
            </Reveal>

            {/* Contact details */}
            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${BUSINESS.phoneIntl}`}
                  className="card group flex items-start gap-3.5 p-5 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg dark:hover:border-brand-700"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <Phone size={18} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">Call Us</p>
                    <p className="mt-0.5 font-display text-base font-bold text-ink-900 dark:text-white">{BUSINESS.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={whatsappLink('Hello Mr. David, I would like to register my business with CAC.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-start gap-3.5 p-5 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-lg dark:hover:border-accent-700"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white">
                    <MessageCircle size={18} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">WhatsApp</p>
                    <p className="mt-0.5 font-display text-base font-bold text-ink-900 dark:text-white">{BUSINESS.phoneDisplay}</p>
                  </div>
                </a>
                <div className="card flex items-start gap-3.5 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <MapPin size={18} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">Visit Us</p>
                    <p className="mt-0.5 text-sm font-medium text-ink-800 dark:text-ink-200">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="card flex items-start gap-3.5 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <Mail size={18} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">Email</p>
                    <p className="mt-0.5 text-sm font-medium text-ink-800 dark:text-ink-200">{BUSINESS.email}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: map + hours + interior photo */}
          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <div className="card overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={INTERIOR_PHOTO}
                    alt="CAC Registrations Port Harcourt office interior — business registration consultation"
                    className="h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                    width="1000"
                    height="224"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">Our Office</h3>
                    <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">{BUSINESS.address}</p>
                  </div>
                  <a
                    href={BUSINESS.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100 dark:bg-brand-950/50 dark:text-brand-300 dark:hover:bg-brand-900/50"
                  >
                    Directions
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="card overflow-hidden">
                <iframe
                  title="CAC Registrations Port Harcourt location map"
                  src={BUSINESS.mapsEmbed}
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                    <Clock size={18} strokeWidth={2.2} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">Business Hours</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {BUSINESS.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-ink-100 pb-2.5 last:border-0 last:pb-0 dark:border-ink-800">
                      <span className="text-sm font-medium text-ink-700 dark:text-ink-300">{h.day}</span>
                      <span className={`text-sm ${h.time === 'Closed' ? 'text-red-500' : 'text-ink-600 dark:text-ink-400'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
