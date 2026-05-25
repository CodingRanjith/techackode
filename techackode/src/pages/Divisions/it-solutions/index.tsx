import { ContentBlock } from '@/components/about'
import { DivisionsPageShell } from '@/components/divisions'
import { itSolutionsDivision } from '@/data/divisions'

export default function ItSolutionsPage() {
  const { hero, content, focusAreas } = itSolutionsDivision

  return (
    <DivisionsPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={focusAreas} />
    </DivisionsPageShell>
  )
}
