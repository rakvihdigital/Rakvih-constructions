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
      img: "/images/residential.jpg",
      features: ["Custom Home Building", "High-Rise Apartments", "Luxury Villas", "Turnkey Solutions"]
    },
    {
      title: "Commercial Construction",
      desc: "Delivering state-of-the-art corporate offices, retail spaces, and mixed-use developments that reflect your brand's prestige. We focus on creating spaces that maximize productivity, sustainability, and aesthetic appeal.",
      img: "/images/sustainable.jpg",
      features: ["Corporate Headquarters", "Retail Complexes", "Mixed-Use Developments", "Boutique Hotels"]
    },
    {
      title: "Industrial Construction",
      desc: "Robust, efficient, and technologically advanced industrial facilities. From massive warehouses to specialized manufacturing plants, our engineering expertise ensures highly functional and safe environments.",
      img: "/images/industrial.jpg",
      features: ["Manufacturing Plants", "Warehouses & Logistics", "Data Centers", "Cold Storage Facilities"]
    },
    {
      title: "Infrastructure Development",
      desc: "Building the framework of tomorrow. Our team engineers highly complex infrastructure projects including bridges, highways, and public transit systems, prioritizing longevity, safety, and minimal environmental impact.",
      img: "/images/team.jpg",
      features: ["Bridges & Highways", "Public Transit Systems", "Urban Planning", "Civic Centers"]
    },
    {
      title: "Sustainable Architecture",
      desc: "Leading the transition to green building. We integrate renewable energy solutions, eco-friendly materials, and smart technologies to construct zero-emission buildings that harmonize with their natural surroundings.",
      img: "/images/process.jpg",
      features: ["LEED Certified Buildings", "Renewable Energy Integration", "Eco-Friendly Materials", "Smart Climate Control"]
    },
    {
      title: "Heritage Restoration",
      desc: "Preserving history while adapting for the future. Our restoration experts meticulously revive historic structures, utilizing specialized conservation techniques to protect their legacy while seamlessly upgrading internal systems.",
      img: "/images/details.jpg",
      features: ["Historical Conservation", "Structural Reinforcement", "Facade Restoration", "Modern Systems Retrofit"]
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
              src="/images/process.jpg" 
              alt="Services Overview" 
              fill 
              className="object-cover object-center grayscale opacity-50"
            />
          </div>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 relative z-20 text-center md:text-left">
            <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Expertise & Scope</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Comprehensive <br />
              <span className="font-bold">Capabilities</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
              We leverage advanced engineering, modern technology, and masterful craftsmanship to deliver world-class infrastructure across diverse sectors.
            </p>
          </div>
        </section>

        {/* Clean Services Grid */}
        <section className="py-20 bg-dark-bg">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((srv, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 100}>
                  <div className="bg-dark-card border border-white/5 h-full flex flex-col group overflow-hidden">
                    {/* Image Header */}
                    <div className="relative h-[250px] w-full overflow-hidden">
                      <Image 
                        src={srv.img} 
                        alt={srv.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                    
                    {/* Content Body */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h2 className="text-2xl font-light mb-4">
                        {srv.title.split(' ')[0]} <span className="font-bold text-gold">{srv.title.split(' ').slice(1).join(' ')}</span>
                      </h2>
                      
                      <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                        {srv.desc}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {srv.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                            <span className="text-gray-300 font-light text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="border border-white/10 text-white px-6 py-3 hover:bg-gold hover:border-gold hover:text-dark-bg transition-colors font-medium uppercase tracking-wider text-xs flex items-center justify-center gap-2 w-full mt-auto">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
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
