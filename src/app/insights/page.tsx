import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function InsightsPage() {
  const articles = [
    {
      cat: "Technology",
      title: "BIM Integration: Building the Future Virtually Before Breaking Ground",
      date: "August 12, 2026",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      excerpt: "How Building Information Modeling is drastically reducing errors and streamlining complex MEP coordination."
    },
    {
      cat: "Sustainability",
      title: "Carbon-Neutral Concrete: The Next Big Leap in Green Construction",
      date: "July 28, 2026",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      excerpt: "Exploring alternative materials and supply chain adjustments required to achieve zero-emission concrete pours."
    },
    {
      cat: "Design Trends",
      title: "Biophilic Design in Commercial Real Estate",
      date: "June 05, 2026",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      excerpt: "Why bringing nature indoors is no longer just an aesthetic choice, but a requirement for modern corporate spaces."
    },
    {
      cat: "Safety",
      title: "AI-Powered Safety Monitoring on High-Rise Projects",
      date: "May 19, 2026",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      excerpt: "Implementing computer vision to automatically detect PPE compliance and hazardous zones."
    },
    {
      cat: "Market Update",
      title: "Navigating Supply Chain Volatility in 2026",
      date: "April 02, 2026",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
      excerpt: "Strategies for mitigating risk and ensuring project timelines remain unaffected by global material shortages."
    },
    {
      cat: "Company News",
      title: "Rakvih Construction Wins Excellence in Infrastructure Award",
      date: "March 15, 2026",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      excerpt: "Recognition for our work on the Riverside Elevated Corridor and our commitment to public safety."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 bg-dark-bg text-white border-b border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">News & Updates</p>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Industry <span className="font-bold">Insights</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Expert perspectives, construction technology updates, sustainability guides, and news from our latest projects.
            </p>
          </div>
      </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-20 bg-dark-bg text-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {articles.map((article, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col h-full border border-white/10 hover:border-gold/30 hover:shadow-2xl transition-all bg-dark-card">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-dark-bg border border-white/10 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                      {article.cat}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{article.date}</p>
                    <h3 className="font-bold text-xl mb-4 leading-snug group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="text-gray-400 mb-8 flex-grow">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider mt-auto">
                      Read Full Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="border border-white/20 text-white px-8 py-4 hover:border-gold hover:bg-gold hover:text-dark-bg transition-all font-semibold uppercase tracking-wider text-sm inline-block">
                Load More Articles
              </button>
            </div>
          </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
