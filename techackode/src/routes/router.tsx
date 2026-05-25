import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import FounderStoryPage from '@/pages/About/founder-story'
import GrowthJourneyPage from '@/pages/About/growth-journey'
import TeamPage from '@/pages/About/team'
import ClientsPage from '@/pages/About/clients'
import BranchesPage from '@/pages/About/branches'
import InsightsPage from '@/pages/About/insights'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/about/founder-story', element: <FounderStoryPage /> },
  { path: '/about/growth-journey', element: <GrowthJourneyPage /> },
  { path: '/about/team', element: <TeamPage /> },
  { path: '/about/clients', element: <ClientsPage /> },
  { path: '/about/branches', element: <BranchesPage /> },
  { path: '/about/insights', element: <InsightsPage /> },
])
