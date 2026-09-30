import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanvasSequence from '@/components/CanvasSequence';
import MagicalText from '@/components/MagicalText';
import SmoothScroll from '@/components/SmoothScroll';
import { Reveal } from '@/components/Motion';

/* ---------- hero sequence (content unchanged) ---------- */
const heroPanels = [
  { pos: 'text-bottom-left-pos', label: 'The Rakvih Legacy', a: 'MASTERING', b: 'PERFECTION', md: true,
    desc: "At Rakvih Constructions, we don't just build homes; we craft enduring legacies. Founded on the principles of uncompromising quality and visionary design, every Rakvih project is a symphony of artistry and precision engineering." },
  { pos: 'text-right-pos text-top-right-pos', label: 'The Foundation', a: 'GROUND', b: 'ZERO', md: true,
    desc: 'Establishing the core elements that will support a lasting legacy of design and engineering.' },
  { pos: 'text-bottom-right-pos', label: 'The Blueprint', a: 'ARCHITECTURAL', b: 'DRAFT', md: true,
    desc: 'Every line drawn with purpose, preparing to bring visionary concepts into physical reality.' },
  { id: 'section-1', pos: 'text-left', label: 'Rakvih Constructions', a: 'ARCHITECTURAL', b: 'BRILLIANCE', md: false, h1: true,
    desc: 'Experience ultra-premium living spaces crafted with uncompromising precision and visionary design. Every Rakvih home is a testament to the seamless blend of luxury and functionality, offering an unparalleled living experience.' },
  { id: 'section-2', pos: 'text-top-right-pos', label: 'Craftsmanship', a: 'UNMATCHED', b: 'ELEGANCE', md: true,
    desc: 'Every detail meticulously designed to perfection. Your sanctuary of luxury awaits, with bespoke finishes, state-of-the-art amenities, and an ambiance that exudes exclusivity and comfort in every corner.' },
  { id: 'section-3', pos: 'text-bottom-right-pos', label: 'Engineering', a: 'STRUCTURAL', b: 'INTEGRITY', md: true,
    desc: 'Built to last generations with the finest, sustainably sourced materials and world-class engineering. Our structures are not just homes; they are enduring legacies of strength, resilience, and timeless aesthetic appeal.' },
  { id: 'section-4', pos: 'text-bottom-left-pos', label: 'Begin Your Legacy', a: 'START YOUR', b: 'JOURNEY', md: true, cta: true,
    desc: 'Contact us to begin crafting your architectural masterpiece. Let our team of master builders and visionary architects transform your dream into a tangible reality of unparalleled luxury.' },
];

/* ---------- section data ---------- */
const services = [
  { title: 'Residential Construction', desc: 'Ultra-premium bespoke homes designed for modern luxury and timeless elegance.', img: '/images/residential.jpg' },
  { title: 'Commercial Construction', desc: 'State-of-the-art office spaces, retail environments, and corporate headquarters.', img: '/images/commercial.jpg' },
  { title: 'Industrial Construction', desc: 'High-capacity, technologically advanced facilities built for scale and efficiency.', img: '/images/industrial.jpg' },
  { title: 'Infrastructure Projects', desc: 'Large-scale public and private civic engineering projects that shape the future.', img: '/images/hero.jpg' },
  { title: 'Interior & Fit-Out', desc: 'Exquisite interior finishing, bespoke detailing, and world-class spatial planning.', img: '/images/interior.jpg' },
  { title: 'Project Management', desc: 'End-to-end oversight ensuring on-time, on-budget delivery without compromises.', img: '/images/details.jpg' },
];

const projects = [
  { title: 'The Celestia Residences', cat: 'Luxury Residential', loc: 'Mumbai', slug: 'the-celestia-residences', img: '/images/residential.jpg' },
  { title: 'Vertex Business Park', cat: 'Commercial', loc: 'Bengaluru', slug: 'vertex-business-park', img: '/images/commercial.jpg' },
  { title: 'Riverside Elevated Corridor', cat: 'Infrastructure', loc: 'Ahmedabad', slug: 'riverside-elevated-corridor', img: '/images/hero.jpg' },
];

const process = [
  { title: 'Discover', desc: 'Understand your vision and requirements', img: '/images/hero.jpg' },
  { title: 'Plan', desc: 'Detailed planning and feasibility', img: '/images/details.jpg' },
  { title: 'Coordinate', desc: 'Integrated design and technical coordination', img: '/images/team.jpg' },
  { title: 'Build', desc: 'Precision execution with quality control', img: '/images/industrial.jpg' },
  { title: 'Inspect', desc: 'Rigorous inspection and safety management', img: '/images/interior.jpg' },
  { title: 'Handover', desc: 'Timely delivery and ongoing support', img: '/images/process.jpg' },
];

