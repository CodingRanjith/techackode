import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { CareersHero } from '@/components/careers/careers-hero'

type CareersPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function CareersPageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: CareersPageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <CareersHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
