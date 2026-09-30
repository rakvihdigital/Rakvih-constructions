'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollProgress, Reveal } from '@/components/Motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

/* ---------- data ---------- */
const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    desc: 'We build ultra-luxury villas, contemporary high-rise apartments, and sprawling estates. Our residential team ensures every home is crafted with meticulous attention to detail, premium materials, and unparalleled structural integrity.',
    img: '/images/residential.jpg',
    features: ['Custom Home Building', 'High-Rise Apartments', 'Luxury Villas', 'Turnkey Solutions'],
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    desc: "Delivering state-of-the-art corporate offices, retail spaces, and mixed-use developments that reflect your brand's prestige. We focus on creating spaces that maximize productivity, sustainability, and aesthetic appeal.",
    img: '/images/sustainable.jpg',
    features: ['Corporate Headquarters', 'Retail Complexes', 'Mixed-Use Developments', 'Boutique Hotels'],
  },
  {
    id: 'industrial',
    title: 'Industrial Construction',
    desc: 'Robust, efficient, and technologically advanced industrial facilities. From massive warehouses to specialized manufacturing plants, our engineering expertise ensures highly functional and safe environments.',
    img: '/images/industrial.jpg',
    features: ['Manufacturing Plants', 'Warehouses & Logistics', 'Data Centers', 'Cold Storage Facilities'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Development',
    desc: 'Building the framework of tomorrow. Our team engineers highly complex infrastructure projects including bridges, highways, and public transit systems, prioritizing longevity, safety, and minimal environmental impact.',
    img: '/images/team.jpg',
    features: ['Bridges & Highways', 'Public Transit Systems', 'Urban Planning', 'Civic Centers'],
  },
  {
    id: 'sustainable',
    title: 'Sustainable Architecture',
    desc: 'Leading the transition to green building. We integrate renewable energy solutions, eco-friendly materials, and smart technologies to construct zero-emission buildings that harmonize with their natural surroundings.',
    img: '/images/process.jpg',
    features: ['LEED Certified Buildings', 'Renewable Energy Integration', 'Eco-Friendly Materials', 'Smart Climate Control'],
  },
  {
    id: 'heritage',
    title: 'Heritage Restoration',
    desc: 'Preserving history while adapting for the future. Our restoration experts meticulously revive historic structures, utilizing specialized conservation techniques to protect their legacy while seamlessly upgrading internal systems.',
    img: '/images/details.jpg',
    features: ['Historical Conservation', 'Structural Reinforcement', 'Facade Restoration', 'Modern Systems Retrofit'],
  },
];

/* ---------- page ---------- */
export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#FFD400] selection:text-black">
      <style>{`
        @keyframes rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes drift { from { transform: scale(1.12); } to { transform: scale(1); } }
        .rise { animation: rise 1.1s cubic-bezier(.16,1,.3,1) both; }
        .drift { animation: drift 2.4s cubic-bezier(.16,1,.3,1) both; }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { .rise, .drift { animation: none; } html { scroll-behavior: auto; } }
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
          <Image src="/images/process.jpg" alt="Rakvih Construction services overview" fill priority className="object-cover opacity-40 drift" />
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
                  <span className="block rise">Comprehensive</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                    capabilities.
                  </span>
                </span>
              </h1>
              <p className="max-w-md text-neutral-300 font-light text-base md:text-lg leading-relaxed md:text-right">
                We leverage advanced engineering, modern technology, and masterful craftsmanship to deliver world-class infrastructure across diverse sectors.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES: sticky index + detailed blocks */}
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* index */}
            <aside className="hidden lg:block lg:col-span-4">
              <nav className="sticky top-28" aria-label="Services">
                <div className="w-10 h-px bg-[#FFD400] mb-6" />
                <h2 className="font-serif font-light text-3xl mb-8">What we build</h2>
                <ul className="border-l border-white/10">
                  {services.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block -ml-px pl-6 py-3 border-l-2 transition-all duration-300 ${
                          i === active
                            ? 'border-[#FFD400] text-white'
                            : 'border-transparent text-neutral-500 hover:text-neutral-200'
                        }`}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* details */}
            <div className="lg:col-span-8">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  data-idx={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className={`scroll-mt-28 ${i > 0 ? 'mt-16 pt-16 border-t border-white/10' : ''}`}
                >
                  <Reveal>
                    <div className="group relative h-64 md:h-96 overflow-hidden mb-8">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full transition-all duration-700" />
                    </div>

                    <h2 className="font-serif font-light text-3xl md:text-4xl mb-5">{s.title}</h2>
                    <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mb-8">{s.desc}</p>

                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-neutral-300 font-light">
                          <Check className="w-4 h-4 text-[#FFD400] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-3 text-[#FFD400] border-b border-[#FFD400]/40 pb-1 hover:border-[#FFD400] transition-colors"
                    >
                      Discuss this service
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-500" />
                    </Link>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}