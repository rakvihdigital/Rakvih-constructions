import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Shield, Award, Users, HardHat, TrendingUp, Building } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        {/* Hero Banner */}
        <section className="relative pt-16 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark-bg/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" 
              alt="About Rakvih Construction" 
              fill 
              className="object-cover object-center grayscale opacity-50"
            />
          </div>
          <div className="container mx-auto px-6 relative z-20">
            <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Building Excellence, <br />
              <span className="font-bold">Delivering Trust</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              We are a premier construction and engineering firm dedicated to transforming visions into reality. With an uncompromising commitment to quality, we build the foundations of tomorrow.
            </p>
          </div>
      </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16 bg-gray-50 text-dark-bg">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn direction="right">
                <div className="group relative h-[450px] overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" alt="Our Mission" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/10 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  
                  {/* Decorative Border */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-all duration-700 m-8 z-10" />

                  <div className="absolute bottom-0 left-0 w-full p-10 md:p-12 z-20 text-white flex flex-col justify-end h-full">
                    <h3 className="text-4xl font-light mb-6">Our <span className="font-bold text-gold">Mission</span></h3>
                    <p className="text-gray-300 text-lg leading-relaxed font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      To deliver exceptional construction services that exceed client expectations through continuous innovation, unwavering integrity, and an absolute commitment to safety and quality in every project we undertake.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={200}>
                <div className="group relative h-[450px] overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="Our Vision" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/10 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  
                  {/* Decorative Border */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-all duration-700 m-8 z-10" />

                  <div className="absolute bottom-0 left-0 w-full p-10 md:p-12 z-20 text-white flex flex-col justify-end h-full">
                    <h3 className="text-4xl font-light mb-6">Our <span className="font-bold text-gold">Vision</span></h3>
                    <p className="text-gray-300 text-lg leading-relaxed font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      To be the global benchmark in premium construction, shaping sustainable cities and iconic skylines while fostering a culture of craftsmanship, accountability, and environmental responsibility.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 md:py-16 bg-dark-bg text-white border-t border-white/5">
        <div className="container mx-auto px-6">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Principles We Live By</p>
                <h2 className="text-4xl md:text-5xl font-light">
                  Our Core <span className="font-bold">Values</span>
                </h2>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Quality", desc: "Uncompromising standards in every detail of execution." },
                { icon: Shield, title: "Integrity", desc: "Transparent processes and honest communication." },
                { icon: HardHat, title: "Safety", desc: "Zero-harm philosophy for our people and partners." },
                { icon: Building, title: "Craftsmanship", desc: "Artistry and technical excellence combined." },
                { icon: Users, title: "Accountability", desc: "Taking absolute ownership of our commitments." },
                { icon: TrendingUp, title: "Innovation", desc: "Embracing modern technology to build smarter." }
              ].map((val, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 100}>
                  <div className="group bg-dark-card border border-white/5 p-10 hover:shadow-2xl hover:border-gold/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden cursor-pointer">
                    <div className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700 ease-out" />
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white/5 shadow-sm flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                        <val.icon className="w-8 h-8 text-gold group-hover:text-dark-bg transition-colors duration-500" />
                      </div>
                      <span className="text-white font-black text-6xl opacity-5 group-hover:text-gold group-hover:opacity-10 transition-colors duration-500 select-none">0{idx + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors duration-500">{val.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light flex-grow">{val.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
      </section>

        {/* Leadership */}
        <section className="py-12 md:py-16 bg-gray-50 text-dark-bg border-t border-gray-200">
        <div className="container mx-auto px-6">
            <FadeIn direction="up">
              <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">The Team</p>
                  <h2 className="text-4xl md:text-5xl font-light">
                    Our <span className="font-bold">Leadership</span>
                  </h2>
                </div>
                <p className="text-gray-500 max-w-lg font-light text-lg">
                  Guided by decades of industry experience, our leadership team drives innovation, quality, and sustainable growth across all our endeavors.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Arjun Rakvih", role: "Founder & CEO", exp: "20+ Years Experience", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
                { name: "Sarah Jenkins", role: "Chief Operating Officer", exp: "15+ Years Experience", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
                { name: "Vikram Mehta", role: "Head of Engineering", exp: "18+ Years Experience", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" }
              ].map((leader, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 100}>
                  <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-[500px] cursor-pointer rounded-sm">
                    <Image src={leader.img} alt={leader.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-light mb-1">{leader.name}</h3>
                      <p className="text-gold font-semibold text-xs mb-4 uppercase tracking-widest">{leader.role}</p>
                      <div className="w-8 h-[1px] bg-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{leader.exp}</p>
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
