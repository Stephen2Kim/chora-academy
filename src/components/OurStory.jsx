import founderImage from '../assets/DSC_2651.JPG.jpeg'

function StoryDivider() {
  return (
    <div className="story-divider">
      <div></div>
      <span></span>
      <div></div>
    </div>
  )
}

function StoryChapter({ roman, title, children }) {
  return (
    <div>
      <div className="story-chapter-head">
        <div className="story-roman">{roman}</div>
        <div className="story-chapter-title">{title}</div>
      </div>

      <div className="story-copy">
        {children}
      </div>
    </div>
  )
}

function OurStory({ openHomePage, openCoursesPage }) {
  return (
    <section className="our-story-page">
      <div className="story-wrap">
        <button type="button" className="story-back" onClick={openHomePage}>
          ← Back to Home
        </button>

        <div className="story-hero">
          <div className="eyebrow">The Founder&apos;s Story</div>
          <div className="rule-gold"></div>

          <h1>
            Built From
            <br />
            <em>Scratch.</em>
          </h1>

          <div className="story-founder-line">
            Eng. Stephen Kimani Muniu — Founder, Chora Academy
          </div>
        </div>

        <div className="story-profile">
          <div className="story-photo">
            <img src={founderImage} alt="Eng. Stephen Kimani Muniu" />
          </div>

          <div>
            <div className="story-profile-name">Eng. Stephen Kimani Muniu</div>
            <div className="story-profile-title">
              BSc Civil Eng · JKUAT &nbsp;·&nbsp; Software Eng · Moringa School
            </div>
            <div className="story-profile-meta">
              Project Coordinator, SMEC International &nbsp;·&nbsp; EBK No. B25193 &nbsp;·&nbsp; Founder, Chora Academy
            </div>
          </div>
        </div>

        <div className="story-quote">
          &quot;Engineering software skills are no longer a bonus. They are the baseline.
          I built Chora Academy to make sure every African engineer starts above it.&quot;
        </div>

        <div className="story-stack">
          <StoryChapter roman="I" title="The Degree &amp; The Grind">
            <p>
              I graduated in June 2023 from <strong>Jomo Kenyatta University of Agriculture and Technology</strong> —
              but the real work had ended in December 2022 when I completed my studies.
              Civil engineering doesn&apos;t wait for ceremonies. Before the ink on my certificate was dry,
              I had already landed an internship at <strong>KeNHA</strong> on a road development project in
              Muranga — the MauMau Lot 2 roads. I stayed from January to August 2023, learning what
              no classroom could teach: dust, deadlines, and the bureaucratic weight of government infrastructure.
            </p>

            <p>
              Then the new government&apos;s budget setbacks kicked in. Projects stalled. Funding froze. I left.
            </p>
          </StoryChapter>

          <StoryDivider />

          <StoryChapter roman="II" title="SMEC &amp; The Shaping of an Engineer">
            <p>
              My second internship took me to <strong>SMEC International PTY LTD</strong> — a company that fully
              shaped me as an engineer. The work was a tipper on a mouse. Workloads pushed me to extremes.
              Long reports, multi-country deliverables, World Bank and AfDB compliance standards on live
              infrastructure programmes across Kenya, Malawi, Uganda, Rwanda, and Ghana. But I exceeded
              expectations — and a year later, they offered me a contract. That contract meant something.
              Not just a salary — it meant I had earned my place at the table.
            </p>
          </StoryChapter>

          <StoryDivider />

          <StoryChapter roman="III" title="AI, Code &amp; a Question From My Boss">
            <p>
              During my time at SMEC, AI started reshaping markets at a pace I could not ignore. I wasn&apos;t
              about to be left behind. So I enrolled in a bootcamp at <strong>Moringa School</strong>, under the
              Flatiron College programme based in the USA — learning software development remotely from Nairobi.
              I was a full-time engineer by day and a software student by night. I graduated in 2025.
            </p>

            <p>
              My boss at SMEC — half impressed, half sceptical — asked me:
              <em> &quot;How exactly are you going to apply software development to engineering?&quot;</em>
            </p>

            <p>I sat with that question for a while.</p>
          </StoryChapter>

          <StoryDivider />

          <StoryChapter roman="IV" title="The Idea That Became Chora">
            <p>
              The engineering space today doesn&apos;t treat software as a bonus — it is a basic, fundamental skill.
              Yet it is shockingly expensive to learn properly. YouTube tutorials are almost never fully sufficient.
              University curricula haven&apos;t caught up. And the engineers who need these skills most — in Nairobi,
              Kampala, Accra, Lusaka — cannot afford foreign courses priced for foreign salaries.
            </p>

            <p>
              So I asked myself: why can&apos;t I use my engineering knowledge and my software skills to build a platform
              where the student and the machine do most of the teaching — and human instructors only step in where truly
              necessary? Like Canvas or Instructure, but built specifically for engineering software. Structured.
              Affordable. African.
            </p>

            <p>
              I decided to build it. Full course series — videos, notes, and interactive projects — priced at a rate any
              East African professional could afford, without sacrificing an ounce of quality. No vague YouTube playlists.
              A proper learning system, built by an engineer, for engineers.
            </p>

            <p className="story-closing">
              That is <strong>Chora Academy.</strong>
            </p>
          </StoryChapter>
        </div>

        <div className="story-final">
          <div>Ready to Start Your Journey?</div>
          <p>Join the first cohort — AutoCAD Fundamentals, now enrolling.</p>

          <div className="story-final-actions">
            <button
                type="button"
                className="btn btn-gold"
                onClick={openCoursesPage}
            >
                Enrol in AutoCAD
            </button>

            <button type="button" className="btn btn-outline" onClick={openHomePage}>
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .our-story-page {
          min-height: 100vh;
          background: var(--black);
          padding: 100px 0;
        }

        .story-wrap {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .story-back {
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
          transition: color 0.2s;
        }

        .story-back:hover {
          color: var(--gold);
        }

        .story-hero {
          margin-bottom: 56px;
        }

        .story-hero h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          color: var(--white);
          line-height: 1;
          margin-bottom: 16px;
        }

        .story-hero h1 em {
          color: var(--gold);
          font-style: italic;
        }

        .story-founder-line {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(197,160,60,0.5);
        }

        .story-profile {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 52px;
          padding: 28px 32px;
          background: rgba(197,160,60,0.04);
          border: 1px solid rgba(197,160,60,0.12);
        }

        .story-photo {
          width: 110px;
          height: 110px;
          border: 2px solid var(--gold);
          overflow: hidden;
          flex-shrink: 0;
        }

        .story-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .story-profile-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }

        .story-profile-title {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }

        .story-profile-meta {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
        }

        .story-quote {
          border-left: 3px solid var(--gold);
          padding: 24px 32px;
          background: rgba(197,160,60,0.04);
          margin-bottom: 52px;
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 600;
          color: var(--white);
          line-height: 1.6;
        }

        .story-stack {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .story-chapter-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .story-roman {
          width: 32px;
          height: 32px;
          background: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--black);
        }

        .story-chapter-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--white);
        }

        .story-copy p {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 2.1;
        }

        .story-copy p + p {
          margin-top: 16px;
        }

        .story-copy strong {
          color: rgba(255,255,255,0.8);
        }

        .story-copy em {
          color: rgba(255,255,255,0.8);
        }

        .story-closing {
          font-size: 14px !important;
          font-weight: 400 !important;
          color: rgba(255,255,255,0.75) !important;
          margin-top: 20px !important;
        }

        .story-closing strong {
          color: var(--gold);
          font-size: 16px;
        }

        .story-divider {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .story-divider div {
          height: 1px;
          flex: 1;
          background: linear-gradient(to right, rgba(197,160,60,0.3), transparent);
        }

        .story-divider div:last-child {
          background: linear-gradient(to left, rgba(197,160,60,0.3), transparent);
        }

        .story-divider span {
          width: 6px;
          height: 6px;
          background: var(--gold);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .story-final {
          margin-top: 64px;
          padding-top: 40px;
          border-top: 1px solid rgba(197,160,60,0.15);
          text-align: center;
        }

        .story-final > div {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
        }

        .story-final p {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .story-final-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 700px) {
          .story-wrap {
            padding: 0 24px;
          }

          .story-profile {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

export default OurStory