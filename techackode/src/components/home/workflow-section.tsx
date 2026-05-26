import { motion } from 'framer-motion'
import { Container } from '@/components/common/container'
import { workflowSection } from '@/data/home-page'
import { PremiumHeading, SectionShell } from '@/components/home/ui'

export function WorkflowSection() {
  return (
    <SectionShell id="workflow" bg="white" cinematic="section">
      <Container className="py-24 sm:py-32">
        <PremiumHeading
          eyebrow={workflowSection.eyebrow}
          title={workflowSection.title}
          subtitle={workflowSection.subtitle}
          align="center"
          className="mx-auto text-center"
        />

        <div className="hp-timeline mt-4">
          {workflowSection.steps.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="hp-glass-panel relative p-7 sm:p-8"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--hp-navy)] text-lg font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-6 text-xl font-bold text-[var(--hp-ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--hp-muted)]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </SectionShell>
  )
}
