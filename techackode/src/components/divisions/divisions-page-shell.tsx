import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { DivisionsHero } from '@/components/divisions/divisions-hero'
import { DivisionsSubnav } from '@/components/divisions/divisions-subnav'

type DivisionsPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function DivisionsPageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: DivisionsPageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <DivisionsHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <DivisionsSubnav theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
