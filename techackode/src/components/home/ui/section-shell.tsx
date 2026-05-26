import type { ReactNode } from 'react'
import { CinematicBackground } from '@/components/home/motion'
import { cn } from '@/lib/utils'

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  bg?: 'white' | 'mesh' | 'gradient' | 'dark-mesh'
  cinematic?: 'hero' | 'section' | 'cta' | 'none'
}

export function SectionShell({
  id,
  children,
  className,
  bg = 'white',
  cinematic = 'section',
}: SectionShellProps) {
  return (
    <section id={id} className={cn('hp-section-shell', `hp-section-shell--${bg}`, className)}>
      {cinematic !== 'none' && <CinematicBackground variant={cinematic} />}
      <div className="hp-section-shell__content">{children}</div>
    </section>
  )
}
