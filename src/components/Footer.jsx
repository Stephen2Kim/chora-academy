function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-block">
            <div className="footer-logo">
              CHORA <span>ACADEMY</span>
            </div>

            <div className="footer-tagline">
              WHERE PRECISION MEETS POSSIBILITY
            </div>

            <p className="footer-desc">
              Africa&apos;s engineering software canvas. Professional online training
              for engineers, architects, and surveyors — built in Kenya, reaching
              the continent.
            </p>

            <div className="footer-contact-list">
              <div>📍 Nairobi, Kenya</div>
              <div>✉ hello@choraacademy.co.ke</div>
              <div>☎ +254 710 828 254</div>
              <div>🌐 choraacademy.co.ke</div>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-line"></div>
            <h4>Courses</h4>
            <a href="#courses">AutoCAD Fundamentals</a>
            <a href="#courses">Revit Architecture</a>
            <a href="#courses">Civil 3D</a>
            <a href="#courses">SAP2000 Basics</a>
            <a href="#courses">Full Course Roadmap</a>
          </div>

          <div className="footer-col">
            <div className="footer-line"></div>
            <h4>Academy</h4>
            <a href="#about">About Us</a>
            <a href="#corporate">Corporate Training</a>
            <a href="#community">Community</a>
            <a href="#">Blog</a>
            <a href="#">Verify Certificate</a>
          </div>

          <div className="footer-col">
            <div className="footer-line"></div>
            <h4>Support</h4>
            <a href="#">FAQs</a>
            <a href="#">How to Enrol</a>
            <a href="#">Payment Options</a>
            <a href="#">Contact Us</a>
            <a href="#">Student Portal</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Chora Academy · Nairobi, Kenya · All Rights Reserved
          </div>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #050505;
          border-top: 2px solid rgba(197,160,60,0.75);
          padding: 82px 0 34px;
        }

        .footer-inner {
          width: min(1060px, calc(100% - 48px));
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 64px;
          padding-bottom: 58px;
          border-bottom: 1px solid rgba(197,160,60,0.13);
        }

        .footer-logo {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--white);
          line-height: 1;
        }

        .footer-logo span {
          color: var(--gold);
        }

        .footer-tagline {
          margin-top: 7px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 3px;
          color: rgba(197,160,60,0.45);
          text-transform: uppercase;
        }

        .footer-desc {
          margin-top: 30px;
          max-width: 300px;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(255,255,255,0.34);
        }

        .footer-contact-list {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.34);
          line-height: 1.5;
        }

        .footer-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, rgba(197,160,60,0.45), transparent);
          margin-bottom: 20px;
        }

        .footer-col h4 {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
        }

        .footer-col a {
          display: block;
          text-decoration: none;
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          margin-bottom: 15px;
        }

        .footer-col a:hover {
          color: var(--gold);
        }

        .footer-bottom {
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          font-size: 9px;
          letter-spacing: 1.8px;
          color: rgba(255,255,255,0.22);
        }

        .footer-legal {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: rgba(255,255,255,0.28);
          text-decoration: none;
        }

        .footer-legal a:hover {
          color: var(--gold);
        }

        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .footer-bottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer