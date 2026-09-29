import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function InsightsPage() {
  const featured = {
    cat: "Technology",
    title: "BIM Integration: Building the Future Virtually Before Breaking Ground",
    date: "August 12, 2026",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    excerpt: "How Building Information Modeling is drastically reducing errors and streamlining complex MEP coordination across our projects."
  };

  const articles = [
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
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      excerpt: "Recognition for our work on the Riverside Elevated Corridor and our commitment to public safety."
    }
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
              alt="Industry Insights"
              fill
              className="object-cover object-center grayscale opacity-50"
            />
          </div>
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 relative z-20 text-center md:text-left">
            <FadeIn direction="up">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">News & Updates</p>
                  <h1 className="text-5xl md:text-7xl font-light mb-6 md:mb-0">
                    Industry <br /> <span className="font-bold">Insights</span>
                  </h1>
                </div>
                <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed mx-auto md:mx-0 text-center md:text-right">
                  Expert perspectives, construction technology updates, sustainability guides, and news from our latest projects.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Featured Article — Light Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn direction="up">
              <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Featured</p>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col lg:flex-row gap-0 group cursor-pointer">
                {/* Image Half */}
                <div className="w-full lg:w-1/2 h-[350px] lg:h-[500px] relative overflow-hidden">
                  <Image
                    src={featured.img}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6 bg-dark-bg/80 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 uppercase tracking-wider">
                    {featured.cat}
                  </div>
                </div>
                {/* Text Half */}
                <div className="w-full lg:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center border border-gray-200 group-hover:border-gold/30 transition-colors duration-700">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">{featured.date}</p>
                  <h2 className="text-3xl md:text-4xl font-light text-dark-bg mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider">
                    Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Blog Grid — Dark Section */}
        <section className="py-16 md:py-24 bg-dark-bg">
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
            <FadeIn direction="up">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                  <p className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Latest</p>
                  <h2 className="text-4xl md:text-5xl font-light">
                    All <span className="font-bold">Articles</span>
                  </h2>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 100}>
                  <div className="group cursor-pointer flex flex-col h-full border border-white/5 hover:border-gold/30 transition-all duration-700 bg-dark-card overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={article.img} alt={article.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors duration-700" />
                      <div className="absolute top-4 left-4 bg-dark-bg/80 backdrop-blur-sm border border-white/10 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                        {article.cat}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{article.date}</p>
                      <h3 className="font-bold text-xl mb-4 leading-snug group-hover:text-gold transition-colors duration-500">{article.title}</h3>
                      <p className="text-gray-400 mb-8 flex-grow font-light">{article.excerpt}</p>
                      <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider mt-auto">
                        Read Full Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn direction="up" delay={600}>
              <div className="mt-16 text-center">
                <button className="border border-white/20 text-white px-8 py-4 hover:border-gold hover:bg-gold hover:text-dark-bg hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-500 font-semibold uppercase tracking-wider text-sm">
                  Load More Articles
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
