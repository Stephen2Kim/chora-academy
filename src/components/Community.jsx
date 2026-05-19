function Community() {
  return (
    <section className="community-section" id="community">
      <div className="container">
        <div className="sec-header">
          <div className="eyebrow">04 — Community</div>
          <div className="rule-gold"></div>

          <h2 className="community-heading">The Chora Circle</h2>

          <p className="community-intro">
            Learning doesn&apos;t stop at the last session. Our community keeps you
            connected, growing, and accountable — long after your certificate is printed.
          </p>
        </div>

        <div className="community-grid">
          <div className="cm-card">
            <div className="cm-icon">💬</div>
            <div className="cm-title">Student Forums</div>
            <div className="cm-body">
              Ask questions, share drawings, and get feedback from peers and instructors.
              An active community of engineers who get it.
            </div>
          </div>

          <div className="cm-card">
            <div className="cm-icon">📅</div>
            <div className="cm-title">Monthly Live Q&amp;As</div>
            <div className="cm-body">
              Monthly live sessions with our lead instructor — open office hours to
              tackle real project challenges, not just textbook problems.
            </div>
          </div>

          <div className="cm-card">
            <div className="cm-icon">🏆</div>
            <div className="cm-title">Project Showcase</div>
            <div className="cm-body">
              Submit your best project work for monthly community recognition and build
              a shareable portfolio that proves your skills.
            </div>
          </div>
        </div>

        <div className="community-actions">
          <a href="#" className="btn btn-gold">Join the Community</a>
          <a href="#" className="btn btn-outline">Learn More</a>
        </div>
      </div>

      <style>{`
        .community-section {
          background: #080808;
          padding: 100px 0;
          border-top: 1px solid rgba(197,160,60,0.12);
        }

        .community-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          color: var(--white);
        }

        .community-intro {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.9;
          margin-top: 12px;
          max-width: 560px;
        }

        .community-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .cm-card {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.13);
          padding: 40px 34px;
          min-height: 260px;
          transition: border-color 0.25s, transform 0.25s;
        }

        .cm-card:hover {
          border-color: rgba(197,160,60,0.45);
          transform: translateY(-4px);
        }

        .cm-icon {
          font-size: 30px;
          margin-bottom: 20px;
        }

        .cm-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 27px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 14px;
        }

        .cm-body {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
        }

        .community-actions {
          margin-top: 48px;
          text-align: center;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .community-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Community