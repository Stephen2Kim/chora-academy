function QuoteStrip() {
  return (
    <div className="quote-strip">
      <div className="quote-inner">
        <div className="quote-mark">"</div>

        <div className="quote-text">
          Engineering software skills are no longer a bonus. They are the baseline.
          Chora Academy exists to make sure every African engineer starts above it.
        </div>

        <div className="quote-attr">
          Eng. Stephen Kimani Muniu &nbsp;◆&nbsp; Founder, Chora Academy
        </div>
      </div>

      <style>{`
        .quote-strip {
          background: var(--gold);
          padding: 60px 0;
        }

        .quote-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 56px;
          text-align: center;
        }

        .quote-mark {
          font-family: "Cormorant Garamond", serif;
          font-size: 80px;
          color: var(--black);
          opacity: 0.2;
          line-height: 0.7;
          margin-bottom: 12px;
        }

        .quote-text {
          font-family: "Cormorant Garamond", serif;
          font-size: 26px;
          font-style: italic;
          font-weight: 600;
          color: var(--black);
          line-height: 1.5;
        }

        .quote-attr {
          margin-top: 20px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--black);
          opacity: 0.55;
        }

        @media (max-width: 700px) {
          .quote-inner {
            padding: 0 24px;
          }

          .quote-text {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  )
}

export default QuoteStrip