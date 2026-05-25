function Corporate({ openProposalPage, openPublicationsPage }) {
  return (
    <section className="corporate-section" id="corporate">
      <div className="container">
        <div className="corp-layout">
          <div className="corp-visual">
            <div className="corp-block">
              <div className="corp-block-title">Corporate Training Solutions</div>

              <ul className="corp-list">
                <li>Bespoke team training on your preferred software stack</li>
                <li>On-site or fully online delivery — we come to your office</li>
                <li>Bulk enrolment packages for firms of 5–500 staff</li>
                <li>Customised curriculum aligned to your project deliverables</li>
                <li>Progress tracking and competency reporting for management</li>
                <li>Invoicing with EFT / M-Pesa / Bank transfer</li>
              </ul>

              <div className="corp-trusted">
                <div className="eyebrow corp-trusted-title">Trusted by teams in</div>

                <div className="corp-trusted-text">
                  Consulting Firms &nbsp;·&nbsp; Government Agencies &nbsp;·&nbsp; Contractors
                  <br />
                  NGOs &amp; Development Banks &nbsp;·&nbsp; Universities
                </div>
              </div>
            </div>
          </div>

          <div className="corp-content">
            <div className="eyebrow">03 — Corporate</div>
            <div className="rule-gold"></div>

            <h2 className="sec-heading">
              Upskill Your<br />
              Entire Team
            </h2>

            <p className="body-text">
              Whether you&apos;re a consulting firm onboarding graduates, a contractor
              standardising CAD workflows, or a government department digitising design
              delivery — Chora Academy can build the right programme for your organisation.
            </p>

            <p className="body-text body-tight">
              We work directly with HR and technical managers to design, schedule,
              and deliver training that produces measurable outputs — not just certificates.
            </p>

            <div className="corp-actions">
              <button type="button" className="btn btn-gold" onClick={openProposalPage}>
                Request a Proposal
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={openPublicationsPage}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .corporate-section {
          background: var(--black);
          padding: 110px 0;
          border-top: 1px solid rgba(197,160,60,0.12);
        }

        .corp-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .corp-visual {
          position: relative;
        }

        .corp-block {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.16);
          padding: 44px 42px;
          position: relative;
        }

        .corp-block::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 72px;
          height: 3px;
          background: var(--gold);
        }

        .corp-block::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 72px;
          background: var(--gold);
        }

        .corp-block-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 30px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 26px;
        }

        .corp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .corp-list li {
          position: relative;
          padding-left: 22px;
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.48);
          line-height: 1.7;
        }

        .corp-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 6px;
          background: var(--gold);
          transform: rotate(45deg);
        }

        .corp-trusted {
          margin-top: 28px;
          border-top: 1px solid rgba(197,160,60,0.2);
          padding-top: 20px;
        }

        .corp-trusted-title {
          margin-bottom: 10px;
        }

        .corp-trusted-text {
          font-family: "Cormorant Garamond", serif;
          font-size: 16px;
          color: rgba(255,255,255,0.35);
          line-height: 2;
        }

        .corp-content {
          max-width: 520px;
        }

        .sec-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(36px, 4vw, 58px);
          font-weight: 700;
          color: var(--white);
          line-height: 1;
          margin-bottom: 26px;
        }

        .body-text {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.9;
          margin-bottom: 28px;
        }

        .body-tight {
          margin-top: -16px;
        }

        .corp-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .corp-layout {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }
      `}</style>
    </section>
  )
}

export default Corporate