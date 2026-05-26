import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/container'
import { platformSplitSection } from '@/data/home-page'
import { PlatformEcosystemVisual } from '@/components/home/platform-ecosystem-visual'
import { SectionShell } from '@/components/home/ui'

export function PlatformSplitSection() {
  return (
    <SectionShell bg="white" cinematic="none">
      <Container className="relative hp-section-y">
        <div className="hp-split-feature">
          <div className="hp-split-feature__visual">
            <PlatformEcosystemVisual />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="hp-split-feature__copy hp-flow-in"
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
