import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type GlassCardProps = {
  title: string
  children: ReactNode
  className?: string
  icon?: ReactNode
}

export function GlassCard({ title, children, className, icon }: GlassCardProps) {
  return (
    <article
      className={cn(
        'landing-card flex h-full flex-col p-8 sm:p-10',
        className,
      )}
    >
      {icon && (
        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
          {icon}
        </div>
      )}
      <h3 className="text-display-sm text-xl sm:text-2xl">{title}</h3>
      <div className="mt-4 flex-1 text-sm leading-relaxed landing-muted sm:text-base">
        {children}
      </div>
    </article>
  )
}
