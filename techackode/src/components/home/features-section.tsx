import { Sparkles } from 'lucide-react'
import { Container } from '@/components/common/container'
import { featureIconMap, featuresSection } from '@/data/home-page'
import { GlowCard3D } from '@/components/home/motion'
import { PremiumHeading, SectionShell } from '@/components/home/ui'

function CapabilityCard({
  index,
}: {
  index: number
}) {
  const item = featuresSection.items[index]
  const Icon = featureIconMap[item.icon] ?? Sparkles

  return (
    <GlowCard3D index={index} innerClassName="hp-cap-card hp-cap-card--pro">
      <div className="hp-cap-card__meta">
        <span className="hp-cap-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="hp-cap-card__chip">Capability</span>
      </div>
      <span className="hp-cap-card__icon mt-4">
        <Icon className="size-[1.125rem]" strokeWidth={2} aria-hidden />
      </span>
      <h3 className="hp-cap-card__title hp-h-card mt-4">{item.title}</h3>
      <p className="hp-cap-card__desc hp-body-sm">{item.description}</p>
      <div className="hp-cap-card__footer">
        <span>Enterprise-ready</span>
      </div>
    </GlowCard3D>
  )
}

export function FeaturesSection() {
  return (
    <SectionShell id="features" bg="white" cinematic="none" className="hp-capabilities">
      <div className="hp-section-grid-bg" aria-hidden />
      <Container className="relative hp-section-y">
        <div className="hp-features-pro">
          <div className="hp-features-alt__intro">
            <PremiumHeading
              eyebrow={featuresSection.eyebrow}
              title={featuresSection.title}
              subtitle={featuresSection.subtitle}
              className="hp-capabilities__header !mb-0 max-w-none"
            />
            <div className="hp-features-alt__note">
              <p>Focused capabilities designed for scalable delivery and measurable business outcomes.</p>
            </div>
          </div>

          <div className="hp-features-pro__grid">
            {featuresSection.items.map((item, i) => (
              <CapabilityCard key={item.title} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
