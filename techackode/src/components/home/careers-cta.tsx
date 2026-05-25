import { Rocket } from 'lucide-react'
import { careersCta } from '@/data/home'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export function CareersCta() {
  return (
    <section id="careers" className="py-16 sm:py-24">
      <Container>
        <ScrollReveal>
          <div className="landing-card relative overflow-hidden p-8 sm:p-12">
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <span className="landing-badge inline-flex items-center gap-2">
                  <Rocket className="size-3.5" strokeWidth={2.5} />
                  Careers
                </span>
                <h2 className="text-display-sm text-3xl sm:text-4xl">{careersCta.heading}</h2>
                <p className="text-base landing-muted sm:text-lg">{careersCta.content}</p>
              </div>
              <GlowButton href={careersCta.cta.href} size="lg" className="shrink-0">
                {careersCta.cta.label}
              </GlowButton>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
