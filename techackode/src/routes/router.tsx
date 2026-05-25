import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import FounderStoryPage from '@/pages/About/founder-story'
import GrowthJourneyPage from '@/pages/About/growth-journey'
import TeamPage from '@/pages/About/team'
import ClientsPage from '@/pages/About/clients'
import BranchesPage from '@/pages/About/branches'
import InsightsPage from '@/pages/About/insights'
import ServicesPage from '@/pages/Services'
import DivisionsPage from '@/pages/Divisions'
import EdutechPage from '@/pages/Divisions/edutech'
import ItSolutionsPage from '@/pages/Divisions/it-solutions'
import CybertechPage from '@/pages/Divisions/cybertech'
import AiDigitalTwinsPage from '@/pages/Divisions/ai-digital-twins'
import EcommerceDigitalPlatformsPage from '@/pages/Divisions/ecommerce-digital-platforms'
import CareersPage from '@/pages/Careers'
import ShowcasePage from '@/pages/Showcase'
import ContactPage from '@/pages/Contact'
import ProductsPage from '@/pages/Products'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/about/founder-story', element: <FounderStoryPage /> },
  { path: '/about/growth-journey', element: <GrowthJourneyPage /> },
  { path: '/about/team', element: <TeamPage /> },
  { path: '/about/clients', element: <ClientsPage /> },
  { path: '/about/branches', element: <BranchesPage /> },
  { path: '/about/insights', element: <InsightsPage /> },
  { path: '/divisions', element: <DivisionsPage /> },
  { path: '/divisions/edutech', element: <EdutechPage /> },
  { path: '/divisions/it-solutions', element: <ItSolutionsPage /> },
  { path: '/divisions/cybertech', element: <CybertechPage /> },
  { path: '/divisions/ai-digital-twins', element: <AiDigitalTwinsPage /> },
  {
    path: '/divisions/ecommerce-digital-platforms',
    element: <EcommerceDigitalPlatformsPage />,
  },
  { path: '/careers', element: <CareersPage /> },
  { path: '/showcase', element: <ShowcasePage /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/contact', element: <ContactPage /> },
])
