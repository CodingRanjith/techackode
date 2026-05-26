import { Container } from '@/components/common/container'
import { workflowSection } from '@/data/home-page'
import { GlowCard3D } from '@/components/home/motion'
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
            <GlowCard3D key={step.step} index={index} innerClassName="p-7 sm:p-8">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--hp-navy)] text-lg font-bold text-white shadow-lg shadow-[rgba(25,36,66,0.25)]">
                {step.step}
              </span>
              <h3 className="mt-6 text-xl font-bold text-[var(--hp-ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--hp-muted)]">
                {step.description}
              </p>
            </GlowCard3D>
          ))}
        </div>
      </Container>
    </SectionShell>
  )
}
