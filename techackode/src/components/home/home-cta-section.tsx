import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/container'
import { CinematicBackground, GlowCard3D } from '@/components/home/motion'
import { homeCtaSection } from '@/data/home-page'

export function HomeCtaSection() {
  const [primary, secondary] = homeCtaSection.ctas

  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <CinematicBackground variant="cta" />
      <Container className="relative z-10">
        <GlowCard3D innerClassName="hp-cta-mega px-6 py-10 text-center sm:px-10 sm:py-14">
          <div
            className="hp-cta-mega__ring absolute top-1/2 left-1/2 size-[min(90vw,600px)] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <div
            className="hp-cta-mega__ring absolute top-1/2 left-1/2 size-[min(70vw,450px)] -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: '1s' }}
            aria-hidden
          />

          <span className="hp-eyebrow hp-eyebrow--glow relative inline-flex">
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
        </GlowCard3D>
      </Container>
    </section>
  )
}
