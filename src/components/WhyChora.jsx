function WhyChora() {
  return (
    <section className="why-section" id="why-chora">
      <div className="container">
        <div className="sec-header">
          <div className="eyebrow">01 — Why Chora</div>
          <div className="rule-gold"></div>

          <h2 className="why-heading">Precision, by Design</h2>

          <p className="why-intro">
            We believe African engineers deserve world-class software training — without
            flying abroad or paying foreign prices. Chora Academy was built to close
            that gap.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="wc-num">01</div>
            <div className="wc-icon">🎯</div>
            <div className="wc-title">Industry-Relevant Curriculum</div>
            <div className="wc-body">
              Every course is designed around real project deliverables — the kind
              you&apos;ll encounter on World Bank, AfDB, and government infrastructure
              programmes across East Africa.
            </div>
          </div>

          <div className="why-card">
            <div className="wc-num">02</div>
            <div className="wc-icon">🏛️</div>
            <div className="wc-title">Taught by Registered Engineers</div>
            <div className="wc-body">
              Your instructors hold professional registration (EBK), active project
              portfolios, and years of field experience. Theory and practice — in one place.
            </div>
          </div>

          <div className="why-card">
            <div className="wc-num">03</div>
            <div className="wc-icon">📜</div>
            <div className="wc-title">Recognised Certification</div>
            <div className="wc-body">
              Complete any course and receive a verifiable Chora Academy certificate —
              professionally formatted, digitally verifiable at choraacademy.co.ke/verify.
            </div>
          </div>

          <div className="why-card">
            <div className="wc-num">04</div>
            <div className="wc-icon">🌍</div>
            <div className="wc-title">Built for Africa, Reaching the World</div>
            <div className="wc-body">
              Proudly Kenyan. Pan-African in outlook. Our students are engineers,
              architects, surveyors, and technicians from Nairobi to Lagos to Lusaka —
              and beyond.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-section {
          background: var(--black);
          border-top: 1px solid rgba(197,160,60,0.12);
          padding: 100px 0;
        }

        .container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .sec-header {
          margin-bottom: 56px;
        }

        .why-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          color: var(--white);
        }

        .why-intro {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.9;
          margin-top: 12px;
          max-width: 560px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          margin-top: 0;
        }

        .why-card {
          background: var(--panel);
          padding: 44px 40px;
          border: 1px solid rgba(197,160,60,0.1);
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s;
        }

        .why-card:hover {
          border-color: rgba(197,160,60,0.45);
        }

        .why-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold3), var(--gold), var(--gold2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .why-card:hover::before {
          transform: scaleX(1);
        }

        .wc-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 72px;
          font-weight: 700;
          color: rgba(197,160,60,0.07);
          position: absolute;
          top: 16px;
          right: 28px;
          line-height: 1;
        }

        .wc-icon {
          font-size: 28px;
          margin-bottom: 16px;
        }

        .wc-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 10px;
        }

        .wc-body {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
        }

        @media (max-width: 900px) {
          .container {
            padding: 0 24px;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyChora