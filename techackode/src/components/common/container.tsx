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
    <Comp className={cn('w-full px-4 sm:px-5 lg:px-6 xl:px-8', className)}>
      {children}
    </Comp>
  )
}
