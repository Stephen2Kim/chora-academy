function AutoCADCourse({ openHomePage, openCoursesPage, openApplicationPage }) {
  const requirements = [
    'Completed high school level education (KCSE or equivalent)',
    'Minimum age: 18 years',
    'Access to a laptop or desktop computer (Windows recommended)',
    'Stable internet connection',
    'No prior CAD experience necessary — we start from scratch',
  ]

  const outcomes = [
    'Junior Draughtsperson / CAD Technician',
    'Engineering Drawing Production for consulting firms',
    'Architectural drawing assistant (residential & commercial)',
    'Freelance CAD contractor (local & international clients)',
    'Foundation for advanced Revit, Civil 3D, or BIM courses',
  ]

  const modules = [
    ['Module 1 — Getting Started', ['Interface orientation & workspace setup', 'Coordinate systems & precision drawing', 'Basic draw commands: Line, Circle, Arc, Polyline', 'Modify commands: Move, Copy, Trim, Extend, Offset']],
    ['Module 2 — Layers & Properties', ['Layer management & standards', 'Object properties: colour, linetype, lineweight', 'Blocks, attributes, and symbol libraries']],
    ['Module 3 — Text & Annotation', ['Dimension styles and placement', 'Text styles, Mtext, and leaders', 'Hatching and pattern fills']],
    ['Module 4 — Layouts & Plotting', ['Model space vs paper space', 'Viewports, scales, and title blocks', 'Plot styles and printing to PDF/DWG']],
    ['Module 5 — Applied Projects', ['Residential floor plan from scratch', 'Structural detail sheets', 'Road layout and site plan exercise']],
    ['Module 6 — Professional Standards', ['Drawing conventions & BS/ISO standards', 'File management & DWG transmittal', 'Final assessment & certificate project']],
  ]

  return (
    <section className="autocad-page">
      <div className="autocad-container">
        <div className="course-top-actions">
          <button type="button" className="course-back" onClick={openCoursesPage}>
            ← Back to Courses
          </button>
          <button type="button" className="course-back" onClick={openHomePage}>
            Home
          </button>
        </div>

        <div className="course-header">
          <div className="eyebrow">Pilot Programme · Now Enrolling</div>
          <div className="rule-gold"></div>

          <div className="course-title-row">
            <div className="course-icon">📐</div>

            <div>
              <h1>AutoCAD Fundamentals</h1>
              <div className="course-kicker">
                Africa&apos;s Most Practical Engineering Software Course
              </div>
            </div>
          </div>

          <p>
            AutoCAD is the world&apos;s most widely used drafting software — and the first
            tool every engineer, architect, and surveyor must master. This course takes
            you from zero to professionally competent: drawing, editing, annotating,
            and plotting technical drawings to industry standards. Taught by a
            Registered Graduate Engineer with live project experience across East Africa.
          </p>
        </div>

        <div className="course-info-bar">
          <div>
            <span>Duration</span>
            <strong>8 Weeks</strong>
            <small>40 Sessions</small>
          </div>

          <div>
            <span>Fees</span>
            <strong className="gold-fee">KES 8,500</strong>
            <small>Full Course</small>
          </div>

          <div>
            <span>Intake</span>
            <strong>Anytime</strong>
            <small>Self-Paced</small>
          </div>

          <div>
            <span>Mode</span>
            <strong>Online</strong>
            <small>100% Remote</small>
          </div>
        </div>

        <div className="course-details-grid">
          <CourseList title="Entry Requirements" items={requirements} />
          <CourseList title="Career Outcomes" items={outcomes} />
        </div>

        <div className="course-roadmap-box">
          <div className="box-title">Course Overview &amp; Roadmap</div>

          <div className="module-grid">
            {modules.map((module) => (
              <div className="module-block" key={module[0]}>
                <h3>{module[0]}</h3>

                <ul>
                  {module[1].map((item, index) => (
                    <li key={item}>
                      <span>{String(index + 1).padStart(2, '0')}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="course-apply">
          <div>Ready to begin your AutoCAD journey?</div>

            <button
            type="button"
            className="btn btn-gold course-apply-btn"
            onClick={openApplicationPage}
            >
            Apply Now
            </button>

        </div>
      </div>

      <style>{`
        .autocad-page {
          min-height: 100vh;
          background: #080808;
          padding: 110px 0;
          border-top: 1px solid rgba(197,160,60,0.12);
        }

        .autocad-container {
          width: min(980px, calc(100% - 96px));
          margin: 0 auto;
        }

        .course-top-actions {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 52px;
        }

        .course-back {
          height: 46px;
          padding: 0 24px;
          background: transparent;
          border: 1px solid rgba(197,160,60,0.35);
          color: var(--gold);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .course-header {
          margin-bottom: 52px;
        }

        .course-title-row {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 16px;
        }

        .course-icon {
          font-size: 48px;
          line-height: 1;
        }

        .course-header h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .course-kicker {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
        }

        .course-header p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.9;
          max-width: 700px;
          margin-top: 16px;
        }

        .course-info-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          margin-bottom: 52px;
          border: 1px solid rgba(197,160,60,0.15);
        }

        .course-info-bar div {
          background: var(--panel);
          padding: 24px 20px;
          text-align: center;
          border-left: 1px solid rgba(197,160,60,0.1);
        }

        .course-info-bar div:first-child {
          border-left: none;
        }

        .course-info-bar span {
          display: block;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(197,160,60,0.5);
          margin-bottom: 8px;
        }

        .course-info-bar strong {
          display: block;
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--white);
        }

        .course-info-bar .gold-fee {
          color: var(--gold);
        }

        .course-info-bar small {
          display: block;
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          margin-top: 4px;
        }

        .course-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 52px;
        }

        .course-box,
        .course-roadmap-box {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.15);
          padding: 32px;
        }

        .course-roadmap-box {
          padding: 40px;
          margin-bottom: 52px;
        }

        .box-title {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(197,160,60,0.15);
        }

        .course-box ul,
        .module-block ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .course-box li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
        }

        .course-box li span {
          color: var(--gold);
          flex-shrink: 0;
        }

        .module-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .module-block h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
          margin-top: 24px;
        }

        .module-block h3:first-child {
          margin-top: 0;
        }

        .module-block li {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          display: flex;
          gap: 8px;
          line-height: 1.6;
        }

        .module-block li span {
          color: rgba(197,160,60,0.5);
          flex-shrink: 0;
        }

        .course-apply {
          text-align: center;
          margin-bottom: 52px;
        }

        .course-apply div {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .course-apply-btn {
          font-size: 11px;
          padding: 18px 52px;
          letter-spacing: 4px;
        }

        @media (max-width: 800px) {
          .autocad-container {
            width: min(100%, calc(100% - 40px));
          }

          .course-info-bar,
          .course-details-grid,
          .module-grid {
            grid-template-columns: 1fr;
          }

          .course-top-actions {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

function CourseList({ title, items }) {
  return (
    <div className="course-box">
      <div className="box-title">{title}</div>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <span>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AutoCADCourse