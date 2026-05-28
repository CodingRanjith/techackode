import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Eye,
  Heart,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { AboutPageShell, GlassCard } from '@/components/about'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { aboutMain, aboutNavItems } from '@/data/about'

const subPages = aboutNavItems.filter((item) => item.href !== '/about')
const valueDescriptions = [
  'We focus on meaningful innovation that solves practical business and ecosystem problems.',
  'Every initiative is aligned with measurable outcomes and long-term impact.',
  'Continuous upskilling and adaptation keep our systems, teams, and clients future-ready.',
  'Transparent execution and accountability define every partnership and delivery cycle.',
  'We design with scalability in mind, while staying adaptable to global technology shifts.',
  'Technology is not just a tool for us; it is the foundation for sustainable growth.',
]

const aboutStats = [
  { label: 'Founded', value: '2025', icon: BriefcaseBusiness },
  { label: 'Core Domains', value: '6+', icon: Layers3 },
  { label: 'Focus Model', value: 'Outcome Driven', icon: Target },
  { label: 'Collaboration', value: 'People + Systems', icon: Users },
] as const

export default function AboutPage() {
  const { hero, introduction, vision, mission, coreValues } = aboutMain

  return (
    <AboutPageShell badge={hero.badge} heading={hero.heading} subheading={hero.subheading} theme="home">
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <PremiumHeading
                  eyebrow="Introduction"
                  title={introduction.heading}
                  subtitle="A practical technology ecosystem focused on outcomes, scale, and long-term impact."
                />
                <div className="space-y-4 rounded-3xl border border-[var(--hp-border)] bg-gradient-to-b from-white to-[var(--hp-bg-subtle)] p-6 shadow-[var(--hp-shadow-sm)] sm:p-8">
                  {introduction.paragraphs.map((paragraph, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <p className="hp-body">{paragraph}</p>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-1">
                <ScrollReveal delay={0.08}>
                  <div className="rounded-3xl border border-[var(--hp-border)] bg-white p-6 shadow-[var(--hp-shadow-sm)] sm:p-7">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--hp-border)] bg-[var(--hp-bg-subtle)] px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[var(--hp-soft)] uppercase">
                      <Sparkles className="size-3.5" />
                      Executive Snapshot
                    </div>
                    <ul className="space-y-3">
                      <li className="hp-body-sm flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--hp-navy)]" />
                        Future-ready systems with secure, scalable architecture.
                      </li>
                      <li className="hp-body-sm flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--hp-navy)]" />
                        Cross-domain execution across AI, software, and cybersecurity.
                      </li>
                      <li className="hp-body-sm flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--hp-navy)]" />
                        Delivery model built for visibility, speed, and measurable outcomes.
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 gap-3">
                  {aboutStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <ScrollReveal key={stat.label} delay={0.12 + index * 0.04}>
                        <div className="rounded-2xl border border-[var(--hp-border)] bg-white p-4 shadow-[var(--hp-shadow-sm)]">
                          <span className="mb-2 inline-flex size-8 items-center justify-center rounded-lg bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                            <Icon className="size-4" />
                          </span>
                          <p className="text-xs font-semibold tracking-[0.08em] text-[var(--hp-soft)] uppercase">
                            {stat.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[var(--hp-ink)] sm:text-base">
                            {stat.value}
                          </p>
                        </div>
                      </ScrollReveal>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="mesh" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <PremiumHeading
              eyebrow="Direction"
              title="Vision and Mission"
              subtitle="What drives Techackode and how we execute every initiative."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <ScrollReveal>
                <GlassCard
                  title={vision.heading}
                  icon={<Eye className="size-6" strokeWidth={1.75} />}
                  theme="home"
                  className="border-[var(--hp-border)] bg-white/95 p-8 sm:p-10"
                >
                  <p className="hp-body">{vision.content}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[var(--hp-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--hp-soft)]">
                      Global Trust
                    </span>
                    <span className="rounded-full border border-[var(--hp-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--hp-soft)]">
                      Innovation
                    </span>
                  </div>
                </GlassCard>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <GlassCard
                  title={mission.heading}
                  icon={<Target className="size-6" strokeWidth={1.75} />}
                  theme="home"
                  className="border-[var(--hp-border)] bg-white/95 p-8 sm:p-10"
                >
                  <p className="hp-body">{mission.content}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[var(--hp-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--hp-soft)]">
                      Practical Delivery
                    </span>
                    <span className="rounded-full border border-[var(--hp-border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--hp-soft)]">
                      Scalable Impact
                    </span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="hp-section-y">
            <PremiumHeading eyebrow="Culture" title={coreValues.heading} align="center" className="mx-auto" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.values.map((value, index) => (
                <ScrollReveal key={value} delay={index * 0.04}>
                  <li className="hp-glow-card border-[var(--hp-border)] bg-white p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[var(--hp-accent-soft)] text-sm font-semibold text-[var(--hp-navy)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="hp-h-card text-base sm:text-lg">{value}</span>
                    </div>
                    <p className="hp-body-sm mt-3">{valueDescriptions[index]}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="gradient" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <PremiumHeading
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
                    <Link to={page.href} className="hp-glow-card group flex h-full flex-col p-7 sm:p-8">
                      <div className="mb-5 flex items-start justify-between">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                          {index % 3 === 0 ? (
                            <Rocket className="size-5" strokeWidth={1.75} />
                          ) : index % 3 === 1 ? (
                            <Heart className="size-5" strokeWidth={1.75} />
                          ) : (
                            <Eye className="size-5" strokeWidth={1.75} />
                          )}
                        </span>
                        <span className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--hp-border)] text-[var(--hp-navy)] transition group-hover:-translate-y-0.5">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                      <h3 className="hp-h-card text-xl">{page.label}</h3>
                      <p className="hp-body-sm mt-2 flex-1">{page.description}</p>
                    </Link>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={0.25}>
              <div className="mt-10 rounded-3xl border border-[var(--hp-border)] bg-white/90 p-6 text-center shadow-[var(--hp-shadow-sm)] sm:p-8">
                <p className="text-xs font-semibold tracking-[0.1em] text-[var(--hp-soft)] uppercase">
                  Looking to collaborate?
                </p>
                <h3 className="hp-h-card mt-2 text-xl sm:text-2xl">Let us build your next growth system</h3>
                <p className="hp-body mx-auto mt-3 max-w-2xl">
                  Explore how Techackode can support your product roadmap, automation goals, and digital
                  transformation journey.
                </p>
                <Link to="/contact" className="hp-btn-primary mt-6">
                  Contact Us
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionShell>
    </AboutPageShell>
  )
}
