import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { BUSINESS } from '../data/business';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { StarRating } from './StarRating';

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);

  const total = REVIEWS.length;

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex = Math.max(0, total - perView);

  const scrollTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, maxIndex));
      setActive(clamped);
      const track = trackRef.current;
      if (track) {
        const card = track.children[0] as HTMLElement;
        const gap = 24;
        const offset = clamped * (card.offsetWidth + gap);
        track.scrollTo({ left: offset, behavior: 'smooth' });
      }
    },
    [maxIndex],
  );

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  // Sync scroll position with active index
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const gap = 24;
    const idx = Math.round(track.scrollLeft / (card.offsetWidth + gap));
    setActive(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);

  return (
    <section id="reviews" className="section-pad">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Google Reviews"
          title={
            <>
              Rated <span className="text-brand-700 dark:text-brand-400">5.0 Stars</span> by Our
              Clients
            </>
          }
          subtitle="Real reviews from business owners who trusted us with their CAC registration."
        />

        {/* Rating summary */}
        <Reveal className="mt-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-ink-200/80 bg-white p-6 text-center shadow-sm sm:flex-row sm:justify-center sm:gap-8 sm:text-left dark:border-ink-800 dark:bg-ink-900">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl font-extrabold text-ink-900 dark:text-white">
                {BUSINESS.rating.toFixed(1)}
              </span>
              <StarRating rating={5} size={18} className="mt-1.5" />
              <span className="mt-1.5 text-xs font-medium text-ink-500 dark:text-ink-400">
                {BUSINESS.reviewCount} reviews
              </span>
            </div>
            <div className="hidden h-16 w-px bg-ink-200 sm:block dark:bg-ink-700" />
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <GoogleG />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-ink-900 dark:text-white">Google Reviews</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">Verified by Google</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="relative mt-12">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {REVIEWS.map((review, i) => (
              <article
                key={i}
                className="w-[85%] shrink-0 snap-center sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="card flex h-full flex-col p-6 hover:shadow-lg hover:shadow-brand-700/10">
                  <div className="flex items-start justify-between">
                    <Quote size={32} className="text-brand-200 dark:text-brand-800" strokeWidth={1.5} />
                    <StarRating rating={review.rating} size={15} />
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                    "{review.text}"
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4 dark:border-ink-800">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-sm font-bold text-white">
                      {review.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">
                        {review.name}
                      </p>
                      <p className="truncate text-xs text-ink-500 dark:text-ink-400">
                        {review.service} · {review.date}
                      </p>
                    </div>
                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center">
                      <GoogleG small />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous reviews"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-brand-700"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to review page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-brand-700 dark:bg-brand-400' : 'w-2 bg-ink-300 dark:bg-ink-700'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollTo(active + 1)}
              disabled={active >= maxIndex}
              aria-label="Next reviews"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-brand-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleG({ small = false }: { small?: boolean }) {
  const size = small ? 16 : 28;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}
