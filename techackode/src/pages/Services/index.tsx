import { ServicesPageShell, ServiceCategorySection } from '@/components/services'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
import { servicesPage } from '@/data/services'

export default function ServicesPage() {
  const { hero, intro, categories } = servicesPage

  return (
    <ServicesPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
    >
      <section className="landing-section-white py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed landing-muted sm:text-lg">
              {intro}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {categories.map((category, index) => (
        <ServiceCategorySection
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
          icon={category.icon}
          items={category.items}
          variant={index % 2 === 1 ? 'alt' : 'default'}
        />
      ))}

      <section className="landing-section-alt border-t border-[var(--border-soft)] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-2xl sm:text-3xl">Ready to build with Techackode?</h2>
            <p className="mt-4 text-base leading-relaxed landing-muted sm:text-lg">
              Tell us about your project and we will match you with the right team across
              development, AI, security, and growth.
            </p>
            <div className="mt-8 flex justify-center">
              <GlowButton href="/contact">Get in Touch</GlowButton>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </ServicesPageShell>
  )
}
