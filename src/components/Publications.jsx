function Publications({ openHomePage }) {
  const downloadBrochure = () => {
    const brochureHTML = document.getElementById('brochurePreview')?.innerHTML

    const printWin = window.open('', '_blank', 'width=900,height=700')

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Chora Academy — Programme Brochure 2025-2026</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
          :root {
            --black:#0D0D0D;
            --gold:#C5A03C;
            --gold2:#F0D060;
            --gold3:#8B6E1F;
            --white:#FFFFFF;
            --panel:#111100;
          }
          body {
            margin:0;
            background:#0D0D0D;
            font-family:'Montserrat',sans-serif;
            color:#fff;
          }
          @page { size: A4; margin: 0; }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        ${brochureHTML}
        <script>
          document.fonts.ready.then(() => {
            setTimeout(() => {
              window.print();
            }, 400);
          });
        <\/script>
      </body>
      </html>
    `)

    printWin.document.close()
  }

  return (
    <section className="brochure-page">
      <div className="brochure-wrap">
        <button type="button" className="brochure-back" onClick={openHomePage}>
          ← Back to Home
        </button>

        <div className="brochure-head">
          <div className="eyebrow">Official Publications</div>
          <div className="rule-gold"></div>

          <h1>Chora Academy Brochures</h1>

          <p>
            Download our official programme brochures. Share with your team,
            manager, or HR department.
          </p>
        </div>

        <div className="brochure-cards">
          <div className="brochure-card">
            <div className="brochure-card-top"></div>

            <div className="brochure-card-inner">
              <div className="brochure-icon">📋</div>

              <div className="brochure-type">General Programme</div>

              <h2>
                Full Programme
                <br />
                Overview
              </h2>

              <p>
                All courses, methodology, certification, pricing, and instructor
                credentials.
              </p>

              <div className="brochure-points">
                <div><span>◆</span>AutoCAD · Revit · Civil 3D · SAP2000</div>
                <div><span>◆</span>Individual &amp; Corporate packages</div>
                <div><span>◆</span>Pricing &amp; payment options</div>
              </div>

              <button type="button" className="btn btn-gold brochure-download" onClick={downloadBrochure}>
                ⬇ Download PDF
              </button>
            </div>
          </div>

          <div className="brochure-card">
            <div className="brochure-card-top"></div>

            <div className="brochure-card-inner">
              <div className="brochure-icon">🏢</div>

              <div className="brochure-type">For Organisations</div>

              <h2>
                Corporate Training
                <br />
                Solutions
              </h2>

              <p>
                For HR managers and technical directors. Bulk enrolment,
                bespoke curriculum, and ROI reporting.
              </p>

              <div className="brochure-points">
                <div><span>◆</span>Teams of 5–500 staff</div>
                <div><span>◆</span>On-site or remote delivery</div>
                <div><span>◆</span>EFT / M-Pesa / Bank transfer</div>
              </div>

              <button type="button" className="btn btn-gold brochure-download" onClick={downloadBrochure}>
                ⬇ Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="brochure-print-note">
          Preview &amp; Print — Press Ctrl+P or Cmd+P → Save as PDF
        </div>

        <div id="brochurePreview" className="brochure-preview">
          <div className="brochure-sheet">
            <div className="brochure-grid-bg"></div>
            <div className="brochure-side-panel"></div>
            <div className="brochure-gold-bar"></div>

            <div className="brochure-sheet-content">
              <div className="brochure-logo-row">
                <div className="brochure-logo-mark">
                  <span>C</span>
                </div>

                <div>
                  <div className="brochure-logo-name">Chora Academy</div>
                  <div className="brochure-logo-tag">Where Precision Meets Possibility</div>
                </div>

                <div className="brochure-programme-year">
                  2025–2026 Programme
                </div>
              </div>

              <div className="brochure-main-title">
                Africa&apos;s Engineering
                <br />
                Software <em>Canvas.</em>
              </div>

              <p className="brochure-main-copy">
                Professional online training for engineers, architects &amp; surveyors.
                Taught by a Registered Engineer. Built in Kenya. Reaching Africa.
              </p>

              <div className="brochure-stats">
                <div>
                  <strong>EBK</strong>
                  <span>Registered Instructor</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Online &amp; Self-Paced</span>
                </div>

                <div>
                  <strong>5+</strong>
                  <span>Countries · Projects</span>
                </div>

                <div>
                  <strong>KES</strong>
                  <span>African Pricing</span>
                </div>
              </div>

              <div className="brochure-section-label">Our Programmes</div>

              <div className="brochure-programmes">
                <div className="brochure-programme active">
                  <div>● Now Enrolling</div>
                  <h3>AutoCAD Fundamentals</h3>
                  <p>8 Weeks · 40 Sessions · KES 8,500 · Self-Paced Online</p>
                </div>

                <div className="brochure-programme muted">
                  <div>○ Coming Soon</div>
                  <h3>Revit Architecture &amp; Structure</h3>
                  <p>10 Weeks · 50 Sessions · Instructor-Led Online</p>
                </div>

                <div className="brochure-programme faint">
                  <div>○ Coming Soon</div>
                  <h3>Civil 3D for Infrastructure</h3>
                  <p>8 Weeks · 40 Sessions · Self-Paced Online</p>
                </div>

                <div className="brochure-programme very-faint">
                  <div>○ Advanced Track</div>
                  <h3>SAP2000 · ETABS · Navisworks</h3>
                  <p>Phase 3 · Details TBA</p>
                </div>
              </div>

              <div className="brochure-corporate-box">
                <div>Corporate Training Solutions</div>

                <p>
                  Bespoke team training · On-site or online delivery · Bulk
                  enrolment for firms of 5–500 · Competency reporting · EFT /
                  M-Pesa / Bank transfer. Contact us to request a tailored proposal.
                </p>
              </div>

              <div className="brochure-footer-info">
                <div>
                  <div className="brochure-footer-label">Lead Instructor</div>
                  <h3>Eng. Stephen Kimani Muniu</h3>
                  <p>
                    BSc Civil Eng · JKUAT &nbsp;·&nbsp; Software Eng · Moringa School
                    &nbsp;·&nbsp; EBK No. B25193
                  </p>
                  <p>
                    SMEC International &nbsp;·&nbsp; World Bank &amp; AfDB Projects
                  </p>
                </div>

                <div className="brochure-contact">
                  <div className="brochure-footer-label">Get Started</div>
                  <p>saugkimani@proton.me</p>
                  <p>+254 710 828 254</p>
                  <h4>choraacademy.co.ke</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brochure-page {
          min-height: 100vh;
          background: var(--black);
          padding: 100px 0;
        }

        .brochure-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .brochure-back {
          background: none;
          border: none;
          color: rgba(197,160,60,0.6);
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          padding: 0;
          margin-bottom: 52px;
          display: block;
        }

        .brochure-back:hover {
          color: var(--gold);
        }

        .brochure-head {
          margin-bottom: 48px;
        }

        .brochure-head h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
        }

        .brochure-head p {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.9;
          max-width: 560px;
        }

        .brochure-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 56px;
        }

        .brochure-card {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.2);
          overflow: hidden;
        }

        .brochure-card-top {
          height: 4px;
          background: linear-gradient(90deg, var(--gold3), var(--gold), var(--gold2));
        }

        .brochure-card-inner {
          padding: 36px 32px;
        }

        .brochure-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .brochure-type {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 10px;
        }

        .brochure-card h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .brochure-card p {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .brochure-points {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 28px;
        }

        .brochure-points div {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .brochure-points span {
          color: var(--gold);
        }

        .brochure-download {
          width: 100%;
          text-align: center;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .brochure-print-note {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.2);
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .brochure-preview {
          border: 1px solid rgba(197,160,60,0.25);
          overflow: hidden;
        }

        .brochure-sheet {
          background: linear-gradient(145deg,#0A0A00 0%,#1a1400 40%,#0D0D0D 100%);
          padding: 72px 64px;
          position: relative;
          overflow: hidden;
          min-height: 600px;
        }

        .brochure-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(197,160,60,0.035) 1px, transparent 1px),
            linear-gradient(90deg,rgba(197,160,60,0.035) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .brochure-side-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 32%;
          border-left: 1px solid rgba(197,160,60,0.1);
          background: rgba(197,160,60,0.012);
          pointer-events: none;
        }

        .brochure-gold-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg,var(--gold3),var(--gold),var(--gold2),var(--gold),var(--gold3));
        }

        .brochure-sheet-content {
          position: relative;
          z-index: 2;
        }

        .brochure-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 56px;
        }

        .brochure-logo-mark {
          width: 38px;
          height: 38px;
          border: 2px solid var(--gold);
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brochure-logo-mark span {
          transform: rotate(-45deg);
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--gold);
        }

        .brochure-logo-name {
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 4px;
          color: var(--white);
          text-transform: uppercase;
        }

        .brochure-logo-tag {
          font-size: 8px;
          font-weight: 300;
          letter-spacing: 2.5px;
          color: rgba(197,160,60,0.5);
          text-transform: uppercase;
        }

        .brochure-programme-year {
          margin-left: auto;
          font-size: 8px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.18);
          text-transform: uppercase;
        }

        .brochure-main-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px,5vw,62px);
          font-weight: 700;
          color: var(--white);
          line-height: 1;
          margin-bottom: 20px;
          max-width: 500px;
        }

        .brochure-main-title em {
          color: var(--gold);
          font-style: italic;
        }

        .brochure-main-copy {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.9;
          max-width: 500px;
          margin-bottom: 52px;
        }

        .brochure-stats {
          display: flex;
          gap: 48px;
          margin-bottom: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(197,160,60,0.15);
        }

        .brochure-stats strong {
          display: block;
          font-family: "Cormorant Garamond", serif;
          font-size: 38px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }

        .brochure-stats span {
          display: block;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-top: 4px;
        }

        .brochure-section-label {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(197,160,60,0.6);
          margin-bottom: 20px;
        }

        .brochure-programmes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          margin-bottom: 40px;
        }

        .brochure-programme {
          background: rgba(13,13,13,0.85);
          border: 1px solid rgba(197,160,60,0.18);
          padding: 18px 22px;
        }

        .brochure-programme div {
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }

        .brochure-programme h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 19px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }

        .brochure-programme p {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
        }

        .brochure-programme.muted {
          opacity: 0.6;
        }

        .brochure-programme.faint {
          opacity: 0.5;
        }

        .brochure-programme.very-faint {
          opacity: 0.4;
        }

        .brochure-corporate-box {
          background: rgba(197,160,60,0.06);
          border: 1px solid rgba(197,160,60,0.15);
          padding: 24px 28px;
          margin-bottom: 40px;
        }

        .brochure-corporate-box div {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 10px;
        }

        .brochure-corporate-box p {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
        }

        .brochure-footer-info {
          border-top: 1px solid rgba(197,160,60,0.15);
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
        }

        .brochure-footer-label {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(197,160,60,0.5);
          margin-bottom: 6px;
        }

        .brochure-footer-info h3 {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
        }

        .brochure-footer-info p {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          margin-top: 2px;
        }

        .brochure-contact {
          text-align: right;
        }

        .brochure-contact h4 {
          font-family: "Cormorant Garamond", serif;
          font-size: 14px;
          color: rgba(255,255,255,0.2);
          margin-top: 4px;
          font-weight: 400;
        }

        @media (max-width: 760px) {
          .brochure-wrap {
            padding: 0 24px;
          }

          .brochure-cards,
          .brochure-programmes {
            grid-template-columns: 1fr;
          }

          .brochure-sheet {
            padding: 52px 28px;
          }

          .brochure-stats {
            flex-wrap: wrap;
            gap: 28px;
          }

          .brochure-contact {
            text-align: left;
          }
        }
      `}</style>
    </section>
  )
}

export default Publications