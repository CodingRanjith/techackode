import { SectionHeading } from '@/components/common/section-heading'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      align={align}
      className={cn('mb-10', className)}
    />
  )
}
