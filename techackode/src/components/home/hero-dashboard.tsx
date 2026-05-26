import { motion } from 'framer-motion'
import { Activity, Layers, Zap } from 'lucide-react'
import { GlowCard3D } from '@/components/home/motion'

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
}

export function HeroDashboard() {
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
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider text-[var(--hp-soft)] uppercase">
            Platform overview
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {['Uptime', 'Projects', 'Velocity'].map((label, i) => (
            <div key={label} className="rounded-xl bg-[var(--hp-bg-subtle)] p-3">
              <p className="text-[10px] font-medium text-[var(--hp-muted)]">{label}</p>
              <p className="mt-1 text-lg font-bold text-[var(--hp-navy)]">
                {i === 0 ? '99.9%' : i === 1 ? '120+' : '+38%'}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-[var(--hp-bg-subtle)] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-[var(--hp-navy)]">Delivery analytics</span>
            <span className="hp-mock-bar w-16" />
          </div>
          <div className="hp-mock-chart">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <span key={n} style={{ height: `${35 + n * 10}%` }} />
            ))}
          </div>
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
            <p className="text-[10px] font-medium text-[var(--hp-muted)]">Automation</p>
            <p className="text-sm font-bold text-[var(--hp-navy)]">Active</p>
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
            <p className="text-[10px] font-medium text-[var(--hp-muted)]">Live systems</p>
            <p className="text-sm font-bold text-[var(--hp-navy)]">24/7</p>
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
            <p className="text-[10px] font-medium text-[var(--hp-muted)]">Stack depth</p>
            <p className="text-sm font-bold text-[var(--hp-navy)]">360°</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
