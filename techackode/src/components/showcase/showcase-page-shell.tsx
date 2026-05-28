import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ShowcaseHero } from '@/components/showcase/showcase-hero'
import { ShowcaseSubnav } from '@/components/showcase/showcase-subnav'

type ShowcasePageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function ShowcasePageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: ShowcasePageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <ShowcaseHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <ShowcaseSubnav theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