const commitments = [
  { icon: Leaf, title: 'Sustainability', desc: 'Green construction for a healthier future' },
  { icon: Shield, title: 'Safety first', desc: 'People, safety and well-being at every step' },
  { icon: Award, title: 'Quality', desc: 'Uncompromised standards in execution' },
];

const insights = [
  { title: 'Key Trends in Modern Construction in 2025', date: 'June 15, 2025', img: '/images/hero.jpg' },
  { title: 'How Sustainable Construction Creates Long-Term Value', date: 'May 28, 2025', img: '/images/sustainable.jpg' },
  { title: 'Choosing the Right Materials for Modern Homes', date: 'May 10, 2025', img: '/images/commercial.jpg' },
];

const yellowBtn =
  'inline-flex items-center gap-3 bg-[#FFD400] text-black font-medium px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]';
const textLink =
  'group/l inline-flex items-center gap-3 text-[#FFD400] border-b border-[#FFD400]/40 pb-1 hover:border-[#FFD400] transition-colors whitespace-nowrap';

function SectionHead({ title, text, href, cta, dark = true }: { title: string; text: string; href: string; cta: string; dark?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
      <div className="max-w-2xl">
        <div className="w-10 h-px bg-[#FFD400] mb-6" style={{ height: dark ? 1 : 2 }} />
        <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight mb-5">{title}</h2>
        <p className={`font-light text-base md:text-lg leading-relaxed ${dark ? 'text-neutral-400' : 'text-neutral-600'}`}>{text}</p>
      </div>
      <Link href={href} className={textLink}>
        {cta}
        <ArrowRight className="w-4 h-4 group-hover/l:translate-x-2 transition-transform duration-500" />
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white selection:bg-[#FFD400] selection:text-black font-sans relative">
        <CanvasSequence />

        {/* Header overlays the canvas */}
        <div className="relative z-50">
          <Header />
        </div>

        {/* HERO SEQUENCE (unchanged) */}
        <div id="app" className="relative z-10">
          <main>
            {heroPanels.map((p, i) => {
              const Title = p.h1 ? 'h1' : 'h2';
              return (
                <div key={p.label}>
                  <MagicalText id={p.id}>
                    <div className={`text-overlay ${p.pos}`}>
                      <div className="accent-line">
                        <div className="accent-bar"></div>
                        <span className="accent-label">{p.label}</span>
                      </div>
                      <Title className={`title-bold${p.md ? ' title-md' : ''}`}>
                        {p.a}
                        <br />
                        <span className="title-stroke">{p.b}</span>
                      </Title>
                      <p className="desc">{p.desc}</p>
                      {p.cta && (
                        <div style={{ textAlign: 'left' }}>
                          <Link href="/contact" className="cta-pill relative z-50 pointer-events-auto">
                            Inquire Now
                          </Link>
                        </div>
                      )}
                    </div>
                  </MagicalText>
                  {i < heroPanels.length - 1 && <section className="panel empty-spacer"></section>}
                </div>
              );
            })}
            <section style={{ height: '10vh' }}></section>
          </main>
        </div>

        {/* ===================== REDESIGNED SECTIONS ===================== */}
        <div className="relative z-20 bg-black w-full">
          {/* SERVICES */}
          <section id="services" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionHead
                  title="Comprehensive construction solutions"
                  text="From residential to large-scale infrastructure, we deliver world-class construction and engineering solutions with unyielding quality, precision, and purpose."
                  href="/services"
                  cta="View all services"
                />
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 3) * 120}>
                    <Link href="/services" className="group relative block h-[380px] overflow-hidden outline-none">
                      <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full group-focus-visible:w-full transition-all duration-700" />
                      <div className="absolute inset-x-0 bottom-0 p-7">
                        <h3 className="font-serif font-light text-2xl mb-3 group-hover:text-[#FFD400] transition-colors duration-500">{s.title}</h3>
                        <p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed mb-4">{s.desc}</p>
                        <span className="inline-flex items-center gap-2 text-[#FFD400] text-sm">
                          Explore service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURED PROJECTS (light section for contrast) */}
          <section id="projects" className="py-20 md:py-28 bg-white text-black">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionHead
                  dark={false}
                  title="Iconic spaces, real impact"
                  text="From modern residences to large-scale infrastructure, our projects reflect our commitment to quality, innovation and long-term value."
                  href="/projects"
                  cta="View all projects"
                />
              </Reveal>

              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 120} className={i === 1 ? 'md:mt-14' : ''}>
                    <Link href={`/projects/${p.slug}`} className="group block outline-none">
                      <div className="relative h-[420px] overflow-hidden">
                        <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full group-focus-visible:w-full transition-all duration-700" />
                      </div>
                      <div className="pt-5 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif font-light text-2xl group-hover:text-[#B89600] transition-colors duration-500">{p.title}</h3>
                          <p className="text-neutral-600 font-light mt-1">{p.cat}, {p.loc}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 mt-2 shrink-0 group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESS: six numbered steps (a real sequence) */}
          <section id="process" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionHead
                  title="A structured path to excellence"
                  text="Six clear stages take every project from first conversation to long-term support."
                  href="/process"
                  cta="Learn more"
                />
              </Reveal>

              <ol className="grid sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 border-t border-white/10 pt-10">
                {process.map((s, i) => (
                  <li key={s.title}>
                    <Reveal delay={i * 100}>
                      <div className="group">
                        <div className="relative h-40 overflow-hidden mb-5">
                          <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                          <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full transition-all duration-700" />
                        </div>
                        <p className="font-serif text-3xl font-light text-[#FFD400] mb-2">{String(i + 1).padStart(2, '0')}</p>
                        <h3 className="font-serif text-xl font-light mb-2">{s.title}</h3>
                        <p className="text-neutral-400 font-light text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* COMMITMENT */}
          <section id="about" className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden">
            <Image src="/images/process.jpg" alt="Sustainable building" fill className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" aria-hidden />

            <div className="container mx-auto px-6 relative grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              <Reveal>
                <div className="w-10 h-px bg-[#FFD400] mb-6" />
                <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight mb-5">Building a sustainable tomorrow</h2>
                <p className="text-neutral-300 font-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                  We integrate safety, quality and sustainability in every project to create lasting value for people and the planet.
                </p>
                <Link href="/about" className={yellowBtn}>
                  Our commitment <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>

              <Reveal delay={150}>
                <ul className="divide-y divide-white/15 border-y border-white/15">
                  {commitments.map((c) => (
                    <li key={c.title} className="flex items-center gap-6 py-6">
                      <c.icon className="w-8 h-8 text-[#FFD400] shrink-0" strokeWidth={1.25} />
                      <div>
                        <h3 className="font-serif font-light text-xl md:text-2xl">{c.title}</h3>
                        <p className="text-neutral-400 font-light text-sm md:text-base mt-1">{c.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>

          {/* TESTIMONIAL */}
          <section className="py-20 md:py-28 bg-white text-black">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <Reveal>
                <div className="w-10 h-[2px] bg-[#FFD400] mb-8 mx-auto" />
                <h2 className="font-serif font-light text-3xl md:text-4xl mb-12">Trusted by clients worldwide</h2>
                <figure>
                  <blockquote className="font-serif font-light italic text-2xl md:text-3xl leading-relaxed">
                    &ldquo;Exceptional quality, professionalism and on-time delivery. The team exceeded our expectations at every stage of the residential high-rise project.&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center justify-center gap-4 text-left">
                    <span className="relative w-14 h-14 rounded-full overflow-hidden block">
                      <Image src="/images/sustainable.jpg" alt="Rahul Mehta" fill className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-medium text-lg">Rahul Mehta</span>
                      <span className="block text-neutral-600 text-sm">Director, Urban Developers</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </section>

          {/* INSIGHTS */}
          <section id="insights" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionHead
                  title="Knowledge that builds better"
                  text="Perspectives on construction technology, sustainability and materials from our team."
                  href="/insights"
                  cta="View all insights"
                />
              </Reveal>

              <div className="grid md:grid-cols-3 gap-8">
                {insights.map((a, i) => (
                  <Reveal key={a.title} delay={i * 120}>
                    <Link href="/insights" className="group flex flex-col h-full border border-white/10 hover:border-[#FFD400]/60 transition-colors duration-700 outline-none focus-visible:border-[#FFD400]">
                      <div className="relative h-52 overflow-hidden">
                        <Image src={a.img} alt={a.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-sm text-neutral-500 mb-3">{a.date}</p>
                        <h3 className="font-serif font-light text-xl md:text-2xl leading-snug mb-5 group-hover:text-[#FFD400] transition-colors duration-500">{a.title}</h3>
                        <span className="mt-auto inline-flex items-center gap-2 text-[#FFD400] text-sm">
                          Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="border-t border-white/10 py-20 md:py-28">
            <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <Reveal className="max-w-2xl">
                <div className="w-10 h-px bg-[#FFD400] mb-6" />
                <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight mb-5">Start your next project with us</h2>
                <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed">
                  Get in touch to discuss your project requirements and discover how we can bring your vision to life.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <Link href="/contact" className={`${yellowBtn} whitespace-nowrap`}>
                  Get a free consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}