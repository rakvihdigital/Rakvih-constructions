import CanvasSequence from '@/components/CanvasSequence'
import MagicalText from '@/components/MagicalText'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <SmoothScroll>
      <CanvasSequence />

      <div id="app">
        <div id="intro-overlay" className="intro-overlay">
          <div className="intro-content">
            <div className="intro-header">
              <img src="/logo.png" className="intro-logo" alt="Rakvih Logo" />
              <div className="intro-text-group">
                <h1
                  className="title-bold"
                  style={{ marginBottom: 0, whiteSpace: 'nowrap' }}
                >
                  <span style={{ color: '#ffffff' }}>RAKVIH</span>{' '}
                  <span style={{ color: 'var(--color-gold)' }}>CONSTRUCTIONS</span>
                </h1>
                <p className="intro-subtitle" style={{ color: '#ffffff' }}>
                  Elevate your living with our exclusive architectural pieces.
                </p>
              </div>
            </div>
          </div>
        </div>

        <main>
          {/* Spacer to ensure first text is not visible at load and gives a delay */}
          <section style={{ height: '100vh' }}></section>

          {/* Section Rakvih Intro */}
          <MagicalText>
            <div className="text-overlay text-left">
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

          <section className="panel empty-spacer">
            {/* Buffer space for transition */}
          </section>

          {/* Section 0: New Intro */}
          <MagicalText id="section-0">
            <div className="text-overlay text-right-pos">
              <div className="accent-line">
                <div className="accent-bar"></div>
                <span className="accent-label">The Vision</span>
              </div>
              <h2 className="title-bold title-md">
                A NEW<br />
                <span className="title-stroke">BEGINNING</span>
              </h2>
              <p className="desc">
                A pristine landscape awaiting transformation into an architectural
                masterpiece.
              </p>
              <a href="#section-4" className="cta-pill">
                Discover More
              </a>
            </div>
          </MagicalText>

          {/* Section 0b */}
          <MagicalText>
            <div className="text-overlay text-top-left-pos">
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

          <section className="panel empty-spacer">
            {/* Buffer space for transition */}
          </section>

          {/* Section 1: Hero */}
          <MagicalText id="section-1">
            <div className="text-overlay text-left">
              <div className="accent-line">
                <div className="accent-bar"></div>
                <span className="accent-label">Lumière Constructions</span>
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
              <a href="#section-4" className="cta-pill">
                Discover More
              </a>
            </div>
          </MagicalText>

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

          <section className="panel empty-spacer">
            {/* Buffer space for transition */}
          </section>

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

          {/* Section 3b */}
          <MagicalText>
            <div className="text-overlay text-top-left-pos">
              <div className="accent-line">
                <div className="accent-bar"></div>
                <span className="accent-label">Sustainability</span>
              </div>
              <h2 className="title-bold title-md">
                CONSCIOUS<br />
                <span className="title-stroke">LIVING</span>
              </h2>
              <p className="desc">
                Eco-conscious design harmoniously integrated with opulent living.
                We build for the future without compromising the elegance of today.
              </p>
            </div>
          </MagicalText>

          {/* Section 3c */}
          <MagicalText>
            <div className="text-overlay text-right-pos">
              <div className="accent-line">
                <div className="accent-bar"></div>
                <span className="accent-label">Innovation</span>
              </div>
              <h2 className="title-bold title-md">
                VISIONARY<br />
                <span className="title-stroke">DESIGN</span>
              </h2>
              <p className="desc">
                Seamless indoor-outdoor transitions that celebrate natural light
                and the surrounding landscape, creating an expansive sense of
                freedom.
              </p>
            </div>
          </MagicalText>

          {/* Section 3d */}
          <MagicalText>
            <div className="text-overlay text-left">
              <div className="accent-line">
                <div className="accent-bar"></div>
                <span className="accent-label">Exclusivity</span>
              </div>
              <h2 className="title-bold title-md">
                PRIVATE<br />
                <span className="title-stroke">SANCTUARY</span>
              </h2>
              <p className="desc">
                A secluded haven designed for ultimate privacy and serenity.
                Retreat into a space that is exclusively yours, away from the world.
              </p>
            </div>
          </MagicalText>

          {/* Section 3e */}
          <MagicalText>
            <div className="text-overlay text-bottom-right-pos">
              <div className="accent-line">
                <div className="accent-bar"></div>
                <span className="accent-label">Perfection</span>
              </div>
              <h2 className="title-bold title-md">
                TIMELESS<br />
                <span className="title-stroke">BEAUTY</span>
              </h2>
              <p className="desc">
                Our architectural creations are timeless masterpieces, gracefully
                standing as monuments of impeccable taste and everlasting beauty.
              </p>
            </div>
          </MagicalText>

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
                <a href="#" className="cta-pill">
                  Inquire Now
                </a>
              </div>
            </div>
          </MagicalText>
        </main>
      </div>
    </SmoothScroll>
  )
}
