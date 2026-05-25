import { ContentBlock } from '@/components/about'
import { DivisionsPageShell } from '@/components/divisions'
import { edutechDivision } from '@/data/divisions'

export default function EdutechPage() {
  const { hero, content, focusAreas } = edutechDivision

  return (
    <DivisionsPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={focusAreas} />
    </DivisionsPageShell>
  )
}
