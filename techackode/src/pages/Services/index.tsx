import { Link } from 'react-router-dom'
import { ArrowUpRight, Brain, Code2, Layers3, Megaphone, Shield } from 'lucide-react'
import { ServicesPageShell } from '@/components/services'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { servicesPage } from '@/data/services'

const categoryIconMap = {
  code: Code2,
  brain: Brain,
  shield: Shield,
  layers: Layers3,
  megaphone: Megaphone,
} as const

export default function ServicesPage() {
  const { hero, intro, categories } = servicesPage

  return (
    <ServicesPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
      theme="home"
    >
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Services Overview"
              title="Delivery Capabilities"
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
        >
          <Container>
            <div className="hp-section-y">
              <PremiumHeading
                eyebrow="Category"
                title={category.title}
                subtitle={category.description}
              />
              <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item, itemIndex) => {
                  const Icon = categoryIconMap[category.icon] ?? Code2
                  return (
                    <ScrollReveal key={item.title} delay={itemIndex * 0.03}>
                      <li className="hp-glow-card border-[var(--hp-border)] bg-white p-6 sm:p-7">
                        <span className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="hp-h-card text-lg sm:text-xl">{item.title}</h3>
                        <p className="hp-body-sm mt-3">{item.description}</p>
                      </li>
                    </ScrollReveal>
                  )
                })}
              </ul>
            </div>
          </Container>
        </SectionShell>
      ))}

      <SectionShell bg="gradient" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <ScrollReveal className="mx-auto max-w-3xl rounded-3xl border border-[var(--hp-border)] bg-white/90 p-8 text-center shadow-[var(--hp-shadow-sm)]">
              <p className="text-xs font-semibold tracking-[0.1em] text-[var(--hp-soft)] uppercase">
                Start Your Build
              </p>
              <h2 className="hp-h-section hp-h-section--center mt-3 !max-w-none">
                Ready to build with Techackode?
              </h2>
              <p className="hp-subtitle-section hp-subtitle-section--center mt-4">
                Tell us about your project and we will match you with the right team across
                development, AI, security, and growth.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/contact" className="hp-btn-primary">
                  Get in Touch
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionShell>
    </ServicesPageShell>
  )
}
