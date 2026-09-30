import LegalLayout, { type LegalSection } from '@/components/LegalLayout';

const sections: LegalSection[] = [
  {
    title: 'Introduction',
    blocks: [
      {
        p: 'Welcome to Rakvih Construction. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.',
      },
    ],
  },
  {
    title: 'The Data We Collect',
    blocks: [
      {
        p: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
      },
      {
        ul: [
          { b: 'Identity Data:', t: 'includes first name, last name, username or similar identifier, title, and company name.' },
          { b: 'Contact Data:', t: 'includes billing address, delivery address, email address and telephone numbers.' },
          {
            b: 'Technical Data:',
            t: 'includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.',
          },
          { b: 'Usage Data:', t: 'includes information about how you use our website, products and services.' },
        ],
      },
    ],
  },
  {
    title: 'How We Use Your Data',
    blocks: [
      {
        p: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
      },
      {
        ul: [
          { t: 'Where we need to perform the contract we are about to enter into or have entered into with you.' },
          {
            t: 'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.',
          },
          { t: 'Where we need to comply with a legal obligation.' },
        ],
      },
    ],
  },
  {
    title: 'Data Security',
    blocks: [
      {
        p: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.',
      },
    ],
  },
  {
    title: 'Your Legal Rights',
    blocks: [
      {
        p: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.',
      },
    ],
  },
  {
    title: 'Contact Us',
    blocks: [
      { p: 'If you have any questions about this privacy policy or our privacy practices, please contact us at:' },
      { mail: 'privacy@rakvihconstruction.com' },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalLayout titleA="Privacy" titleB="policy." updated="September 2026" sections={sections} />;
}