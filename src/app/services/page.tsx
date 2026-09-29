import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      desc: "We build ultra-luxury villas, contemporary high-rise apartments, and sprawling estates. Our residential team ensures every home is crafted with meticulous attention to detail, premium materials, and unparalleled structural integrity.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      features: ["Custom Home Building", "High-Rise Apartments", "Luxury Villas", "Turnkey Solutions"]
    },
    {
      title: "Commercial Construction",
      desc: "Delivering state-of-the-art corporate offices, retail spaces, and mixed-use developments that reflect your brand's prestige. We focus on creating spaces that maximize productivity, sustainability, and aesthetic appeal.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      features: ["Corporate Headquarters", "Retail Complexes", "Mixed-Use Developments", "Boutique Hotels"]
    },
    {
      title: "Industrial Construction",
      desc: "Robust, efficient, and technologically advanced industrial facilities. From massive warehouses to specialized manufacturing plants, our engineering expertise ensures highly functional and safe environments.",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
      features: ["Manufacturing Plants", "Warehouses & Logistics", "Data Centers", "Cold Storage Facilities"]
    },
    {
      title: "Infrastructure Development",
      desc: "Building the framework of tomorrow. Our team engineers highly complex infrastructure projects including bridges, highways, and public transit systems, prioritizing longevity, safety, and minimal environmental impact.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      features: ["Bridges & Highways", "Public Transit Systems", "Urban Planning", "Civic Centers"]
    },
    {
      title: "Sustainable Architecture",
      desc: "Leading the transition to green building. We integrate renewable energy solutions, eco-friendly materials, and smart technologies to construct zero-emission buildings that harmonize with their natural surroundings.",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop",
      features: ["LEED Certified Buildings", "Renewable Energy Integration", "Eco-Friendly Materials", "Smart Climate Control"]
    },
    {
      title: "Heritage Restoration",
      desc: "Preserving history while adapting for the future. Our restoration experts meticulously revive historic structures, utilizing specialized conservation techniques to protect their legacy while seamlessly upgrading internal systems.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      features: ["Historical Conservation", "Structural Reinforcement", "Facade Restoration", "Modern Systems Retrofit"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-dark-card border-b border-white/5">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-20">
            <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Expertise & Scope</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Comprehensive <br />
              <span className="font-bold">Capabilities</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We leverage advanced engineering, modern technology, and masterful craftsmanship to deliver world-class infrastructure across diverse sectors.
            </p>
          </div>
        </section>

        {/* Detailed Services Alternating */}
        {services.map((srv, idx) => {
          const isLight = idx % 2 !== 0; // Alternate themes
          return (
            <section key={idx} className={`py-12 md:py-16 overflow-hidden ${isLight ? 'bg-gray-50 text-dark-bg' : 'bg-dark-bg text-white'}`}>
              <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
                <div className={`flex flex-col lg:flex-row items-center ${isLight ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Section */}
                  <FadeIn direction={isLight ? 'left' : 'right'} className="w-full lg:w-3/5 z-10">
                    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden shadow-2xl group cursor-pointer rounded-sm">
                      <Image 
                        src={srv.img} 
                        alt={srv.title} 
                        fill 
                        className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      />
                      <div className={`absolute inset-0 transition-colors duration-700 ${isLight ? 'bg-dark-bg/20 group-hover:bg-dark-bg/5' : 'bg-dark-bg/40 group-hover:bg-dark-bg/10'}`} />
                      {/* Decorative internal border */}
                      <div className="absolute inset-6 md:inset-10 border border-white/30 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                    </div>
                  </FadeIn>
                  
                  {/* Text Card Section (Overlapping) */}
                  <FadeIn direction={isLight ? 'right' : 'left'} delay={200} className={`w-full lg:w-2/5 z-20 ${isLight ? 'lg:mr-[-8%]' : 'lg:ml-[-8%]'} mt-[-10%] lg:mt-0`}>
                    <div className={`${isLight ? 'bg-white border-gray-100' : 'bg-dark-card border-white/10'} border p-10 md:p-14 shadow-2xl relative group overflow-hidden`}>
                      {/* Glow effects */}
                      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-1000 ease-out" />
                      <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-gold/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Watermark Number */}
                      <div className={`${isLight ? 'text-gray-900 opacity-5 group-hover:opacity-10' : 'text-white opacity-[0.02] group-hover:opacity-[0.05]'} font-black text-7xl md:text-8xl absolute right-8 top-8 select-none pointer-events-none group-hover:text-gold transition-colors duration-700`}>0{idx + 1}</div>
                      
                      {/* Split Title Highlights */}
                      <h2 className="text-3xl md:text-4xl font-light mb-6 relative z-10">
                        {srv.title.split(' ')[0]} <span className="font-bold text-gold">{srv.title.split(' ').slice(1).join(' ')}</span>
                      </h2>
                      
                      <p className={`${isLight ? 'text-gray-600' : 'text-gray-400'} text-lg leading-relaxed mb-10 font-light relative z-10 transition-colors`}>
                        {srv.desc}
                      </p>
                      
                      <ul className="grid grid-cols-1 gap-4 mb-10 relative z-10">
                        {srv.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-4 group/item">
                            <CheckCircle2 className="w-5 h-5 text-gold/50 group-hover/item:text-gold transition-colors duration-300 shrink-0" />
                            <span className={`${isLight ? 'text-gray-600 group-hover/item:text-gray-900' : 'text-gray-500 group-hover/item:text-gray-200'} transition-colors duration-300 font-light`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="border border-gold/30 text-gold px-8 py-4 hover:bg-gold hover:text-dark-bg transition-colors font-semibold uppercase tracking-wider text-sm flex items-center gap-3 w-full justify-center group/btn relative z-10">
                        Discuss a Project <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </button>
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
