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
    <GlowCard3D index={0} innerClassName="p-5 sm:p-6" className="mx-auto w-full max-w-md lg:max-w-none">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="hp-label !normal-case !tracking-wide">
          Techackode delivery hub
        </span>
      </div>

      <ul className="space-y-3">
        {platformSplitSection.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon]
          return (
            <li
              key={pillar.label}
              className="flex items-center gap-3 rounded-xl border border-[var(--hp-border)] bg-[var(--hp-bg-subtle)] px-3.5 py-3 transition hover:border-[rgba(41,82,112,0.2)]"
              style={{ transform: `translateZ(${8 + i * 2}px)` }}
            >
              <span className="hp-icon-box size-10 shrink-0 rounded-lg">
                <Icon className="size-[1.125rem]" strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-[var(--hp-ink)]">{pillar.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--hp-muted)]">{pillar.detail}</p>
              </div>
              <span className="shrink-0 rounded-full border border-[var(--hp-border)] bg-white px-2.5 py-1 text-[10px] font-semibold text-[var(--hp-ink)]">
                {pillar.status}
              </span>
            </li>
          )
        })}
      </ul>

      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-[var(--hp-border)] bg-[var(--hp-bg-subtle)] p-3">
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
