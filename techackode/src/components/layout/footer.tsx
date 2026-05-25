import { Mail, MapPin, Phone } from 'lucide-react'
import { footerContent } from '@/data/home'
import { Container } from '@/components/common/container'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from '@/components/layout/footer-social-icons'

const socialIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const

export function Footer() {
  const year = new Date().getFullYear()
  const { brandName, tagline, contact, columns, legal, social } = footerContent

  return (
    <footer className="footer-shell">
      <Container>
        <div className="footer-card">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* Brand & contact */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-4">
              <a href="#hero" className="inline-flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-[var(--footer-heading)] text-base font-bold text-white">
                  T
                </span>
                <span className="footer-brand-name">{brandName}</span>
              </a>

              <p className="footer-desc">{tagline}</p>

              <ul className="space-y-4">
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer-contact-item">
                    <span className="footer-contact-icon">
                      <Phone className="size-4" strokeWidth={1.75} />
                    </span>
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="footer-contact-item">
                    <span className="footer-contact-icon">
                      <Mail className="size-4" strokeWidth={1.75} />
                    </span>
                    <span>{contact.email}</span>
                  </a>
                </li>
                <li>
                  <span className="footer-contact-item">
                    <span className="footer-contact-icon">
                      <MapPin className="size-4" strokeWidth={1.75} />
                    </span>
                    <span>{contact.address}</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <p className="footer-col-title">{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-col-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="footer-divider" />

          <div className="footer-sub">
            <p className="shrink-0">
              © {year} {brandName} Pvt. Ltd. — All rights reserved.
            </p>

            <nav className="footer-legal" aria-label="Legal">
              {legal.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="footer-social" aria-label="Social media">
              {social.map((item) => {
                const Icon = socialIcons[item.icon]
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="footer-social-btn"
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
