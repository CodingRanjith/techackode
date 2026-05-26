import { motion } from 'framer-motion'
import { Brain, Code2, GraduationCap, Shield } from 'lucide-react'
import { platformSplitSection } from '@/data/home-page'

const iconMap = {
  code: Code2,
  shield: Shield,
  graduation: GraduationCap,
  brain: Brain,
} as const

export function PlatformEcosystemVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="hp-glass-panel mx-auto w-full max-w-md p-5 sm:p-6 lg:max-w-none"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-[var(--hp-soft)] uppercase">
          Techackode delivery hub
        </span>
      </div>

      <ul className="space-y-3">
        {platformSplitSection.pillars.map((pillar) => {
          const Icon = iconMap[pillar.icon]
          return (
            <li
              key={pillar.label}
              className="flex items-center gap-3 rounded-xl border border-[var(--hp-border)] bg-[var(--hp-bg-subtle)] px-3.5 py-3"
            >
              <span className="hp-icon-box size-10 shrink-0 rounded-lg">
                <Icon className="size-[1.125rem]" strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--hp-ink)]">{pillar.label}</p>
                <p className="mt-0.5 text-xs text-[var(--hp-muted)]">{pillar.detail}</p>
              </div>
              <span className="shrink-0 rounded-full border border-[var(--hp-border)] bg-white px-2.5 py-1 text-[10px] font-semibold text-[var(--hp-ink)]">
                {pillar.status}
              </span>
            </li>
          )
        })}
      </ul>

      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[var(--hp-bg-subtle)] p-3">
        {platformSplitSection.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-base font-bold text-[var(--hp-ink)]">{metric.value}</p>
            <p className="mt-0.5 text-[10px] font-medium text-[var(--hp-soft)]">{metric.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
