import {
  Brain,
  Code2,
  GraduationCap,
  Megaphone,
  Shield,
  Store,
  type LucideIcon,
} from 'lucide-react'
import { AboutPageShell } from '@/components/about'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/about/section-header'
import { branchesPage } from '@/data/about'

const iconMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  code: Code2,
  shield: Shield,
  brain: Brain,
  store: Store,
  megaphone: Megaphone,
}

export default function BranchesPage() {
  const { hero, branches } = branchesPage

  return (
    <AboutPageShell heading={hero.heading} subheading={hero.subheading}>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Ecosystem"
            title="Our Divisions"
            subtitle="Specialized branches driving education, technology, security, and digital growth."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, index) => {
              const Icon = iconMap[branch.icon] ?? Code2
              return (
                <ScrollReveal key={branch.title} delay={index * 0.05}>
                  <li className="landing-card flex h-full flex-col p-7 sm:p-8">
                    <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-display-sm text-xl sm:text-2xl">{branch.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed landing-muted sm:text-base">
                      {branch.description}
                    </p>
                  </li>
                </ScrollReveal>
              )
            })}
          </ul>
        </Container>
      </section>
    </AboutPageShell>
  )
}
