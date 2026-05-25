import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { CareersHero } from '@/components/careers/careers-hero'

type CareersPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
}

export function CareersPageShell({
  badge,
  heading,
  subheading,
  children,
}: CareersPageShellProps) {
  return (
    <MainLayout>
      <CareersHero badge={badge} heading={heading} subheading={subheading} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
