import { CheckCircle2, BadgeCheck, Award } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const STATS = [
  { value: '500+', label: 'Businesses Registered' },
  { value: '8+', label: 'Years of Experience' },
  { value: '5.0', label: 'Google Rating' },
  { value: '100%', label: 'Compliance Rate' },
];

const POINTS = [
  'Direct, personalised service from Mr. David — not a faceless agency',
  'Transparent, affordable pricing with no hidden charges',
  'Deep knowledge of CAC requirements for all entity types',
  'Ongoing support for annual returns and post-registration compliance',
];

// NOTE: Replace this URL with the uploaded office signboard photo.
const SIGNBOARD_PHOTO =
  'https://images.pexels.com/photos/1205441/pexels-photo-1205441.jpeg?auto=compress&cs=tinysrgb&w=1000';

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-accent-500/60" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-brand-700/60" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/15">
                <img
                  src={SIGNBOARD_PHOTO}
                  alt="CAC Registrations Port Harcourt office signboard on Ada-George Road"
                  className="h-[380px] w-full object-cover sm:h-[460px]"
                  loading="lazy"
                  width="1000"
                  height="460"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-6 z-10 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-xl dark:border-ink-800 dark:bg-ink-900 sm:left-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <Award size={22} strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink-900 dark:text-white">
                    Led by {BUSINESS.owner}
                  </p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">CAC Registration Expert</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Us"
              align="left"
              title={
                <>
                  Your Trusted CAC Registration Partner{' '}
                  <span className="text-brand-700 dark:text-brand-400">in Port Harcourt</span>
                </>
              }
              subtitle={
                <>
                  {BUSINESS.name} is a professional CAC registration service based in Port Harcourt,
                  Rivers State. For years, we have helped entrepreneurs, clubs, associations, and
                  unions get their businesses legally registered — quickly, correctly, and at an
                  affordable cost.
                </>
              }
            />

            <ul className="mt-7 space-y-3.5">
              {POINTS.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 80} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" strokeWidth={2.2} />
                  <span className="text-base text-ink-700 dark:text-ink-300">{point}</span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-brand-50 px-4 py-3 dark:bg-brand-950/40">
              <BadgeCheck size={20} className="text-brand-700 dark:text-brand-400" strokeWidth={2.2} />
              <span className="text-sm font-medium text-brand-800 dark:text-brand-200">
                Fully compliant with Corporate Affairs Commission standards
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="card group p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-700/10">
                <p className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl dark:text-brand-400">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm font-medium text-ink-500 dark:text-ink-400">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
