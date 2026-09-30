import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "The Celestia Residences",
      slug: "the-celestia-residences",
      location: "Mumbai, India",
      category: "Luxury Residential",
      status: "Completed 2025",
      img: "/images/residential.jpg",
      colSpan: "col-span-1 md:col-span-2",
      height: "h-[500px]"
    },
    {
      title: "Vertex Business Park",
      slug: "vertex-business-park",
      location: "Bengaluru, India",
      category: "Commercial Office",
      status: "Completed 2024",
      img: "/images/commercial.jpg",
      colSpan: "col-span-1",
      height: "h-[500px]"
    },
    {
      title: "Apex Manufacturing Unit",
      slug: "apex-manufacturing-unit",
      location: "Pune, India",
      category: "Industrial Facility",
      status: "Completed 2023",
      img: "/images/industrial.jpg",
      colSpan: "col-span-1",
      height: "h-[400px]"
    },
    {
      title: "Riverside Elevated Corridor",
      slug: "riverside-elevated-corridor",
      location: "Ahmedabad, India",
      category: "Infrastructure",
      status: "Completed 2024",
      img: "/images/hero.jpg",
      colSpan: "col-span-1 md:col-span-2",
      height: "h-[400px]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark-bg/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
            <Image 
              src="/images/hero.jpg" 
              alt="Projects Overview" 
              fill 
              className="object-cover object-center grayscale opacity-50"
            />
          </div>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 relative z-20 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Proof of Work</p>
                <h1 className="text-5xl md:text-7xl font-light">
                  Featured <span className="font-bold">Projects</span>
                </h1>
              </div>
              <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed mb-2 mx-auto md:mx-0 text-center md:text-right">
                A curated selection of our finest architectural and engineering accomplishments.
              </p>
            </div>
          </div>
        </section>

        {/* Clean Portfolio Grid */}
        <section className="py-20 bg-dark-bg">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {projects.map((proj, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 100}>
                  <Link href={`/projects/${proj.slug}`} className="group block">
                    <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden mb-6">
                      <Image 
                        src={proj.img} 
                        alt={proj.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="w-8 h-[1px] bg-gold block" />
                        <span className="text-gold font-bold tracking-widest text-[10px] uppercase">{proj.category}</span>
                      </div>
                      <h2 className="text-3xl font-light text-white group-hover:text-gold transition-colors duration-300">
                        {proj.title}
                      </h2>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-gray-400 font-light text-sm">{proj.location} • {proj.status}</p>
                        <span className="flex items-center gap-2 text-sm text-white group-hover:text-gold transition-colors font-medium uppercase tracking-wider">
                          Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
