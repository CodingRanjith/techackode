import { motion } from 'framer-motion'
import { Activity, Layers, Sparkles, Zap } from 'lucide-react'
import { GlowCard3D } from '@/components/home/motion'

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
}

export function HeroDashboard() {
  const lifecycleStages = ['Discover', 'Blueprint', 'Build', 'Launch', 'Operate'] as const
  const telemetryCards = [
    { label: 'Platform confidence', value: '94%', trend: '+4.1% this quarter' },
    { label: 'Active engagements', value: '32', trend: '8 currently in delivery' },
    { label: 'Automation routines', value: '118', trend: 'Across core workflows' },
    { label: 'Knowledge signals', value: '2.7k', trend: 'Validated decision points' },
  ] as const

  return (
    <div className="hp-hero__stage mx-auto w-full max-w-xl pb-2 lg:max-w-none lg:pb-0">
      <GlowCard3D
        animateIn={false}
        innerClassName="hp-hero__dashboard !p-4 sm:!p-5"
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="hp-label !normal-case !tracking-wide">
              Delivery intelligence snapshot
            </span>
          </div>

          <div className="hp-hero__lifecycle">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--hp-soft)]">
                  Lifecycle coverage
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--hp-ink)]">
                  Coordinated execution across project phases
                </p>
              </div>
              <span className="hp-icon-box size-9 rounded-xl">
                <Sparkles className="size-4" strokeWidth={2} aria-hidden />
              </span>
            </div>

            <div className="hp-hero__lifecycle-track mt-4">
              <span className="hp-hero__lifecycle-line" aria-hidden />
              {lifecycleStages.map((stage, index) => (
                <div key={stage} className="hp-hero__lifecycle-step">
                  <span
                    className="hp-hero__lifecycle-dot"
                    data-active={index === lifecycleStages.length - 1}
                  />
                  <p>{stage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {telemetryCards.map((card) => (
              <div key={card.label} className="hp-hero__metric-card">
                <p className="text-xs font-medium leading-snug text-[var(--hp-muted)]">{card.label}</p>
                <p className="mt-1.5 text-lg font-bold leading-tight text-[var(--hp-navy)]">
                  {card.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--hp-soft)]">{card.trend}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </GlowCard3D>

      <motion.div
        className="hp-hero__float-card -left-2 top-8 sm:-left-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...floatTransition, delay: 0 }}
      >
        <div className="flex items-center gap-2.5">
          <span className="hp-icon-box size-9 rounded-xl">
            <Zap className="size-4" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-medium text-[var(--hp-muted)]">Automation</p>
            <p className="text-sm font-bold leading-snug text-[var(--hp-navy)]">Active</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hp-hero__float-card -right-2 bottom-6 sm:-right-6 sm:bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ ...floatTransition, delay: 0.8 }}
      >
        <div className="flex items-center gap-2.5">
          <span className="hp-icon-box size-9 rounded-xl">
            <Activity className="size-4" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-medium text-[var(--hp-muted)]">Live systems</p>
            <p className="text-sm font-bold leading-snug text-[var(--hp-navy)]">24/7</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hp-hero__float-card right-8 -top-4 hidden sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ ...floatTransition, delay: 1.4 }}
      >
        <div className="flex items-center gap-2.5">
          <span className="hp-icon-box size-9 rounded-xl">
            <Layers className="size-4" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <p className="text-xs font-medium text-[var(--hp-muted)]">Stack depth</p>
            <p className="text-sm font-bold leading-snug text-[var(--hp-navy)]">360°</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
