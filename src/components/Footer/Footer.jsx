import "./Footer.css";
import personalInfo from "../../data/personalInfo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          <div className="col-lg-6 mb-4">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.title}</p>
            <p>{personalInfo.subtitle}</p>
          </div>

          <div className="col-lg-3 mb-4">
            <h4>Quick Links</h4>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h4>Connect</h4>

            <div className="footer-social">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-code-slash"></i>
              </a>

              <a
                href={personalInfo.codechef}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-terminal-fill"></i>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-laptop"></i>
              </a>

            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;