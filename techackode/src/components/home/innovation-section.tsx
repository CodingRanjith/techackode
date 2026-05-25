import { motion } from 'framer-motion'
import { innovationSection } from '@/data/home'
import { Container } from '@/components/common/container'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export function InnovationSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="innovation-block relative overflow-hidden px-8 py-14 sm:px-14 sm:py-20"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-white/20 opacity-30 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="landing-badge mb-6 border border-white/20 bg-white/10 text-[var(--cream)] before:bg-white/80">
                Innovation
              </span>
              <h2 className="text-display text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">
                {innovationSection.heading}
              </h2>
              <p className="landing-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
                {innovationSection.content}
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
