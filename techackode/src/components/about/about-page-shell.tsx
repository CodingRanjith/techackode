import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { AboutHero } from '@/components/about/about-hero'
import { AboutSubnav } from '@/components/about/about-subnav'

type AboutPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function AboutPageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: AboutPageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <AboutHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <AboutSubnav theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
