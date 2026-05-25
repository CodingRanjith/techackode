import { ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Container } from '@/components/common/container'
import { SectionHeader } from '@/components/contact/section-header'

type ContactMapSectionProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  embedUrl: string
  directionsUrl: string
}

export function ContactMapSection({
  eyebrow,
  title,
  subtitle,
  embedUrl,
  directionsUrl,
}: ContactMapSectionProps) {
  return (
    <section id="map" className="landing-section-white py-16 sm:py-20">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        <ScrollReveal>
          <div className="landing-card overflow-hidden">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <iframe
                title="Techackode office location"
                src={embedUrl}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-soft)] px-6 py-4 sm:px-8">
              <p className="text-sm landing-muted">Techackode Pvt. Ltd., India</p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)] transition hover:opacity-80"
              >
                Open in Google Maps
                <ExternalLink className="size-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
