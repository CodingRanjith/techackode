import { motion } from 'framer-motion'
import { ArrowRight, Eye, Play, Route, Target } from 'lucide-react'
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
  { value: 6, label: 'Domain pods', suffix: '+' },
  { value: 97, label: 'Partner retention', suffix: '%' },
] as const

const valuePoints = [
  {
    title: 'Delivery visibility',
    description: 'Clear view for teams.',
    icon: Eye,
  },
  {
    title: 'Cross-domain execution',
    description: 'Engineering, security, AI in one flow.',
    icon: Route,
  },
  {
    title: 'Outcome-first operations',
    description: 'Roadmaps aligned to outcomes.',
    icon: Target,
  },
] as const

export function HeroSection() {
  const [ctaPrimary, ctaSecondary] = heroContent.ctas
  const compactLead =
    'From idea to execution, we deliver secure, intelligent systems that scale with your business.'

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
              <span className="block text-[var(--hp-ink)]">Building Intelligent Systems</span>
              <span className="block hp-gradient-text--accent">for Real Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hp-hero__lead mt-4"
            >
              {compactLead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-5 flex flex-wrap items-center gap-2.5"
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
              className="mt-6 grid grid-cols-3 gap-2 sm:max-w-md"
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

          <div>
            <HeroDashboard />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="hp-hero__value-panel lg:mt-4"
            >
              <p className="hp-hero__value-panel-label">Operational principles</p>
              <div className="hp-hero__value-grid">
                {valuePoints.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="hp-hero__value-item">
                      <span className="hp-hero__value-icon">
                        <Icon className="size-3.5" strokeWidth={2} aria-hidden />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hp-hero__trust"
        >
          <p className="hp-hero__trust-label">Operating focus</p>
          <div className="hp-hero__trust-marquee">
            <div className="hp-hero__trust-logos">
              {[...trustPills, ...trustPills].map((pill, index) => (
                <span key={`${pill}-${index}`} className="hp-hero__trust-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
