import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ServicesHero } from '@/components/services/services-hero'

type ServicesPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function ServicesPageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: ServicesPageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <ServicesHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
