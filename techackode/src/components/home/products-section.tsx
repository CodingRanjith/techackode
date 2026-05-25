import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { products, productsSection } from '@/data/home'
import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'

export function ProductsSection() {
  return (
    <section id="products" className="landing-section-white relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Platforms"
          title={productsSection.heading}
          subtitle={productsSection.subheading}
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="landing-card group flex flex-col p-6 sm:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-2">
                <h3 className="text-display-sm text-lg sm:text-xl">{product.name}</h3>
                <span className="landing-card-arrow shrink-0">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed landing-muted">{product.description}</p>
              <span className="mt-5 inline-block w-fit rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[var(--ink)] uppercase">
                Platform
              </span>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
