import { AboutPageShell } from '@/components/about'
import { founderStory } from '@/data/about'
import { Container } from '@/components/common/container'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { Lightbulb, Rocket, ShieldCheck } from 'lucide-react'

export default function FounderStoryPage() {
  const { hero, paragraphs } = founderStory
  const pillars = [
    {
      title: 'Vision-Led Start',
      description: 'Built with the belief that technology should solve real-world gaps, not stay theoretical.',
      icon: Lightbulb,
    },
    {
      title: 'Execution Focus',
      description: 'Designed as a practical ecosystem that connects learning, products, and implementation.',
      icon: Rocket,
    },
    {
      title: 'Long-Term Trust',
      description: 'Scaled through quality, consistency, and reliable delivery across multiple domains.',
      icon: ShieldCheck,
    },
  ] as const

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading} theme="home">
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Leadership Vision"
              title="The Founder Story"
              subtitle="How Techackode evolved from a mission-driven idea into a multi-domain technology ecosystem."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 rounded-3xl border border-[var(--hp-border)] bg-white p-6 shadow-[var(--hp-shadow-sm)] sm:p-8">
                {paragraphs.map((paragraph, i) => (
                  <ScrollReveal key={i} delay={i * 0.06}>
                    <p className="hp-body">{paragraph}</p>
                  </ScrollReveal>
                ))}
              </div>
              <div className="space-y-4">
                <ScrollReveal>
                  <blockquote className="rounded-3xl border border-[var(--hp-border)] bg-gradient-to-b from-white to-[var(--hp-bg-subtle)] p-6 shadow-[var(--hp-shadow-sm)] sm:p-7">
                    <p className="text-base font-medium leading-relaxed text-[var(--hp-ink)] sm:text-lg">
                      “Our mission is to turn ambition into practical systems that create measurable progress.”
                    </p>
                  </blockquote>
                </ScrollReveal>
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon
                  return (
                    <ScrollReveal key={pillar.title} delay={0.08 + index * 0.05}>
                      <div className="hp-glow-card border-[var(--hp-border)] bg-white p-5">
                        <span className="mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                          <Icon className="size-4.5" strokeWidth={2} />
                        </span>
                        <h3 className="hp-h-card text-lg">{pillar.title}</h3>
                        <p className="hp-body-sm mt-2">{pillar.description}</p>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </SectionShell>
    </AboutPageShell>
  )
}
