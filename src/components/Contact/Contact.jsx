import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Let's connect and build something amazing together.</p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">

              <h3>Get In Touch</h3>

              <p>
                I'm always open to discussing internships, full-time
                opportunities, freelance work, or exciting software
                development projects. Feel free to reach out anytime.
              </p>

              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>

                <div>
                  <h5>Email</h5>
                  <span>vaibhavadsul5564@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone-fill"></i>

                <div>
                  <h5>Phone</h5>
                  <span>+91 8766979569</span>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>

                <div>
                  <h5>Location</h5>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-linkedin"></i>

                <div>
                  <h5>LinkedIn</h5>
                  <span>linkedin.com/in/vaibhav5564/</span>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">

              <h3>Send a Message</h3>

              <form>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  className="form-control"
                  placeholder="Write your message..."
                ></textarea>

                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;