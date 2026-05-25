export const showcaseNavItems = [
  { label: 'Overview', href: '/showcase' },
  { label: 'Enterprise', href: '/showcase#enterprise-solutions' },
  { label: 'AI', href: '/showcase#ai-projects' },
  { label: 'ERP', href: '/showcase#erp-systems' },
  { label: 'Automation', href: '/showcase#automation-platforms' },
  { label: 'Education', href: '/showcase#educational-platforms' },
  { label: 'Mobile', href: '/showcase#mobile-applications' },
  { label: 'Products', href: '/showcase#internal-products' },
  { label: 'Clients', href: '/showcase#client-systems' },
  { label: 'Innovation', href: '/showcase#digital-innovations' },
] as const

export const showcasePage = {
  hero: {
    badge: 'Portfolio',
    heading: 'Our Showcase',
    subheading:
      'A curated view of enterprise platforms, AI systems, automation tools, learning ecosystems, mobile apps, and client deliverables built across the Techackode ecosystem.',
  },
  intro:
    'From internal SaaS products to bespoke client systems, explore how we design, build, and scale technology that solves real business and learning challenges.',
  categories: [
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      description:
        'Large-scale platforms and digital infrastructure for organizations that need reliability, governance, and long-term scalability.',
      icon: 'building' as const,
      items: [
        {
          title: 'Unified Operations Portal',
          description:
            'Centralized dashboards connecting HR, finance, inventory, and reporting for multi-branch enterprises.',
        },
        {
          title: 'Multi-Tenant SaaS Architecture',
          description:
            'Secure, role-based SaaS platforms designed for startups and enterprises with subscription-ready foundations.',
        },
        {
          title: 'API & Integration Layer',
          description:
            'Middleware and REST APIs that connect legacy systems, third-party tools, and modern cloud services.',
        },
        {
          title: 'Custom Admin & BI Dashboards',
          description:
            'Executive and operational dashboards with real-time KPIs, alerts, and exportable analytics.',
        },
      ],
    },
    {
      id: 'ai-projects',
      title: 'AI Projects',
      description:
        'Machine learning, conversational AI, and intelligent automation that turn data into actionable outcomes.',
      icon: 'brain' as const,
      items: [
        {
          title: 'AI Business Intelligence',
          description:
            'Predictive dashboards and insight engines for forecasting, segmentation, and decision support.',
        },
        {
          title: 'Conversational Assistants',
          description:
            'Customer and internal chatbots with context-aware responses and workflow handoffs.',
        },
        {
          title: 'Multilingual AI Translation',
          description:
            'UniTranslate-style platforms for real-time, context-aware translation across languages.',
        },
        {
          title: 'Domain-Specific AI Models',
          description:
            'Tailored models for vertical use cases including education, astrology, and operations.',
        },
      ],
    },
    {
      id: 'erp-systems',
      title: 'ERP Systems',
      description:
        'End-to-end resource planning for workforce, finance, CRM, and day-to-day business operations.',
      icon: 'database' as const,
      items: [
        {
          title: 'Worklogz ERP',
          description:
            'All-in-one workforce, attendance, tasks, CRM, payroll, and operations management platform.',
        },
        {
          title: 'Inventory & Supply Chain',
          description:
            'Stock tracking, procurement workflows, and vendor management integrated with finance.',
        },
        {
          title: 'HR & Payroll Modules',
          description:
            'Employee lifecycle, leave, payroll processing, and compliance-ready reporting.',
        },
        {
          title: 'CRM & Sales Pipeline',
          description:
            'Lead capture, pipeline stages, communications, and performance analytics for sales teams.',
        },
      ],
    },
    {
      id: 'automation-platforms',
      title: 'Automation Platforms',
      description:
        'Workflow engines and integration layers that eliminate manual steps and connect your digital stack.',
      icon: 'workflow' as const,
      items: [
        {
          title: 'N8N Workflow Automation',
          description:
            'Custom N8N flows for notifications, data sync, approvals, and cross-app orchestration.',
        },
        {
          title: 'Business Process Automation',
          description:
            'Automated approvals, document routing, and operational task chains across departments.',
        },
        {
          title: 'E-Commerce Automation',
          description:
            'Order, inventory, and marketing automations for online stores and digital sellers.',
        },
        {
          title: 'IoT & Event-Driven Pipelines',
          description:
            'Real-time triggers and data pipelines for monitoring, alerts, and downstream actions.',
        },
      ],
    },
    {
      id: 'educational-platforms',
      title: 'Educational Platforms',
      description:
        'Learning ecosystems for institutions, trainers, and learners with courses, assessments, and progress tracking.',
      icon: 'graduation' as const,
      items: [
        {
          title: 'LMS Platform',
          description:
            'Course delivery, quizzes, certificates, and learner analytics for online and hybrid programs.',
        },
        {
          title: 'SpeakFlow English Learning',
          description:
            'AI-assisted spoken English practice with feedback, exercises, and confidence-building paths.',
        },
        {
          title: 'Assessment & Certification',
          description:
            'Timed tests, proctoring hooks, badges, and verifiable completion records.',
        },
        {
          title: 'Institution Admin Portals',
          description:
            'Batch management, faculty tools, content libraries, and enrollment workflows for edutech clients.',
        },
      ],
    },
    {
      id: 'mobile-applications',
      title: 'Mobile Applications',
      description:
        'Native and cross-platform apps with polished UX, offline-ready flows, and secure backend sync.',
      icon: 'smartphone' as const,
      items: [
        {
          title: 'Workforce & Field Apps',
          description:
            'Mobile attendance, task updates, and on-the-go approvals tied to ERP backends.',
        },
        {
          title: 'E-Commerce Consumer Apps',
          description:
            'Shopping, cart, payments, and push notifications for retail and marketplace brands.',
        },
        {
          title: 'Learning & Practice Apps',
          description:
            'Lesson playback, quizzes, and AI coaching experiences optimized for mobile learners.',
        },
        {
          title: 'Service Booking Apps',
          description:
            'Easy Home Solutions-style apps for scheduling, tracking, and rating home services.',
        },
      ],
    },
    {
      id: 'internal-products',
      title: 'Internal Products',
      description:
        'SaaS and platforms built and operated within the Techackode product ecosystem.',
      icon: 'package' as const,
      items: [
        {
          title: 'Worklogz',
          description: 'ERP and workforce management for HR, operations, CRM, and payroll.',
        },
        {
          title: 'Ecomate',
          description: 'Smart e-commerce and digital business management for online sellers.',
        },
        {
          title: 'UniTranslate',
          description: 'AI-powered multilingual translation for teams and global users.',
        },
        {
          title: 'Smart Joshiyam',
          description: 'AI-integrated astrology and prediction experiences.',
        },
        {
          title: 'SpeakFlow & LMS',
          description: 'Spoken English learning and full learning management in one ecosystem.',
        },
        {
          title: 'Easy Home Solutions',
          description: 'Digital platform connecting users with trusted home service providers.',
        },
      ],
    },
    {
      id: 'client-systems',
      title: 'Client Systems',
      description:
        'Bespoke software, portals, and integrations delivered for startups, enterprises, and institutions.',
      icon: 'users' as const,
      items: [
        {
          title: 'Custom CRM & Portals',
          description:
            'Client-specific sales, support, and partner portals aligned with their workflows.',
        },
        {
          title: 'Institutional Websites & CMS',
          description:
            'Brand-forward sites with flexible CMS, media libraries, and SEO foundations.',
        },
        {
          title: 'Cybersecurity Engagements',
          description:
            'Assessments, hardening, and secure SDLC support for client applications and networks.',
        },
        {
          title: 'Digital Marketing & Growth',
          description:
            'Campaign landing pages, analytics integrations, and conversion-focused web experiences.',
        },
      ],
    },
    {
      id: 'digital-innovations',
      title: 'Digital Innovations',
      description:
        'Emerging tech experiments, digital twins, and next-generation experiences across industries.',
      icon: 'sparkles' as const,
      items: [
        {
          title: 'Digital Twin Engineering',
          description:
            'Virtual replicas and operational intelligence for industrial assets and facilities.',
        },
        {
          title: 'Predictive Maintenance',
          description:
            'ML-driven scheduling and anomaly detection to reduce downtime and extend asset life.',
        },
        {
          title: 'Real-Time Data Visualization',
          description:
            'Live dashboards for sensor streams, KPIs, and process performance.',
        },
        {
          title: 'Innovation Pilots & MVPs',
          description:
            'Rapid prototypes that validate AI, automation, and platform ideas before full-scale build.',
        },
      ],
    },
  ],
} as const
