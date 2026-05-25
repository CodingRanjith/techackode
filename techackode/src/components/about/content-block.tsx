import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/about/section-header'

type ContentBlockProps = {
  title?: string
  eyebrow?: string
  content: string
  categories?: readonly string[]
}

export function ContentBlock({ title, eyebrow, content, categories }: ContentBlockProps) {
  const paragraphs = content.split('\n\n').filter(Boolean)

  return (
    <section className="landing-section-white py-16 sm:py-20">
      <Container>
        {title && <SectionHeader eyebrow={eyebrow} title={title} />}
        <div className="mx-auto max-w-3xl space-y-5">
          {paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed landing-muted sm:text-lg">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
        {categories && categories.length > 0 && (
          <ScrollReveal delay={0.15} className="mt-12">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--cream)] px-5 py-4"
                >
                  <span className="size-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="text-sm font-semibold sm:text-base">{category}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        )}
      </Container>
    </section>
  )
}
