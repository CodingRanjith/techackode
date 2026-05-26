import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type CinematicBackgroundProps = {
  variant?: 'hero' | 'section' | 'cta'
  className?: string
}

export function CinematicBackground({ variant = 'section', className }: CinematicBackgroundProps) {
  return (
    <div className={cn('hp-cinematic-bg', `hp-cinematic-bg--${variant}`, className)} aria-hidden>
      <div className="hp-cinematic-bg__grid" />
      <div className="hp-cinematic-bg__noise" />
      <div className="hp-cinematic-bg__aurora" />
      <motion.div
        className="hp-blob hp-blob--violet"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hp-blob hp-blob--cyan"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -25, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hp-blob hp-blob--blue"
        animate={{ x: [0, 25, -35, 0], y: [0, 25, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
