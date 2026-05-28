import {
  Brain,
  Code2,
  GraduationCap,
  Megaphone,
  Palette,
  Shield,
  Sprout,
  type LucideIcon,
} from 'lucide-react'
import { CareersPageShell } from '@/components/careers'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { Link } from 'react-router-dom'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { careersPage } from '@/data/careers'

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  palette: Palette,
  brain: Brain,
  shield: Shield,
  megaphone: Megaphone,
  graduation: GraduationCap,
  sprout: Sprout,
}

export default function CareersPage() {
  const { hero, opportunities, cta } = careersPage

  return (
    <CareersPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
      theme="home"
    >
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow={opportunities.eyebrow}
              title={opportunities.title}
              subtitle={opportunities.subtitle}
              align="center"
              className="mx-auto"
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.roles.map((role, index) => {
                const Icon = iconMap[role.icon] ?? Code2
                return (
                  <ScrollReveal key={role.title} delay={index * 0.05}>
                    <li className="hp-glow-card flex h-full items-center gap-4 border-[var(--hp-border)] bg-white p-6 sm:p-7">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                        <Icon className="size-6" strokeWidth={1.75} />
                      </span>
                      <h3 className="hp-h-card text-lg sm:text-xl">{role.title}</h3>
                    </li>
                  </ScrollReveal>
                )
              })}
            </ul>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="gradient" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <ScrollReveal className="mx-auto max-w-3xl rounded-3xl border border-[var(--hp-border)] bg-white/90 p-8 text-center shadow-[var(--hp-shadow-sm)]">
              <h2 className="hp-h-section hp-h-section--center !max-w-none">{cta.heading}</h2>
              <p className="hp-subtitle-section hp-subtitle-section--center mt-4">{cta.content}</p>
              <div className="mt-8 flex justify-center">
                <Link to={cta.button.href} className="hp-btn-primary">
                  {cta.button.label}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionShell>
    </CareersPageShell>
  )
}
