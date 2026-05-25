import { ScrollReveal } from '@/components/animations/scroll-reveal'

export type TimelineItem = {
  year: string
  title: string
  description: string
}

type TimelineProps = {
  items: readonly TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-0">
      {items.map((item, index) => (
        <ScrollReveal key={`${item.title}-${index}`} delay={index * 0.06}>
          <li className="relative grid gap-4 pb-12 pl-8 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:pl-0 sm:pb-14">
            {index < items.length - 1 && (
              <span
                aria-hidden
                className="absolute top-3 left-[11px] h-[calc(100%-0.5rem)] w-px bg-[var(--border-soft)] sm:left-[2.35rem]"
              />
            )}
            <span
              aria-hidden
              className="absolute top-2 left-0 flex size-6 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--cream-card)] sm:relative sm:top-1 sm:left-auto sm:mx-auto sm:size-7"
            >
              <span className="size-2 rounded-full bg-[var(--accent)]" />
            </span>
            <div className="sm:text-right">
              {item.year ? (
                <span className="text-display-sm text-2xl text-[var(--ink)] sm:text-3xl">
                  {item.year}
                </span>
              ) : (
                <span className="inline-block size-2 rounded-full bg-[var(--accent)] sm:mt-3" />
              )}
            </div>
            <div className="landing-card p-6 sm:p-8">
              <h3 className="text-display-sm text-lg sm:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed landing-muted sm:text-base">
                {item.description}
              </p>
            </div>
          </li>
        </ScrollReveal>
      ))}
    </ol>
  )
}
