import { motion } from 'framer-motion'
import { heroContent } from '@/data/home'

export function HeroBadge() {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="hp-eyebrow hp-eyebrow--glow"
    >
      <span className="hp-eyebrow-dot" aria-hidden />
      {heroContent.badge}
    </motion.span>
  )
}
