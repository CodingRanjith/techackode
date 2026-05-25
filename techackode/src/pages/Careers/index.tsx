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
import { GlowButton } from '@/components/common/glow-button'
import { SectionHeader } from '@/components/about/section-header'
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
    >
      <section className="landing-section-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow={opportunities.eyebrow}
            title={opportunities.title}
            subtitle={opportunities.subtitle}
            align="center"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.roles.map((role, index) => {
              const Icon = iconMap[role.icon] ?? Code2
              return (
                <ScrollReveal key={role.title} delay={index * 0.05}>
                  <li className="landing-card flex h-full items-center gap-4 p-6 sm:p-7">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-display-sm text-lg sm:text-xl">{role.title}</h3>
                  </li>
                </ScrollReveal>
              )
            })}
          </ul>
        </Container>
      </section>

      <section className="landing-section-alt border-t border-[var(--border-soft)] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-2xl sm:text-3xl">{cta.heading}</h2>
            <p className="mt-4 text-base leading-relaxed landing-muted sm:text-lg">
              {cta.content}
            </p>
            <div className="mt-8 flex justify-center">
              <GlowButton href={cta.button.href} size="lg">
                {cta.button.label}
              </GlowButton>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </CareersPageShell>
  )
}
