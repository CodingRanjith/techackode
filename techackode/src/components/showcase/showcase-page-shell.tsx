import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ShowcaseHero } from '@/components/showcase/showcase-hero'
import { ShowcaseSubnav } from '@/components/showcase/showcase-subnav'

type ShowcasePageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
}

export function ShowcasePageShell({
  badge,
  heading,
  subheading,
  children,
}: ShowcasePageShellProps) {
  return (
    <MainLayout>
      <ShowcaseHero badge={badge} heading={heading} subheading={subheading} />
      <ShowcaseSubnav />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
