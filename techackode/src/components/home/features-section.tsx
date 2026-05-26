import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Container } from '@/components/common/container'
import { featureIconMap, featuresSection } from '@/data/home-page'
import { GlowCard3D } from '@/components/home/motion'
import { SectionShell } from '@/components/home/ui'
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
      <h3 className="hp-cap-card__title">{item.title}</h3>
      <p className="hp-cap-card__desc">{item.description}</p>
    </GlowCard3D>
  )
}

export function FeaturesSection() {
  return (
    <SectionShell id="features" bg="white" cinematic="none" className="hp-capabilities">
      <div className="hp-section-grid-bg" aria-hidden />
      <Container className="relative pt-12 pb-20 sm:pt-16 sm:pb-28">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="hp-capabilities__header hp-flow-in"
        >
          <span className="hp-eyebrow hp-eyebrow--glow">
            <span className="hp-eyebrow-dot" aria-hidden />
            {featuresSection.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--hp-ink)] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
            {featuresSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--hp-muted)] sm:text-lg">
            {featuresSection.subtitle}
          </p>
        </motion.header>

        <div className="hp-cap-bento">
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
