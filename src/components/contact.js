import "./contact.css";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>
            I’m open to opportunities, collaborations, and discussions.  
            Feel free to reach out — I’ll get back to you as soon as possible.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> yourmail@gmail.com</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Availability:</strong> Open for opportunities</p>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;