function CoursesPreview({ openCoursesPage, openAutoCADPage }) {
  return (
    <section className="courses-preview-section" id="courses">
      <div className="container">
        <div className="sec-header">
          <div className="eyebrow">02 — Our Courses</div>
          <div className="rule-gold"></div>

          <h2 className="cp-heading">The Curriculum</h2>

          <p className="cp-intro">
            From foundational drafting to advanced BIM — structured programmes
            that take you from beginner to billable.
          </p>
        </div>

        <div className="cp-grid">
          <article className="cp-card">
            <div className="cp-top">
              <div className="cp-icon">📐</div>
              <div className="cp-badge cp-live">Now Enrolling</div>
              <h3>AutoCAD Fundamentals</h3>
            </div>

            <p>
              Master 2D drafting from scratch. Commands, layers, blocks,
              plotting, and professional drawing standards.
            </p>

            <div className="cp-meta">
              <span>8 Weeks · 40 Sessions</span>
              <span>Online · Self-Paced</span>
              <span>Certificate on Completion</span>
            </div>

            <div className="cp-footer">
              <div>
                <div className="cp-price">KES 8,500</div>
                <div className="cp-price-label">Full Course Fee</div>
              </div>

            <button type="button" className="cp-link cp-button-link" onClick={openAutoCADPage}>
              Enrol Now →
            </button>
            </div>
          </article>

          <article className="cp-card cp-muted">
            <div className="cp-top">
              <div className="cp-icon">🏗️</div>
              <div className="cp-badge cp-soon">Coming Soon</div>
              <h3>Revit Architecture &amp; Structure</h3>
            </div>

            <p>
              BIM-first design using Autodesk Revit. Families, views, schedules,
              detailing, and project coordination.
            </p>

            <div className="cp-meta">
              <span>10 Weeks · 50 Sessions</span>
              <span>Online · Instructor-Led</span>
              <span>Certificate on Completion</span>
            </div>

            <div className="cp-footer">
              <div>
                <div className="cp-price cp-price-muted">TBA</div>
                <div className="cp-price-label">Details Forthcoming</div>
              </div>

              <span className="cp-link cp-link-muted">TBA</span>
            </div>
          </article>

          <article className="cp-card cp-faint">
            <div className="cp-top">
              <div className="cp-icon">🛤️</div>
              <div className="cp-badge cp-soon">Coming Soon</div>
              <h3>Civil 3D for Infrastructure</h3>
            </div>

            <p>
              Road alignments, corridor modelling, storm drainage networks,
              earthworks, and infrastructure workflows.
            </p>

            <div className="cp-meta">
              <span>8 Weeks · 40 Sessions</span>
              <span>Online · Self-Paced</span>
              <span>Certificate on Completion</span>
            </div>

            <div className="cp-footer">
              <div>
                <div className="cp-price cp-price-muted">TBA</div>
                <div className="cp-price-label">Details Forthcoming</div>
              </div>

              <span className="cp-link cp-link-muted">TBA</span>
            </div>
          </article>
        </div>

        <div className="cp-view-all">
            <button type="button" className="btn btn-gold" onClick={openCoursesPage}>
            View All Courses &amp; Roadmap
            </button>
        </div>
      </div>

      <style>{`
        .courses-preview-section {
          background: #0A0A0A;
          padding: 100px 0;
          border-top: 1px solid rgba(197,160,60,0.12);
        }

        .cp-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          color: var(--white);
          margin-top: 8px;
        }

        .cp-intro {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.9;
          margin-top: 12px;
          max-width: 560px;
        }

        .cp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .cp-card {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.13);
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s, transform 0.25s;
        }

        .cp-card:hover {
          border-color: rgba(197,160,60,0.45);
          transform: translateY(-4px);
        }

        .cp-button-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .cp-muted {
          opacity: 0.75;
        }

        .cp-faint {
          opacity: 0.6;
        }

        .cp-top {
          padding: 30px 28px 22px;
          border-bottom: 1px solid rgba(197,160,60,0.1);
        }

        .cp-icon {
          font-size: 30px;
          margin-bottom: 18px;
        }

        .cp-badge {
          display: inline-block;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 6px 9px;
          margin-bottom: 14px;
        }

        .cp-live {
          background: var(--gold);
          color: var(--black);
        }

        .cp-soon {
          background: transparent;
          border: 1px solid rgba(197,160,60,0.35);
          color: var(--gold);
        }

        .cp-card h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 27px;
          font-weight: 700;
          color: var(--white);
          line-height: 1.05;
        }

        .cp-card p {
          padding: 24px 28px 0;
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
        }

        .cp-meta {
          padding: 22px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cp-meta span {
          position: relative;
          padding-left: 15px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
        }

        .cp-meta span::before {
          content: "";
          width: 5px;
          height: 5px;
          background: var(--gold);
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 5px;
        }

        .cp-footer {
          padding: 22px 28px;
          border-top: 1px solid rgba(197,160,60,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .cp-price {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold);
        }

        .cp-price-muted {
          font-size: 18px;
          color: rgba(197,160,60,0.4);
        }

        .cp-price-label {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-top: 3px;
        }

        .cp-link {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          white-space: nowrap;
        }

        .cp-link-muted {
          color: rgba(197,160,60,0.3);
        }

        .cp-view-all {
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 1000px) {
          .cp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default CoursesPreview