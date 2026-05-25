import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/contact/section-header'
import type { ContactFormField } from '@/data/contact'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--cream-card)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-soft)] focus:border-[var(--accent-hover)] focus:ring-2 focus:ring-[var(--accent-soft)]'

type InquiryFormSectionProps = {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  submitLabel: string
  fields: ContactFormField[]
  variant?: 'default' | 'alt'
}

export function InquiryFormSection({
  id,
  eyebrow,
  title,
  subtitle,
  submitLabel,
  fields,
  variant = 'default',
}: InquiryFormSectionProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-20',
        variant === 'alt' ? 'landing-section-alt border-y border-[var(--border-soft)]' : 'landing-section-white',
      )}
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
          <ScrollReveal>
            {submitted ? (
              <div
                className="landing-card flex flex-col items-center gap-4 p-10 text-center sm:p-12"
                role="status"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--ink)]">
                  <CheckCircle2 className="size-7" strokeWidth={1.75} />
                </span>
                <h3 className="text-display-sm text-xl sm:text-2xl">Thank you for reaching out</h3>
                <p className="max-w-md text-sm leading-relaxed landing-muted sm:text-base">
                  Your message has been received. Our team will review it and respond within one to
                  two business days.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="landing-card space-y-5 p-7 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={field.type === 'textarea' ? 'sm:col-span-2' : undefined}
                    >
                      <label
                        htmlFor={`${id}-${field.name}`}
                        className="mb-2 block text-xs font-bold tracking-wider text-[var(--ink-soft)] uppercase"
                      >
                        {field.label}
                        {field.required && <span className="text-[var(--ink)]"> *</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={`${id}-${field.name}`}
                          name={field.name}
                          required={field.required}
                          rows={5}
                          placeholder={'placeholder' in field ? field.placeholder : undefined}
                          className={cn(fieldClass, 'resize-y min-h-[8rem]')}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={`${id}-${field.name}`}
                          name={field.name}
                          required={field.required}
                          defaultValue=""
                          className={cn(fieldClass, 'cursor-pointer')}
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={`${id}-${field.name}`}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={'placeholder' in field ? field.placeholder : undefined}
                          className={fieldClass}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <button type="submit" className="landing-btn-primary w-full sm:w-auto">
                    {submitLabel}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
