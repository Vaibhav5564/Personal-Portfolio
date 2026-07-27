import "./Education.css";
import education from "../../data/education";

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">

        <div className="section-title">
          <h2>Education</h2>
          <p>My academic journey</p>
        </div>

        <div className="education-timeline">

          {education.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="education-card">

                <h3>{item.degree}</h3>

                <h5>{item.institute}</h5>

                {item.university && <p>{item.university}</p>}

                <p>{item.description}</p>

                <p>
                  <strong>{item.score}</strong>
                </p>

                <span className="year">{item.duration}</span>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;