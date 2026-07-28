import "./Footer.css";
import personalInfo from "../../data/personalInfo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">

          {/* Name Section */}
          <div className="col-12 text-center mb-5">
            <div className="footer-logo">
              <h2>{personalInfo.name}</h2>
              
              <p>{personalInfo.subtitle}</p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="col-12 text-center mb-4">
            <div className="footer-social">
              <h4>Connect</h4>

              <div className="social-icons-footer">
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

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;