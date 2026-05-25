import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <span className="landing-badge">{eyebrow}</span>}
      <h2
        className={cn(
          'text-display-sm text-3xl sm:text-4xl lg:text-5xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed landing-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
