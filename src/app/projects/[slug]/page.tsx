import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollProgress, Reveal } from '@/components/Motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

type Project = {
  title: string;
  category: string;
  location: string;
  area: string;
  completion: string;
  services: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  quote: string;
  quoteAuthor: string;
  gallery: string[];
};

const allProjects: Record<string, Project> = {
  'the-celestia-residences': {
    title: 'The Celestia Residences',
    category: 'Luxury Residential',
    location: 'Mumbai, India',
    area: '450,000 sq ft',
    completion: '2025',
    services: 'Master Planning, Architecture',
    heroImage: '/images/residential.jpg',
    overview:
      'A towering beacon of modern luxury in the heart of Mumbai. The Celestia Residences redefines urban living with seamless integration of biophilic design, state-of-the-art home automation, and unparalleled skyline views.',
    challenge:
      'The highly dense urban environment meant limited ground space for amenities. The structural challenge involved a deep foundation system within a tight footprint while ensuring strict seismic compliance.',
    solution:
      'We engineered a multi-tiered sky-garden approach, moving traditional ground amenities to elevated cantilevered platforms. Advanced dampening technologies were used to guarantee structural integrity without compromising aesthetic slenderness.',
    quote: 'Rakvih Construction brought an architectural dream to life. Their precision and engineering prowess made the impossible, possible.',
    quoteAuthor: 'Lead Architect, Design Corp',
    gallery: ['/images/interior.jpg', '/images/commercial.jpg', '/images/residential.jpg'],
  },
  'vertex-business-park': {
    title: 'Vertex Business Park',
    category: 'Commercial Office',
    location: 'Bengaluru, India',
    area: '1,200,000 sq ft',
    completion: '2024',
    services: 'Turnkey Construction, MEP',
    heroImage: '/images/commercial.jpg',
    overview:
      'A futuristic tech campus built for the next generation of enterprise. Vertex Business Park focuses on sustainability, featuring platinum LEED certification and an intelligent climate control facade.',
    challenge: 'Delivering a massive 1.2 million sq ft facility within an aggressive 18-month timeline during unpredictable monsoon seasons.',
    solution:
      'We utilized pre-cast concrete technologies and modular MEP assemblies fabricated off-site. This parallel construction strategy cut down the timeline by 20%, ensuring on-time delivery.',
    quote: 'An engineering marvel delivered on time. The attention to detail in the MEP execution is world-class.',
    quoteAuthor: 'Operations Director, Vertex Group',
    gallery: ['/images/hero.jpg', '/images/industrial.jpg', '/images/commercial.jpg'],
  },
  'apex-manufacturing-unit': {
    title: 'Apex Manufacturing',
    category: 'Industrial Facility',
    location: 'Pune, India',
    area: '800,000 sq ft',
    completion: '2023',
    services: 'Heavy Civil, Structural Engineering',
    heroImage: '/images/industrial.jpg',
    overview:
      'A heavy-duty manufacturing plant designed for optimal workflow and heavy machinery load-bearing capacities. Built to endure.',
    challenge: 'The facility required massive clear-span structures without intermediate columns to allow free movement of overhead cranes.',
    solution:
      'Engineered custom long-span steel trusses and reinforced heavy-duty flooring capable of withstanding dynamic vibrations from heavy machinery.',
    quote: 'The structural integrity and massive column-free spaces have revolutionized our production line efficiency.',
    quoteAuthor: 'Plant Head, Apex Industries',
    gallery: ['/images/industrial.jpg', '/images/commercial.jpg', '/images/hero.jpg'],
  },
  'riverside-elevated-corridor': {
    title: 'Riverside Corridor',
    category: 'Infrastructure',
    location: 'Ahmedabad, India',
    area: '12 km stretch',
    completion: '2024',
    services: 'Civil Engineering, Infrastructure',
    heroImage: '/images/hero.jpg',
    overview:
      'A crucial urban artery alleviating traffic congestion. The Riverside Elevated Corridor is a 12-kilometer marvel of modern civil engineering traversing challenging riverbed terrain.',
    challenge:
      'Piling and foundation work in a live riverbed with fluctuating water levels, all while maintaining traffic flow on adjacent old bridges.',
    solution:
      'Deployed advanced underwater cofferdam techniques and launched pre-cast box girders using specialized gantries to minimize ground-level disruption.',
    quote: "A landmark infrastructure project that has permanently transformed the city's commute landscape.",
    quoteAuthor: 'Urban Planning Committee',
    gallery: ['/images/hero.jpg', '/images/residential.jpg', '/images/industrial.jpg'],
  },
};

