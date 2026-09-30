'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollProgress } from '@/components/Motion';

export type Block =
  | { p: string }
  | { ul: { b?: string; t: string }[] }
  | { mail: string };

export type LegalSection = { title: string; blocks: Block[] };

type Props = {
  titleA: string;
  titleB: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalLayout({ titleA, titleB, updated, sections }: Props) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#FFD400] selection:text-black">
      <style>{`
        @keyframes rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
        .rise { animation: rise 1.1s cubic-bezier(.16,1,.3,1) both; }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { .rise { animation: none; } html { scroll-behavior: auto; } }
      `}</style>

      <ScrollProgress />
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 border-b border-white/10">
          <div className="container mx-auto px-6">
            <h1 className="font-serif font-light tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden pb-1">
                <span className="block rise">{titleA}</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block rise text-[#FFD400] italic" style={{ animationDelay: '150ms' }}>
                  {titleB}
                </span>
              </span>
            </h1>
            <p className="mt-8 text-neutral-400 font-light">Last updated: {updated}</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pt-2 md:pt-4 pb-10 md:pb-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* contents list */}
            <aside className="hidden lg:block lg:col-span-4">
              <nav className="sticky top-28" aria-label="On this page">
                <p className="font-serif font-light text-2xl mb-6">On this page</p>
                <ul className="border-l border-white/10">
                  {sections.map((s, i) => (
                    <li key={s.title}>
                      <a
                        href={`#section-${i + 1}`}
                        className={`block -ml-px pl-5 py-2.5 border-l-2 text-sm transition-all duration-300 ${
                          i === active ? 'border-[#FFD400] text-white' : 'border-transparent text-neutral-500 hover:text-neutral-200'
                        }`}
                      >
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* sections */}
            <div className="lg:col-span-8 max-w-3xl">
              {sections.map((s, i) => (
                <article
                  key={s.title}
                  id={`section-${i + 1}`}
                  data-idx={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className={`scroll-mt-28 ${i > 0 ? 'mt-12 pt-12 border-t border-white/10' : ''}`}
                >
                  <h2 className="font-serif font-light text-2xl md:text-3xl mb-6">
                    <span className="text-[#FFD400] mr-3">{i + 1}.</span>
                    {s.title}
                  </h2>

                  <div className="space-y-5 text-neutral-300 font-light text-base md:text-lg leading-relaxed">
                    {s.blocks.map((b, j) => {
                      if ('p' in b) return <p key={j}>{b.p}</p>;
                      if ('mail' in b)
                        return (
                          <p key={j}>
                            <a
                              href={`mailto:${b.mail}`}
                              className="text-[#FFD400] border-b border-[#FFD400]/40 hover:border-[#FFD400] transition-colors"
                            >
                              {b.mail}
                            </a>
                          </p>
                        );
                      return (
                        <ul key={j} className="space-y-3">
                          {b.ul.map((li) => (
                            <li key={li.t} className="flex gap-4">
                              <span className="w-1.5 h-1.5 mt-3 rotate-45 bg-[#FFD400] shrink-0" aria-hidden />
                              <span>
                                {li.b && <strong className="font-medium text-white">{li.b} </strong>}
                                {li.t}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}