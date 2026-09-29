import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import { Search, Map, Calculator, Users, HardHat, Cog, CheckCircle, FileCheck, LifeBuoy } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    { id: "01", icon: Search, title: "Discovery", desc: "We begin by understanding your goals, site parameters, and project expectations." },
    { id: "02", icon: Map, title: "Site & Feasibility", desc: "Comprehensive surveys, constraint analysis, and initial technical assessments." },
    { id: "03", icon: Calculator, title: "Planning & Estimation", desc: "Detailed scope definition, Bill of Quantities (BOQ), and resource scheduling." },
    { id: "04", icon: Users, title: "Design Coordination", desc: "Collaboration with architects and engineers to finalize drawings and approvals." },
    { id: "05", icon: HardHat, title: "Pre-Construction", desc: "Procurement, site mobilization, and stringent safety planning protocols." },
    { id: "06", icon: Cog, title: "Construction", desc: "Precision execution, expert supervision, and transparent progress management." },
    { id: "07", icon: CheckCircle, title: "Quality & Inspection", desc: "Rigorous material testing, snagging, and corrective quality control." },
    { id: "08", icon: FileCheck, title: "Handover", desc: "Final completion checks, documentation handover, and client walkthroughs." },
    { id: "09", icon: LifeBuoy, title: "Aftercare", desc: "Ongoing warranty support, maintenance, and long-term relationship building." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 bg-dark-card border-b border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Methodology</p>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              A Structured Path <br/> <span className="font-bold">to Excellence</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              A clear, predictable process reduces uncertainty. We follow a rigorous 9-step methodology to ensure every project is delivered flawlessly.
            </p>
          </div>
      </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-16 lg:space-y-0">
              {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row items-center justify-center w-full ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:min-h-[250px] relative`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex w-16 h-16 bg-dark-bg border-4 border-gold rounded-full items-center justify-center z-20 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full lg:w-1/2 flex ${idx % 2 !== 0 ? 'lg:justify-start lg:pl-24' : 'lg:justify-end lg:pr-24'}`}>
                    <div className="bg-white/5 border border-white/10 p-10 hover:border-gold transition-colors max-w-lg w-full relative group">
                      <div className="absolute -top-6 -right-4 text-7xl font-black text-white/5 group-hover:text-gold/10 transition-colors pointer-events-none">
                        {step.id}
                      </div>
                      <div className="lg:hidden w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
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
