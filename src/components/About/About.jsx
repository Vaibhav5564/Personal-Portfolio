import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="about-card">

              <h3>Who Am I?</h3>

              <p>
                Hello! I'm <strong>Vaibhav Adsul</strong>, a Computer Science
                student passionate about software development, problem solving,
                and building impactful web applications. I enjoy transforming
                ideas into responsive, user-friendly, and scalable projects.
              </p>

              <p>
                I have experience with Java, Python, C, HTML, CSS, JavaScript,
                React, PHP, MySQL, and Git/GitHub. I continuously improve my
                coding skills by solving programming challenges and working on
                real-world projects.
              </p>

              <p>
                My goal is to become a skilled Full Stack Developer and secure a
                software engineering role where I can contribute, learn, and
                grow while building products that create real value.
              </p>

              <div className="about-info">

                <div className="info-item">
                  <i className="bi bi-mortarboard-fill"></i>
                  <span>B.Sc. Computer Science Student</span>
                </div>

                <div className="info-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Pune, Maharashtra, India</span>
                </div>

                <div className="info-item">
                  <i className="bi bi-code-slash"></i>
                  <span>Full Stack Development Enthusiast</span>
                </div>

                <div className="info-item">
                  <i className="bi bi-lightbulb-fill"></i>
                  <span>Always Learning New Technologies</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;