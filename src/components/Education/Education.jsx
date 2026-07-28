import "./Education.css";
import education from "../../data/education";

function Education() {
  return (
    <section id="education" className="education py-5">
      <div className="container">

        <div className="section-title text-center mb-5">
          <h2>Education</h2>
          <p className="text-muted">
            My academic journey
          </p>
        </div>

        <div className="row g-4">

          {education.map((item, index) => (
            <div className="col-lg-6 col-md-6" key={index}>

              <div className="card education-card h-100 shadow-sm border-0">

                <div className="card-body">

                  <span className="badge bg-primary mb-3">
                    {item.duration}
                  </span>

                  <h4 className="card-title">
                    {item.degree}
                  </h4>

                  <h6 className="text-primary fw-bold">
                    {item.institute}
                  </h6>

                  {item.university && (
                    <small className="text-muted d-block mb-3">
                      {item.university}
                    </small>
                  )}

                  <p className="card-text">
                    {item.description}
                  </p>

                  <h5 className="fw-bold text-success">
                    {item.score}
                  </h5>

                  {item.result && (
                    <div className="education-buttons mt-4">

                      <a
                        href={item.result}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        👁 View Result
                      </a>

                      <a
                        href={item.result}
                        download
                        className="btn btn-primary"
                      >
                        ⬇ Download Result
                      </a>

                    </div>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;