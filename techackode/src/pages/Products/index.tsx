import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  GraduationCap,
  Languages,
  LayoutDashboard,
  Mic,
  Sparkles,
  Store,
  type LucideIcon,
} from 'lucide-react'
import { ProductsPageShell } from '@/components/products'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { productCards, productsPage } from '@/data/products'

const iconMap: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  store: Store,
  languages: Languages,
  mic: Mic,
  sparkles: Sparkles,
  graduation: GraduationCap,
}

export default function ProductsPage() {
  const { hero, intro, catalog, cta } = productsPage

  return (
    <ProductsPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
      theme="home"
    >
      <SectionShell bg="white" cinematic="none">
        <Container>
          <div className="pt-5 pb-16 sm:pt-6 sm:pb-20">
            <PremiumHeading
              eyebrow="Products Overview"
              title="Platform Portfolio"
              subtitle={intro}
              align="center"
              className="mx-auto"
            />
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="mesh" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <PremiumHeading
              eyebrow={catalog.eyebrow}
              title={catalog.title}
              subtitle={catalog.subtitle}
              align="center"
              className="mx-auto"
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {productCards.map((product, index) => {
                const Icon = iconMap[product.icon] ?? LayoutDashboard
                return (
                  <ScrollReveal key={product.slug} delay={index * 0.05}>
                    <li>
                      <Link to={product.href} className="hp-glow-card group flex h-full flex-col p-7 sm:p-8">
                        <div className="mb-5 flex items-start justify-between">
                          <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--hp-accent-soft)] text-[var(--hp-navy)]">
                            <Icon className="size-6" strokeWidth={1.75} />
                          </span>
                          <span className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--hp-border)] text-[var(--hp-navy)] transition group-hover:-translate-y-0.5">
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                        <h3 className="hp-h-card text-xl sm:text-2xl">{product.name}</h3>
                        <p className="hp-body-sm mt-3 flex-1">{product.description}</p>
                        <span className="mt-5 inline-block w-fit rounded-full border border-[var(--hp-border)] bg-[var(--hp-accent-soft)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--hp-navy)] uppercase">
                          Platform
                        </span>
                      </Link>
                    </li>
                  </ScrollReveal>
                )
              })}
            </ul>
          </div>
        </Container>
      </SectionShell>

      <SectionShell bg="gradient" cinematic="section">
        <Container>
          <div className="hp-section-y">
            <ScrollReveal className="mx-auto max-w-3xl rounded-3xl border border-[var(--hp-border)] bg-white/90 p-8 text-center shadow-[var(--hp-shadow-sm)]">
              <h2 className="hp-h-section hp-h-section--center !max-w-none">{cta.heading}</h2>
              <p className="hp-subtitle-section hp-subtitle-section--center mt-4">{cta.content}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to={cta.buttons[0].href} className="hp-btn-primary">
                  {cta.buttons[0].label}
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link to={cta.buttons[1].href} className="hp-btn-ghost">
                  {cta.buttons[1].label}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionShell>
    </ProductsPageShell>
  )
}
