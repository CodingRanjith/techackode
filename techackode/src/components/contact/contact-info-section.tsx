import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/contact/section-header'

type ContactInfoItem = {
  id: string
  label: string
  value: string
  href?: string
}

type Department = {
  title: string
  email: string
  description: string
}

type ContactInfoSectionProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  items: ContactInfoItem[]
  departments: Department[]
}

const iconMap = {
  phone: Phone,
  email: Mail,
  address: MapPin,
  hours: Clock,
} as const

export function ContactInfoSection({
  eyebrow,
  title,
  subtitle,
  items,
  departments,
}: ContactInfoSectionProps) {
  return (
    <section id="contact-info" className="landing-section-white py-16 sm:py-20">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {items.map((item, index) => {
              const Icon = iconMap[item.id as keyof typeof iconMap] ?? Mail
              const content = (
                <>
                  <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--ink)]">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-xs font-bold tracking-wider text-[var(--ink-soft)] uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--ink)]">{item.value}</p>
                </>
              )

              return (
                <ScrollReveal key={item.id} delay={index * 0.05}>
                  <li className="landing-card h-full p-6 sm:p-7">
                    {item.href ? (
                      <a href={item.href} className="block transition hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                </ScrollReveal>
              )
            })}
          </ul>

          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="landing-card p-7 sm:p-8">
                <h3 className="text-display-sm text-xl sm:text-2xl">Department Contacts</h3>
                <p className="mt-2 text-sm leading-relaxed landing-muted sm:text-base">
                  Reach the team that best matches your inquiry for a faster response.
                </p>
                <ul className="mt-8 space-y-6">
                  {departments.map((dept) => (
                    <li
                      key={dept.title}
                      className="border-t border-[var(--border-soft)] pt-6 first:border-0 first:pt-0"
                    >
                      <p className="font-bold text-[var(--ink)]">{dept.title}</p>
                      <p className="mt-1 text-sm leading-relaxed landing-muted">{dept.description}</p>
                      <a
                        href={`mailto:${dept.email}`}
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
                      >
                        <Mail className="size-4" strokeWidth={1.75} />
                        {dept.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
