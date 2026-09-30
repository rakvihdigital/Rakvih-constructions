import LegalLayout, { type LegalSection } from '@/components/LegalLayout';

const sections: LegalSection[] = [
  {
    title: 'Agreement to Terms',
    blocks: [
      {
        p: 'By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.',
      },
    ],
  },
  {
    title: 'Intellectual Property Rights',
    blocks: [
      {
        p: 'Other than the content you own, under these terms, Rakvih Construction and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.',
      },
    ],
  },
  {
    title: 'Restrictions',
    blocks: [
      { p: 'You are specifically restricted from all of the following:' },
      {
        ul: [
          { t: 'Publishing any website material in any other media without prior written consent.' },
          { t: 'Selling, sublicensing and/or otherwise commercializing any website material.' },
          { t: 'Using this website in any way that is or may be damaging to this website or to the brand.' },
          {
            t: 'Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.',
          },
        ],
      },
    ],
  },
  {
    title: 'No Warranties',
    blocks: [
      {
        p: 'This website is provided "as is," with all faults, and Rakvih Construction expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.',
      },
    ],
  },
  {
    title: 'Limitation of Liability',
    blocks: [
      {
        p: 'In no event shall Rakvih Construction, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Rakvih Construction, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.',
      },
    ],
  },
  {
    title: 'Variation of Terms',
    blocks: [
      {
        p: 'Rakvih Construction is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.',
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return <LegalLayout titleA="Terms &" titleB="conditions." updated="September 2026" sections={sections} />;
}