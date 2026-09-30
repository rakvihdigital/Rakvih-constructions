'use client';

import { useEffect, useRef, useState, type ReactNode, type FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Award, Users, HardHat, TrendingUp, Building } from 'lucide-react';

/* ---------- data (edit freely) ---------- */
const stats = [
  { n: 20, suffix: '+', label: 'Years of experience' },
  { n: 150, suffix: '+', label: 'Projects delivered' }, // placeholder: replace with real numbers
  { n: 300, suffix: '+', label: 'People on our sites' }, // placeholder
  { n: 0, suffix: '', label: 'Harm is our safety target' },
];

const services = ['Residential', 'Commercial', 'Engineering', 'Renovation', 'Project management'];

const values = [
  { icon: Award, title: 'Quality', desc: 'Uncompromising standards in every detail of execution.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent processes and honest communication.' },
  { icon: HardHat, title: 'Safety', desc: 'A zero-harm approach for our people and partners.' },
  { icon: Building, title: 'Craftsmanship', desc: 'Artistry and technical excellence combined.' },
  { icon: Users, title: 'Accountability', desc: 'Full ownership of every commitment we make.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Modern technology used to build smarter.' },
];

const leaders = [
  { name: 'Arjun Rakvih', role: 'Founder & CEO', exp: '20+ years experience', img: '/images/team.jpg' },
  { name: 'Sarah Jenkins', role: 'Chief Operating Officer', exp: '15+ years experience', img: '/images/team.jpg' },
  { name: 'Vikram Mehta', role: 'Head of Engineering', exp: '18+ years experience', img: '/images/team.jpg' },
];

