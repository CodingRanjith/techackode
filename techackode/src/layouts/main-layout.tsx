import type { ReactNode } from 'react'
import { AnnouncementBar } from '@/components/home/announcement-bar'
import { EnrollmentModal } from '@/components/home/enrollment-modal'
import { FloatingRegisterButton } from '@/components/home/floating-register-button'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { ScrollToTopOnNavigate } from '@/components/layout/scroll-to-top'
import { cn } from '@/lib/utils'

type MainLayoutProps = {
  children: ReactNode
  variant?: 'default' | 'home'
  showClassEnrollment?: boolean
}

export function MainLayout({
  children,
  variant = 'default',
  showClassEnrollment = false,
}: MainLayoutProps) {
  return (
    <div
      className={cn(
        'min-h-svh overflow-x-hidden',
        variant === 'home' ? 'home-premium' : 'landing-page',
        showClassEnrollment && 'has-announcement',
      )}
    >
      <ScrollToTopOnNavigate />
      {showClassEnrollment && <AnnouncementBar />}
      <Navbar variant={variant} showClassEnrollment={showClassEnrollment} />
      <main>{children}</main>
      <Footer variant={variant} />
      {showClassEnrollment && (
        <>
          <EnrollmentModal />
          <FloatingRegisterButton />
        </>
      )}
    </div>
  )
}
