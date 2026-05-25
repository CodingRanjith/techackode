import { ShowcasePageShell, ShowcaseCategorySection } from '@/components/showcase'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
import { showcasePage } from '@/data/showcase'

export default function ShowcasePage() {
  const { hero, intro, categories } = showcasePage

  return (
    <ShowcasePageShell
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
        <ShowcaseCategorySection
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
            <h2 className="text-display-sm text-2xl sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-4 text-base leading-relaxed landing-muted sm:text-lg">
              Whether you need an enterprise platform, AI automation, or a custom client system,
              Techackode can design and deliver end to end.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GlowButton href="/#contact">Start a Project</GlowButton>
              <GlowButton href="/services" variant="ghost">
                Explore Services
              </GlowButton>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </ShowcasePageShell>
  )
}
