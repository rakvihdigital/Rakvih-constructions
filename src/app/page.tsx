import { ArrowRight, Play, Search, Leaf, Shield, Award, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import AnimatedCounter from '@/components/AnimatedCounter';
import CanvasSequence from '@/components/CanvasSequence';
import MagicalText from '@/components/MagicalText';
import SmoothScroll from '@/components/SmoothScroll';

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-dark-bg text-white selection:bg-gold selection:text-black font-sans relative">
        <CanvasSequence />

        {/* Header overlays the canvas */}
        <div className="relative z-50">
          <Header />
        </div>

        <div id="app" className="relative z-10">
          <main>
            {/* Section Rakvih Intro (Starts immediately on load) */}
            <MagicalText>
              <div className="text-overlay text-bottom-left-pos">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">The Rakvih Legacy</span>
                </div>
                <h2 className="title-bold title-md">
                  MASTERING<br />
                  <span className="title-stroke">PERFECTION</span>
                </h2>
                <p className="desc">
                  At Rakvih Constructions, we don't just build homes; we craft enduring legacies. Founded on the principles of uncompromising quality and visionary design, every Rakvih project is a symphony of artistry and precision engineering.
                </p>
              </div>
            </MagicalText>

            <section className="panel empty-spacer"></section>

            {/* Section 0b */}
            <MagicalText>
              <div className="text-overlay text-right-pos text-top-right-pos">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">The Foundation</span>
                </div>
                <h2 className="title-bold title-md">
                  GROUND<br />
                  <span className="title-stroke">ZERO</span>
                </h2>
                <p className="desc">
                  Establishing the core elements that will support a lasting legacy of design and engineering.
                </p>
              </div>
            </MagicalText>

            <section className="panel empty-spacer"></section>

            {/* Section 0c */}
            <MagicalText>
              <div className="text-overlay text-bottom-right-pos">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">The Blueprint</span>
                </div>
                <h2 className="title-bold title-md">
                  ARCHITECTURAL<br />
                  <span className="title-stroke">DRAFT</span>
                </h2>
                <p className="desc">
                  Every line drawn with purpose, preparing to bring visionary concepts into physical reality.
                </p>
              </div>
            </MagicalText>

            <section className="panel empty-spacer"></section>

            {/* Section 1: Hero */}
            <MagicalText id="section-1">
              <div className="text-overlay text-left">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">Rakvih Constructions</span>
                </div>
                <h1 className="title-bold">
                  ARCHITECTURAL<br />
                  <span className="title-stroke">BRILLIANCE</span>
                </h1>
                <p className="desc">
                  Experience ultra-premium living spaces crafted with uncompromising
                  precision and visionary design. Every Rakvih home is a testament
                  to the seamless blend of luxury and functionality, offering an
                  unparalleled living experience.
                </p>
              </div>
            </MagicalText>

            <section className="panel empty-spacer"></section>

            {/* Section 2 */}
            <MagicalText id="section-2">
              <div className="text-overlay text-top-right-pos">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">Craftsmanship</span>
                </div>
                <h2 className="title-bold title-md">
                  UNMATCHED<br />
                  <span className="title-stroke">ELEGANCE</span>
                </h2>
                <p className="desc">
                  Every detail meticulously designed to perfection. Your sanctuary
                  of luxury awaits, with bespoke finishes, state-of-the-art
                  amenities, and an ambiance that exudes exclusivity and comfort in
                  every corner.
                </p>
              </div>
            </MagicalText>

            <section className="panel empty-spacer"></section>

            {/* Section 3 */}
            <MagicalText id="section-3">
              <div className="text-overlay text-bottom-right-pos">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">Engineering</span>
                </div>
                <h2 className="title-bold title-md">
                  STRUCTURAL<br />
                  <span className="title-stroke">INTEGRITY</span>
                </h2>
                <p className="desc">
                  Built to last generations with the finest, sustainably sourced
                  materials and world-class engineering. Our structures are not just
                  homes; they are enduring legacies of strength, resilience, and
                  timeless aesthetic appeal.
                </p>
              </div>
            </MagicalText>

            <section className="panel empty-spacer"></section>

            {/* Section 4: Final CTA */}
            <MagicalText id="section-4">
              <div className="text-overlay text-bottom-left-pos">
                <div className="accent-line">
                  <div className="accent-bar"></div>
                  <span className="accent-label">Begin Your Legacy</span>
                </div>
                <h2 className="title-bold title-md">
                  START YOUR<br />
                  <span className="title-stroke">JOURNEY</span>
                </h2>
                <p className="desc">
                  Contact us to begin crafting your architectural masterpiece. Let
                  our team of master builders and visionary architects transform your
                  dream into a tangible reality of unparalleled luxury.
                </p>
                <div style={{ textAlign: 'left' }}>
                  <Link href="/contact" className="cta-pill relative z-50 pointer-events-auto">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </MagicalText>

            {/* Empty space before regular sections */}
            <section style={{ height: '10vh' }}></section>
          </main>
        </div> {/* End of #app hero sequence container */}

        <div className="relative z-20 bg-dark-bg w-full">
          {/* Services Section */}
          {/* Services Section */}
          <section id="services" className="py-12 md:py-16 bg-gray-50 text-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                  <div className="max-w-2xl">
                    <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-gold"></span>
                      Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                      Comprehensive <br />
                      <span className="font-bold text-dark-bg">Construction Solutions</span>
                    </h2>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                      From residential to large-scale infrastructure, we deliver world-class construction and engineering solutions with unyielding quality, precision, and purpose.
                    </p>
                  </div>
                  <Link href="/services" className="mt-8 md:mt-0 bg-dark-bg text-white px-8 py-4 whitespace-nowrap font-semibold hover:bg-gold hover:text-dark-bg transition-all text-sm uppercase tracking-wider flex items-center gap-2">
                    VIEW ALL SERVICES
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { title: "Residential Construction", desc: "Ultra-premium bespoke homes designed for modern luxury and timeless elegance.", img: "/images/residential.jpg" },
                      { title: "Commercial Construction", desc: "State-of-the-art office spaces, retail environments, and corporate headquarters.", img: "/images/commercial.jpg" },
                      { title: "Industrial Construction", desc: "High-capacity, technologically advanced facilities built for scale and efficiency.", img: "/images/industrial.jpg" },
                      { title: "Infrastructure Projects", desc: "Large-scale public and private civic engineering projects that shape the future.", img: "/images/hero.jpg" },
                      { title: "Interior & Fit-Out", desc: "Exquisite interior finishing, bespoke detailing, and world-class spatial planning.", img: "/images/interior.jpg" },
                      { title: "Project Management", desc: "End-to-end oversight ensuring on-time, on-budget delivery without compromises.", img: "/images/details.jpg" },
                    ].map((service, idx) => (
                      <div key={idx} className="group relative h-[420px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                        <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
                        
                        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-transparent group-hover:border-gold transition-all duration-700 m-6 z-20" />
                        
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
                          <h3 className="font-light text-2xl mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
                          <div className="flex items-center gap-2 text-gold font-semibold text-xs tracking-widest uppercase mt-4">
                            Explore Service <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </FadeIn>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-12 md:py-16 bg-dark-bg border-t border-white/5" id="projects">
            <div className="container mx-auto px-6">
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                  <div className="max-w-2xl">
                    <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-gold"></span>
                      Featured Projects
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                      Iconic Spaces <br />
                      <span className="font-bold text-white">Real Impact</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                      From modern residences to large-scale infrastructure, our projects reflect our commitment to quality, innovation and long-term value.
                    </p>
                  </div>
                  <Link href="/projects" className="mt-8 md:mt-0 bg-gold text-dark-bg px-8 py-4 whitespace-nowrap font-semibold hover:bg-gold-light transition-all text-sm uppercase tracking-wider flex items-center gap-2">
                    VIEW ALL PROJECTS
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "The Celestia Residences", cat: "Luxury Residential | Mumbai", img: "/images/residential.jpg" },
                    { title: "Vertex Business Park", cat: "Commercial | Bengaluru", img: "/images/commercial.jpg" },
                    { title: "Riverside Elevated Corridor", cat: "Infrastructure | Ahmedabad", img: "/images/hero.jpg" },
                  ].map((proj, idx) => (
                    <div key={idx} className="group relative h-[500px] overflow-hidden cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent z-10" />
                      <Image src={proj.img} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                      <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                        <h3 className="text-2xl font-light mb-2 group-hover:text-gold transition-colors">{proj.title}</h3>
                        <div className="flex items-center justify-between text-gray-400 text-sm">
                          <p className="tracking-wide uppercase text-xs">{proj.cat}</p>
                          <ArrowRight className="w-5 h-5 text-gold transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </FadeIn>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="py-12 md:py-16 bg-white text-dark-bg overflow-hidden">
            <div className="container mx-auto px-6">
              <FadeIn direction="left">
                <div className="flex justify-between items-end mb-16">
                <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Our Process</p>
                  <h2 className="text-4xl md:text-5xl font-light">
                    A Structured <br />
                    <span className="font-bold">Path to Excellence</span>
                  </h2>
                </div>
                <Link href="/process" className="text-gold font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider hidden md:flex">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {[
                  { num: "01", title: "Discover", desc: "Understand your vision and requirements", img: "/images/hero.jpg" },
                  { num: "02", title: "Plan", desc: "Detailed planning and feasibility", img: "/images/details.jpg" },
                  { num: "03", title: "Coordinate", desc: "Integrated design and technical coordination", img: "/images/team.jpg" },
                  { num: "04", title: "Build", desc: "Precision execution with quality control", img: "/images/industrial.jpg" },
                  { num: "05", title: "Inspect", desc: "Rigorous inspection and safety management", img: "/images/interior.jpg" },
                  { num: "06", title: "Handover", desc: "Timely delivery and ongoing support", img: "/images/process.jpg" },
                ].map((step, idx) => (
                  <div key={idx} className="relative group flex flex-col">
                    <div className="h-48 relative mb-6 overflow-hidden rounded-sm shadow-md group-hover:shadow-2xl transition-all duration-500">
                      <Image src={step.img} alt={step.title} fill className="object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                      
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-all duration-500 m-4 z-10" />
                      
                      <div className="absolute bottom-0 left-0 bg-dark-bg text-gold font-black text-xl px-4 py-2 group-hover:bg-gold group-hover:text-dark-bg transition-colors duration-500 z-20">
                        {step.num}
                      </div>
                    </div>
                    <div className="px-1">
                      <h3 className="font-bold text-lg mb-2 text-dark-bg group-hover:text-gold transition-colors">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Commitment Section (About) */}
          <section id="about" className="relative py-12 md:py-16">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-dark-card/90 z-10" />
              <Image
                src="/images/process.jpg"
                alt="Sustainable building"
                fill
                className="object-cover"
              />
            </div>

            <div className="container mx-auto px-6 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction="left">
                  <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Our Commitment</p>
                  <h2 className="text-4xl md:text-5xl font-light mb-6">
                    Building a Sustainable <br />
                    <span className="font-bold">Tomorrow</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-xl">
                    We integrate safety, quality and sustainability in every project to create lasting value for people and the planet.
                  </p>
                  <Link href="/about" className="bg-gold text-dark-bg px-6 py-3 inline-flex items-center gap-2 font-semibold hover:bg-gold-light transition-colors text-sm uppercase tracking-wider">
                    OUR COMMITMENT
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  </div>
                </FadeIn>

                <FadeIn direction="right" delay={200}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center sm:text-left border-t border-white/20 pt-6">
                    <Leaf className="w-10 h-10 text-gold mb-4 mx-auto sm:mx-0" />
                    <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                    <p className="text-sm text-gray-400">Green construction for a healthier future</p>
                  </div>
                  <div className="text-center sm:text-left border-t border-white/20 pt-6">
                    <Shield className="w-10 h-10 text-gold mb-4 mx-auto sm:mx-0" />
                    <h3 className="text-xl font-bold mb-2">Safety First</h3>
                    <p className="text-sm text-gray-400">People, safety and well-being at every step</p>
                  </div>
                  <div className="text-center sm:text-left border-t border-white/20 pt-6">
                    <Award className="w-10 h-10 text-gold mb-4 mx-auto sm:mx-0" />
                    <h3 className="text-xl font-bold mb-2">Quality</h3>
                    <p className="text-sm text-gray-400">Uncompromised standards in execution</p>
                  </div>
                </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Testimonials & Clients */}
          <section className="py-12 md:py-16 bg-white text-dark-bg">
            <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center mb-16">
                <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Testimonials</p>
                <h2 className="text-3xl md:text-4xl font-light">
                  Trusted by Clients <span className="font-bold">Worldwide</span>
                </h2>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 border border-gray-100 rounded-lg relative">
                <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:text-gold transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:text-gold transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>

                <p className="text-xl md:text-2xl text-center text-gray-600 font-light italic mb-8">
                  "Exceptional quality, professionalism and on-time delivery. The team exceeded our expectations at every stage of the residential high-rise project."
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src="/images/sustainable.jpg" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Rahul Mehta</h4>
                    <p className="text-sm text-gray-500">Director, Urban Developers</p>
                  </div>
                </div>
                </div>
              </FadeIn>

            </div>
          </section>

          {/* Insights Section */}
          <section id="insights" className="py-12 md:py-16 bg-dark-bg text-white border-t border-white/5">
            <div className="container mx-auto px-6">
              <FadeIn direction="right">
                <div className="flex justify-between items-end mb-16">
                <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Insights</p>
                  <h2 className="text-4xl font-light">
                    Knowledge That <span className="font-bold">Builds Better</span>
                  </h2>
                </div>
                <Link href="/insights" className="text-gold font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider hidden md:flex">
                  VIEW ALL INSIGHTS
                  <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Key Trends in Modern Construction in 2025", date: "June 15, 2025", img: "/images/hero.jpg" },
                  { title: "How Sustainable Construction Creates Long-Term Value", date: "May 28, 2025", img: "/images/sustainable.jpg" },
                  { title: "Choosing the Right Materials for Modern Homes", date: "May 10, 2025", img: "/images/commercial.jpg" }
                ].map((article, idx) => (
                  <div key={idx} className="bg-dark-card border border-white/10 group cursor-pointer hover:border-gold/30 hover:shadow-2xl transition-all flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{article.date}</p>
                      <h3 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-gold transition-colors">{article.title}</h3>
                      <div className="flex items-center gap-2 text-gold font-medium text-sm mt-auto">
                        Read Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* CTA Section (Contact) */}
          <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] grayscale">
              <Image src="/images/industrial.jpg" alt="Background" fill className="object-cover" />
            </div>
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 border border-gray-100 shadow-2xl p-12 md:p-16">
              <FadeIn direction="left" className="flex-1">
                <div>
                <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Let's Build Together</p>
                <h2 className="text-3xl md:text-5xl font-light mb-4 text-dark-bg">
                  Start Your Next <span className="font-bold">Project With Us</span>
                </h2>
                <p className="text-gray-600 max-w-lg text-lg">
                  Get in touch to discuss your project requirements and discover how we can bring your vision to life.
                </p>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <Link href="/contact" className="bg-dark-bg text-white px-8 py-5 whitespace-nowrap font-semibold hover:bg-gold hover:text-dark-bg transition-all text-sm uppercase tracking-wider flex items-center gap-2">
                GET A FREE CONSULTATION
                <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
