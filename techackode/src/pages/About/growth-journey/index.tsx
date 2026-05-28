import { AboutPageShell } from '@/components/about'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { growthJourney } from '@/data/about'
import { Container } from '@/components/common/container'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { ArrowUpRight, BarChart3, Flag, Orbit, Rocket } from 'lucide-react'

export default function GrowthJourneyPage() {
  const { hero, timeline } = growthJourney
  const milestoneItems = timeline.map((item, index) => ({
    ...item,
    phase: `Phase ${String(index + 1).padStart(2, '0')}`,
    year: item.year || 'Growth Milestone',
  }))

  const journeyHighlights = [
    {
      title: 'Foundation to Execution',
      description: 'Established as a practical technology company with strong implementation focus.',
      icon: Flag,
    },
    {
      title: 'Multi-Domain Expansion',
      description: 'Scaled across edutech, software systems, cybersecurity, AI, and product ecosystems.',
      icon: Orbit,
    },
    {
      title: 'Product-Led Direction',
      description: 'Moved from service capability into platform ownership and scalable digital products.',
      icon: Rocket,
    },
  ] as const

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading} theme="home">
      <SectionShell bg="mesh" cinematic="section">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Timeline"
              title="Our Evolution"
              subtitle="Key milestones in the Techackode growth journey."
            />
            <ul className="mb-8 grid gap-4 md:grid-cols-3">
              {journeyHighlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <ScrollReveal key={item.title} delay={index * 0.05}>
                    <li className="hp-glow-card border-[var(--hp-border)] bg-white p-5 sm:p-6">
                      <span className="mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                        <Icon className="size-4.5" strokeWidth={2} />
                      </span>
                      <h3 className="hp-h-card text-lg">{item.title}</h3>
                      <p className="hp-body-sm mt-2">{item.description}</p>
                    </li>
                  </ScrollReveal>
                )
              })}
            </ul>

            <div className="relative mx-auto max-w-5xl">
              <span
                aria-hidden
                className="absolute top-0 bottom-0 left-[1.1rem] hidden w-px bg-[linear-gradient(to_bottom,rgba(22,55,84,0.06),rgba(22,55,84,0.25),rgba(22,55,84,0.06))] md:block"
              />
              <ul className="space-y-5 sm:space-y-6">
                {milestoneItems.map((item, index) => (
                  <ScrollReveal key={`${item.title}-${index}`} delay={index * 0.05}>
                    <li className="relative grid gap-3 md:grid-cols-[2.4rem_minmax(0,1fr)] md:items-start md:gap-5">
                      <div className="hidden md:flex">
                        <span className="mt-4 inline-flex size-4 items-center justify-center rounded-full border border-[var(--hp-navy)] bg-white">
                          <span className="size-1.5 rounded-full bg-[var(--hp-navy)]" />
                        </span>
                      </div>
                      <article className="hp-glow-card border-[var(--hp-border)] bg-white p-6 sm:p-8">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                          <span className="inline-flex items-center rounded-full border border-[var(--hp-border)] bg-[var(--hp-accent-soft)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--hp-navy)] uppercase">
                            {item.phase}
                          </span>
                          <span className="text-xs font-semibold tracking-[0.08em] text-[var(--hp-soft)] uppercase">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="hp-h-card text-lg sm:text-xl">{item.title}</h3>
                        <p className="hp-body-sm mt-3">{item.description}</p>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[var(--hp-navy)] uppercase">
                          Milestone
                          <ArrowUpRight className="size-3.5" />
                        </div>
                      </article>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-4 pb-16 sm:pt-6 sm:pb-20">
            <ScrollReveal className="mx-auto max-w-4xl rounded-3xl border border-[var(--hp-border)] bg-gradient-to-b from-white to-[var(--hp-bg-subtle)] p-7 shadow-[var(--hp-shadow-sm)] sm:p-9">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--hp-border)] bg-white px-3 py-1.5 text-xs font-semibold tracking-[0.09em] text-[var(--hp-soft)] uppercase">
                <BarChart3 className="size-3.5" />
                Road Ahead
              </div>
              <h3 className="hp-h-card text-xl sm:text-2xl">Next Stage: Scale with Intelligence</h3>
              <p className="hp-body mt-3">
                Our next chapter focuses on AI-native platforms, automation-first operations, and stronger
                enterprise delivery systems. Every milestone ahead is designed to increase measurable
                impact for learners, startups, and organizations.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </SectionShell>
    </AboutPageShell>
  )
}
