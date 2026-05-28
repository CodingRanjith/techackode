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
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ShowcasePageShell } from '@/components/showcase'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { showcasePage } from '@/data/showcase'

const iconMap: Record<string, LucideIcon> = {
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

export default function ShowcasePage() {
  const { hero, intro, categories } = showcasePage

  return (
    <ShowcasePageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
      theme="home"
    >
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Showcase Overview"
              title="Systems Across Domains"
              subtitle={intro}
              align="center"
              className="mx-auto"
            />
          </div>
        </Container>
      </SectionShell>

      {categories.map((category, index) => (
        <SectionShell
          key={category.id}
          id={category.id}
          bg={index % 2 === 0 ? 'mesh' : 'white'}
          cinematic={index % 2 === 0 ? 'section' : 'none'}
          className="scroll-mt-36"
        >
          <Container>
            <div className="hp-section-y">
              <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                  {(() => {
                    const Icon = iconMap[category.icon] ?? Building2
                    return <Icon className="size-7" strokeWidth={1.75} />
                  })()}
                </span>
                <PremiumHeading title={category.title} subtitle={category.description} className="mb-0 flex-1" />
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <ScrollReveal key={item.title} delay={itemIndex * 0.04}>
                    <li className="hp-glow-card flex h-full flex-col border-[var(--hp-border)] bg-white p-6 sm:p-7">
                      <h3 className="hp-h-card text-lg sm:text-xl">{item.title}</h3>
                      <p className="hp-body-sm mt-3 flex-1">{item.description}</p>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </Container>
        </SectionShell>
      ))}

      <SectionShell bg="gradient" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <ScrollReveal className="mx-auto max-w-3xl rounded-3xl border border-[var(--hp-border)] bg-white/90 p-8 text-center shadow-[var(--hp-shadow-sm)]">
              <h2 className="hp-h-section hp-h-section--center !max-w-none">Have a project in mind?</h2>
              <p className="hp-subtitle-section hp-subtitle-section--center mt-4">
                Whether you need an enterprise platform, AI automation, or a custom client system,
                Techackode can design and deliver end to end.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="hp-btn-primary">
                  Start a Project
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link to="/services" className="hp-btn-ghost">
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionShell>
    </ShowcasePageShell>
  )
}
