import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Container } from '@/components/common/container'
import { faqSection } from '@/data/home-page'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionShell id="faq" bg="mesh" cinematic="section">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <PremiumHeading
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            subtitle={faqSection.subtitle}
            className="mb-0 lg:sticky lg:top-28 lg:self-start"
          />

          <div className="space-y-3">
            {faqSection.items.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={item.question}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="hp-faq-item"
                  data-open={isOpen}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[var(--hp-ink)]">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-[var(--hp-navy)] transition-transform duration-500',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--hp-muted)] sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </SectionShell>
  )
}
