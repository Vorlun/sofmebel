import { cn } from '@/lib/utils';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'left',
  className
}: SectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'max-w-2xl',
        isCenter && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          {label}
        </p>
      )}

      <h2 className="mt-6 text-4xl font-display leading-tight text-primary sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-relaxed text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}