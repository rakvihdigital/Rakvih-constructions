import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-20">
            <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-7xl font-light mb-16">
              Let’s Build Something <br />
              <span className="font-bold">Exceptional.</span>
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-12">
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                  Whether you have a fully drafted architectural plan or just an initial concept, our team of experts is ready to review your requirements and provide a comprehensive consultation.
                </p>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-colors text-white group-hover:text-dark-bg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Corporate Headquarters</h4>
                    <p className="text-gray-400">238, 2nd Main, 2nd Cross, Attur Layout<br/>Yelahanka, Bengaluru<br/>Karnataka 560064</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-colors text-white group-hover:text-dark-bg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Direct Contact</h4>
                    <p className="text-gray-400">+91 82963 92047</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-colors text-white group-hover:text-dark-bg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email Inquiries</h4>
                    <p className="text-gray-400">projects@rakvihconstruction.com<br/>info@rakvihconstruction.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-colors text-white group-hover:text-dark-bg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Operating Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white/5 border border-white/10 p-10 md:p-14">
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
                    <button type="button" className="bg-gold text-dark-bg px-10 py-5 font-bold uppercase tracking-wider hover:bg-gold-light transition-all flex items-center gap-3 w-full md:w-auto justify-center">
                      Submit Inquiry <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                      By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
