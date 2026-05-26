import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type PremiumHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  size?: 'default' | 'hero'
  className?: string
}

export function PremiumHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  size = 'default',
  className,
}: PremiumHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative mb-14 max-w-4xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="hp-eyebrow hp-eyebrow--glow">
          <span className="hp-eyebrow-dot" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-5 font-bold tracking-tight text-[var(--hp-ink)]',
          size === 'hero'
            ? 'text-4xl sm:text-5xl lg:text-6xl'
            : 'text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.08]',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-[var(--hp-muted)] sm:text-lg sm:leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
