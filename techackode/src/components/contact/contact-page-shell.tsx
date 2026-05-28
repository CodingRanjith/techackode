import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ContactHero } from '@/components/contact/contact-hero'

type ContactPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function ContactPageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: ContactPageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <ContactHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
