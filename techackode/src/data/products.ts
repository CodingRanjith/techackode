export const productsPage = {
  hero: {
    badge: 'Products',
    heading: 'Our Products & Platforms',
    subheading:
      'Innovative platforms designed to improve productivity, learning, automation, communication, and digital operations.',
  },
  intro:
    'From enterprise workforce management to AI-powered learning and translation, Techackode builds product-driven platforms that solve real business and education challenges.',
  catalog: {
    eyebrow: 'Platforms',
    title: 'Explore Our Products',
    subtitle:
      'Each platform is built for scale, automation, and long-term digital value across operations, commerce, communication, and education.',
  },
  cta: {
    heading: 'Interested in a product or custom build?',
    content:
      'Talk to our team about licensing, integrations, or a tailored solution built on Techackode technology.',
    buttons: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'View Showcase', href: '/showcase', variant: 'ghost' as const },
    ],
  },
} as const

export const productCards = [
  {
    slug: 'worklogz',
    name: 'Worklogz',
    description:
      'All-in-one ERP and workforce management system for attendance, HR, tasks, CRM, payroll, and business operations.',
    icon: 'dashboard' as const,
    href: '/products/worklogz',
  },
  {
    slug: 'ecomate',
    name: 'Ecomate',
    description:
      'Smart e-commerce and digital business management platform focused on automation and online business operations.',
    icon: 'store' as const,
    href: '/products/ecomate',
  },
  {
    slug: 'unitranslate',
    name: 'UniTranslate',
    description:
      'AI-powered multilingual translation platform enabling seamless communication across languages.',
    icon: 'languages' as const,
    href: '/products/unitranslate',
  },
  {
    slug: 'speakflow',
    name: 'SpeakFlow',
    description:
      'Interactive AI-assisted spoken English learning platform designed for modern communication improvement.',
    icon: 'mic' as const,
    href: '/products/speakflow',
  },
  {
    slug: 'smart-joshiyam',
    name: 'Smart Joshiyam',
    description:
      'AI-integrated astrology and intelligent prediction platform combining traditional concepts with modern technology.',
    icon: 'sparkles' as const,
    href: '/products/smart-joshiyam',
  },
  {
    slug: 'lms',
    name: 'LMS',
    description:
      'Centralized learning management platform for online education, assessments, certifications, and student progress tracking.',
    icon: 'graduation' as const,
    href: '/products/lms',
  },
] as const
