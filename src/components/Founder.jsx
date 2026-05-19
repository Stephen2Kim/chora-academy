import founderImage from '../assets/DSC_2651.JPG.jpeg'

function Founder() {
  return (
    <section className="instructor-section" id="founder">
      <div className="container">
        <div className="instr-layout">
          <div className="instr-visual">
            <div className="instr-img-wrap">
              <img
                src={founderImage}
                alt="Eng. Stephen Kimani Muniu"
                className="instr-img"
              />

              <div className="instr-badge-float">
                <div>EBK Registered</div>
                <div>B25193</div>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow">05 — About the Founder</div>
            <div className="rule-gold"></div>

            <div className="instr-name">
              Eng. Stephen<br />
              Kimani Muniu
            </div>

            <div className="instr-title">
              Founder &amp; Lead Instructor · Chora Academy
            </div>

            <p className="instr-bio">
              A Registered Graduate Civil &amp; Structural Engineer (EBK No. B25193)
              with project experience across Kenya, Malawi, Uganda, Rwanda, and Ghana
              on World Bank and AfDB-funded infrastructure programmes. Currently a
              Project Coordinator at SMEC International, Stephen founded Chora Academy
              to bring engineering-grade software training to African professionals —
              at African prices.
            </p>

            <div className="instr-creds">
              <div className="cred-chip">BSc Civil Eng · JKUAT</div>
              <div className="cred-chip">Software Eng · Moringa School</div>
              <div className="cred-chip">EBK Graduate Member</div>
              <div className="cred-chip">SMEC International</div>
              <div className="cred-chip">World Bank Projects</div>
              <div className="cred-chip">AfDB Projects</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .instructor-section {
          background: var(--black);
          padding: 110px 0;
          border-top: 1px solid rgba(197,160,60,0.12);
        }

        .instr-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .instr-visual {
          position: relative;
        }

        .instr-img-wrap {
          height: 520px;
          border: 1px solid rgba(197,160,60,0.25);
          position: relative;
          overflow: hidden;
          background: var(--panel);
        }

        .instr-img-wrap::before {
        content: "";
        position: absolute;
        top: -14px;
        left: -14px;
        width: 120px;
        height: 120px;
        border-top: 3px solid var(--gold);
        border-left: 3px solid var(--gold);
        z-index: 3;
        pointer-events: none;
        }

        .instr-img-wrap::after {
        content: "";
        position: absolute;
        right: -14px;
        bottom: -14px;
        width: 120px;
        height: 120px;
        border-right: 3px solid var(--gold);
        border-bottom: 3px solid var(--gold);
        z-index: 3;
        pointer-events: none;
        }

        .instr-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .instr-badge-float {
          position: absolute;
          right: 22px;
          bottom: 22px;
          background: var(--gold);
          color: var(--black);
          padding: 14px 18px;
          z-index: 3;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
        }

        .instr-badge-float div:first-child {
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .instr-badge-float div:last-child {
          font-family: "Cormorant Garamond", serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 1;
        }

        .instr-name {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 700;
          color: var(--white);
          line-height: 0.95;
          margin-bottom: 18px;
        }

        .instr-title {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
        }

        .instr-bio {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 2;
          max-width: 620px;
          margin-bottom: 30px;
        }

        .instr-creds {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cred-chip {
          border: 1px solid rgba(197,160,60,0.25);
          color: rgba(255,255,255,0.55);
          padding: 10px 14px;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .instr-layout {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .instr-img-wrap {
            height: 420px;
          }
        }
      `}</style>
    </section>
  )
}

export default Founder