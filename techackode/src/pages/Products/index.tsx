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
import { SectionHeader } from '@/components/about'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
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
    >
      <section className="landing-section-white py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed landing-muted sm:text-lg">
              {intro}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="landing-section-alt py-16 sm:py-20">
        <Container>
          <SectionHeader
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
                    <Link
                      to={product.href}
                      className="landing-card group flex h-full flex-col p-7 sm:p-8"
                    >
                      <div className="mb-5 flex items-start justify-between">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
                          <Icon className="size-6" strokeWidth={1.75} />
                        </span>
                        <span className="landing-card-arrow">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                      <h3 className="text-display-sm text-xl sm:text-2xl">{product.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed landing-muted sm:text-base">
                        {product.description}
                      </p>
                      <span className="mt-5 inline-block w-fit rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--ink)] uppercase">
                        Platform
                      </span>
                    </Link>
                  </li>
                </ScrollReveal>
              )
            })}
          </ul>
        </Container>
      </section>

      <section className="landing-section-white border-t border-[var(--border-soft)] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-2xl sm:text-3xl">{cta.heading}</h2>
            <p className="mt-4 text-base leading-relaxed landing-muted sm:text-lg">
              {cta.content}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GlowButton href={cta.buttons[0].href}>{cta.buttons[0].label}</GlowButton>
              <GlowButton href={cta.buttons[1].href} variant={cta.buttons[1].variant}>
                {cta.buttons[1].label}
              </GlowButton>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </ProductsPageShell>
  )
}
