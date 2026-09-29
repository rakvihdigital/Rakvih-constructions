import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark-bg pt-12 pb-6 border-t border-white/10 text-white font-sans mt-auto">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image src="/logo-transparent.png" alt="Rakvih Logo" width={180} height={60} className="object-contain" />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building iconic spaces and stronger communities through innovation, integrity and excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark-bg transition-colors"><Linkedin className="w-4 h-4" /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark-bg transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark-bg transition-colors"><Youtube className="w-4 h-4" /></Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark-bg transition-colors"><Facebook className="w-4 h-4" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
              <li><Link href="/process" className="hover:text-gold transition-colors">Process</Link></li>
              <li><Link href="/insights" className="hover:text-gold transition-colors">Insights</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-gold transition-colors">Residential Construction</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Commercial Construction</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Industrial Construction</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Infrastructure Projects</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Interior & Fit-Out</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Project Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 82963 92047</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@rakvihconstruction.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span>238, 2nd Main, 2nd Cross,<br />Attur Layout, Yelahanka,<br />Bengaluru, Karnataka 560064</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left">
          <p>© 2026 Rakvih Construction. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
