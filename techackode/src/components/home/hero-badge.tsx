import { motion } from 'framer-motion'
import { heroContent } from '@/data/home'

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="landing-badge">{heroContent.badge}</span>
    </motion.div>
  )
}
