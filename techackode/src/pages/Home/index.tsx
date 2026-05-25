import {
  HeroSection,
  CompanyIntro,
  DivisionsOverview,
  ServicesShowcase,
  ProductsSection,
  WhyChooseUs,
  InnovationSection,
  ShowcasePreview,
  CareersCta,
  ContactCta,
} from '@/components/home'
import { MainLayout } from '@/layouts/main-layout'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <CompanyIntro />
      <DivisionsOverview />
      <ServicesShowcase />
      <ProductsSection />
      <WhyChooseUs />
      <InnovationSection />
      <ShowcasePreview />
      <CareersCta />
      <ContactCta />
    </MainLayout>
  )
}
