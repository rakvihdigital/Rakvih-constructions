'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Search, Map, Calculator, Users, HardHat, Cog, CheckCircle, FileCheck, LifeBuoy } from 'lucide-react';

/* ---------- data ---------- */
const steps = [
  { icon: Search, title: 'Discovery', desc: 'We begin by understanding your goals, site parameters, and project expectations.', img: '/images/process.jpg' },
  { icon: Map, title: 'Site & Feasibility', desc: 'Comprehensive surveys, constraint analysis, and initial technical assessments.', img: '/images/hero.jpg' },
  { icon: Calculator, title: 'Planning & Estimation', desc: 'Detailed scope definition, Bill of Quantities (BOQ), and resource scheduling.', img: '/images/commercial.jpg' },
  { icon: Users, title: 'Design Coordination', desc: 'Collaboration with architects and engineers to finalize drawings and approvals.', img: '/images/interior.jpg' },
  { icon: HardHat, title: 'Pre-Construction', desc: 'Procurement, site mobilization, and stringent safety planning protocols.', img: '/images/industrial.jpg' },
  { icon: Cog, title: 'Construction', desc: 'Precision execution, expert supervision, and transparent progress management.', img: '/images/team.jpg' },
  { icon: CheckCircle, title: 'Quality & Inspection', desc: 'Rigorous material testing, snagging, and corrective quality control.', img: '/images/details.jpg' },
  { icon: FileCheck, title: 'Handover', desc: 'Final completion checks, documentation handover, and client walkthroughs.', img: '/images/sustainable.jpg' },
  { icon: LifeBuoy, title: 'Aftercare', desc: 'Ongoing warranty support, maintenance, and long-term relationship building.', img: '/images/residential.jpg' },
];

const pad = (n: number) => String(n).padStart(2, '0');

/* ---------- page ---------- */
export default function ProcessPage() {
  const heroRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const ActiveIcon = steps[active].icon;

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
          <Image src="/images/interior.jpg" alt="Rakvih Construction interior project" fill priority className="object-cover opacity-40 drift" />
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
                  <span className="block rise">A structured path</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                    to excellence.
                  </span>
                </span>
              </h1>
              <p className="max-w-md text-neutral-300 font-light text-base md:text-lg leading-relaxed md:text-right">
                A clear, predictable process reduces uncertainty. We follow a rigorous 9-step methodology to ensure every project is delivered flawlessly.
              </p>
            </div>
          </div>
        </section>

        {/* STEPS: sticky image panel on the left, scrolling steps on the right */}
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* sticky panel (desktop only) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="sticky top-28 h-[70vh] overflow-hidden border border-white/10">
                {steps.map((s, i) => (
                  <Image
                    key={s.title}
                    src={s.img}
                    alt={i === active ? s.title : ''}
                    fill
                    priority={i === 0}
                    className={`object-cover transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-[#FFD400]/50 flex items-center justify-center">
                  <ActiveIcon className="w-6 h-6 text-[#FFD400]" strokeWidth={1.5} />
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <p className="font-serif font-light text-6xl leading-none text-[#FFD400]">{pad(active + 1)}</p>
                  <p className="text-neutral-300 text-sm pb-1">
                    Step {active + 1} of {steps.length}
                  </p>
                </div>
              </div>
            </div>

            {/* steps list with progress rail */}
            <div className="lg:col-span-7 relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10" aria-hidden />
              <div
                className="absolute left-[19px] top-0 w-px bg-[#FFD400] transition-all duration-700"
                style={{ height: `${((active + 1) / steps.length) * 100}%` }}
                aria-hidden
              />

              <ol>
                {steps.map((s, i) => (
                  <li
                    key={s.title}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    data-idx={i}
                    className="relative pl-16 md:pl-20 py-8"
                  >
                    <span
                      className={`absolute left-0 top-8 w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all duration-500 ${
                        i <= active ? 'bg-[#FFD400] border-[#FFD400] text-black font-medium' : 'bg-black border-white/25 text-neutral-400'
                      }`}
                    >
                      {i + 1}
                    </span>

                    <div className={`transition-opacity duration-700 ${i === active ? 'opacity-100' : 'lg:opacity-40'}`}>
                      {/* image on mobile */}
                      <div className="relative h-52 mb-6 overflow-hidden lg:hidden border border-white/10">
                        <Image src={s.img} alt={s.title} fill className="object-cover" />
                      </div>
                      <s.icon className="w-7 h-7 text-[#FFD400] mb-5" strokeWidth={1.5} />
                      <h2 className="font-serif font-light text-3xl md:text-4xl leading-tight mb-4">{s.title}</h2>
                      <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-md">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}