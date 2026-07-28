import "./Hero.css";
import personalInfo from "../../data/personalInfo";
import resumePDF from "../../assets/resume/Resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 hero-content">

            <div className="availability-badge">
              <span className="status-dot"></span>
              Open to Opportunities
            </div>

            <h3>Hello, I'm</h3>

            <h1>{personalInfo.name}</h1>

            <h2 className="typing-text">
              Aspiring Full Stack Developer
            </h2>

            <p>{personalInfo.subtitle}</p>

            <div className="hero-buttons">

              <a
                href={resumePDF}
                download
                className="btn btn-primary"
              >
                ⬇ Download Resume
              </a>

              <a
                href="#contact"
                className="btn btn-outline-primary"
              >
                📧 Contact Me
              </a>

            </div>

          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-center">

            <a href="#about">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="profile-image img-fluid hero-image"
              />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;