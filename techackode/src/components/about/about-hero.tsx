import { motion } from 'framer-motion'
import { BriefcaseBusiness, Globe2, Layers3 } from 'lucide-react'
import { Container } from '@/components/common/container'
import { CinematicBackground } from '@/components/home/motion'

type AboutHeroProps = {
  badge?: string
  heading: string
  subheading?: string
  theme?: 'default' | 'home'
}

export function AboutHero({
  badge = 'About Techackode',
  heading,
  subheading,
  theme = 'default',
}: AboutHeroProps) {
  const highlights = [
    { label: 'Founded', value: '2025', icon: BriefcaseBusiness },
    { label: 'Core Domains', value: '6+', icon: Layers3 },
    { label: 'Global Vision', value: 'Future-Ready', icon: Globe2 },
  ] as const

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
              <span className="block hp-gradient-text--accent">Who We Are & What We Build</span>
            </h1>
            {subheading && <p className="hp-hero__lead mx-auto mt-6 !max-w-2xl">{subheading}</p>}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                    className="rounded-2xl border border-[var(--hp-border)] bg-white/85 p-4 text-left shadow-[var(--hp-shadow-sm)] backdrop-blur"
                  >
                    <span className="mb-3 inline-flex size-8 items-center justify-center rounded-lg bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                      <Icon className="size-4" strokeWidth={2} />
                    </span>
                    <p className="text-xs font-semibold tracking-[0.1em] text-[var(--hp-soft)] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--hp-ink)] sm:text-base">
                      {item.value}
                    </p>
                  </motion.div>
                )
              })}
            </div>
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
