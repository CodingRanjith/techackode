import { AboutPageShell } from '@/components/about'
import { founderStory } from '@/data/about'
import { Container } from '@/components/common/container'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export default function FounderStoryPage() {
  const { hero, paragraphs } = founderStory

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading}>
      <section className="landing-section-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed landing-muted sm:text-lg">{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </AboutPageShell>
  )
}
