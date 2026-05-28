import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { AboutPageShell } from '@/components/about'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { teamPage } from '@/data/about'

export default function TeamPage() {
  const { hero, content, categories } = teamPage
  const paragraphs = content.split('\n\n').filter(Boolean)

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading} theme="home">
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="People and Culture"
              title="Built by Cross-Functional Teams"
              subtitle="A collaborative group of builders, mentors, and operators aligned around quality and impact."
            />
            <div className="mx-auto max-w-4xl space-y-5 rounded-3xl border border-[var(--hp-border)] bg-white p-6 shadow-[var(--hp-shadow-sm)] sm:p-8">
              {paragraphs.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p className="hp-body">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="mesh" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <PremiumHeading
              eyebrow="Core Teams"
              title="Who Powers Techackode"
              subtitle="Specialized teams collaborating across engineering, AI, design, and growth."
              align="center"
              className="mx-auto"
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <ScrollReveal key={category} delay={index * 0.04}>
                  <li className="hp-glow-card border-[var(--hp-border)] bg-white p-6 sm:p-7">
                    <span className="inline-flex rounded-full border border-[var(--hp-border)] bg-[var(--hp-accent-soft)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--hp-navy)] uppercase">
                      Team
                    </span>
                    <h3 className="hp-h-card mt-3 text-lg sm:text-xl">{category}</h3>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </Container>
      </SectionShell>
    </AboutPageShell>
  )
}
