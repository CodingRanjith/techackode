import { ContentBlock } from '@/components/about'
import { DivisionsPageShell } from '@/components/divisions'
import { ecommerceDivision } from '@/data/divisions'

export default function EcommerceDigitalPlatformsPage() {
  const { hero, content, focusAreas } = ecommerceDivision

  return (
    <DivisionsPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={focusAreas} />
    </DivisionsPageShell>
  )
}
