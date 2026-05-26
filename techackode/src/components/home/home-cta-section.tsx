import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/common/container'
import { CinematicBackground } from '@/components/home/motion/cinematic-background'
import { homeCtaSection } from '@/data/home-page'

export function HomeCtaSection() {
  const [primary, secondary] = homeCtaSection.ctas

  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <CinematicBackground variant="cta" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hp-cta-mega hp-glass-panel"
        >
          <div
            className="hp-cta-mega__ring absolute top-1/2 left-1/2 size-[min(90vw,600px)] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <div
            className="hp-cta-mega__ring absolute top-1/2 left-1/2 size-[min(70vw,450px)] -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: '1s' }}
            aria-hidden
          />

          <span className="hp-eyebrow hp-eyebrow--glow">
            <span className="hp-eyebrow-dot" aria-hidden />
            {homeCtaSection.eyebrow}
          </span>
          <h2 className="relative mt-8 text-3xl font-bold tracking-tight text-[var(--hp-ink)] sm:text-5xl lg:text-6xl">
            {homeCtaSection.title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base text-[var(--hp-muted)] sm:text-lg">
            {homeCtaSection.subtitle}
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={primary.href} className="hp-btn-primary">
              {primary.label}
              <ArrowRight className="size-4" />
            </a>
            <a href={secondary.href} className="hp-btn-ghost">
              {secondary.label}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
