import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS, whatsappLink } from '../data/business';

export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setTooltip(true), 1200);
    const t2 = setTimeout(() => setTooltip(false), 7000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [show]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      {/* Tooltip */}
      {tooltip && (
        <div className="relative max-w-[220px] animate-fade-up rounded-2xl rounded-br-sm bg-white px-4 py-3 shadow-xl ring-1 ring-ink-900/5 dark:bg-ink-800 dark:ring-white/5">
          <button
            type="button"
            onClick={() => setTooltip(false)}
            aria-label="Dismiss"
            className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink-200 text-ink-600 dark:bg-ink-700 dark:text-ink-300"
          >
            <X size={12} strokeWidth={2.5} />
          </button>
          <p className="text-sm font-medium text-ink-800 dark:text-ink-100">
            Need to register your business?
          </p>
          <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">
            Chat with {BUSINESS.owner} on WhatsApp now!
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappLink('Hello Mr. David, I would like to register my business with CAC.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg shadow-accent-600/40 transition-all hover:scale-105 hover:bg-accent-700"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-500" />
        <MessageCircle size={26} strokeWidth={2.2} className="relative" />
      </a>
    </div>
  );
}
