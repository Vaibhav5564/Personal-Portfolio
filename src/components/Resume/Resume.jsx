import "./Resume.css";
import resumePDF from "../../assets/resume/Resume.pdf";
function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">

        <div className="resume-card">

          <div className="resume-icon">
            <i className="bi bi-file-earmark-person-fill"></i>
          </div>

          <h2>My Resume</h2>

          <p>
            Download my latest resume to learn more about my education,
            technical skills, projects, certifications, achievements, and
            experience. Feel free to reach out if you'd like to discuss
            opportunities or collaborate on exciting projects.
          </p>

          <div className="resume-buttons">

            <a
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-eye-fill me-2"></i>
              View Resume
            </a>

            <a
              href={resumePDF}
              download
              className="btn btn-outline-primary"
            >
              <i className="bi bi-download me-2"></i>
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;