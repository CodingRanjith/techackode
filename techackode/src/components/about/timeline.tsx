import { ScrollReveal } from '@/components/animations/scroll-reveal'

export type TimelineItem = {
  year: string
  title: string
  description: string
}

type TimelineProps = {
  items: readonly TimelineItem[]
  theme?: 'default' | 'home'
}

export function Timeline({ items, theme = 'default' }: TimelineProps) {
  const isHomeTheme = theme === 'home'

  return (
    <ol className={isHomeTheme ? 'relative mx-auto w-full max-w-5xl space-y-0' : 'relative space-y-0'}>
      {items.map((item, index) => (
        <ScrollReveal key={`${item.title}-${index}`} delay={index * 0.06}>
          <li
            className={
              isHomeTheme
                ? 'relative grid w-full min-w-0 gap-4 pb-12 pl-8 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-8 md:pl-0 md:pb-14'
                : 'relative grid gap-4 pb-12 pl-8 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:pl-0 sm:pb-14'
            }
          >
            {index < items.length - 1 && (
              <span
                aria-hidden
                className={
                  isHomeTheme
                    ? 'absolute top-3 left-[11px] h-[calc(100%-0.5rem)] w-px bg-[var(--hp-border)] md:left-[4.125rem]'
                    : 'absolute top-3 left-[11px] h-[calc(100%-0.5rem)] w-px bg-[var(--border-soft)] sm:left-[2.35rem]'
                }
              />
            )}
            <span
              aria-hidden
              className={
                isHomeTheme
                  ? 'absolute top-2 left-0 flex size-6 items-center justify-center rounded-full border-2 border-[var(--hp-navy)] bg-white md:top-1 md:left-[3.25rem] md:size-7'
                  : 'absolute top-2 left-0 flex size-6 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--cream-card)] sm:relative sm:top-1 sm:left-auto sm:mx-auto sm:size-7'
              }
            >
              <span
                className={
                  isHomeTheme ? 'size-2 rounded-full bg-[var(--hp-navy)]' : 'size-2 rounded-full bg-[var(--accent)]'
                }
              />
            </span>
            <div className="sm:text-right">
              {item.year ? (
                <span className={isHomeTheme ? 'hp-h-card text-2xl sm:text-3xl' : 'text-display-sm text-2xl text-[var(--ink)] sm:text-3xl'}>
                  {item.year}
                </span>
              ) : (
                <span
                  className={
                    isHomeTheme
                      ? 'inline-block size-2 rounded-full bg-[var(--hp-navy)] sm:mt-3'
                      : 'inline-block size-2 rounded-full bg-[var(--accent)] sm:mt-3'
                  }
                />
              )}
            </div>
            <div
              className={
                isHomeTheme
                  ? 'hp-glow-card w-full min-w-0 border-[var(--hp-border)] bg-white p-6 sm:p-8'
                  : 'landing-card p-6 sm:p-8'
              }
            >
              <h3 className={isHomeTheme ? 'hp-h-card text-lg sm:text-xl' : 'text-display-sm text-lg sm:text-xl'}>
                {item.title}
              </h3>
              <p
                className={
                  isHomeTheme
                    ? 'hp-body-sm mt-3 break-words'
                    : 'mt-3 text-sm leading-relaxed landing-muted sm:text-base'
                }
              >
                {item.description}
              </p>
            </div>
          </li>
        </ScrollReveal>
      ))}
    </ol>
  )
}
