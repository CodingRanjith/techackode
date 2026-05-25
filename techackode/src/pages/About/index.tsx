import { Link } from 'react-router-dom'
import { ArrowUpRight, Eye, Heart, Rocket, Target } from 'lucide-react'
import { AboutPageShell, GlassCard, SectionHeader } from '@/components/about'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { aboutMain, aboutNavItems } from '@/data/about'

const subPages = aboutNavItems.filter((item) => item.href !== '/about')

export default function AboutPage() {
  const { hero, introduction, vision, mission, coreValues } = aboutMain

  return (
    <AboutPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
    >
      <section className="landing-section-white py-16 sm:py-20">
        <Container>
          <SectionHeader title={introduction.heading} />
          <div className="mx-auto max-w-3xl space-y-5">
            {introduction.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed landing-muted sm:text-lg">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="landing-section-alt py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <GlassCard title={vision.heading} icon={<Eye className="size-6" strokeWidth={1.75} />}>
                <p>{vision.content}</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <GlassCard
                title={mission.heading}
                icon={<Target className="size-6" strokeWidth={1.75} />}
              >
                <p>{mission.content}</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader title={coreValues.heading} align="center" className="mx-auto" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.values.map((value, index) => (
              <ScrollReveal key={value} delay={index * 0.04}>
                <li className="landing-card flex items-center gap-4 p-6 sm:p-7">
                  <span className="feature-index text-2xl">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-bold sm:text-base">{value}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="landing-section-white border-t border-[var(--border-soft)] py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Explore"
            title="About Sub Pages"
            subtitle="Discover our story, team, partnerships, and ecosystem."
            align="center"
            className="mx-auto"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subPages.map((page, index) => (
              <ScrollReveal key={page.href} delay={index * 0.05}>
                <li>
                  <Link
                    to={page.href}
                    className="landing-card group flex h-full flex-col p-7 sm:p-8"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                        {index % 3 === 0 ? (
                          <Rocket className="size-5" strokeWidth={1.75} />
                        ) : index % 3 === 1 ? (
                          <Heart className="size-5" strokeWidth={1.75} />
                        ) : (
                          <Eye className="size-5" strokeWidth={1.75} />
                        )}
                      </span>
                      <span className="landing-card-arrow">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <h3 className="text-display-sm text-xl">{page.label}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed landing-muted">
                      {page.description}
                    </p>
                  </Link>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </Container>
      </section>
    </AboutPageShell>
  )
}
