import {
  HeroSection,
  FeaturesSection,
  PlatformSplitSection,
  DivisionsStrip,
  ServicesSection,
  WorkflowSection,
  ShowcaseSection,
  TestimonialsSection,
  FaqSection,
  HomeCtaSection,
} from '@/components/home'
import { MainLayout } from '@/layouts/main-layout'

export default function HomePage() {
  return (
    <MainLayout variant="home">
      <HeroSection />
      <FeaturesSection />
      <PlatformSplitSection />
      <DivisionsStrip />
      <ServicesSection />
      <WorkflowSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <FaqSection />
      <HomeCtaSection />
    </MainLayout>
  )
}
