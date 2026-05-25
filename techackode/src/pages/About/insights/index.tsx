import { AboutPageShell, ContentBlock } from '@/components/about'
import { insightsPage } from '@/data/about'

export default function InsightsPage() {
  const { hero, content, categories } = insightsPage

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={categories} />
    </AboutPageShell>
  )
}
