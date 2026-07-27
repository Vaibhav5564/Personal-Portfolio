import "./Achievements.css";
import achievements from "../../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">

        <div className="section-title">
          <h2>Achievements</h2>
          <p>Milestones and accomplishments throughout my journey</p>
        </div>

        <div className="timeline">

          {achievements.map((achievement) => (
            <div className="timeline-item" key={achievement.id}>
              <div className="timeline-card">

                <span className="timeline-year">
                  {achievement.year}
                </span>

                <h3>{achievement.title}</h3>

                <h5>
                  {achievement.organization} • {achievement.position}
                </h5>

                <p>{achievement.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;