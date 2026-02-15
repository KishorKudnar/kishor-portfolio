import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_bnafso2",
      "template_8xamcyp",
      form.current,
      "RSyL84WnL4ANnCjMJ"
    )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-container">

        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>

        <p className="contact-subtitle">
          Let’s build something amazing together 🚀
        </p>

        <div className="contact-content">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <p className="email">
              <FaEnvelope className="icon" />
              <a href="mailto:kishorkudnar2004@gmail.com">
                kishorkudnar2004@gmail.com
              </a>
            </p>

            <p className="location">
              <FaMapMarkerAlt className="icon" />
              Pune, India
            </p>

            <div className="contact-socials">
              <a href="https://www.instagram.com/kishor.dkudnar/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/kishor-kudnar-36459425b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/KishorKudnar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? (
                <div className="spinner"></div>
              ) : (
                "Send Message"
              )}
            </button>


            {success && (
              <p style={{ color: "#00f5ff", marginTop: "10px" }}>
                ✅ Message sent successfully!
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
