import { footerContent } from '@/data/home'

export const contactPage = {
  hero: {
    badge: 'Contact Us',
    heading: 'Get in Touch with Techackode',
    subheading:
      'Reach our team for business inquiries, careers, partnerships, or general questions. We respond within one to two business days.',
  },
  contactInfo: {
    eyebrow: 'Reach Us',
    title: 'Contact Information',
    subtitle: 'Connect with the right channel for your needs.',
    items: [
      {
        id: 'phone',
        label: 'Phone',
        value: footerContent.contact.phone,
        href: `tel:${footerContent.contact.phone.replace(/\s/g, '')}`,
      },
      {
        id: 'email',
        label: 'Email',
        value: footerContent.contact.email,
        href: `mailto:${footerContent.contact.email}`,
      },
      {
        id: 'address',
        label: 'Office',
        value: footerContent.contact.address,
      },
      {
        id: 'hours',
        label: 'Business Hours',
        value: 'Mon – Fri, 9:00 AM – 6:00 PM IST',
      },
    ],
    departments: [
      {
        title: 'Business & Sales',
        email: 'sales@techackode.com',
        description: 'Projects, proposals, and enterprise solutions.',
      },
      {
        title: 'Careers & HR',
        email: 'careers@techackode.com',
        description: 'Internships, openings, and talent programs.',
      },
      {
        title: 'Partnerships',
        email: 'partners@techackode.com',
        description: 'Collaborations, resellers, and strategic alliances.',
      },
    ],
  },
  businessForm: {
    eyebrow: 'Work With Us',
    title: 'Business Inquiry',
    subtitle:
      'Tell us about your project, timeline, and goals. Our solutions team will follow up with the right expertise.',
    submitLabel: 'Submit Business Inquiry',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text' as const, required: true },
      { name: 'company', label: 'Company / Organization', type: 'text' as const, required: true },
      { name: 'email', label: 'Work Email', type: 'email' as const, required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: false },
      {
        name: 'service',
        label: 'Service of Interest',
        type: 'select' as const,
        required: true,
        options: [
          'Software Development',
          'AI & Automation',
          'Cybersecurity',
          'Digital Marketing',
          'Edutech & Training',
          'Enterprise Platforms',
          'Other',
        ],
      },
      {
        name: 'message',
        label: 'Project Details',
        type: 'textarea' as const,
        required: true,
        placeholder: 'Describe your requirements, timeline, and budget range if available.',
      },
    ],
  },
  careerForm: {
    eyebrow: 'Join Our Team',
    title: 'Career Inquiry',
    subtitle:
      'Interested in internships, full-time roles, or mentorship programs? Share your background and area of interest.',
    submitLabel: 'Submit Career Inquiry',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text' as const, required: true },
      { name: 'email', label: 'Email', type: 'email' as const, required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true },
      {
        name: 'role',
        label: 'Role / Area of Interest',
        type: 'select' as const,
        required: true,
        options: [
          'Software Development',
          'AI / Data',
          'Cybersecurity',
          'Design / UX',
          'Digital Marketing',
          'Edutech / Training',
          'Operations',
          'Internship',
        ],
      },
      {
        name: 'experience',
        label: 'Experience Level',
        type: 'select' as const,
        required: true,
        options: ['Student / Fresher', '1–3 years', '3–5 years', '5+ years'],
      },
      {
        name: 'message',
        label: 'About You',
        type: 'textarea' as const,
        required: true,
        placeholder: 'Share your skills, portfolio link, or LinkedIn profile.',
      },
    ],
  },
  partnershipForm: {
    eyebrow: 'Collaborate',
    title: 'Partnership Opportunities',
    subtitle:
      'Explore reseller, technology, education, or strategic partnerships with Techackode across our divisions.',
    submitLabel: 'Submit Partnership Inquiry',
    fields: [
      { name: 'fullName', label: 'Contact Name', type: 'text' as const, required: true },
      { name: 'company', label: 'Organization', type: 'text' as const, required: true },
      { name: 'email', label: 'Email', type: 'email' as const, required: true },
      { name: 'website', label: 'Website (optional)', type: 'url' as const, required: false },
      {
        name: 'partnershipType',
        label: 'Partnership Type',
        type: 'select' as const,
        required: true,
        options: [
          'Technology Partner',
          'Reseller / Channel',
          'Education / Edutech',
          'Startup / Venture',
          'Agency Collaboration',
          'Other',
        ],
      },
      {
        name: 'message',
        label: 'Partnership Proposal',
        type: 'textarea' as const,
        required: true,
        placeholder: 'Describe your organization, audience, and how you would like to collaborate.',
      },
    ],
  },
  map: {
    eyebrow: 'Visit Us',
    title: 'Find Us on the Map',
    subtitle: 'Our headquarters and primary operations are based in India.',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160982325!2d72.7410999570892!3d19.08219783839781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648caf!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Techackode+India',
  },
  social: {
    eyebrow: 'Stay Connected',
    title: 'Social Media',
    subtitle: 'Follow Techackode for product updates, insights, and community highlights.',
    links: footerContent.social,
  },
}

export type ContactFormField =
  | {
      name: string
      label: string
      type: 'text' | 'email' | 'tel' | 'url'
      required: boolean
      placeholder?: string
    }
  | {
      name: string
      label: string
      type: 'select'
      required: boolean
      options: string[]
    }
  | {
      name: string
      label: string
      type: 'textarea'
      required: boolean
      placeholder?: string
    }
