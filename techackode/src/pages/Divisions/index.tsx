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
import { SectionHeader } from '@/components/about'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
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
    >
      <section className="landing-section-white py-16 sm:py-20">
        <Container>
          <SectionHeader title={introduction.heading} />
          <div className="mx-auto max-w-3xl space-y-5">
            {introduction.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed landing-muted sm:text-lg">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="landing-section-alt py-16 sm:py-20">
        <Container>
          <SectionHeader
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
                    <Link
                      to={division.href}
                      className="landing-card group flex h-full flex-col p-7 sm:p-8"
                    >
                      <div className="mb-5 flex items-start justify-between">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
                          <Icon className="size-6" strokeWidth={1.75} />
                        </span>
                        <span className="landing-card-arrow">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                      <h3 className="text-display-sm text-xl sm:text-2xl">{division.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed landing-muted sm:text-base">
                        {division.description}
                      </p>
                    </Link>
                  </li>
                </ScrollReveal>
              )
            })}
          </ul>
        </Container>
      </section>
    </DivisionsPageShell>
  )
}
