export const servicesPage = {
  hero: {
    badge: 'Our Services',
    heading: 'Technology Services',
    subheading:
      'End-to-end capabilities across software engineering, AI automation, cybersecurity, digital twins, and growth marketing — built for startups and enterprises.',
  },
  intro:
    'Techackode delivers scalable, industry-ready solutions from concept to deployment. Explore our service categories below to find the right expertise for your digital transformation goals.',
  categories: [
    {
      id: 'development',
      title: 'Development Services',
      description:
        'Custom software, platforms, and interfaces engineered for performance, scalability, and long-term maintainability.',
      icon: 'code' as const,
      items: [
        {
          title: 'Website Development',
          description:
            'Responsive, SEO-friendly websites and web applications tailored to your brand and business goals.',
        },
        {
          title: 'Mobile App Development',
          description:
            'Native and cross-platform mobile apps with intuitive UX and reliable backend integration.',
        },
        {
          title: 'ERP Development',
          description:
            'Enterprise resource planning systems that unify operations, finance, inventory, and reporting.',
        },
        {
          title: 'CRM Solutions',
          description:
            'Customer relationship platforms to manage leads, pipelines, communications, and sales performance.',
        },
        {
          title: 'LMS Platforms',
          description:
            'Learning management systems for courses, assessments, certifications, and learner progress tracking.',
        },
        {
          title: 'CMS Development',
          description:
            'Flexible content management systems for easy publishing, media handling, and site administration.',
        },
        {
          title: 'UI/UX Design',
          description:
            'User-centered design systems, wireframes, and prototypes that improve usability and conversion.',
        },
        {
          title: 'Custom Admin Dashboards',
          description:
            'Role-based dashboards with real-time metrics, workflows, and actionable business intelligence.',
        },
      ],
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation Services',
      description:
        'Intelligent automation and AI-driven systems that reduce manual work and unlock data-driven decisions.',
      icon: 'brain' as const,
      items: [
        {
          title: 'AI-Powered Business Intelligence',
          description:
            'Dashboards and insights powered by machine learning to forecast trends and support strategic planning.',
        },
        {
          title: 'Workflow Automation',
          description:
            'Automated business processes that connect tools, teams, and data across your organization.',
        },
        {
          title: 'N8N Automation',
          description:
            'Custom N8N workflows for integrations, notifications, data sync, and no-code automation at scale.',
        },
        {
          title: 'AI Assistants & Chatbots',
          description:
            'Conversational AI for customer support, internal help desks, and guided user experiences.',
        },
        {
          title: 'Predictive Analytics',
          description:
            'Models that anticipate outcomes, demand, and risks using historical and real-time data.',
        },
        {
          title: 'Business Process Automation',
          description:
            'End-to-end BPA solutions that streamline approvals, reporting, and repetitive operational tasks.',
        },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      description:
        'Proactive security assessments, hardening, and consulting to protect your digital assets and reputation.',
      icon: 'shield' as const,
      items: [
        {
          title: 'Ethical Hacking',
          description:
            'Authorized penetration testing to identify exploitable weaknesses before malicious actors do.',
        },
        {
          title: 'Vulnerability Assessment',
          description:
            'Systematic scanning and analysis of infrastructure, applications, and configurations for security gaps.',
        },
        {
          title: 'Security Audits',
          description:
            'Comprehensive reviews of policies, controls, and compliance aligned with industry standards.',
        },
        {
          title: 'Network Security',
          description:
            'Firewall design, segmentation, monitoring, and intrusion prevention for resilient network posture.',
        },
        {
          title: 'Application Security',
          description:
            'Secure SDLC practices, code review, and testing to harden web and mobile applications.',
        },
        {
          title: 'Cybersecurity Consulting',
          description:
            'Strategic guidance on risk management, incident response planning, and security architecture.',
        },
      ],
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Engineering',
      description:
        'Virtual replicas and operational intelligence for industrial systems, assets, and real-time monitoring.',
      icon: 'layers' as const,
      items: [
        {
          title: 'Industrial Simulation Systems',
          description:
            'Digital models of plants and equipment to simulate scenarios, optimize layouts, and train teams.',
        },
        {
          title: 'Digital Twin Monitoring',
          description:
            'Live synchronization between physical assets and digital twins for status and anomaly detection.',
        },
        {
          title: 'Operational Intelligence',
          description:
            'Unified operational dashboards combining IoT, SCADA, and business data for smarter decisions.',
        },
        {
          title: 'Predictive Maintenance Systems',
          description:
            'ML-driven maintenance scheduling that reduces downtime and extends asset life cycles.',
        },
        {
          title: 'Real-Time Data Visualization',
          description:
            'Interactive visualizations of sensor streams, KPIs, and process performance across facilities.',
        },
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Services',
      description:
        'Growth-focused campaigns, creative branding, and measurable strategies to expand your digital presence.',
      icon: 'megaphone' as const,
      items: [
        {
          title: 'SEO Optimization',
          description:
            'Technical and content SEO to improve search rankings, visibility, and organic traffic growth.',
        },
        {
          title: 'Performance Marketing',
          description:
            'Data-driven paid campaigns optimized for conversions, ROAS, and audience targeting.',
        },
        {
          title: 'Google & Meta Ads',
          description:
            'Search, display, and social ad management across Google Ads and Meta platforms.',
        },
        {
          title: 'Social Media Marketing',
          description:
            'Content calendars, community engagement, and platform-specific strategies for brand growth.',
        },
        {
          title: 'Branding & Creative Design',
          description:
            'Visual identity, logos, and creative assets that communicate your brand consistently.',
        },
        {
          title: 'Lead Generation',
          description:
            'Funnels, landing pages, and outreach systems designed to capture and nurture qualified leads.',
        },
        {
          title: 'Content Marketing',
          description:
            'Blogs, videos, and thought leadership content that builds authority and drives engagement.',
        },
      ],
    },
  ],
} as const
