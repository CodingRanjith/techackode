import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { DivisionsHero } from '@/components/divisions/divisions-hero'
import { DivisionsSubnav } from '@/components/divisions/divisions-subnav'

type DivisionsPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
}

export function DivisionsPageShell({
  badge,
  heading,
  subheading,
  children,
}: DivisionsPageShellProps) {
  return (
    <MainLayout>
      <DivisionsHero badge={badge} heading={heading} subheading={subheading} />
      <DivisionsSubnav />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
