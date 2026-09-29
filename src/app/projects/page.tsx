import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "The Celestia Residences",
      location: "Mumbai, India",
      category: "Luxury Residential",
      status: "Completed 2025",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      height: "h-[500px]"
    },
    {
      title: "Vertex Business Park",
      location: "Bengaluru, India",
      category: "Commercial Office",
      status: "Completed 2024",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      height: "h-[500px]"
    },
    {
      title: "Apex Manufacturing Unit",
      location: "Pune, India",
      category: "Industrial Facility",
      status: "Completed 2023",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      height: "h-[400px]"
    },
    {
      title: "Riverside Elevated Corridor",
      location: "Ahmedabad, India",
      category: "Infrastructure",
      status: "Completed 2024",
      img: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      height: "h-[400px]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Proof of Work</p>
                <h1 className="text-5xl md:text-7xl font-light">
                  Featured <span className="font-bold">Projects</span>
                </h1>
              </div>
              <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed mb-2">
                A curated selection of our finest architectural and engineering accomplishments.
              </p>
            </div>
          </div>
      </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className={`${proj.colSpan} ${proj.height} group relative overflow-hidden cursor-pointer bg-dark-card`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                  <Image 
                    src={proj.img} 
                    alt={proj.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-gold text-dark-bg text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {proj.status}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <p className="text-gold font-medium text-sm mb-2">{proj.category} — {proj.location}</p>
                    <h2 className="text-3xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {proj.title}
                    </h2>
                    <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <span className="font-semibold uppercase text-sm tracking-wider">View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
