import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from 'react-icons/fa';

const explore = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'Our process', href: '/process' },
  { label: 'Insights', href: '/insights' },
];

const services = [
  'Residential spaces',
  'Commercial complexes',
  'Industrial facilities',
  'Infrastructure',
  'Interior fit-outs',
];

const socials = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Instagram', icon: Instagram },
  { label: 'YouTube', icon: Youtube },
  { label: 'Facebook', icon: Facebook },
];

const linkClass =
  'text-neutral-400 hover:text-[#FFD400] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto border-t border-white/10">
      {/* thin yellow accent */}
      <div className="h-px w-24 bg-[#FFD400] ml-6 lg:ml-12" aria-hidden />

      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 lg:pr-10">
            <Link href="/" className="inline-flex items-center gap-[10px] mb-8">
              <Image src="/icon.png" alt="Rakvih Icon" width={46} height={46} className="object-contain" />
              <div className="flex flex-col justify-center pt-1">
                <span className="font-serif text-[34px] leading-none tracking-normal text-white">
                  RAKVIH
                </span>
                <span className="font-sans text-[8.5px] leading-none tracking-[0.23em] font-medium text-white/90 mt-0.5 ml-0.5">
                  CONSTRUCTIONS & DEVELOPERS
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 font-light text-base leading-relaxed mb-8 max-w-sm">
              Building iconic spaces and stronger communities through innovation, integrity, and uncompromising excellence.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:bg-[#FFD400] hover:border-[#FFD400] hover:text-black transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD400]"
                >
                  <s.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif font-light text-xl mb-6">Explore</h4>
            <ul className="space-y-3 font-light">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-light text-xl mb-6">Services</h4>
            <ul className="space-y-3 font-light">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className={linkClass}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-light text-xl mb-6">Connect</h4>
            <ul className="space-y-5 font-light text-neutral-400">
              <li>
                <a href="tel:+919964244994" className={`group flex gap-4 items-center ${linkClass}`}>
                  <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#FFD400] group-hover:border-[#FFD400] transition-colors duration-300">
                    <Phone className="w-4 h-4 text-[#FFD400] group-hover:text-black transition-colors duration-300" />
                  </span>
                  +91 99642 44994
                </a>
              </li>
              <li>
                <a href="mailto:info@rakvih.com" className={`group flex gap-4 items-center ${linkClass}`}>
                  <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#FFD400] group-hover:border-[#FFD400] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-[#FFD400] group-hover:text-black transition-colors duration-300" />
                  </span>
                  info@rakvih.com
                </a>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#FFD400]" />
                </span>
                <span className="leading-relaxed">
                  238, 2nd Main, 2nd Cross,
                  <br />
                  Attur Layout, Yelahanka,
                  <br />
                  Bengaluru 560064
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} Rakvih Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className={linkClass}>
              Privacy policy
            </Link>
            <Link href="/terms-of-service" className={linkClass}>
              Terms of service
            </Link>
          </div>
          <p>
            Designed by{' '}
            <a
              href="https://rakvih.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#FFD400] transition-colors"
            >
              Rakvih
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}