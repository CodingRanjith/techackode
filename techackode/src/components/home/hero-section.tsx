import { motion } from 'framer-motion'
import { heroContent } from '@/data/home'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
import { HeroBadge } from '@/components/home/hero-badge'

const trustItems = [
  'Software',
  'AI & Automation',
  'Cybersecurity',
  'Edutech',
  'SaaS Products',
  'Enterprise',
] as const

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-28 pb-0 sm:pt-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <HeroBadge />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-display text-[clamp(2.1rem,6vw,4.5rem)]"
          >
            <span className="block">Empowering the Future Through</span>
            <span className="mt-2 block">
              <span className="text-highlight">Technology</span>,{' '}
              <span className="text-highlight">Learning</span> &{' '}
              <span className="text-highlight">Innovation</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed landing-muted sm:text-base lg:text-lg"
          >
            {heroContent.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <GlowButton href={heroContent.ctas[0].href} size="lg">
              {heroContent.ctas[0].label}
            </GlowButton>
            <GlowButton href={heroContent.ctas[1].href} variant="ghost">
              {heroContent.ctas[1].label}
            </GlowButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <div className="scroll-hint flex-col items-center">
            <span>Scroll</span>
            <span className="scroll-hint-line" />
          </div>
        </motion.div>
      </Container>

      <div className="trust-strip relative mt-12 py-6 sm:mt-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--ink-soft)] uppercase">
              Multi-domain ecosystem
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="text-sm font-semibold text-[var(--ink-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
