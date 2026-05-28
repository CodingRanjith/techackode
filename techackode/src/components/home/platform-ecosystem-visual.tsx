import { Brain, Code2, GraduationCap, Shield } from 'lucide-react'
import { platformSplitSection } from '@/data/home-page'
import { GlowCard3D } from '@/components/home/motion'

const iconMap = {
  code: Code2,
  shield: Shield,
  graduation: GraduationCap,
  brain: Brain,
} as const

export function PlatformEcosystemVisual() {
  return (
    <GlowCard3D
      index={0}
      innerClassName="hp-ecosystem-card p-5 sm:p-6"
      className="mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hp-border)] bg-white px-3 py-1.5">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--hp-soft)]">
            Modular architecture
          </span>
        </div>
        <span className="hp-label !normal-case !tracking-wide">
          Domain intelligence map
        </span>
      </div>

      <ul className="hp-ecosystem-list">
        {platformSplitSection.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon]
          return (
            <li
              key={pillar.label}
              className="hp-ecosystem-item"
              style={{ transform: `translateZ(${8 + i * 2}px)` }}
            >
              <span className="hp-icon-box size-10 shrink-0 rounded-lg">
                <Icon className="size-[1.125rem]" strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-[var(--hp-ink)]">{pillar.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--hp-muted)]">{pillar.detail}</p>
              </div>
              <span className="hp-ecosystem-status">
                {pillar.status}
              </span>
            </li>
          )
        })}
      </ul>

      <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-[var(--hp-border)] bg-[var(--hp-bg-subtle)] p-3">
        {platformSplitSection.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-base font-bold leading-none text-[var(--hp-ink)]">{metric.value}</p>
            <p className="mt-1.5 text-xs font-medium leading-snug text-[var(--hp-soft)]">{metric.label}</p>
          </div>
        ))}
      </div>
    </GlowCard3D>
  )
}
