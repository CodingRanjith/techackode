import { motion } from 'framer-motion'
import { services, servicesSection } from '@/data/home'
import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export function ServicesShowcase() {
  const doubled = [...services, ...services]

  return (
    <section id="services" className="landing-section-alt relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Capabilities"
              title={servicesSection.heading}
              subtitle={servicesSection.subheading}
              className="mb-0"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service} delay={i * 0.04}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="landing-card flex items-start gap-4 p-5"
                >
                  <span className="feature-index shrink-0 text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold leading-snug sm:text-base">
                    {service}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative mt-16 overflow-hidden border-y border-[var(--border-soft)] bg-[var(--cream-card)] py-5">
        <div className="marquee-track gap-6 px-4">
          {doubled.map((service, i) => (
            <span
              key={`${service}-${i}`}
              className="shrink-0 rounded-full border border-[var(--border-soft)] bg-[var(--cream)] px-5 py-2.5 text-xs font-bold tracking-wide text-[var(--ink-muted)] uppercase"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
