import { Sparkles } from 'lucide-react'
import { Container } from '@/components/common/container'
import { featureIconMap, featuresSection } from '@/data/home-page'
import { GlowCard3D } from '@/components/home/motion'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { cn } from '@/lib/utils'

const leftColumn = [0, 2] as const
const rightColumn = [1, 3] as const

function CapabilityCard({
  index,
  tall = false,
}: {
  index: number
  tall?: boolean
}) {
  const item = featuresSection.items[index]
  const Icon = featureIconMap[item.icon] ?? Sparkles

  return (
    <GlowCard3D
      index={index}
      innerClassName={cn('hp-cap-card', tall && 'hp-cap-card--tall')}
    >
      <span className="hp-cap-card__icon">
        <Icon className="size-[1.125rem]" strokeWidth={2} aria-hidden />
      </span>
      <h3 className="hp-cap-card__title hp-h-card">{item.title}</h3>
      <p className="hp-cap-card__desc hp-body-sm">{item.description}</p>
    </GlowCard3D>
  )
}

export function FeaturesSection() {
  return (
    <SectionShell id="features" bg="white" cinematic="none" className="hp-capabilities">
      <div className="hp-section-grid-bg" aria-hidden />
      <Container className="relative hp-section-y">
        <PremiumHeading
          eyebrow={featuresSection.eyebrow}
          title={featuresSection.title}
          subtitle={featuresSection.subtitle}
          className="hp-capabilities__header !mb-0 max-w-none"
        />

        <div className="hp-cap-bento mt-10 sm:mt-12">
          <div className="hp-cap-bento__stack">
            {leftColumn.map((i) => (
              <CapabilityCard key={featuresSection.items[i].title} index={i} />
            ))}
          </div>
          <div className="hp-cap-bento__stack hp-cap-bento__col--right">
            {rightColumn.map((i) => (
              <CapabilityCard
                key={featuresSection.items[i].title}
                index={i}
                tall={i === 3}
              />
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
