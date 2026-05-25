import { motion } from 'framer-motion'
import { whyChooseUs } from '@/data/home'
import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Advantages"
          title={whyChooseUs.heading}
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="landing-card p-6"
            >
              <span className="feature-index block">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-4 text-sm font-bold leading-snug sm:text-base">{feature}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
