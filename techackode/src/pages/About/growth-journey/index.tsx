import { AboutPageShell, Timeline } from '@/components/about'
import { growthJourney } from '@/data/about'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/about/section-header'

export default function GrowthJourneyPage() {
  const { hero, timeline } = growthJourney

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading}>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Timeline"
            title="Our Evolution"
            subtitle="Key milestones in the Techackode growth journey."
          />
          <Timeline items={timeline} />
        </Container>
      </section>
    </AboutPageShell>
  )
}
