import {
  Brain,
  Code2,
  GraduationCap,
  Megaphone,
  Shield,
  Store,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { divisions, divisionsSection } from '@/data/home'
import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'

const iconMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  code: Code2,
  shield: Shield,
  brain: Brain,
  store: Store,
  megaphone: Megaphone,
}

export function DivisionsOverview() {
  return (
    <section id="divisions" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ecosystem"
          title={divisionsSection.heading}
          subtitle={divisionsSection.subheading}
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, index) => {
            const Icon = iconMap[division.icon] ?? Code2

            return (
              <motion.article
                key={division.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="landing-card group flex flex-col p-7 sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <span className="landing-card-arrow">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <h3 className="text-display-sm text-xl sm:text-2xl">{division.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed landing-muted sm:text-base">
                  {division.description}
                </p>
                <p className="mt-6 text-[10px] font-bold tracking-[0.2em] text-[var(--ink-soft)] uppercase">
                  Division {String(index + 1).padStart(2, '0')}
                </p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
