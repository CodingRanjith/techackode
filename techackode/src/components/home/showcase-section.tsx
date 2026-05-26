import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '@/components/common/container'
import { products, showcase } from '@/data/home'
import { PremiumHeading, SectionShell } from '@/components/home/ui'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

export function ShowcaseSection() {
  return (
    <SectionShell id="showcase" bg="mesh" cinematic="section">
      <Container className="py-24 sm:py-32">
        <PremiumHeading
          eyebrow="Showcase"
          title={showcase.heading}
          subtitle={showcase.content}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[var(--hp-navy)]/5 blur-3xl"
            aria-hidden
          />
          <Swiper
            modules={[Pagination, Autoplay, EffectCreative]}
            effect="creative"
            creativeEffect={{
              prev: { translate: ['-120%', 0, -400], rotate: [0, 0, -8] },
              next: { translate: ['120%', 0, -400], rotate: [0, 0, 8] },
            }}
            grabCursor
            centeredSlides
            slidesPerView={1.15}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 1.4 },
              1100: { slidesPerView: 2.1 },
            }}
            className="!pb-14"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.article
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="hp-glass-panel overflow-hidden p-8 sm:p-10"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-[var(--hp-accent-soft)] px-3 py-1 text-[10px] font-bold tracking-wider text-[var(--hp-navy)] uppercase">
                      Platform {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="size-3 rounded-full bg-[var(--hp-navy)]" />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-[var(--hp-ink)] sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--hp-muted)] sm:text-base">
                    {product.description}
                  </p>
                  <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-[var(--hp-bg-mesh)]">
                    <motion.div
                      className="h-full hp-gradient-bg"
                      initial={{ width: '30%' }}
                      whileInView={{ width: `${55 + index * 8}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-12 text-center">
          <Link to={showcase.cta.href} className="hp-btn-primary">
            {showcase.cta.label}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Container>
    </SectionShell>
  )
}
