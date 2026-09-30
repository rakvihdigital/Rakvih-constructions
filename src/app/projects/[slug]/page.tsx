import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => {
  return [
    { slug: 'the-celestia-residences' },
    { slug: 'vertex-business-park' },
    { slug: 'apex-manufacturing-unit' },
    { slug: 'riverside-elevated-corridor' },
  ];
};

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const allProjects: Record<string, any> = {
    'the-celestia-residences': {
      title: 'The Celestia Residences',
      category: 'Luxury Residential',
      location: 'Mumbai, India',
      area: '450,000 sq ft',
      completion: '2025',
      services: 'Master Planning, Architecture',
      heroImage: '/images/residential.jpg',
      overview: 'A towering beacon of modern luxury in the heart of Mumbai. The Celestia Residences redefines urban living with seamless integration of biophilic design, state-of-the-art home automation, and unparalleled skyline views.',
      challenge: 'The highly dense urban environment meant limited ground space for amenities. The structural challenge involved a deep foundation system within a tight footprint while ensuring strict seismic compliance.',
      solution: 'We engineered a multi-tiered sky-garden approach, moving traditional ground amenities to elevated cantilevered platforms. Advanced dampening technologies were used to guarantee structural integrity without compromising aesthetic slenderness.',
      quote: '"Rakvih Construction brought an architectural dream to life. Their precision and engineering prowess made the impossible, possible."',
      quoteAuthor: '- Lead Architect, Design Corp',
      gallery: ['/images/interior.jpg', '/images/commercial.jpg', '/images/residential.jpg']
    },
    'vertex-business-park': {
      title: 'Vertex Business Park',
      category: 'Commercial Office',
      location: 'Bengaluru, India',
      area: '1,200,000 sq ft',
      completion: '2024',
      services: 'Turnkey Construction, MEP',
      heroImage: '/images/commercial.jpg',
      overview: 'A futuristic tech campus built for the next generation of enterprise. Vertex Business Park focuses on sustainability, featuring platinum LEED certification and an intelligent climate control facade.',
      challenge: 'Delivering a massive 1.2 million sq ft facility within an aggressive 18-month timeline during unpredictable monsoon seasons.',
      solution: 'We utilized pre-cast concrete technologies and modular MEP assemblies fabricated off-site. This parallel construction strategy cut down the timeline by 20%, ensuring on-time delivery.',
      quote: '"An engineering marvel delivered on time. The attention to detail in the MEP execution is world-class."',
      quoteAuthor: '- Operations Director, Vertex Group',
      gallery: ['/images/hero.jpg', '/images/industrial.jpg', '/images/commercial.jpg']
    },
    'apex-manufacturing-unit': {
      title: 'Apex Manufacturing',
      category: 'Industrial Facility',
      location: 'Pune, India',
      area: '800,000 sq ft',
      completion: '2023',
      services: 'Heavy Civil, Structural Engineering',
      heroImage: '/images/industrial.jpg',
      overview: 'A heavy-duty manufacturing plant designed for optimal workflow and heavy machinery load-bearing capacities. Built to endure.',
      challenge: 'The facility required massive clear-span structures without intermediate columns to allow free movement of overhead cranes.',
      solution: 'Engineered custom long-span steel trusses and reinforced heavy-duty flooring capable of withstanding dynamic vibrations from heavy machinery.',
      quote: '"The structural integrity and massive column-free spaces have revolutionized our production line efficiency."',
      quoteAuthor: '- Plant Head, Apex Industries',
      gallery: ['/images/industrial.jpg', '/images/commercial.jpg', '/images/hero.jpg']
    },
    'riverside-elevated-corridor': {
      title: 'Riverside Corridor',
      category: 'Infrastructure',
      location: 'Ahmedabad, India',
      area: '12 km stretch',
      completion: '2024',
      services: 'Civil Engineering, Infrastructure',
      heroImage: '/images/hero.jpg',
      overview: 'A crucial urban artery alleviating traffic congestion. The Riverside Elevated Corridor is a 12-kilometer marvel of modern civil engineering traversing challenging riverbed terrain.',
      challenge: 'Piling and foundation work in a live riverbed with fluctuating water levels, all while maintaining traffic flow on adjacent old bridges.',
      solution: 'Deployed advanced underwater cofferdam techniques and launched pre-cast box girders using specialized gantries to minimize ground-level disruption.',
      quote: '"A landmark infrastructure project that has permanently transformed the city\'s commute landscape."',
      quoteAuthor: '- Urban Planning Committee',
      gallery: ['/images/hero.jpg', '/images/residential.jpg', '/images/industrial.jpg']
    }
  };

  const project = allProjects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-[80vh] min-h-[600px] w-full flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
          </div>
          
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <FadeIn direction="up">
              <Link href="/projects" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-gold block" />
                <span className="text-white font-light tracking-[0.2em] text-sm uppercase">{project.category}</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
                {project.title.split(' ')[0]} <br/>
                <span className="font-bold text-gold">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Project Stats Banner */}
        <section className="border-y border-white/10 bg-dark-card">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              <FadeIn delay={100} className="px-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Location</p>
                <p className="text-lg font-light">{project.location}</p>
              </FadeIn>
              <FadeIn delay={200} className="px-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Area / Scale</p>
                <p className="text-lg font-light">{project.area}</p>
              </FadeIn>
              <FadeIn delay={300} className="px-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Completion</p>
                <p className="text-lg font-light">{project.completion}</p>
              </FadeIn>
              <FadeIn delay={400} className="px-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Services</p>
                <p className="text-lg font-light">{project.services}</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Overview & Challenge */}
        <section className="py-24 bg-dark-bg">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-5">
                <FadeIn direction="right">
                  <h2 className="text-3xl md:text-4xl font-light mb-8">
                    Project <span className="font-bold">Overview</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed font-light mb-12">
                    {project.overview}
                  </p>
                  
                  <div className="p-8 border border-white/10 bg-dark-card relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                    <p className="text-xl font-light italic text-white mb-6">
                      {project.quote}
                    </p>
                    <p className="text-sm text-gold font-semibold uppercase tracking-widest">
                      {project.quoteAuthor}
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-7 space-y-16">
                <FadeIn direction="left" delay={200}>
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-4">
                    <span className="text-gold">01 //</span> The Challenge
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </FadeIn>

                <FadeIn direction="left" delay={300}>
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-4">
                    <span className="text-gold">02 //</span> The Solution
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.solution}
                  </p>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-light text-dark-bg mb-12 text-center">
                Project <span className="font-bold">Gallery</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((img: string, idx: number) => (
                <FadeIn key={idx} direction="up" delay={idx * 150} className="relative h-[400px] md:h-[500px] w-full overflow-hidden group">
                  <Image
                    src={img}
                    alt={`${project.title} Gallery ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-dark-bg text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src="/images/commercial.jpg" alt="Background" fill className="object-cover grayscale" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-light mb-8">
                Ready to build <span className="font-bold text-gold">your vision?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-12 font-light">
                Our experts are ready to turn your architectural blueprint into reality with precision and unparalleled quality.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-dark-bg px-10 py-5 font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
