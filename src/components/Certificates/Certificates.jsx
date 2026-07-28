import "./Certificates.css";
import certificates from "../../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">

        <div className="section-title">
          <h2>Certificates</h2>
          <p>Courses and certifications I've completed</p>
        </div>

        <div className="row g-4">

          {certificates.map((certificate) => (
            <div className="col-lg-4 col-md-6" key={certificate.id}>
              <div className="certificate-card">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <div className="certificate-content">

  <h3>{certificate.title}</h3>

  <h5>{certificate.issuer}</h5>

  <p>{certificate.description}</p>

  <small className="issue-date">
    Issued: {certificate.issueDate}
  </small>

  <div className="certificate-buttons">

    <a
      href={certificate.certificateUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      View Certificate
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

export default Certificates;