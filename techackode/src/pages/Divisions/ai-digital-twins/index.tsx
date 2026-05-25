import { ContentBlock } from '@/components/about'
import { DivisionsPageShell } from '@/components/divisions'
import { aiDigitalTwinsDivision } from '@/data/divisions'

export default function AiDigitalTwinsPage() {
  const { hero, content, focusAreas } = aiDigitalTwinsDivision

  return (
    <DivisionsPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={focusAreas} />
    </DivisionsPageShell>
  )
}
