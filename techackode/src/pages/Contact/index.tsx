import {
  ContactPageShell,
  ContactInfoSection,
  InquiryFormSection,
  ContactMapSection,
  ContactSocialSection,
} from '@/components/contact'
import { contactPage } from '@/data/contact'

export default function ContactPage() {
  const {
    hero,
    contactInfo,
    businessForm,
    careerForm,
    partnershipForm,
    map,
    social,
  } = contactPage

  return (
    <ContactPageShell
      badge={hero.badge}
      heading={hero.heading}
      subheading={hero.subheading}
      theme="home"
    >
      <ContactInfoSection
        eyebrow={contactInfo.eyebrow}
        title={contactInfo.title}
        subtitle={contactInfo.subtitle}
        items={contactInfo.items}
        departments={contactInfo.departments}
      />

      <InquiryFormSection
        id="business-inquiry"
        eyebrow={businessForm.eyebrow}
        title={businessForm.title}
        subtitle={businessForm.subtitle}
        submitLabel={businessForm.submitLabel}
        fields={businessForm.fields}
      />

      <InquiryFormSection
        id="career-inquiry"
        eyebrow={careerForm.eyebrow}
        title={careerForm.title}
        subtitle={careerForm.subtitle}
        submitLabel={careerForm.submitLabel}
        fields={careerForm.fields}
        variant="alt"
      />

      <InquiryFormSection
        id="partnership"
        eyebrow={partnershipForm.eyebrow}
        title={partnershipForm.title}
        subtitle={partnershipForm.subtitle}
        submitLabel={partnershipForm.submitLabel}
        fields={partnershipForm.fields}
      />

      <ContactMapSection
        eyebrow={map.eyebrow}
        title={map.title}
        subtitle={map.subtitle}
        embedUrl={map.embedUrl}
        directionsUrl={map.directionsUrl}
      />

      <ContactSocialSection
        eyebrow={social.eyebrow}
        title={social.title}
        subtitle={social.subtitle}
        links={social.links}
      />
    </ContactPageShell>
  )
}
