import {
  Brain,
  Building2,
  Database,
  GraduationCap,
  Package,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/showcase/section-header'
import { cn } from '@/lib/utils'

type ShowcaseItem = {
  title: string
  description: string
}

type ShowcaseCategorySectionProps = {
  id: string
  title: string
  description: string
  icon:
    | 'building'
    | 'brain'
    | 'database'
    | 'workflow'
    | 'graduation'
    | 'smartphone'
    | 'package'
    | 'users'
    | 'sparkles'
  items: readonly ShowcaseItem[]
  variant?: 'default' | 'alt'
}

const iconMap: Record<ShowcaseCategorySectionProps['icon'], LucideIcon> = {
  building: Building2,
  brain: Brain,
  database: Database,
  workflow: Workflow,
  graduation: GraduationCap,
  smartphone: Smartphone,
  package: Package,
  users: Users,
  sparkles: Sparkles,
}

export function ShowcaseCategorySection({
  id,
  title,
  description,
  icon,
  items,
  variant = 'default',
}: ShowcaseCategorySectionProps) {
  const Icon = iconMap[icon]

  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-36 py-16 sm:py-20',
        variant === 'alt' ? 'landing-section-alt' : 'landing-section-white',
      )}
    >
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
            <Icon className="size-7" strokeWidth={1.75} />
          </span>
          <SectionHeader title={title} subtitle={description} className="mb-0 flex-1" />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.04}>
              <li className="landing-card flex h-full flex-col p-6 sm:p-7">
                <h3 className="text-display-sm text-lg sm:text-xl">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed landing-muted sm:text-base">
                  {item.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
