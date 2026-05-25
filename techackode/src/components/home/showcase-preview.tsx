import { Layers, Network, Workflow } from 'lucide-react'
import { showcase } from '@/data/home'
import { Container } from '@/components/common/container'
import { GlowButton } from '@/components/common/glow-button'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

const highlights = [
  { icon: Network, label: 'AI Systems' },
  { icon: Workflow, label: 'ERP Platforms' },
  { icon: Layers, label: 'Learning Ecosystems' },
]

export function ShowcasePreview() {
  return (
    <section id="showcase" className="landing-section-alt relative py-24 sm:py-32">
      <Container>
        <div className="landing-card grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal className="space-y-6 p-8 sm:p-12 lg:p-14">
            <span className="landing-badge">Portfolio</span>
            <h2 className="text-display-sm text-3xl sm:text-4xl">{showcase.heading}</h2>
            <p className="max-w-lg text-base leading-relaxed landing-muted sm:text-lg">
              {showcase.content}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {highlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--cream)] px-4 py-2 text-sm font-medium"
                >
                  <Icon className="size-4 text-[var(--accent-hover)]" />
                  {label}
                </span>
              ))}
            </div>
            <GlowButton href={showcase.cta.href} variant="ghost" className="pt-4">
              {showcase.cta.label}
            </GlowButton>
          </ScrollReveal>

          <div className="flex items-center justify-center border-t border-[var(--border-soft)] bg-[var(--accent-soft)]/40 p-10 lg:border-t-0 lg:border-l">
            <div className="grid w-full max-w-xs gap-4">
              {[
                { value: '10+', label: 'Products' },
                { value: '6', label: 'Divisions' },
                { value: 'AI', label: 'First' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--cream-card)] px-6 py-5 text-center"
                >
                  <p className="text-display text-3xl text-[var(--ink)]">{m.value}</p>
                  <p className="mt-1 text-sm landing-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
