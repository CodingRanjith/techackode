import { AboutPageShell, ContentBlock } from '@/components/about'
import { teamPage } from '@/data/about'

export default function TeamPage() {
  const { hero, content, categories } = teamPage

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading}>
      <ContentBlock content={content} categories={categories} />
    </AboutPageShell>
  )
}
