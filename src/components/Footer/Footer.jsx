import "./Footer.css";
import personalInfo from "../../data/personalInfo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row justify-content-center">

          {/* Name Section */}
          <div className="col-12 text-center mb-4">
            <div className="footer-logo">
              <h2>{personalInfo.name}</h2>

              <p>{personalInfo.subtitle}</p>
            </div>
          </div>


          {/* Professional Profiles */}
          <div className="col-md-6 text-center mb-4">

            <div className="footer-social">

              <h4>Professional Profiles</h4>

              <div className="social-icons-footer">

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                {/* Naukri */}
                {personalInfo.naukri && (
                  <a
                    href={personalInfo.naukri}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Naukri"
                  >
                    <i className="bi bi-briefcase-fill"></i>
                  </a>
                )}

                {/* Indeed */}
                {personalInfo.indeed && (
                  <a
                    href={personalInfo.indeed}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Indeed"
                  >
                    <i className="bi bi-person-badge-fill"></i>
                  </a>
                )}

              </div>

            </div>

          </div>


          {/* Coding Profiles */}
          <div className="col-md-6 text-center mb-4">

            <div className="footer-social">

              <h4>Coding Profiles</h4>

              <div className="social-icons-footer">

                {/* HackerRank */}
                <a
                  href={personalInfo.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HackerRank"
                >
                  <i className="bi bi-code-slash"></i>
                </a>

                {/* CodeChef */}
                <a
                  href={personalInfo.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodeChef"
                >
                  <i className="bi bi-terminal-fill"></i>
                </a>

                {/* LeetCode */}
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                >
                  <i className="bi bi-laptop"></i>
                </a>

                {/* GeeksforGeeks */}
                {personalInfo.geeksforgeeks && (
                  <a
                    href={personalInfo.geeksforgeeks}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GeeksforGeeks"
                  >
                    <i className="bi bi-mortarboard-fill"></i>
                  </a>
                )}

              </div>

            </div>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} {personalInfo.name}.
            All Rights Reserved.
          </p>

          <p className="footer-made">
            Built with React & ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;