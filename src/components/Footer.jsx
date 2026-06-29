function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <h3>Lukesh Patil</h3>

        <p>
          Frontend Developer | React Learner | Computer Science Student
        </p>

        <div className="socials">

          <a
            href="https://github.com/lukesh08"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {" | "}

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          {" | "}

          <a href="mailto:youremail@gmail.com">
            Email
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Lukesh Patil. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;