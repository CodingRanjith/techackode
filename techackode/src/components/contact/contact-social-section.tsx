import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/contact/section-header'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from '@/components/layout/footer-social-icons'

type SocialLink = {
  label: string
  href: string
  icon: 'facebook' | 'x' | 'instagram' | 'linkedin'
}

const socialIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const

type ContactSocialSectionProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  links: SocialLink[]
}

export function ContactSocialSection({
  eyebrow,
  title,
  subtitle,
  links,
}: ContactSocialSectionProps) {
  return (
    <section
      id="social"
      className="landing-section-alt border-t border-[var(--border-soft)] py-16 sm:py-20"
    >
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        <ScrollReveal>
          <ul className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 sm:gap-6">
            {links.map((item) => {
              const Icon = socialIcons[item.icon]
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex flex-col items-center gap-3"
                  >
                    <span className="flex size-16 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--cream-card)] text-[var(--ink)] transition group-hover:border-[var(--accent-hover)] group-hover:bg-[var(--accent-soft)] group-hover:-translate-y-1 sm:size-[4.5rem]">
                      <Icon className="size-6 sm:size-7" />
                    </span>
                    <span className="text-xs font-bold tracking-wider text-[var(--ink-muted)] uppercase transition group-hover:text-[var(--ink)]">
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ScrollReveal>
      </Container>
    </section>
  )
}
