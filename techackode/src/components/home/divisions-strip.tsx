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

const colorVariants = [
  'hp-division-card--blue',
  'hp-division-card--violet',
  'hp-division-card--teal',
  'hp-division-card--indigo',
  'hp-division-card--amber',
  'hp-division-card--rose',
] as const

export function DivisionsStrip() {
  return (
    <SectionShell id="divisions" bg="white" cinematic="section">
      <Container className="hp-section-y hp-divisions">
        <PremiumHeading
          eyebrow="Ecosystem"
          title={divisionsSection.heading}
          subtitle={divisionsSection.subheading}
          className="hp-divisions__heading"
        />

        <StaggerReveal className="hp-divisions__grid">
          {divisionCards.map((division, index) => {
            const Icon = iconMap[division.icon] ?? Code2
            return (
              <StaggerItem
                key={division.slug}
                className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <GlowCard3D
                  index={index}
                  animateIn={false}
                  innerClassName={`hp-division-card ${colorVariants[index % colorVariants.length]} h-full`}
                  className="h-full"
                  
                >
                  <Link
                    to={division.href}
                    className="group relative flex h-full flex-col p-6 sm:p-7"
                  >
                    <div className="hp-division-card__meta">
                      <span className="hp-division-card__id">{String(index + 1).padStart(2, '0')}</span>
                      <span className="hp-division-card__tag">Division</span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="hp-division-card__icon hp-icon-box relative size-11 rounded-2xl transition group-hover:scale-105">
                        <Icon className="size-5" strokeWidth={2} aria-hidden />
                      </span>
                      <h3 className="relative hp-h-card">{division.title}</h3>
                    </div>

                    <p className="hp-division-card__desc relative mt-3 hp-body-sm">
                      {division.description}
                    </p>

                    <div className="hp-division-card__footer mt-auto pt-5">
                      <span className="hp-division-card__cta relative inline-flex items-center gap-1 text-sm font-semibold leading-snug text-[var(--hp-navy)]">
                        Explore division
                        <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
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
