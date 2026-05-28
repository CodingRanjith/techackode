import { motion } from 'framer-motion'
import { Container } from '@/components/common/container'
import { CinematicBackground } from '@/components/home/motion'

type DivisionsHeroProps = {
  badge?: string
  heading: string
  subheading?: string
  theme?: 'default' | 'home'
}

export function DivisionsHero({
  badge = 'Techackode Divisions',
  heading,
  subheading,
  theme = 'default',
}: DivisionsHeroProps) {
  if (theme === 'home') {
    return (
      <section className="hp-hero">
        <CinematicBackground variant="hero" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="hp-eyebrow hp-eyebrow--glow">
              <span className="hp-eyebrow-dot" aria-hidden />
              {badge}
            </span>
            <h1 className="hp-hero__title mx-auto mt-6 !max-w-3xl !text-[clamp(2rem,5vw,3.75rem)]">
              <span className="block text-[var(--hp-ink)]">{heading}</span>
              <span className="block hp-gradient-text--accent">A Connected Multi-Domain Ecosystem</span>
            </h1>
            {subheading && <p className="hp-hero__lead mx-auto mt-6 !max-w-2xl">{subheading}</p>}
          </motion.div>
        </Container>
      </section>
    )
  }

  return (
    <section className="relative border-b border-[var(--border-soft)] bg-[var(--cream-card)] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="landing-badge">{badge}</span>
          <h1 className="text-display mt-6 text-[clamp(2rem,5vw,3.75rem)]">{heading}</h1>
          {subheading && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed landing-muted sm:text-lg">
              {subheading}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
