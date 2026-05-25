function DraftingBoard({ openPublicationsPage }) {
  return (
    <section className="cta-banner">
      <div className="cta-inner">
        <h2 className="cta-headline">
          Your Drafting Board
          <br />
          Is <em>Waiting.</em>
        </h2>

        <p className="cta-sub">
          Enrol in AutoCAD Fundamentals — Kenya&apos;s most practical engineering software course
        </p>

        <div className="cta-btns">
          <a href="#courses" className="btn btn-gold">
            Start Learning Today
          </a>

          <button
            type="button"
            className="btn btn-outline"
            onClick={openPublicationsPage}
          >
            Download Prospectus
          </button>
        </div>
      </div>

      <style>{`
        .cta-banner {
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          text-align: center;

          background:
            radial-gradient(
              circle at center,
              rgba(197, 160, 60, 0.09),
              rgba(13, 13, 13, 1) 68%
            );

          border-top: 1px solid rgba(197, 160, 60, 0.22);
          border-bottom: 1px solid rgba(197, 160, 60, 0.22);
        }

        .cta-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 28px,
            rgba(197, 160, 60, 0.04) 28px,
            rgba(197, 160, 60, 0.04) 29px
          );
          pointer-events: none;
        }

        .cta-banner::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold3),
            var(--gold),
            var(--gold2),
            var(--gold),
            var(--gold3),
            transparent
          );
          opacity: 0.75;
        }

        .cta-inner {
          position: relative;
          z-index: 2;
          max-width: 920px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .cta-inner::after {
          content: "";
          position: absolute;
          left: 56px;
          right: 56px;
          bottom: -110px;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold3),
            var(--gold),
            var(--gold2),
            var(--gold),
            var(--gold3),
            transparent
          );
          opacity: 0.75;
        }

        .cta-headline {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(48px, 6vw, 86px);
          font-weight: 700;
          line-height: 0.92;
          color: var(--white);
        }

        .cta-headline em {
          color: var(--gold);
          font-style: italic;
          font-weight: 600;
        }

        .cta-sub {
          margin-top: 24px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.8;
        }

        .cta-btns {
          margin-top: 42px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 700px) {
          .cta-banner {
            padding: 90px 0;
          }

          .cta-inner {
            padding: 0 24px;
          }

          .cta-inner::after {
            left: 24px;
            right: 24px;
            bottom: -90px;
          }

          .cta-headline {
            line-height: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default DraftingBoard