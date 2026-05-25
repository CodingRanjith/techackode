import { Calendar, Mail } from 'lucide-react'
import { contactCta } from '@/data/home'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export function ContactCta() {
  return (
    <section id="contact" className="landing-section-white pb-24 sm:pb-32">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="landing-badge">Get in touch</span>
            <h2 className="text-display mt-6 text-3xl sm:text-4xl lg:text-5xl">
              {contactCta.heading}
            </h2>
            <p className="mx-auto mt-6 text-base leading-relaxed landing-muted sm:text-lg">
              {contactCta.content}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <GlowButton href={contactCta.ctas[0].href} size="lg" className="gap-2">
                <Mail className="size-4" />
                {contactCta.ctas[0].label}
              </GlowButton>
              <GlowButton href={contactCta.ctas[1].href} variant="outline" size="lg" className="gap-2">
                <Calendar className="size-4" />
                {contactCta.ctas[1].label}
              </GlowButton>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
