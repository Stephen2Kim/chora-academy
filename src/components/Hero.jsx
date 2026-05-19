import cadImage from '../assets/cad image.jpeg'

function Hero({ openStoryPage }) {
  const tickerItems = [
    'Revit Architecture',
    'Civil 3D',
    'Structural Engineering',
    'SAP2000',
    'ETABS',
    'Navisworks',
    'BIM Fundamentals',
    'Chora Academy',
  ]

  return (
    <>
      <section className="hero tex" id="home">
        <div className="hero-bg"></div>
        <div className="hero-grid-lines"></div>
        <div className="hero-diag"></div>

        <div
          className="hero-right-panel"
          style={{ backgroundImage: `url(${cadImage})` }}
        ></div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">
              ◆ &nbsp; Nairobi, Kenya — Pan-African &nbsp; ◆
            </div>

            <h1 className="hero-headline">
              Shape Your Future<br />
              in <em>Engineering</em><br />
              Softwares
            </h1>

            <div className="gold-divider hero-divider">
              <div className="gd-line l"></div>
              <div className="gd-diamond"></div>
              <div className="gd-line r"></div>
            </div>

            <p className="hero-sub">
              Africa&apos;s Top Engineering Software Canvas.<br />
              Professional online training in AutoCAD, Revit, Civil 3D &amp; more —<br />
              delivered by Registered Engineers. Built for Kenya. Reaching Africa.
            </p>

            <div className="hero-ctas">
              <a href="#courses" className="btn btn-gold">
                Explore Courses
              </a>

              <button type="button" className="btn btn-outline" onClick={openStoryPage}>
                Our Story
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">40+</div>
                <div className="stat-label">Sessions per Course</div>
              </div>

              <div className="stat-item">
                <div className="stat-num">100%</div>
                <div className="stat-label">Online &amp; Self-Paced</div>
              </div>

              <div className="stat-item">
                <div className="stat-num">EBK</div>
                <div className="stat-label">Certified Instructors</div>
              </div>
            </div>
          </div>

          <div className="hero-cards">
            <div className="hero-card">
              <div className="hc-badge">Now Enrolling</div>
              <div className="hc-title">AutoCAD Fundamentals</div>
              <div className="hc-meta">8 Weeks · 40 Sessions · Online</div>
            </div>

            <div className="hero-card hero-card-two">
              <div className="hc-badge hc-soon">Coming Soon</div>
              <div className="hc-title">Revit Architecture</div>
              <div className="hc-meta">10 Weeks · 50 Sessions · Online</div>
            </div>

            <div className="hero-card hero-card-three">
              <div className="hc-badge hc-faint">Coming Soon</div>
              <div className="hc-title">Civil 3D Essentials</div>
              <div className="hc-meta">8 Weeks · 40 Sessions · Online</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-strip">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <b>◆</b>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          padding-top: 72px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--black);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: var(--black);
        }

        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(197,160,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,160,60,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .hero-diag {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 28px,
            rgba(197,160,60,0.03) 28px,
            rgba(197,160,60,0.03) 29px
          );
        }

        .hero-right-panel {
          position: absolute;
          top: 72px;
          right: 0;
          bottom: 0;
          width: 40%;
          background-size: cover;
          background-position: center;
          border-left: 1px solid rgba(197,160,60,0.55);
        }

        .hero-right-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(13,13,0,0.55);
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 6px,
            rgba(197,160,60,0.025) 6px,
            rgba(197,160,60,0.025) 7px
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1110px, calc(100% - 120px));
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 70px;
        }

        .hero-left {
          flex: 0 0 511px;
          width: 511px;
          max-width: 511px;
        }

        .hero-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 6px;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-headline {
          font-family: "Cormorant Garamond", serif;
          font-size: 58px;
          font-weight: 700;
          color: var(--white);
          line-height: 0.96;
          letter-spacing: -0.8px;
          width: 511px;
          max-width: 511px;
        }

        .hero-headline em {
          font-style: italic;
          color: var(--gold);
          font-weight: 600;
        }

        .hero-divider {
          margin: 18px 0;
        }

        .hero-sub {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          letter-spacing: 1px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-top: 30px;
        }

        .hero-stats {
          display: flex;
          gap: 58px;
          margin-top: 46px;
          border-top: 1px solid rgba(197,160,60,0.15);
          padding-top: 30px;
        }

        .stat-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 34px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }

        .stat-label {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 4px;
        }

        .hero-cards {
          width: 360px;
          flex-shrink: 0;
          position: relative;
          transform: translateX(-28px);
        }

        .hero-card {
          background: rgba(13,13,13,0.86);
          border-left: 3px solid var(--gold);
          padding: 18px 22px;
          margin-bottom: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .hero-card-two {
          opacity: 0.75;
          margin-left: 20px;
        }

        .hero-card-three {
          opacity: 0.5;
          margin-left: 40px;
        }

        .hc-badge {
          display: inline-block;
          background: var(--gold);
          color: var(--black);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 5px 9px;
          margin-bottom: 10px;
        }

        .hc-soon {
          background: transparent;
          border: 1px solid rgba(197,160,60,0.4);
          color: var(--gold);
        }

        .hc-faint {
          background: transparent;
          border: 1px solid rgba(197,160,60,0.25);
          color: rgba(197,160,60,0.5);
        }

        .hc-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }

        .hc-meta {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
        }

        .ticker-strip {
          height: 28px;
          background: linear-gradient(90deg, var(--gold3), var(--gold), var(--gold2), var(--gold));
          color: var(--black);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: tickerMove 28s linear infinite;
        }

        .ticker-track span {
          display: inline-flex;
          align-items: center;
          gap: 42px;
          padding-right: 42px;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .ticker-track b {
          font-size: 8px;
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
            padding: 130px 0 80px;
          }

          .hero-content {
            width: min(100%, calc(100% - 40px));
            display: block;
          }

          .hero-left {
            width: 100%;
            max-width: 100%;
            flex-basis: auto;
          }

          .hero-headline {
            width: 100%;
            max-width: 100%;
            font-size: clamp(42px, 12vw, 58px);
          }

          .hero-right-panel,
          .hero-cards {
            display: none;
          }

          .hero-stats {
            flex-wrap: wrap;
            gap: 28px;
          }
        }
      `}</style>
    </>
  )
}

export default Hero