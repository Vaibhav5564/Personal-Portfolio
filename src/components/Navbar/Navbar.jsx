import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <a className="navbar-brand logo" href="#hero">
          Vaibhav Adsul
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#achievements">Achievements</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#certificates">Certificates</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#codingprofiles">
                Coding Profiles
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;