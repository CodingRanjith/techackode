import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { cn } from '@/lib/utils'

type HomeHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function HomeHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: HomeHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        'mb-12 max-w-3xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="hp-eyebrow">
          <span className="hp-eyebrow-dot" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight text-[var(--hp-ink)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-[var(--hp-muted)] sm:text-lg">{subtitle}</p>
      )}
    </ScrollReveal>
  )
}
