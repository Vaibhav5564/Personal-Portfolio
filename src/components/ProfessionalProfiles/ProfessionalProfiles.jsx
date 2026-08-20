import "./ProfessionProfile.css";
import profiles from "../../data/profiles";

function ProfessionProfile() {
  return (
    <section
      id="professionalprofiles"
      className="professional-profiles"
    >
      <div className="container">

        <div className="section-title text-center mb-5">
          <h2>Professional Profiles</h2>
          <p>
            Connect with me and explore my professional presence
          </p>
        </div>

        <div className="row g-4">

          {profiles.professional.map((profile) => (
            <div
              className="col-lg-3 col-md-6"
              key={profile.id}
            >
              <div className="profile-card h-100">

                <div className="profile-icon">
                  <i className={profile.icon}></i>
                </div>

                <h3>{profile.platform}</h3>

                <h6>{profile.username}</h6>

                <p>{profile.description}</p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Profile
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProfessionProfile;