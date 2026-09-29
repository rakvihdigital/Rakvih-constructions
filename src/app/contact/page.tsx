import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    { icon: MapPin, title: "Corporate Headquarters", detail: "238, 2nd Main, 2nd Cross, Attur Layout\nYelahanka, Bengaluru\nKarnataka 560064" },
    { icon: Phone, title: "Direct Contact", detail: "+91 82963 92047" },
    { icon: Mail, title: "Email Inquiries", detail: "projects@rakvihconstruction.com\ninfo@rakvihconstruction.com" },
    { icon: Clock, title: "Operating Hours", detail: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section with Image */}
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark-bg/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
              alt="Contact Us"
              fill
              className="object-cover object-center grayscale opacity-50"
            />
          </div>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 relative z-20 text-center md:text-left">
            <FadeIn direction="up">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Get in Touch</p>
                  <h1 className="text-5xl md:text-7xl font-light mb-6 md:mb-0">
                    Let&apos;s Build Something <br /> <span className="font-bold">Exceptional.</span>
                  </h1>
                </div>
                <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed mx-auto md:mx-0 text-center md:text-right">
                  Whether you have a fully drafted architectural plan or just an initial concept, our team is ready to consult.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info Cards — Light Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn direction="up">
              <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Reach Us</p>
              <h2 className="text-4xl md:text-5xl font-light text-dark-bg mb-12">
                Contact <span className="font-bold">Information</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 150}>
                  <div className="bg-white border border-gray-200 p-8 hover:border-gold/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 group h-full relative overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-gold/15 group-hover:scale-150 transition-all duration-1000" />
                    <div className="w-14 h-14 rounded-full bg-dark-bg flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-dark-bg mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form — Dark Section */}
        <section className="py-16 md:py-24 bg-dark-bg">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left: Image + CTA */}
              <FadeIn direction="right">
                <div className="relative h-[500px] lg:h-full min-h-[500px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                    alt="Start a Project"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-3">Ready to Begin?</p>
                    <h3 className="text-3xl md:text-4xl font-light text-white">
                      Your Vision, <br /><span className="font-bold">Our Expertise.</span>
                    </h3>
                  </div>
                </div>
              </FadeIn>

              {/* Right: Form */}
              <FadeIn direction="left" delay={200}>
                <div className="bg-dark-card border border-white/5 p-10 md:p-14">
                  <h3 className="text-3xl font-light mb-8">Start a <span className="font-bold">Project</span></h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Full Name *</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Company</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email Address *</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Phone Number</label>
                        <input type="tel" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Project Type</label>
                      <select className="w-full bg-dark-card border border-white/20 p-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                        <option>Select a category...</option>
                        <option>Residential Construction</option>
                        <option>Commercial Development</option>
                        <option>Industrial Facility</option>
                        <option>Infrastructure / Public Works</option>
                        <option>Interior Fit-Out</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2 pt-4">
                      <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Project Details *</label>
                      <textarea rows={5} placeholder="Tell us about the scope, timeline, and location..." className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
                    </div>

                    <div className="pt-8">
                      <button type="button" className="bg-gold text-dark-bg px-10 py-5 font-bold uppercase tracking-wider hover:bg-gold-light hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all flex items-center gap-3 w-full md:w-auto justify-center group">
                        Submit Inquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                      <p className="text-xs text-gray-500 mt-4">
                        By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
                      </p>
                    </div>
                  </form>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
