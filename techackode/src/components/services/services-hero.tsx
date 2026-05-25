import { motion } from 'framer-motion'
import { Container } from '@/components/common/container'

type ServicesHeroProps = {
  badge?: string
  heading: string
  subheading?: string
}

export function ServicesHero({
  badge = 'Our Services',
  heading,
  subheading,
}: ServicesHeroProps) {
  return (
    <section className="relative border-b border-[var(--border-soft)] bg-[var(--cream-card)] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="landing-badge">{badge}</span>
          <h1 className="text-display mt-6 text-[clamp(2rem,5vw,3.75rem)]">{heading}</h1>
          {subheading && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed landing-muted sm:text-lg">
              {subheading}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
