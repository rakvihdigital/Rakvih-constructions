'use client';

import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollProgress, Reveal } from '@/components/Motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ---------- data ---------- */
const projects = [
  {
    title: 'The Celestia Residences',
    slug: 'the-celestia-residences',
    location: 'Mumbai, India',
    category: 'Luxury Residential',
    status: 'Completed 2025',
    img: '/images/residential.jpg',
  },
  {
    title: 'Vertex Business Park',
    slug: 'vertex-business-park',
    location: 'Bengaluru, India',
    category: 'Commercial Office',
    status: 'Completed 2024',
    img: '/images/commercial.jpg',
  },
  {
    title: 'Apex Manufacturing Unit',
    slug: 'apex-manufacturing-unit',
    location: 'Pune, India',
    category: 'Industrial Facility',
    status: 'Completed 2023',
    img: '/images/industrial.jpg',
  },
  {
    title: 'Riverside Elevated Corridor',
    slug: 'riverside-elevated-corridor',
    location: 'Ahmedabad, India',
    category: 'Infrastructure',
    status: 'Completed 2024',
    img: '/images/hero.jpg',
  },
];

const categories = ['All', ...projects.map((p) => p.category)];

/* ---------- page ---------- */
export default function ProjectsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('All');

  const onMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#FFD400] selection:text-black">
      <style>{`
        @keyframes rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes drift { from { transform: scale(1.12); } to { transform: scale(1); } }
        .rise { animation: rise 1.1s cubic-bezier(.16,1,.3,1) both; }
        .drift { animation: drift 2.4s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) { .rise, .drift { animation: none; } }
      `}</style>

      <ScrollProgress />
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section
          ref={heroRef}
          onMouseMove={onMove}
          className="relative min-h-[60vh] flex items-end overflow-hidden pt-24"
          style={{ ['--x' as string]: '70%', ['--y' as string]: '30%' }}
        >
          <Image src="/images/hero.jpg" alt="Rakvih Construction projects overview" fill priority className="object-cover opacity-40 drift" />
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
                  <span className="block rise">Featured</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                    projects.
                  </span>
                </span>
              </h1>
              <p className="max-w-md text-neutral-300 font-light text-base md:text-lg leading-relaxed md:text-right">
                A curated selection of our finest architectural and engineering accomplishments.
              </p>
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="py-16 md:py-24 border-t border-white/10">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                <div>
                  <div className="w-10 h-px bg-[#FFD400] mb-6" />
                  <h2 className="font-serif font-light text-3xl md:text-4xl">Our work</h2>
                </div>
                <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
                  {categories.map((c) => (
                    <button
                      key={c}
                      aria-pressed={filter === c}
                      onClick={() => setFilter(c)}
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

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
              {shown.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 150} className={i % 2 === 1 ? 'md:mt-20' : ''}>
                  <Link href={`/projects/${p.slug}`} className="group block outline-none">
                    <div className="relative w-full h-[340px] md:h-[480px] overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full group-focus-visible:w-full transition-all duration-700" />
                      <span className="absolute top-5 left-5 bg-black/70 backdrop-blur-sm border border-white/15 text-sm px-4 py-1.5 rounded-full">
                        {p.category}
                      </span>
                    </div>

                    <div className="pt-6 flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-serif font-light text-2xl md:text-3xl group-hover:text-[#FFD400] transition-colors duration-500">
                          {p.title}
                        </h3>
                        <p className="text-neutral-400 font-light text-sm md:text-base mt-2">
                          {p.location}, {p.status}
                        </p>
                      </div>
                      <span className="shrink-0 mt-1 inline-flex items-center gap-2 text-[#FFD400] text-sm">
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}