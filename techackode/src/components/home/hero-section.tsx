import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroContent } from '@/data/home'
import { Container } from '@/components/common/container'
import { HeroBadge } from '@/components/home/hero-badge'
import divisionHeroImage from '@/assets/herosection/division.png'

const trustItems = [
  'Software',
  'AI & Automation',
  'Cybersecurity',
  'Edutech',
  'SaaS Products',
  'Enterprise',
] as const

const heroStats = [
  { value: '2025', label: 'Founded' },
  { value: '6+', label: 'Divisions' },
  { value: '360°', label: 'Digital stack' },
] as const

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
}

export function HeroSection() {
  const [ctaPrimary, ctaSecondary] = heroContent.ctas

  return (
    <section id="hero" className="hero-pro">
      <div className="hero-pro__mesh" aria-hidden />
      <div className="hero-pro__ambient" aria-hidden />

      <Container className="relative z-10">
        <div className="hero-pro__grid">
          <div className="hero-pro__content">
            <HeroBadge />

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="hero-pro__title"
            >
              <span className="block">Empowering the Future Through</span>
              <span className="mt-1.5 block">
                <span className="hero-pro__title-accent">Technology</span>,{' '}
                <span className="hero-pro__title-accent">Learning</span> &{' '}
                <span className="hero-pro__title-accent">Innovation</span>
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="hero-pro__lead"
            >
              {heroContent.subheading}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="hero-pro__actions"
            >
              <a href={ctaPrimary.href} className="hero-pro__btn-outline">
                {ctaPrimary.label}
                <ArrowRight className="size-4" strokeWidth={2} />
              </a>
              <a href={ctaSecondary.href} className="hero-pro__btn-primary">
                {ctaSecondary.label}
                <ArrowRight className="size-4" strokeWidth={2} />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="hero-pro__stats"
              aria-label="Company highlights"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                  className="hero-pro__stat"
                >
                  <p className="hero-pro__stat-value">{stat.value}</p>
                  <p className="hero-pro__stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-pro__visual"
          >
            <div className="hero-pro__visual-glow" aria-hidden />
            <div className="hero-pro__visual-frame">
              <img
                src={divisionHeroImage}
                alt="Techackode divisions overview"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hero-pro__bar"
      >
        <Container>
          <div className="hero-pro__bar-inner">
            <p className="hero-pro__bar-label">Multi-domain ecosystem</p>
            <div className="hero-pro__bar-tags">
              {trustItems.map((item) => (
                <span key={item} className="hero-pro__bar-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
