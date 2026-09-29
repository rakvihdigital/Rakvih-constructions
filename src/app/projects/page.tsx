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
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark-bg/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
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

        {/* Editorial Portfolio Alternating */}
        {projects.map((proj, idx) => {
          const isLight = idx % 2 !== 0; // Alternate themes
          return (
            <section key={idx} className={`py-12 md:py-16 overflow-hidden ${isLight ? 'bg-gray-50 text-dark-bg' : 'bg-dark-bg text-white'}`}>
              <div className="w-full max-w-none px-4 md:px-8 lg:px-12">
                <div className={`relative flex flex-col lg:flex-row items-center group ${isLight ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Block */}
                  <FadeIn direction={isLight ? 'left' : 'right'} className="w-full lg:w-[60%] relative z-10">
                    <div className="relative h-[500px] lg:h-[700px] w-full overflow-hidden cursor-pointer shadow-2xl rounded-sm">
                      <Image 
                        src={proj.img} 
                        alt={proj.title} 
                        fill 
                        className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className={`absolute inset-0 transition-colors duration-700 ${isLight ? 'bg-dark-bg/20 group-hover:bg-dark-bg/5' : 'bg-dark-bg/40 group-hover:bg-dark-bg/10'}`} />
                      <div className="absolute top-8 left-8 border border-white/30 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <div className="absolute bottom-8 right-8 border border-white/30 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                  </FadeIn>

                  {/* Text Block (Overlapping) */}
                  <FadeIn direction={isLight ? 'right' : 'left'} delay={200} className={`w-full lg:w-[45%] z-20 ${isLight ? 'lg:mr-[-5%]' : 'lg:ml-[-5%]'} mt-[-10%] lg:mt-0`}>
                    <div className={`${isLight ? 'bg-white border-gray-100' : 'bg-dark-card border-white/10'} border p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden`}>
                      {/* Decorative background number */}
                      <div className={`absolute -top-10 -right-10 text-[200px] font-black select-none pointer-events-none transition-colors duration-1000 ${isLight ? 'text-gray-900 opacity-5 group-hover:opacity-10 group-hover:text-gold' : 'text-white/5 group-hover:text-gold/5'}`}>
                        0{idx + 1}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="w-12 h-[1px] bg-gold block" />
                          <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase">{proj.category}</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-[1.1]">
                          {proj.title.split(' ')[0]} <br/>
                          <span className="font-bold text-gold">{proj.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        
                        <div className={`mb-10 font-light flex flex-col gap-2 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                          <p className={`${isLight ? 'text-gray-900 font-medium' : 'text-white'}`}>{proj.location}</p>
                          <p>{proj.status}</p>
                        </div>
                        
                        <button className={`group/btn flex items-center gap-4 uppercase tracking-widest text-sm font-semibold hover:text-gold transition-colors ${isLight ? 'text-dark-bg' : 'text-white'}`}>
                          Explore Project 
                          <div className={`w-10 h-10 rounded-full border flex items-center justify-center group-hover/btn:border-gold group-hover/btn:bg-gold/10 transition-all ${isLight ? 'border-dark-bg/20' : 'border-white/20'}`}>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
