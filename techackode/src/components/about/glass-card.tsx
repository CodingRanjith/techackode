import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type GlassCardProps = {
  title: string
  children: ReactNode
  className?: string
  icon?: ReactNode
  theme?: 'default' | 'home'
}

export function GlassCard({ title, children, className, icon, theme = 'default' }: GlassCardProps) {
  return (
    <article
      className={cn(
        theme === 'home'
          ? 'hp-glow-card flex h-full flex-col p-8 sm:p-10'
          : 'landing-card flex h-full flex-col p-8 sm:p-10',
        className,
      )}
    >
      {icon && (
        <div
          className={cn(
            'mb-5 flex size-12 items-center justify-center rounded-2xl',
            theme === 'home'
              ? 'bg-[var(--hp-accent-soft)] text-[var(--hp-ink)]'
              : 'bg-[var(--accent-soft)] text-[var(--ink)]',
          )}
        >
          {icon}
        </div>
      )}
      <h3 className={cn('text-xl sm:text-2xl', theme === 'home' ? 'hp-h-card' : 'text-display-sm')}>
        {title}
      </h3>
      <div
        className={cn(
          'mt-4 flex-1 text-sm leading-relaxed sm:text-base',
          theme === 'home' ? 'hp-body' : 'landing-muted',
        )}
      >
        {children}
      </div>
    </article>
  )
}
