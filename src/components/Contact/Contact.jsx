import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {

    // console.log(import.meta.env);
    // console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    // console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    // console.log("Public:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

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

              <form ref={form} onSubmit={sendEmail}>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />

                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />

                <textarea
                  rows="6"
                  name="message"
                  className="form-control"
                  placeholder="Write your message..."
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  <i className="bi bi-send-fill me-2"></i>
                  {loading ? "Sending..." : "Send Message"}
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