import { AboutPageShell, ContentBlock } from '@/components/about'
import { clientsPage } from '@/data/about'

export default function ClientsPage() {
  const { hero, content } = clientsPage

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading} theme="home">
      <ContentBlock content={content} theme="home" />
    </AboutPageShell>
  )
}
