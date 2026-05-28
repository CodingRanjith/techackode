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
import { PremiumHeading, SectionShell } from '@/components/home/ui'
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
    <AboutPageShell heading={hero.heading} subheading={hero.subheading} theme="home">
      <SectionShell bg="mesh" cinematic="section">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Ecosystem"
              title="Our Divisions"
              subtitle="Specialized branches driving education, technology, security, and digital growth."
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {branches.map((branch, index) => {
                const Icon = iconMap[branch.icon] ?? Code2
                return (
                  <ScrollReveal key={branch.title} delay={index * 0.05}>
                    <li className="hp-glow-card flex h-full flex-col border-[var(--hp-border)] bg-white p-7 sm:p-8">
                      <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                        <Icon className="size-6" strokeWidth={1.75} />
                      </span>
                      <h3 className="hp-h-card text-xl sm:text-2xl">{branch.title}</h3>
                      <p className="hp-body-sm mt-3 flex-1">{branch.description}</p>
                    </li>
                  </ScrollReveal>
                )
              })}
            </ul>
          </div>
        </Container>
      </SectionShell>
    </AboutPageShell>
  )
}
