'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ---------- data ---------- */
const featured = {
  slug: 'bim-integration',
  cat: 'Technology',
  title: 'BIM Integration: Building the Future Virtually Before Breaking Ground',
  date: 'August 12, 2026',
  img: '/images/process.jpg',
  excerpt:
    'How Building Information Modeling is drastically reducing errors and streamlining complex MEP coordination across our projects.',
};

const articles = [
  {
    slug: 'carbon-neutral-concrete',
    cat: 'Sustainability',
    title: 'Carbon-Neutral Concrete: The Next Big Leap in Green Construction',
    date: 'July 28, 2026',
    img: '/images/sustainable.jpg',
    excerpt: 'Exploring alternative materials and supply chain adjustments required to achieve zero-emission concrete pours.',
  },
  {
    slug: 'biophilic-design',
    cat: 'Design Trends',
    title: 'Biophilic Design in Commercial Real Estate',
    date: 'June 05, 2026',
    img: '/images/commercial.jpg',
    excerpt: 'Why bringing nature indoors is no longer just an aesthetic choice, but a requirement for modern corporate spaces.',
  },
  {
    slug: 'ai-safety-monitoring',
    cat: 'Safety',
    title: 'AI-Powered Safety Monitoring on High-Rise Projects',
    date: 'May 19, 2026',
    img: '/images/details.jpg',
    excerpt: 'Implementing computer vision to automatically detect PPE compliance and hazardous zones.',
  },
  {
    slug: 'supply-chain-volatility',
    cat: 'Market Update',
    title: 'Navigating Supply Chain Volatility in 2026',
    date: 'April 02, 2026',
    img: '/images/industrial.jpg',
    excerpt: 'Strategies for mitigating risk and ensuring project timelines remain unaffected by global material shortages.',
  },
  {
    slug: 'infrastructure-award',
    cat: 'Company News',
    title: 'Rakvih Construction Wins Excellence in Infrastructure Award',
    date: 'March 15, 2026',
    img: '/images/hero.jpg',
    excerpt: 'Recognition for our work on the Riverside Elevated Corridor and our commitment to public safety.',
  },
];

const categories = ['All', ...Array.from(new Set(articles.map((a) => a.cat)))];
const PAGE_SIZE = 3;

/* ---------- helpers ---------- */
function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
        seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- page ---------- */
export default function InsightsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const filtered = filter === 'All' ? articles : articles.filter((a) => a.cat === filter);
  const shown = filtered.slice(0, visible);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#FFD400] selection:text-black">
      <style>{`
        @keyframes rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes drift { from { transform: scale(1.12); } to { transform: scale(1); } }
        .rise { animation: rise 1.1s cubic-bezier(.16,1,.3,1) both; }
        .drift { animation: drift 2.4s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) { .rise, .drift { animation: none; } }
      `}</style>

      <div className="fixed top-0 left-0 h-[2px] bg-[#FFD400] z-[60]" style={{ width: `${progress}%` }} aria-hidden />

      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section
          ref={heroRef}
          onMouseMove={onMove}
          className="relative min-h-[60vh] flex items-end overflow-hidden pt-24"
          style={{ ['--x' as string]: '70%', ['--y' as string]: '30%' }}
        >
          <Image src="/images/hero.jpg" alt="Rakvih Construction project" fill priority className="object-cover opacity-40 drift" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(420px circle at var(--x) var(--y), rgba(255,212,0,0.2), transparent 70%)' }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" aria-hidden />

          <div className="container mx-auto px-6 pb-12 lg:pb-16 relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
                <span className="block overflow-hidden pb-1">
                  <span className="block rise">Industry</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                    insights.
                  </span>
                </span>
              </h1>
              <p className="max-w-md text-neutral-300 font-light text-base md:text-lg leading-relaxed md:text-right">
                Expert perspectives, construction technology updates, sustainability guides, and news from our latest projects.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="pt-2 md:pt-4 pb-10 md:pb-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="w-10 h-px bg-[#FFD400] mb-6" />
              <h2 className="font-serif font-light text-3xl md:text-4xl mb-10">Featured article</h2>
            </Reveal>

            <Reveal delay={100}>
              <Link href={`/insights/${featured.slug}`} className="group grid lg:grid-cols-2 gap-0 border border-white/10 hover:border-[#FFD400]/60 transition-colors duration-700 outline-none focus-visible:border-[#FFD400]">
                <div className="relative h-[300px] lg:h-[480px] overflow-hidden">
                  <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <span className="absolute top-5 left-5 bg-black/70 backdrop-blur-sm border border-white/15 text-sm px-4 py-1.5 rounded-full">
                    {featured.cat}
                  </span>
                </div>
                <div className="p-8 md:p-14 flex flex-col justify-center">
                  <p className="text-sm text-neutral-500 mb-4">{featured.date}</p>
                  <h3 className="font-serif font-light text-2xl md:text-4xl leading-tight mb-5 group-hover:text-[#FFD400] transition-colors duration-500">
                    {featured.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed mb-8">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-3 text-[#FFD400] text-sm md:text-base">
                    Read full article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ALL ARTICLES with category filter */}
        <section className="pt-2 md:pt-4 pb-10 md:pb-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
                <div>
                  <div className="w-10 h-px bg-[#FFD400] mb-6" />
                  <h2 className="font-serif font-light text-3xl md:text-4xl">All articles</h2>
                </div>
                <div className="flex flex-wrap gap-3" role="group" aria-label="Filter articles by category">
                  {categories.map((c) => (
                    <button
                      key={c}
                      aria-pressed={filter === c}
                      onClick={() => {
                        setFilter(c);
                        setVisible(PAGE_SIZE);
                      }}
                      className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD400] ${
                        filter === c
                          ? 'bg-[#FFD400] border-[#FFD400] text-black font-medium'
                          : 'border-white/25 text-neutral-300 hover:border-[#FFD400] hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shown.map((a, i) => (
                <Reveal key={a.slug} delay={(i % PAGE_SIZE) * 100}>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="group flex flex-col h-full border border-white/10 hover:border-[#FFD400]/60 transition-colors duration-700 outline-none focus-visible:border-[#FFD400]"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/15 text-xs px-3 py-1 rounded-full">
                        {a.cat}
                      </span>
                    </div>
                    <div className="p-6 md:p-7 flex flex-col flex-grow">
                      <p className="text-sm text-neutral-500 mb-3">{a.date}</p>
                      <h3 className="font-serif font-light text-xl md:text-2xl leading-snug mb-4 group-hover:text-[#FFD400] transition-colors duration-500">
                        {a.title}
                      </h3>
                      <p className="text-neutral-400 font-light text-base leading-relaxed mb-6 flex-grow">{a.excerpt}</p>
                      <span className="inline-flex items-center gap-3 text-[#FFD400] text-sm mt-auto">
                        Read full article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            {visible < filtered.length && (
              <div className="mt-14 text-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="border border-white/25 rounded-full px-8 py-3.5 hover:bg-[#FFD400] hover:border-[#FFD400] hover:text-black transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]"
                >
                  Load more articles
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}