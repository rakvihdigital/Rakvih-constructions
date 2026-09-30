import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
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
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark-bg/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
            <Image
              src="/images/interior.jpg"
              alt="Process Methodology"
              fill
              className="object-cover object-center grayscale opacity-50"
            />
          </div>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 relative z-20 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Methodology</p>
                <h1 className="text-5xl md:text-7xl font-light mb-6 md:mb-0">
                  A Structured Path <br /> <span className="font-bold">to Excellence</span>
                </h1>
              </div>
              <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed mx-auto md:mx-0 text-center md:text-right">
                A clear, predictable process reduces uncertainty. We follow a rigorous 9-step methodology to ensure every project is delivered flawlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Chessboard Process Layout */}
        <div>
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            // Chessboard: Row 0 = [Dark+Image | Light+Text], Row 1 = [Light+Text | Dark+Image], etc.
            const images = [
              '/images/process.jpg',
              '/images/hero.jpg',
              '/images/commercial.jpg',
              '/images/interior.jpg',
              '/images/industrial.jpg',
              '/images/team.jpg',
              '/images/details.jpg',
              '/images/sustainable.jpg',
              '/images/residential.jpg',
            ];

            const imageBlock = (
              <div className={`w-full lg:w-1/2 h-[350px] md:h-[450px] relative overflow-hidden ${isEven ? 'bg-dark-bg' : 'bg-gray-50'}`}>
                <Image
                  src={images[idx]}
                  alt={step.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className={`absolute inset-0 ${isEven ? 'bg-dark-bg/40' : 'bg-white/20'}`} />
                {/* Floating number */}
                <div className={`absolute bottom-4 right-6 text-[140px] font-black leading-none pointer-events-none ${isEven ? 'text-white/10' : 'text-dark-bg/10'}`}>
                  {step.id}
                </div>
                {/* Icon */}
                <div className={`absolute top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center border ${isEven ? 'bg-dark-bg/60 border-gold/30 backdrop-blur-sm' : 'bg-white/60 border-gold/30 backdrop-blur-sm'}`}>
                  <step.icon className="w-7 h-7 text-gold" />
                </div>
              </div>
            );

            const textBlock = (
              <div className={`w-full lg:w-1/2 h-[350px] md:h-[450px] flex items-center ${isEven ? 'bg-gray-50' : 'bg-dark-bg'}`}>
                <FadeIn direction={isEven ? 'left' : 'right'} className="w-full">
                  <div className="px-10 md:px-16 lg:px-20 py-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`w-12 h-[1px] block ${isEven ? 'bg-dark-bg' : 'bg-gold'}`} />
                      <span className={`font-bold tracking-[0.2em] text-sm uppercase ${isEven ? 'text-dark-bg' : 'text-gold'}`}>Phase {idx + 1}</span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-light mb-6 leading-[1.1] ${isEven ? 'text-dark-bg' : 'text-white'}`}>
                      {step.title}
                    </h2>
                    <p className={`text-lg md:text-xl leading-relaxed font-light max-w-md ${isEven ? 'text-gray-600' : 'text-gray-400'}`}>
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              </div>
            );

            return (
              <div key={idx} className="flex flex-col lg:flex-row w-full">
                {isEven ? (
                  <>{imageBlock}{textBlock}</>
                ) : (
                  <>{textBlock}{imageBlock}</>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
