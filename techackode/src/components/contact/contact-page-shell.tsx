import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ContactHero } from '@/components/contact/contact-hero'

type ContactPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
}

export function ContactPageShell({
  badge,
  heading,
  subheading,
  children,
}: ContactPageShellProps) {
  return (
    <MainLayout>
      <ContactHero badge={badge} heading={heading} subheading={subheading} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