export const generateStaticParams = () => Object.keys(allProjects).map((slug) => ({ slug }));

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects[slug];
  if (!project) notFound();

  const slugs = Object.keys(allProjects);
  const nextSlug = slugs[(slugs.indexOf(slug) + 1) % slugs.length];
  const next = allProjects[nextSlug];

  const stats = [
    { label: 'Location', value: project.location },
    { label: 'Area / scale', value: project.area },
    { label: 'Completion', value: project.completion },
    { label: 'Services', value: project.services },
  ];

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
        <section className="relative min-h-[75vh] flex items-end overflow-hidden pt-24">
          <Image src={project.heroImage} alt={project.title} fill priority className="object-cover drift" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" aria-hidden />

          <div className="container mx-auto px-6 pb-12 lg:pb-16 relative">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-[#FFD400] transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to projects
            </Link>
            <p className="text-[#FFD400] mb-4">{project.category}</p>
            <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl max-w-4xl overflow-hidden pb-1">
              <span className="block rise">{project.title}</span>
            </h1>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-white/10">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-8 pr-6 ${i > 0 ? 'lg:pl-8 lg:border-l border-white/10' : ''} ${i % 2 === 1 ? 'pl-6 border-l border-white/10 lg:pl-8' : ''}`}>
                <p className="text-sm text-neutral-500 mb-2">{s.label}</p>
                <p className="font-serif font-light text-xl md:text-2xl">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW + QUOTE */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="w-10 h-px bg-[#FFD400] mb-6" />
              <h2 className="font-serif font-light text-3xl md:text-4xl mb-6">Project overview</h2>
              <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed">{project.overview}</p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
              <figure className="border-l-2 border-[#FFD400] pl-8">
                <blockquote className="font-serif font-light italic text-xl md:text-2xl leading-relaxed">
                  &ldquo;{project.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-neutral-400">{project.quoteAuthor}</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* CHALLENGE + SOLUTION */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20">
            <Reveal>
              <div className="w-10 h-px bg-[#FFD400] mb-6" style={{ height: 2 }} />
              <h2 className="font-serif font-light text-3xl md:text-4xl mb-6">The challenge</h2>
              <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed">{project.challenge}</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="w-10 h-px bg-[#FFD400] mb-6" style={{ height: 2 }} />
              <h2 className="font-serif font-light text-3xl md:text-4xl mb-6">The solution</h2>
              <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed">{project.solution}</p>
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="w-10 h-px bg-[#FFD400] mb-6" />
              <h2 className="font-serif font-light text-3xl md:text-4xl mb-10">Project gallery</h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <Reveal key={`${img}-${i}`} delay={i * 120} className={i === 0 ? 'md:col-span-2' : ''}>
                  <div className="group relative h-[320px] md:h-[440px] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} gallery image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT PROJECT + CTA in one section */}
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="w-10 h-px bg-[#FFD400] mb-6" />
              <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight">Ready to build your vision?</h2>
              <p className="mt-5 text-neutral-400 font-light text-base md:text-lg max-w-md leading-relaxed">
                Our experts are ready to turn your architectural blueprint into reality with precision and unparalleled quality.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#FFD400] text-black font-medium px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD400]"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link href={`/projects/${nextSlug}`} className="group block outline-none">
                <p className="text-sm text-neutral-500 mb-4">Next project</p>
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image src={next.heroImage} alt={next.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#FFD400] group-hover:w-full group-focus-visible:w-full transition-all duration-700" />
                  <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[#FFD400] text-sm">{next.category}</p>
                      <h3 className="font-serif font-light text-2xl md:text-3xl">{next.title}</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 mb-2 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}