import { motion } from 'framer-motion'
import { heroContent } from '@/data/home'

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <span className="hero-pro__badge">
        <span className="hero-pro__badge-dot" aria-hidden />
        {heroContent.badge}
      </span>
    </motion.div>
  )
}
