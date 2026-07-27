import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="row g-4">

          {skills.map((category, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="skill-card">

                <i className={category.icon}></i>

                <h3>{category.category}</h3>

                <ul>
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;