import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { heroContent } from '@/data/home'
import { Container } from '@/components/common/container'
import { HeroBadge } from '@/components/home/hero-badge'
import { HeroDashboard } from './hero-dashboard'
import { AnimatedCounter, GlowCard3D } from '@/components/home/motion'
import { CinematicBackground } from '@/components/home/motion/cinematic-background'

const trustPills = [
  'Edutech',
  'Enterprise',
  'Cybersecurity',
  'AI Systems',
  'SaaS',
  'Automation',
] as const

const heroStats = [
  { value: 2025, label: 'Founded', suffix: '' },
  { value: 6, label: 'Divisions', suffix: '+' },
  { value: 98, label: 'Delivery score', suffix: '%' },
] as const

export function HeroSection() {
  const [ctaPrimary, ctaSecondary] = heroContent.ctas

  return (
    <section id="hero" className="hp-hero">
      <CinematicBackground variant="hero" />

      <Container className="relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-10">
          <div>
            <HeroBadge />

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="hp-hero__title mt-5"
            >
              <span className="block text-[var(--hp-ink)]">Empowering the Future Through</span>
              <span className="block text-[var(--hp-black)]">
                Technology, Learning & Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hp-hero__lead mt-6"
            >
              {heroContent.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href={ctaPrimary.href} className="hp-btn-primary">
                {ctaPrimary.label}
                <ArrowRight className="size-4" />
              </a>
              <a href={ctaSecondary.href} className="hp-btn-ghost">
                <Play className="size-4 fill-current" />
                {ctaSecondary.label}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-8 grid grid-cols-3 gap-2.5 sm:max-w-sm"
            >
              {heroStats.map((stat, i) => (
                <GlowCard3D
                  key={stat.label}
                  index={i}
                  animateIn={false}
                  innerClassName="rounded-xl !p-3"
                  className="h-full"
                >
                  <p className="hp-hero__stat-value">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="hp-hero__stat-label">{stat.label}</p>
                </GlowCard3D>
              ))}
            </motion.div>
          </div>

          <HeroDashboard />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hp-hero__trust"
        >
          <p className="hp-hero__trust-label">Trusted ecosystem</p>
          <div className="hp-hero__trust-logos">
            {trustPills.map((pill) => (
              <span key={pill} className="hp-hero__trust-pill">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
