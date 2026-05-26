import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@/components/common/container'
import { testimonialsSection } from '@/data/home-page'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import 'swiper/css'
import 'swiper/css/pagination'

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" bg="white" cinematic="none">
      <Container className="py-24 sm:py-32">
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
              <motion.article
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="hp-glass-panel m-2 flex h-full min-h-[280px] flex-col p-8 sm:p-10"
              >
                <Quote className="size-10 text-[var(--hp-navy)] opacity-25" strokeWidth={1.5} aria-hidden />
                <p className="mt-6 flex-1 text-lg leading-relaxed text-[var(--hp-ink)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-[var(--hp-border)] pt-6">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[var(--hp-navy)] text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-[var(--hp-ink)]">{item.name}</p>
                    <p className="text-sm text-[var(--hp-muted)]">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SectionShell>
  )
}
