function Navbar() {
  return (
    <nav>
      <a href="#home" className="nav-logo">
        <div className="nav-logo-mark">
          <span>C</span>
        </div>

        <div className="nav-brand">
          <div className="nav-name">Chora Academy</div>
          <div className="nav-tag">Engineering Software Canvas</div>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#autocad">AutoCAD</a></li>
        <li><a href="#apply">Apply</a></li>
        <li><a href="#proposal">Proposal</a></li>
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
    </nav>
  )
}

export default Navbar