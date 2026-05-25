export const careersPage = {
  hero: {
    badge: 'Careers',
    heading: 'Build Your Future at Techackode',
    subheading:
      'Join Techackode and build the future through innovation, technology, AI, cybersecurity, and digital transformation.',
  },
  opportunities: {
    eyebrow: 'Opportunities',
    title: 'We provide opportunities for',
    subtitle:
      'Grow with a multi-domain team working on real-world projects across software, AI, security, and digital growth.',
    roles: [
      { title: 'Developers', icon: 'code' as const },
      { title: 'Designers', icon: 'palette' as const },
      { title: 'AI Engineers', icon: 'brain' as const },
      { title: 'Cybersecurity Analysts', icon: 'shield' as const },
      { title: 'Digital Marketers', icon: 'megaphone' as const },
      { title: 'Trainers & Mentors', icon: 'graduation' as const },
      { title: 'Interns & Freshers', icon: 'sprout' as const },
    ],
  },
  cta: {
    heading: 'Ready to join our team?',
    content:
      'Share your profile and interests — we will connect you with the right division and role across Techackode.',
    button: { label: 'Apply Now', href: '/#contact' },
  },
} as const
