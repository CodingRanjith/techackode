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
  const isCenter = align === 'center'

  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'hp-section-header',
        isCenter && 'hp-section-header--center text-center',
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
          'hp-h-section',
          size === 'hero' && 'hp-h-section--lg',
          isCenter && 'hp-h-section--center',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'hp-subtitle-section',
            isCenter && 'hp-subtitle-section--center text-center',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
