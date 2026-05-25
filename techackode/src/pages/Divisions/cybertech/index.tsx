import { ContentBlock } from '@/components/about'
import { DivisionsPageShell } from '@/components/divisions'
import { cybertechDivision } from '@/data/divisions'

export default function CybertechPage() {
  const { hero, content, focusAreas } = cybertechDivision

  return (
    <DivisionsPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={focusAreas} />
    </DivisionsPageShell>
  )
}
