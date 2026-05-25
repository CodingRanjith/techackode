import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export function Container({
  children,
  className,
  as: Comp = 'div',
}: ContainerProps) {
  return (
    <Comp className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className)}>
      {children}
    </Comp>
  )
}
