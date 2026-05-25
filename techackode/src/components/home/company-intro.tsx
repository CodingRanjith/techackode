import { motion } from 'framer-motion'
import { companyIntro } from '@/data/home'
import { Container } from '@/components/common/container'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export function CompanyIntro() {
  return (
    <section id="about" className="landing-section-white relative py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal className="space-y-6">
            <span className="landing-badge">About Techackode</span>
            <h2 className="text-display-sm text-3xl sm:text-4xl lg:text-[2.75rem]">
              {companyIntro.heading}
            </h2>
            <p className="text-base leading-relaxed landing-muted sm:text-lg">
              {companyIntro.content}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="landing-card relative overflow-hidden p-10 sm:p-12"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--ink-soft)] uppercase">
                Founded
              </p>
              <p className="text-display mt-4 text-7xl sm:text-8xl lg:text-9xl">2025</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {['Students', 'Startups', 'Enterprises'].map((label, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--cream)] px-4 py-3"
                  >
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="feature-index text-xl">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
