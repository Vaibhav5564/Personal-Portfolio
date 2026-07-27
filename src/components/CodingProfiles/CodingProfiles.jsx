import "./CodingProfiles.css";
import profiles from "../../data/profiles";

function CodingProfiles() {
  return (
    <section id="profiles" className="coding-profiles">
      <div className="container">

        <div className="section-title">
          <h2>Coding Profiles</h2>
          <p>Connect with me across coding and professional platforms</p>
        </div>

        <div className="row g-4">

          {profiles.map((profile) => (
            <div className="col-lg-4 col-md-6" key={profile.id}>
              <div className="profile-card">

                <i className={profile.icon}></i>

                <h3>{profile.platform}</h3>

                <h5>{profile.username}</h5>

                <p>{profile.description}</p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
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

export default CodingProfiles;