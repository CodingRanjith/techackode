import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { ScrollToTopOnNavigate } from '@/components/layout/scroll-to-top'
import { cn } from '@/lib/utils'

type MainLayoutProps = {
  children: ReactNode
  variant?: 'default' | 'home'
}

export function MainLayout({ children, variant = 'default' }: MainLayoutProps) {
  return (
    <div
      className={cn(
        'min-h-svh overflow-x-hidden',
        variant === 'home' ? 'home-premium' : 'landing-page',
      )}
    >
      <ScrollToTopOnNavigate />
      <Navbar variant={variant} />
      <main>{children}</main>
      <Footer variant={variant} />
    </div>
  )
}
