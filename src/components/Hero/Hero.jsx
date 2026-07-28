import "./Hero.css";
import personalInfo from "../../data/personalInfo";
import resumePDF from "../../assets/resume/Resume.pdf";
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
                href={resumePDF}
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