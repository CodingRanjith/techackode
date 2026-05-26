import { Quote } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@/components/common/container'
import { testimonialsSection } from '@/data/home-page'
import { GlowCard3D } from '@/components/home/motion'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import 'swiper/css'
import 'swiper/css/pagination'

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" bg="mesh" cinematic="section">
      <Container className="hp-section-y">
        <PremiumHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          subtitle={testimonialsSection.subtitle}
          align="center"
          className="mx-auto text-center"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          breakpoints={{
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonialsSection.items.map((item, index) => (
            <SwiperSlide key={item.name}>
              <GlowCard3D
                index={index}
                animateIn={false}
                innerClassName="m-2 flex min-h-[280px] flex-col p-8 sm:p-10"
                className="h-full"
              >
                <Quote className="size-10 text-[var(--hp-navy)] opacity-25" strokeWidth={1.5} aria-hidden />
                <p className="mt-6 flex-1 text-base leading-[1.75] text-[var(--hp-ink)] sm:text-lg">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-[var(--hp-border)] pt-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--hp-navy)] text-sm font-bold text-white shadow-md">
                    {item.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold leading-snug text-[var(--hp-ink)]">{item.name}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[var(--hp-muted)]">{item.role}</p>
                  </div>
                </div>
              </GlowCard3D>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SectionShell>
  )
}
