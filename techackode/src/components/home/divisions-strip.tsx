import { ArrowUpRight, Brain, Code2, GraduationCap, Megaphone, Shield, Store, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/container'
import { divisionCards, divisionsSection } from '@/data/divisions'
import { GlowCard3D, StaggerItem, StaggerReveal } from '@/components/home/motion'
import { PremiumHeading, SectionShell } from '@/components/home/ui'

const iconMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  code: Code2,
  shield: Shield,
  brain: Brain,
  store: Store,
  megaphone: Megaphone,
}

export function DivisionsStrip() {
  return (
    <SectionShell id="divisions" bg="white" cinematic="section">
      <Container className="py-24 sm:py-32">
        <PremiumHeading
          eyebrow="Ecosystem"
          title={divisionsSection.heading}
          subtitle={divisionsSection.subheading}
        />

        <StaggerReveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {divisionCards.map((division, index) => {
            const Icon = iconMap[division.icon] ?? Code2
            return (
              <StaggerItem key={division.slug}>
                <GlowCard3D index={index} animateIn={false} innerClassName="h-full">
                  <Link
                    to={division.href}
                    className="group relative block h-full p-7"
                  >
                    <span className="hp-icon-box relative size-12 rounded-2xl transition group-hover:scale-105">
                      <Icon className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <h3 className="relative mt-5 text-lg font-bold text-[var(--hp-ink)]">
                      {division.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[var(--hp-muted)]">
                      {division.description}
                    </p>
                    <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--hp-navy)]">
                      Explore
                      <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </GlowCard3D>
              </StaggerItem>
            )
          })}
        </StaggerReveal>
      </Container>
    </SectionShell>
  )
}
