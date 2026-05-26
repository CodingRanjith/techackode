import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/container'
import { services, servicesSection } from '@/data/home'
import { PremiumHeading, SectionShell } from '@/components/home/ui'

export function ServicesSection() {
  return (
    <SectionShell id="services" bg="gradient" cinematic="section">
      <Container className="hp-section-y">
        <div className="hp-services-sticky">
          <aside className="hp-services-sticky__aside">
            <PremiumHeading
              eyebrow="Services"
              title={servicesSection.heading}
              subtitle={servicesSection.subheading}
              className="mb-0 lg:mb-0"
            />
            <Link to="/services" className="hp-btn-primary mt-8 hidden lg:inline-flex">
              View all services
              <ArrowUpRight className="size-4" />
            </Link>
          </aside>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="hp-service-row group"
              >
                <Link to="/services" className="flex items-start justify-between gap-6">
                  <div>
                    <span className="hp-service-row__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="hp-service-row__title transition group-hover:text-[var(--hp-navy-light)]">
                      {service}
                    </h3>
                  </div>
                  <span className="hp-icon-box size-12 rounded-2xl transition group-hover:scale-105 group-hover:bg-[var(--hp-navy)] group-hover:text-white">
                    <ArrowUpRight className="size-5" strokeWidth={2} aria-hidden />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Link to="/services" className="hp-btn-primary">
            View all services
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Container>
    </SectionShell>
  )
}