/* ---------- helpers ---------- */
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
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
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>(0.15);
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

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.5);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setV(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

/* ---------- page ---------- */
export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r || !heroRef.current) return;
    heroRef.current.style.setProperty('--x', `${e.clientX - r.left}px`);
    heroRef.current.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your newsletter API here
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#FFD400] selection:text-black">
      <style>{`
        @keyframes rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes drift { from { transform: scale(1.12); } to { transform: scale(1); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .rise { animation: rise 1.1s cubic-bezier(.16,1,.3,1) both; }
        .drift { animation: drift 2.4s cubic-bezier(.16,1,.3,1) both; }
        .marquee { animation: marquee 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .rise, .drift, .marquee { animation: none; } }
      `}</style>

      {/* scroll progress */}
      <div className="fixed top-0 left-0 h-[2px] bg-[#FFD400] z-[60]" style={{ width: `${progress}%` }} aria-hidden />

      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section
          ref={heroRef}
          onMouseMove={onMove}
          className="relative min-h-[85vh] flex items-end overflow-hidden pt-24"
          style={{ ['--x' as string]: '70%', ['--y' as string]: '30%' }}
        >
          <Image src="/images/hero.jpg" alt="Rakvih Construction project" fill priority className="object-cover opacity-40 drift" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(420px circle at var(--x) var(--y), rgba(255,212,0,0.2), transparent 70%)' }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" aria-hidden />

          <div className="container mx-auto px-6 pb-14 lg:pb-20 relative">
            <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block overflow-hidden pb-1">
                <span className="block rise">Building</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                  excellence,
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block rise" style={{ animationDelay: '300ms' }}>
                  delivering trust.
                </span>
              </span>
            </h1>

            <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/15 pt-6">
              <p className="max-w-md text-neutral-300 font-light text-base md:text-lg leading-relaxed">
                Rakvih Construction turns visions into finished buildings, with uncompromising quality and safety at every step.
              </p>
              <a href="#story" className="inline-flex items-center gap-4 text-sm text-neutral-300 hover:text-white transition-colors">
                Scroll to explore
                <span className="relative block w-px h-12 bg-white/20 overflow-hidden">
                  <span className="absolute inset-x-0 top-0 h-4 bg-[#FFD400] animate-bounce motion-reduce:animate-none" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="border-y border-white/10 py-4 overflow-hidden bg-black" aria-hidden>
          <div className="flex w-max marquee">
            {[...services, ...services, ...services, ...services].map((s, i) => (
              <span key={i} className="flex items-center font-serif text-xl md:text-2xl font-light text-white/80 whitespace-nowrap">
                <span className="px-6 md:px-10">{s}</span>
                <span className="w-1.5 h-1.5 rotate-45 bg-[#FFD400]" />
              </span>
            ))}
          </div>
        </div>

        {/* STORY */}
        <section id="story" className="py-10 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
              <Reveal>
                <div className="w-10 h-px bg-[#FFD400] mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-5">Our mission</h2>
                <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed">
                  To deliver construction that exceeds expectations, through continuous innovation, integrity, and a firm commitment to safety and quality on every project we undertake.
                </p>
              </Reveal>
              <Reveal delay={200} className="lg:mt-24">
                <div className="w-10 h-px bg-[#FFD400] mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-5">Our vision</h2>
                <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed">
                  To be the global benchmark in premium construction, shaping sustainable cities and iconic skylines through craftsmanship, accountability, and environmental responsibility.
                </p>
              </Reveal>
            </div>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={s.label} className={`py-8 pr-6 ${i > 0 ? 'lg:pl-8 lg:border-l border-white/10' : ''}`}>
                  <p className="font-serif text-4xl md:text-5xl font-light text-[#FFD400]">
                    <Counter to={s.n} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-neutral-400 font-light text-sm md:text-base">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-10 md:py-16 bg-white text-black">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">The principles we build on</h2>
                <div className="w-10 h-px bg-[#FFD400] my-6" />
                <p className="text-neutral-600 font-light text-base md:text-lg max-w-xs leading-relaxed">
                  Six commitments that shape every decision on and off site.
                </p>
              </div>
            </div>

            <ul className="lg:col-span-8 grid sm:grid-cols-2 border-t border-l border-neutral-300 self-start">
              {values.map((v, i) => (
                <li
                  key={v.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className="relative border-r border-b border-neutral-300 p-6 md:p-8 outline-none cursor-default transition-colors duration-500 hover:bg-neutral-50 focus:bg-neutral-50"
                >
                  <span
                    className={`absolute left-0 top-0 bg-[#FFD400] transition-all duration-700 ${active === i ? 'w-full' : 'w-0'}`}
                    style={{ height: 2 }}
                  />
                  <v.icon
                    className={`w-7 h-7 mb-6 transition-colors duration-500 ${active === i ? 'text-[#E6BF00]' : 'text-neutral-400'}`}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif font-light text-2xl md:text-3xl text-black mb-3">{v.title}</h3>
                  <p className="text-neutral-600 font-light text-base leading-relaxed">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LEADERSHIP: photos always in full colour */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6 mb-12 items-end">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">Our leadership</h2>
                <div className="w-10 h-px bg-[#FFD400] mt-6" />
              </div>
              <p className="text-neutral-400 font-light text-base md:text-lg max-w-md lg:justify-self-end leading-relaxed">
                Decades of hands-on experience guiding every project from first drawing to handover.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:h-[520px]">
              {leaders.map((l) => (
                <article
                  key={l.name}
                  tabIndex={0}
                  className="group relative overflow-hidden h-[380px] md:h-auto md:flex-1 md:hover:flex-[2] md:focus:flex-[2] transition-[flex] duration-700 ease-[cubic-bezier(.16,1,.3,1)] outline-none"
                >
                  <Image
                    src={l.img}
                    alt={l.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full group-focus:w-full transition-all duration-700" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="font-serif text-2xl md:text-3xl font-light whitespace-nowrap">{l.name}</h3>
                    <p className="text-[#FFD400] mt-1 text-sm md:text-base whitespace-nowrap">{l.role}</p>
                    <p className="text-neutral-200 font-light mt-3 text-sm md:text-base md:opacity-0 md:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-700 delay-150">
                      {l.exp}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ONE COMBINED SECTION: call to action + stay updated */}
        <section className="border-t border-white/10 py-10 md:py-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <Reveal>
              <div className="w-10 h-px bg-[#FFD400] mb-6" />
              <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight">
                Ready to construct <br className="hidden md:block" />
                your legacy?
              </h2>
              <p className="mt-5 text-neutral-400 font-light text-base md:text-lg max-w-md leading-relaxed">
                Tell us about your project and our team will get in touch to plan the next step.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center bg-[#FFD400] text-black font-medium px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]"
              >
                Start Your Project
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <div className="border border-white/15 p-8 md:p-10">
                <h3 className="font-serif font-light text-2xl md:text-3xl">Stay updated</h3>
                <p className="mt-3 text-neutral-400 font-light text-base">
                  News, new projects and industry insights, straight to your inbox.
                </p>
                {subscribed ? (
                  <p className="mt-6 text-[#FFD400]" role="status">
                    Thanks for subscribing. You are on the list.
                  </p>
                ) : (
                  <form onSubmit={onSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 bg-transparent border-b border-white/30 focus:border-[#FFD400] outline-none py-3 text-white placeholder:text-neutral-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-white text-black font-medium px-6 py-3 hover:bg-[#FFD400] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}