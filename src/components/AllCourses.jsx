function AllCourses({ openHomePage, openAutoCADPage }) {
  const courses = [
    ['📐', 'Now Enrolling', 'badge-live', 'AutoCAD Fundamentals', 'Master 2D drafting from scratch. Commands, layers, blocks, plotting, and professional drawing standards — the bedrock of any engineering or architectural career.', '8 Weeks · 40 Sessions', 'Online · Self-Paced', 'Certificate on Completion', 'KES 8,500', 'Full Course Fee', 'Enrol Now →', 1],
    ['🏗️', 'Coming Soon', 'badge-soon', 'Revit Architecture & Structure', 'BIM-first design using Autodesk Revit. Families, views, schedules, clash detection, and coordination with multidisciplinary teams on live projects.', '10 Weeks · 50 Sessions', 'Online · Instructor-Led', 'Certificate on Completion', 'TBA', 'Details Forthcoming', 'TBA', 0.75],
    ['🛤️', 'Coming Soon', 'badge-soon', 'Civil 3D for Infrastructure', 'Road alignments, corridor modelling, storm drainage networks, and earthworks — using the industry-standard Civil 3D platform for transport and water projects.', '8 Weeks · 40 Sessions', 'Online · Self-Paced', 'Certificate on Completion', 'TBA', 'Details Forthcoming', 'TBA', 0.6],
    ['🧱', 'Coming Soon', 'badge-soon', 'SAP2000 Structural Analysis', 'Structural modelling, load combination definition, frame and shell element analysis — preparing engineers to verify and design real structures digitally.', 'Duration: TBA', 'Online · Instructor-Led', 'Certificate on Completion', 'TBA', 'Details Forthcoming', 'TBA', 0.55],
    ['🏢', 'Coming Soon', 'badge-soon', 'ETABS Building Analysis', 'High-rise and commercial building modelling using ETABS — seismic analysis, gravity load design, lateral system verification for multi-storey structures.', 'Duration: TBA', 'Online · Instructor-Led', 'Certificate on Completion', 'TBA', 'Details Forthcoming', 'TBA', 0.5],
    ['🔍', 'Coming Soon', 'badge-soon', 'Navisworks Project Review', 'Federated model coordination, clash detection, 4D simulation, and construction sequencing — the tools that keep complex projects from going off the rails on site.', 'Duration: TBA', 'Online · Self-Paced', 'Certificate on Completion', 'TBA', 'Details Forthcoming', 'TBA', 0.45],
  ]

  return (
    <section className="all-courses-section" id="all-courses">
      <div className="container">
        <div className="all-courses-header">
          <div>
            <div className="eyebrow">All Courses &amp; Roadmap</div>
            <div className="rule-gold"></div>

            <h1 className="all-heading">The Full Curriculum</h1>

            <p className="all-intro">
              Every course Chora Academy offers — now and on the horizon.
              Your engineering software journey starts here.
            </p>
          </div>

            <button type="button" className="all-back" onClick={openHomePage}>
              ← Back to Home
            </button>
        </div>

        <div className="all-grid">
          {courses.map((course) => (
            <article
              className="all-card"
              style={{ opacity: course[11] }}
              key={course[3]}
            >
              <div className="all-card-top">
                <div className="all-icon">{course[0]}</div>
                <div className={`all-badge ${course[2]}`}>{course[1]}</div>
                <div className="all-title">{course[3]}</div>
              </div>

              <div className="all-card-body">
                <div className="all-desc">{course[4]}</div>

                <div className="all-meta">
                  <div><span></span>{course[5]}</div>
                  <div><span></span>{course[6]}</div>
                  <div><span></span>{course[7]}</div>
                </div>
              </div>

              <div className="all-footer">
                <div>
                  <div className={`all-price ${course[8] === 'TBA' ? 'muted-price' : ''}`}>
                    {course[8]}
                  </div>
                  <div className="all-price-label">{course[9]}</div>
                </div>

                {course[10] === 'Enrol Now →' ? (
                  <button type="button" className="all-cta all-button-link" onClick={openAutoCADPage}>
                    {course[10]}
                  </button>
                ) : (
                  <span className="all-cta muted-cta">{course[10]}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="roadmap" id="course-roadmap">
          <div className="eyebrow">Course Roadmap</div>
          <div className="rule-gold"></div>

          <h2 className="roadmap-heading">Your Learning Path</h2>

          <p className="roadmap-intro">
            Start at the foundation and build towards specialisation. Each course
            prepares you for the next level.
          </p>

          <div className="roadmap-list">
            <div className="roadmap-row">
              <div className="roadmap-line">
                <span className="roadmap-dot active-dot"></span>
                <span className="roadmap-stem"></span>
              </div>

              <div className="roadmap-content">
                <div className="roadmap-phase">Phase 1 — Foundation</div>
                <h3>AutoCAD Fundamentals</h3>
                <p>
                  The starting point for every engineering software professional.
                  Learn to draw, annotate, and output technical drawings to industry standards.
                  <strong> ● Now Enrolling</strong>
                </p>
              </div>
            </div>

            <div className="roadmap-row">
              <div className="roadmap-line">
                <span className="roadmap-dot"></span>
                <span className="roadmap-stem faint"></span>
              </div>

              <div className="roadmap-content muted">
                <div className="roadmap-phase">Phase 2 — Specialisation</div>
                <h3>Revit Architecture &amp; Structure <small>or</small> Civil 3D</h3>
                <p>
                  Choose your track — Architecture/Structures via Revit, or Infrastructure
                  via Civil 3D. Both require AutoCAD fluency as a prerequisite.
                  <strong> ○ Coming Soon</strong>
                </p>
              </div>
            </div>

            <div className="roadmap-row">
              <div className="roadmap-line">
                <span className="roadmap-dot faint-dot"></span>
              </div>

              <div className="roadmap-content faint-content">
                <div className="roadmap-phase">Phase 3 — Advanced Practice</div>
                <h3>SAP2000 · ETABS · Navisworks</h3>
                <p>
                  Advanced structural analysis, building modelling, coordination,
                  and project review workflows for professional engineering practice.
                  <strong> ○ Coming Soon</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .all-courses-section {
          background: #080808;
          padding: 100px 0;
          border-top: 1px solid rgba(197,160,60,0.12);
        }
        .all-courses-section .container {
            width: min(1180px, calc(100% - 96px));
            margin: 0 auto;
        }

        .all-courses-header {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          align-items: flex-start;
          margin-bottom: 56px;
        }

        .all-heading,
        .roadmap-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          color: var(--white);
        }

        .all-intro,
        .roadmap-intro {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.9;
          margin-top: 12px;
          max-width: 560px;
        }

        .all-back {
        height: 48px;
        padding: 0 26px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: 1px solid rgba(197,160,60,0.35);

        color: var(--gold);

        font-size: 8px;
        font-weight: 800;
        letter-spacing: 3px;
        text-transform: uppercase;

        cursor: pointer;
        white-space: nowrap;

        transition:
            background 0.25s,
            border-color 0.25s,
            transform 0.25s,
            color 0.25s;
        }

        .all-back:hover {
        background: rgba(197,160,60,0.08);
        border-color: var(--gold);
        transform: translateY(-2px);
        }

        .all-back:active {
        transform: translateY(0);
        }

        .all-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .all-card {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.13);
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .all-card-top {
          padding: 30px 28px 22px;
          border-bottom: 1px solid rgba(197,160,60,0.1);
        }

        .all-button-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .all-icon {
          font-size: 30px;
          margin-bottom: 18px;
        }

        .all-badge {
          display: inline-block;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 6px 9px;
          margin-bottom: 14px;
        }

        .badge-live {
          background: var(--gold);
          color: var(--black);
        }

        .badge-soon {
          background: transparent;
          border: 1px solid rgba(197,160,60,0.35);
          color: var(--gold);
        }

        .all-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 27px;
          font-weight: 700;
          color: var(--white);
          line-height: 1.05;
        }

        .all-card-body {
          padding: 24px 28px;
          flex: 1;
        }

        .all-desc {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .all-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .all-meta div {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
        }

        .all-meta span {
          width: 5px;
          height: 5px;
          background: var(--gold);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .all-footer {
          padding: 22px 28px;
          border-top: 1px solid rgba(197,160,60,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .all-price {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold);
        }

        .muted-price {
          font-size: 18px;
          color: rgba(197,160,60,0.4);
        }

        .all-price-label {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-top: 3px;
        }

        .all-cta {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          white-space: nowrap;
        }

        .muted-cta {
          color: rgba(197,160,60,0.3);
        }

        .roadmap {
          margin-top: 80px;
          padding-top: 60px;
          border-top: 1px solid rgba(197,160,60,0.15);
        }

        .roadmap-list {
          margin-top: 48px;
        }

        .roadmap-row {
          display: flex;
          gap: 24px;
        }

        .roadmap-line {
          width: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .roadmap-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid rgba(197,160,60,0.5);
        }

        .active-dot {
          background: var(--gold);
          border-color: var(--gold);
        }

        .faint-dot {
          border-color: rgba(197,160,60,0.2);
        }

        .roadmap-stem {
          width: 2px;
          min-height: 118px;
          background: linear-gradient(to bottom, var(--gold), rgba(197,160,60,0.15));
        }

        .roadmap-stem.faint {
          background: linear-gradient(to bottom, rgba(197,160,60,0.2), rgba(197,160,60,0.06));
        }

        .roadmap-content {
          padding-bottom: 40px;
        }

        .roadmap-phase {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }

        .roadmap-content h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: var(--white);
          margin-bottom: 6px;
        }

        .roadmap-content small {
          font-size: 12px;
          color: rgba(197,160,60,0.4);
        }

        .roadmap-content p {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          max-width: 480px;
        }

        .roadmap-content strong {
          color: var(--gold);
          font-weight: 500;
        }

        .roadmap-content.muted {
          opacity: 0.65;
        }

        .faint-content {
          opacity: 0.4;
        }

        @media (max-width: 1000px) {

        .all-courses-section .container {
          width: min(100%, calc(100% - 40px));
          }
        
          .all-grid {
            grid-template-columns: 1fr;
          }

          .all-courses-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default AllCourses