import "./Hero.css";
import personalInfo from "../../data/personalInfo";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-content ">
            <h3>Hello, I'm</h3>

            <h1>{personalInfo.name}</h1>

            <h2>{personalInfo.title}</h2>

            <p>{personalInfo.subtitle}</p>

            <div className="hero-buttons">
              <a
                href={personalInfo.resume}
                className="btn btn-primary me-3"
                download
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="btn btn-outline-primary"
              >
                Contact Me
              </a>
            </div>

            <div className="social-icons mt-4">

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-item">
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-item">
                <i className="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>

              <a href={personalInfo.hackerrank} target="_blank" rel="noreferrer" className="social-item">
                <i className="bi bi-code-slash"></i>
                <span>HackerRank</span>
              </a>

              <a href={personalInfo.codechef} target="_blank" rel="noreferrer" className="social-item">
                <i className="bi bi-terminal-fill"></i>
                <span>CodeChef</span>
              </a>

              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="social-item">
                <i className="bi bi-laptop"></i>
                <span>LeetCode</span>
              </a>

            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="profile-image img-fluid hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;