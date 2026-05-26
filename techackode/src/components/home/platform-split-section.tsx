import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/container'
import { platformSplitSection } from '@/data/home-page'
import { PlatformEcosystemVisual } from '@/components/home/platform-ecosystem-visual'
import { SectionShell } from '@/components/home/ui'

export function PlatformSplitSection() {
  return (
    <SectionShell bg="white" cinematic="none">
      <Container className="relative py-20 sm:py-28">
        <div className="hp-split-feature">
          <div className="hp-split-feature__visual">
            <PlatformEcosystemVisual />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="hp-split-feature__copy"
          >
            <p className="hp-split-feature__eyebrow">{platformSplitSection.eyebrow}</p>
            <h2 className="hp-split-feature__title">{platformSplitSection.title}</h2>
            <p className="hp-split-feature__body">{platformSplitSection.description}</p>
            <Link to={platformSplitSection.cta.href} className="hp-btn-brand">
              {platformSplitSection.cta.label}
            </Link>
          </motion.div>
        </div>
      </Container>
    </SectionShell>
  )
}
