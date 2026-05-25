import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type GlowButtonProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  onClick?: () => void
}

const sizeMap = {
  sm: 'text-xs px-4 py-2',
  default: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

export function GlowButton({
  href = '#',
  children,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
}: GlowButtonProps) {
  if (variant === 'ghost') {
    return (
      <a href={href} onClick={onClick} className={cn('landing-btn-ghost', className)}>
        {children}
        <span className="landing-btn-circle">
          <ArrowUpRight className="size-4" />
        </span>
      </a>
    )
  }

  if (variant === 'outline') {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--ink)] font-bold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-[var(--cream)]',
          sizeMap[size],
          className,
        )}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn('landing-btn-primary', sizeMap[size], className)}
    >
      {children}
    </a>
  )
}
