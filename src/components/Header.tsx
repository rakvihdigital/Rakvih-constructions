'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

const searchIndex = [
  { title: 'Residential Construction', link: '/services' },
  { title: 'Commercial Construction', link: '/services' },
  { title: 'The Celestia Residences', link: '/projects/the-celestia-residences' },
  { title: 'Riverside Elevated Corridor', link: '/projects/riverside-elevated-corridor' },
  { title: 'Company Vision & Mission', link: '/about' },
  { title: 'Our Core Values', link: '/about' },
  { title: 'Construction Process', link: '/process' },
  { title: 'Latest Insights', link: '/insights' },
];

const popular = ['Residential', 'Commercial', 'Process', 'Contact'];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results =
    query.trim() === '' ? [] : searchIndex.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()));

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  // Escape closes overlays, Ctrl/Cmd + K opens search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setQuery('');
        setMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <>
      <style>{`
        @keyframes menuIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .menu-in { animation: menuIn .6s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) { .menu-in { animation: none; } }
      `}</style>

      {/* Floating island header */}
      <header className="fixed top-3 md:top-4 inset-x-0 z-40 px-3 md:px-6 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-6xl h-14 md:h-16 rounded-full border border-white/10 backdrop-blur-xl pl-5 md:pl-7 pr-2 md:pr-2.5 flex items-center justify-between gap-6 bg-black/85 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500">
          <Link href="/" className="flex items-center shrink-0" aria-label="Rakvih Construction home">
            <Image src="/logo-transparent.png" alt="Rakvih Construction" width={140} height={44} className="object-contain" priority />
          </Link>

          {/* Desktop links with a solid gray background pill on hover / active */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-full text-[14px] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400] ${
                  isActive(l.href)
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search (Ctrl or Command + K)"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-neutral-300 hover:bg-white/10 hover:text-[#FFD400] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFD400]"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#FFD400] text-black text-[15px] font-semibold hover:bg-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start a project
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className={`lg:hidden w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-colors duration-300 ${
                menuOpen ? 'bg-[#FFD400] text-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet dropdown panel */}
      {menuOpen && (
        <>
          <div className="lg:hidden fixed inset-0 z-30 bg-black/60" onClick={() => setMenuOpen(false)} aria-hidden />
          <div className="lg:hidden fixed z-40 top-[72px] md:top-[88px] inset-x-3 md:inset-x-6 max-w-6xl mx-auto rounded-3xl border border-white/10 bg-neutral-900 backdrop-blur-xl p-6 max-h-[calc(100vh-96px)] overflow-y-auto">
            <nav aria-label="Mobile">
              <ul>
                {navLinks.map((l, i) => (
                  <li key={l.href} className="menu-in" style={{ animationDelay: `${i * 50}ms` }}>
                    <Link
                      href={l.href}
                      className={`flex items-center justify-between font-serif text-4xl py-3 border-b border-white/10 transition-colors ${
                        isActive(l.href) ? 'text-[#FFD400]' : 'text-white hover:text-[#FFD400]'
                      }`}
                    >
                      {l.label}
                      <ArrowRight className="w-5 h-5 opacity-40" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="menu-in mt-6" style={{ animationDelay: '380ms' }}>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#FFD400] text-black font-semibold px-6 py-4 rounded-full"
                >
                  Start a project <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-5 flex flex-col gap-3 text-neutral-400">
                  <a href="tel:+918296392047" className="inline-flex items-center gap-3 hover:text-[#FFD400] transition-colors">
                    <Phone className="w-4 h-4 text-[#FFD400]" /> +91 82963 92047
                  </a>
                  <a href="mailto:info@rakvih.com" className="inline-flex items-center gap-3 hover:text-[#FFD400] transition-colors">
                    <Mail className="w-4 h-4 text-[#FFD400]" /> info@rakvih.com
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-start justify-center p-4 pt-24 md:pt-32"
          onClick={closeSearch}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="bg-black border border-white/15 rounded-2xl w-full max-w-2xl flex flex-col max-h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-4">
              <Search className="w-5 h-5 text-[#FFD400] shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search projects, services..."
                aria-label="Search the site"
                className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-neutral-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={closeSearch}
                aria-label="Close search"
                className="text-xs text-neutral-400 border border-white/20 rounded-md px-2 py-1 hover:text-white hover:border-white/40 transition-colors"
              >
                Esc
              </button>
            </div>

            <div className="p-3 overflow-y-auto">
              {query && results.length > 0 ? (
                <ul>
                  {results.map((r) => (
                    <li key={r.title}>
                      <Link
                        href={r.link}
                        onClick={closeSearch}
                        className="group flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-white/[0.06] transition-colors"
                      >
                        <span className="text-neutral-300 group-hover:text-white transition-colors">{r.title}</span>
                        <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#FFD400] group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : query ? (
                <p className="text-neutral-500 text-sm text-center py-10">No results found for &ldquo;{query}&rdquo;.</p>
              ) : (
                <div className="p-3">
                  <p className="text-neutral-500 text-sm mb-3">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    {popular.map((t) => (
                      <button
                        key={t}
                        onClick={() => setQuery(t)}
                        className="border border-white/25 text-neutral-300 text-sm px-4 py-1.5 rounded-full hover:border-[#FFD400] hover:text-white transition-colors"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}