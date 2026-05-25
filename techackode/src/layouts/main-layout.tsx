import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { ScrollToTopOnNavigate } from '@/components/layout/scroll-to-top'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="landing-page min-h-svh overflow-x-hidden">
      <ScrollToTopOnNavigate />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
