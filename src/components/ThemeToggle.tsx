import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, type ThemeMode } from '../hooks/useTheme';

const OPTIONS: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="relative inline-flex items-center rounded-full border border-ink-200 bg-ink-50 p-1 dark:border-ink-700 dark:bg-ink-800/80">
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const active = mode === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            aria-label={`${label} theme`}
            aria-pressed={active}
            title={`${label} theme`}
            className={`relative inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
              active
                ? 'bg-white text-brand-700 shadow-sm dark:bg-ink-700 dark:text-brand-300'
                : 'text-ink-500 hover:text-ink-700 dark:text-ink-400 dark:hover:text-ink-200'
            }`}
          >
            <Icon size={16} strokeWidth={2.2} />
          </button>
        );
      })}
    </div>
  );
}
