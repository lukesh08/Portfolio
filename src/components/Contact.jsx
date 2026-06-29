function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container">

        <h2 className="section-title">Contact</h2>

        <p className="section-text">
          Want to collaborate or have a project in mind? Let's talk.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="btn primary">
            Send
          </button>

        </form>

        <div className="socials">

          <a href="#">GitHub</a> •

          <a href="#">LinkedIn</a> •

          <a href="mailto:you@example.com">
            Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;