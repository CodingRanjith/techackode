import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Brain,
  Code2,
  GraduationCap,
  Shield,
  Store,
  type LucideIcon,
} from 'lucide-react'
import { DivisionsPageShell } from '@/components/divisions'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { divisionCards, divisionsMain } from '@/data/divisions'

const iconMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  code: Code2,
  shield: Shield,
  brain: Brain,
  store: Store,
}

export default function DivisionsPage() {
  const { hero, introduction } = divisionsMain

  return (
    <DivisionsPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
      theme="home"
    >
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Ecosystem Overview"
              title={introduction.heading}
              subtitle="Specialized divisions aligned to real-world industry needs and long-term digital growth."
            />
            <div className="mx-auto max-w-4xl space-y-5 rounded-3xl border border-[var(--hp-border)] bg-gradient-to-b from-white to-[var(--hp-bg-subtle)] p-6 shadow-[var(--hp-shadow-sm)] sm:p-8">
              {introduction.paragraphs.map((paragraph, i) => (
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
            eyebrow="Ecosystem"
            title="Our Divisions"
            subtitle="Explore each division driving education, enterprise technology, security, AI, and digital commerce."
            align="center"
            className="mx-auto"
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {divisionCards.map((division, index) => {
                const Icon = iconMap[division.icon] ?? Code2
                return (
                  <ScrollReveal key={division.slug} delay={index * 0.05}>
                    <li>
                      <Link to={division.href} className="hp-glow-card group flex h-full flex-col p-7 sm:p-8">
                        <div className="mb-5 flex items-start justify-between">
                          <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                            <Icon className="size-6" strokeWidth={1.75} />
                          </span>
                          <span className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--hp-border)] text-[var(--hp-navy)] transition group-hover:-translate-y-0.5">
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                        <h3 className="hp-h-card text-xl sm:text-2xl">{division.title}</h3>
                        <p className="hp-body-sm mt-3 flex-1">{division.description}</p>
                      </Link>
                    </li>
                  </ScrollReveal>
                )
              })}
            </ul>
          </div>
        </Container>
      </SectionShell>
    </DivisionsPageShell>
  )
}
