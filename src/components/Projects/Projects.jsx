import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="section-title">
          <h2>Projects</h2>
          <p>Some of my recent work</p>
        </div>

        <div className="row g-4">

          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 topMargin" key={project.id}>
              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                   className={`project-image ${project.id > 3 ? "image-top-space" : ""}`}
                />

                <div className="project-body">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;