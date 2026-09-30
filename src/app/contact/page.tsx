'use client';

import { useEffect, useRef, useState, type ReactNode, type FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

/* ---------- data ---------- */
const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Infrastructure',
  'Interior fit-out',
  'Other',
];

const info = [
  {
    icon: MapPin,
    title: 'Corporate headquarters',
    lines: ['238, 2nd Main, 2nd Cross, Attur Layout', 'Yelahanka, Bengaluru', 'Karnataka 560064'],
  },
  { icon: Phone, title: 'Direct contact', lines: ['+91 82963 92047'], href: 'tel:+918296392047' },
  {
    icon: Mail,
    title: 'Email inquiries',
    lines: ['projects@rakvihconstruction.com', 'info@rakvihconstruction.com'],
    href: 'mailto:projects@rakvihconstruction.com',
  },
  {
    icon: Clock,
    title: 'Operating hours',
    lines: ['Monday to Friday: 9:00 AM to 6:00 PM', 'Saturday: 9:00 AM to 2:00 PM'],
  },
];

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

const field =
  'peer w-full bg-transparent border-b border-white/25 pt-6 pb-2 text-white placeholder-transparent outline-none focus:border-[#FFD400] transition-colors';
const floatLabel =
  'absolute left-0 top-1 text-xs text-neutral-400 transition-all pointer-events-none peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#FFD400]';

/* ---------- page ---------- */
export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState('');
  const [sent, setSent] = useState(false);

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: send { ...data, projectType: type } to your API / email service here
    console.log({ ...data, projectType: type });
    setSent(true);
  };

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
          <Image src="/images/residential.jpg" alt="Rakvih Construction residential project" fill priority className="object-cover opacity-40 drift" />
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
                  <span className="block rise">Let&apos;s build something</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                    exceptional.
                  </span>
                </span>
              </h1>
              <p className="max-w-md text-neutral-300 font-light text-base md:text-lg leading-relaxed md:text-right">
                Whether you have a fully drafted plan or just an initial concept, our team is ready to consult.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN: info + map on the left, form on the right */}
        <section className="py-16 md:py-24 border-t border-white/10">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="w-10 h-px bg-[#FFD400] mb-6" />
                <h2 className="font-serif font-light text-3xl md:text-4xl mb-8">Contact information</h2>
              </Reveal>

              <ul className="border-t border-white/10">
                {info.map((item, i) => (
                  <li key={item.title}>
                    <Reveal delay={i * 100}>
                      <div className="group flex gap-5 py-6 border-b border-white/10">
                        <div className="w-11 h-11 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FFD400] group-hover:border-[#FFD400] transition-colors duration-500">
                          <item.icon className="w-5 h-5 text-[#FFD400] group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-light mb-2">{item.title}</h3>
                          {item.href ? (
                            <a href={item.href} className="block text-neutral-400 font-light leading-relaxed hover:text-[#FFD400] transition-colors">
                              {item.lines.map((l) => (
                                <span key={l} className="block">{l}</span>
                              ))}
                            </a>
                          ) : (
                            <p className="text-neutral-400 font-light leading-relaxed">
                              {item.lines.map((l) => (
                                <span key={l} className="block">{l}</span>
                              ))}
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>

              <Reveal delay={200} className="mt-8">
                <div className="relative h-64 overflow-hidden border border-white/10">
                  <iframe
                    title="Rakvih Construction location map"
                    src="https://www.google.com/maps?q=Attur+Layout+Yelahanka+Bengaluru+560064&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </Reveal>
            </div>

            {/* RIGHT: form */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="border border-white/15 p-8 md:p-12 bg-white/[0.02]">
                  {sent ? (
                    <div className="py-16 text-center" role="status">
                      <div className="w-16 h-16 rounded-full bg-[#FFD400] text-black flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif font-light text-3xl mb-3">Thank you. We have your inquiry.</h3>
                      <p className="text-neutral-400 font-light max-w-sm mx-auto">
                        Our team will review your project details and get back to you soon.
                      </p>
                      <button
                        onClick={() => {
                          setSent(false);
                          setType('');
                        }}
                        className="mt-8 text-[#FFD400] border-b border-[#FFD400] pb-1 hover:text-white hover:border-white transition-colors"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-10 h-px bg-[#FFD400] mb-6" />
                      <h2 className="font-serif font-light text-3xl md:text-4xl mb-2">Start a project</h2>
                      <p className="text-neutral-400 font-light mb-10">Tell us a little about what you want to build.</p>

                      <form onSubmit={onSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="relative">
                            <input id="name" name="name" type="text" required placeholder="Full name" className={field} />
                            <label htmlFor="name" className={floatLabel}>Full name *</label>
                          </div>
                          <div className="relative">
                            <input id="company" name="company" type="text" placeholder="Company" className={field} />
                            <label htmlFor="company" className={floatLabel}>Company</label>
                          </div>
                          <div className="relative">
                            <input id="email" name="email" type="email" required placeholder="Email address" className={field} />
                            <label htmlFor="email" className={floatLabel}>Email address *</label>
                          </div>
                          <div className="relative">
                            <input id="phone" name="phone" type="tel" placeholder="Phone number" className={field} />
                            <label htmlFor="phone" className={floatLabel}>Phone number</label>
                          </div>
                        </div>

                        <fieldset>
                          <legend className="text-sm text-neutral-400 mb-4">Project type</legend>
                          <div className="flex flex-wrap gap-3">
                            {projectTypes.map((t) => (
                              <button
                                key={t}
                                type="button"
                                aria-pressed={type === t}
                                onClick={() => setType(type === t ? '' : t)}
                                className={`px-5 py-2.5 rounded-full border text-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD400] ${
                                  type === t
                                    ? 'bg-[#FFD400] border-[#FFD400] text-black font-medium'
                                    : 'border-white/25 text-neutral-300 hover:border-[#FFD400] hover:text-white'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </fieldset>

                        <div className="relative">
                          <textarea
                            id="details"
                            name="details"
                            rows={4}
                            required
                            placeholder="Project details"
                            className={`${field} resize-none`}
                          />
                          <label htmlFor="details" className={floatLabel}>Project details: scope, timeline and location *</label>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="group inline-flex items-center justify-center gap-3 bg-[#FFD400] text-black font-medium px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 w-full md:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]"
                          >
                            Submit inquiry
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>
                          <p className="text-xs text-neutral-500 mt-4 max-w-md">
                            By submitting this form, you agree to our privacy policy and consent to being contacted about your inquiry.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}