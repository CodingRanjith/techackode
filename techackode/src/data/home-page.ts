import {
  Bot,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export const platformSplitSection = {
  eyebrow: 'End-to-end partner',
  title: 'Software, security, learning, and automation in one place',
  description:
    'Techackode Pvt. Ltd. helps students, professionals, startups, and enterprises grow through intelligent software, modern learning ecosystems, and scalable digital systems — from discovery to deployment.',
  cta: { label: 'Contact our team', href: '/contact' },
  pillars: [
    {
      icon: 'code' as const,
      label: 'IT Solutions',
      detail: 'Web, mobile, ERP, CRM, LMS, and custom platforms',
      status: 'Active',
    },
    {
      icon: 'shield' as const,
      label: 'CyberTech',
      detail: 'Assessments, audits, and security hardening',
      status: 'In review',
    },
    {
      icon: 'graduation' as const,
      label: 'Edutech',
      detail: 'Training, certifications, and LMS programs',
      status: 'Live',
    },
    {
      icon: 'brain' as const,
      label: 'AI & automation',
      detail: 'Workflows, integrations, and intelligent systems',
      status: 'Scaling',
    },
  ],
  metrics: [
    { value: '6+', label: 'Divisions' },
    { value: '10+', label: 'Services' },
    { value: '5+', label: 'Products' },
  ],
}

export const featuresSection = {
  eyebrow: 'Core strengths',
  title: 'Technology services built for modern businesses',
  subtitle:
    'End-to-end capabilities across engineering, security, automation, and growth — aligned with Techackode’s divisions and delivery model.',
  items: [
    {
      icon: 'sparkles' as const,
      title: 'AI & Automation',
      description:
        'Intelligent workflows, predictive systems, and practical AI integration for business operations.',
    },
    {
      icon: 'shield' as const,
      title: 'Cybersecurity',
      description:
        'Security assessments, ethical hacking, audits, and resilient digital protection strategies.',
    },
    {
      icon: 'layers' as const,
      title: 'Scalable Platforms',
      description:
        'ERP, CRM, LMS, SaaS products, and custom platforms engineered for long-term growth.',
    },
    {
      icon: 'rocket' as const,
      title: 'Product Innovation',
      description:
        'From concept to launch — product-driven teams building platforms that create real impact.',
    },
  ],
}

export const workflowSection = {
  eyebrow: 'How we work',
  title: 'A clear path from idea to impact',
  subtitle:
    'Structured delivery designed for startups, enterprises, and learning ecosystems.',
  steps: [
    {
      step: '01',
      title: 'Discover',
      description:
        'Understand goals, users, and technical landscape through collaborative discovery sessions.',
    },
    {
      step: '02',
      title: 'Design',
      description:
        'Craft architecture, UX flows, and solution blueprints aligned with business outcomes.',
    },
    {
      step: '03',
      title: 'Build',
      description:
        'Develop, integrate, and automate with agile cycles and transparent progress tracking.',
    },
    {
      step: '04',
      title: 'Scale',
      description:
        'Deploy, optimize, secure, and evolve platforms with continuous improvement support.',
    },
  ],
}

export const testimonialsSection = {
  eyebrow: 'Client voices',
  title: 'Trusted by teams building the future',
  subtitle: 'Partners across education, enterprise, and product-led businesses.',
  items: [
    {
      quote:
        'Techackode delivered a scalable platform with clear architecture and smooth execution across every milestone.',
      name: 'Priya Sharma',
      role: 'Operations Lead, Edutech Partner',
    },
    {
      quote:
        'Their automation and security expertise helped us modernize workflows while keeping systems reliable and secure.',
      name: 'Arjun Mehta',
      role: 'CTO, Growth-stage Startup',
    },
    {
      quote:
        'From product strategy to implementation, the team maintained premium quality and strong communication throughout.',
      name: 'Neha Krishnan',
      role: 'Director, Digital Services',
    },
    {
      quote:
        'A future-focused partner for learning platforms, enterprise software, and long-term digital transformation.',
      name: 'Rahul Venkat',
      role: 'Program Manager, Enterprise Client',
    },
  ],
}

export const faqSection = {
  eyebrow: 'FAQ',
  title: 'Questions teams ask before partnering',
  subtitle: 'Quick answers about how Techackode works with you.',
  items: [
    {
      question: 'What industries does Techackode serve?',
      answer:
        'We work with education, startups, SaaS companies, and enterprises across software, AI, cybersecurity, and digital operations.',
    },
    {
      question: 'Do you offer end-to-end product development?',
      answer:
        'Yes. We support discovery, design, engineering, integrations, deployment, and ongoing optimization for web, mobile, and platform products.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer:
        'Our teams build APIs, automation pipelines, and custom integrations to connect with ERP, CRM, LMS, and third-party tools.',
    },
    {
      question: 'How do engagements typically start?',
      answer:
        'We begin with a consultation to define scope, timelines, and success metrics, then propose a phased delivery plan.',
    },
    {
      question: 'Do you provide training and edutech solutions?',
      answer:
        'Yes. Through our edutech division we deliver LMS platforms, certifications, workshops, and industry-oriented learning programs.',
    },
  ],
}

export const homeCtaSection = {
  eyebrow: 'Get started',
  title: 'Ready to build your next digital advantage?',
  subtitle:
    'Partner with Techackode for software, AI, security, and platform solutions tailored to your goals.',
  ctas: [
    { label: 'Start a project', href: '/contact' },
    { label: 'Explore showcase', href: '/showcase' },
  ],
}

export const featureIconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  shield: Shield,
  layers: Layers,
  rocket: Rocket,
  bot: Bot,
  workflow: Workflow,
}
