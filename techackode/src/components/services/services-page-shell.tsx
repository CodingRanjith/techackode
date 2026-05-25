import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ServicesHero } from '@/components/services/services-hero'

type ServicesPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
}

export function ServicesPageShell({
  badge,
  heading,
  subheading,
  children,
}: ServicesPageShellProps) {
  return (
    <MainLayout>
      <ServicesHero badge={badge} heading={heading} subheading={subheading} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
