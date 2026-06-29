export const batchInfo = {
  startDate: '01 July 2026',
  seatsLeft: 3,
  selectionEndsLabel: 'Next Batch Selection Ends Soon',
} as const

export const announcementMessages = [
  `${batchInfo.selectionEndsLabel}! Enroll Now to Secure Your Domain.`,
  'Apply Before Selection Closes',
  `URGENT: Batch Starting Soon! Only ${batchInfo.seatsLeft} Seats Left Across All Domains.`,
  '100% Free Verified Virtual Internship 2026 | Pan-India',
] as const

export const classPromo = {
  eyebrow: 'Techackode Edutech — Virtual Internship 2026',
  title: 'Join 50,000+ Virtual Interns Across India',
  titleHighlight: 'Build Real Project Experience Online',
  subtitle:
    'Apply free, learn free, and complete your internship free. Choose from 15+ domains, get an instant offer letter, and build portfolio-ready projects with Techackode mentors.',
  ctas: {
    primary: { label: "Get Started Now (It's Free)", action: 'register' as const },
    secondary: { label: 'Explore Domains', href: '#internship-tracks' },
  },
  trustPills: [
    'Verified Program',
    'Instant Offer Letter',
    '100% Virtual',
    'Mentor-Led Projects',
    'Pan-India',
  ],
} as const

export const platformStats = [
  {
    id: 'live',
    badge: 'Platform Live',
    value: 1049668,
    label: 'Active Interns',
    description: 'Students learning and building projects daily across 15+ domains.',
  },
  {
    id: 'certs',
    badge: 'Secure Verification',
    value: 725601,
    label: 'Certificates Issued',
    description: 'Verified credentials recognized by recruiters and institutions.',
  },
] as const

export const internshipTracks = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    duration: '4–8 weeks',
    level: 'Beginner–Intermediate',
    description: 'React, Node.js, APIs, and deployment — build a live product from scratch.',
    icon: 'code',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    duration: '4–8 weeks',
    level: 'Intermediate',
    description: 'Cross-platform apps with modern frameworks and real user flows.',
    icon: 'smartphone',
  },
  {
    id: 'cyber',
    title: 'Cybersecurity & Ethical Hacking',
    duration: '6 weeks',
    level: 'Intermediate',
    description: 'Vulnerability assessment, secure coding, and penetration testing basics.',
    icon: 'shield',
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    duration: '6–8 weeks',
    level: 'Intermediate',
    description: 'Model training, NLP workflows, and applied AI project delivery.',
    icon: 'brain',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    duration: '4–6 weeks',
    level: 'Intermediate',
    description: 'CI/CD pipelines, containers, and cloud-native deployment practices.',
    icon: 'cloud',
  },
  {
    id: 'data',
    title: 'Data Science & Analytics',
    duration: '6 weeks',
    level: 'Beginner–Intermediate',
    description: 'Python analytics, dashboards, and data-driven decision projects.',
    icon: 'chart',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    duration: '4 weeks',
    level: 'Beginner',
    description: 'User research, wireframes, and high-fidelity product design systems.',
    icon: 'palette',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    duration: '4 weeks',
    level: 'Beginner',
    description: 'SEO, paid campaigns, content strategy, and growth analytics.',
    icon: 'megaphone',
  },
  {
    id: 'erp',
    title: 'ERP & Business Systems',
    duration: '6 weeks',
    level: 'Intermediate',
    description: 'CRM/ERP workflows, automation, and enterprise process mapping.',
    icon: 'building',
  },
  {
    id: 'qa',
    title: 'QA & Test Automation',
    duration: '4 weeks',
    level: 'Beginner–Intermediate',
    description: 'Manual testing, Selenium, and quality assurance for web products.',
    icon: 'check',
  },
  {
    id: 'python',
    title: 'Python Development',
    duration: '4–6 weeks',
    level: 'Beginner',
    description: 'Scripting, automation, backends, and practical Python applications.',
    icon: 'terminal',
  },
  {
    id: 'java',
    title: 'Java Enterprise',
    duration: '6–8 weeks',
    level: 'Intermediate',
    description: 'Spring Boot, REST APIs, and scalable enterprise application patterns.',
    icon: 'coffee',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Fundamentals',
    duration: '4 weeks',
    level: 'Intermediate',
    description: 'Smart contracts overview, Web3 basics, and decentralized app concepts.',
    icon: 'link',
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    duration: '6 weeks',
    level: 'Intermediate',
    description: 'Sensors, edge devices, and connected system prototyping.',
    icon: 'cpu',
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    duration: '4 weeks',
    level: 'Beginner',
    description: 'No-code/low-code automation, integrations, and business process bots.',
    icon: 'zap',
  },
] as const

export const enrollmentFormFields = [
  { name: 'fullName', label: 'Full Name', type: 'text' as const, required: true, placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email' as const, required: true, placeholder: 'you@college.edu' },
  { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true, placeholder: '+91 98765 43210' },
  { name: 'college', label: 'College / Organization', type: 'text' as const, required: true, placeholder: 'Institution name' },
  { name: 'domain', label: 'Preferred Domain', type: 'select' as const, required: true },
] as const

export const AUTO_POPUP_DELAY_MS = 21_000
export const ENROLLMENT_DISMISS_KEY = 'techackode-enrollment-dismissed'
