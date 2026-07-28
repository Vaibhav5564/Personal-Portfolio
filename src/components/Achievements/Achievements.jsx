import "./Achievements.css";
import achievements from "../../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="achievements py-5">
      <div className="container">

        <div className="section-title text-center mb-5">
          <h2>Achievements</h2>
          <p className="text-muted">
            Milestones and accomplishments throughout my journey
          </p>
        </div>

        <div className="row g-4">

          {achievements.map((achievement) => (
            <div className="col-lg-4 col-md-6" key={achievement.id}>

              <div className="card achievement-card h-100 shadow-sm border-0">

                <div className="card-body text-center">

                  <div className="achievement-icon mb-3">
                    {achievement.title.split(" ")[0]}
                  </div>

                  <span className="badge bg-primary mb-3">
                    {achievement.year}
                  </span>

                  <h4 className="card-title">
                    {achievement.title}
                  </h4>

                  <h6 className="text-primary fw-bold">
                    {achievement.position}
                  </h6>

                  <small className="text-muted d-block mb-3">
                    {achievement.organization}
                  </small>

                  <p className="card-text">
                    {achievement.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;