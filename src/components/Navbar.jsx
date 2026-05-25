function Navbar({
  openHomePage,
  scrollToHomeSection,
  scrollToCoursesPreview,
  scrollToCorporate,
  scrollToCommunity,
}) {
  return (
    <nav>
      <button type="button" className="nav-logo nav-button" onClick={openHomePage}>
        <div className="nav-logo-mark">
          <span>C</span>
        </div>

        <div className="nav-brand">
          <div className="nav-name">Chora Academy</div>
          <div className="nav-tag">Engineering Software Canvas</div>
        </div>
      </button>

      <ul className="nav-links">
        <li>
          <button type="button" className="active" onClick={openHomePage}>
            Home
          </button>
        </li>

        <li>
          <button type="button" onClick={scrollToHomeSection}>
            WhyChora
          </button>
        </li>

        <li>
          <button type="button" onClick={scrollToCoursesPreview}>
            OurCourses
          </button>
        </li>

        <li>
          <button type="button" onClick={scrollToCorporate}>
            Corporate
          </button>
        </li>

        <li>
          <button type="button" onClick={scrollToCommunity}>
            Community
          </button>
        </li>
      </ul>

      <button className="nav-search" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 20L16.65 16.65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <style>{`
        .nav-button,
        .nav-links button {
          background: none;
          border: none;
          font-family: inherit;
          cursor: pointer;
        }

        .nav-button {
          padding: 0;
        }

        .nav-links button {
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }

        .nav-links button::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-links button:hover {
          color: var(--white);
        }

        .nav-links button:hover::after,
        .nav-links button.active::after {
          transform: scaleX(1);
        }

        .nav-links button.active {
          color: var(--gold);
        }
      `}</style>
    </nav>
  )
}

export default Navbar