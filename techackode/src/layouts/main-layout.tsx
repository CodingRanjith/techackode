import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="landing-page min-h-svh overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
