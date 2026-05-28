import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/about/section-header'

type ContentBlockProps = {
  title?: string
  eyebrow?: string
  content: string
  categories?: readonly string[]
  theme?: 'default' | 'home'
}

export function ContentBlock({
  title,
  eyebrow,
  content,
  categories,
  theme = 'default',
}: ContentBlockProps) {
  const paragraphs = content.split('\n\n').filter(Boolean)
  const isHomeTheme = theme === 'home'

  return (
    <section className={isHomeTheme ? 'py-16 sm:py-20' : 'landing-section-white py-16 sm:py-20'}>
      <Container>
        {title && <SectionHeader eyebrow={eyebrow} title={title} />}
        <div
          className={
            isHomeTheme
              ? 'mx-auto max-w-4xl space-y-5 rounded-3xl border border-[var(--hp-border)] bg-white p-6 shadow-[var(--hp-shadow-sm)] sm:p-8'
              : 'mx-auto max-w-3xl space-y-5'
          }
        >
          {paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className={isHomeTheme ? 'hp-body' : 'text-base leading-relaxed landing-muted sm:text-lg'}>
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
        {categories && categories.length > 0 && (
          <ScrollReveal delay={0.15} className="mt-12">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className={
                    isHomeTheme
                      ? 'hp-glow-card flex items-center gap-3 rounded-2xl border-[var(--hp-border)] bg-white px-5 py-4'
                      : 'flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--cream)] px-5 py-4'
                  }
                >
                  <span
                    className={
                      isHomeTheme
                        ? 'size-2 shrink-0 rounded-full bg-[var(--hp-navy)]'
                        : 'size-2 shrink-0 rounded-full bg-[var(--accent)]'
                    }
                  />
                  <span
                    className={
                      isHomeTheme
                        ? 'text-sm font-semibold text-[var(--hp-ink)] sm:text-base'
                        : 'text-sm font-semibold sm:text-base'
                    }
                  >
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        )}
      </Container>
    </section>
  )
}
