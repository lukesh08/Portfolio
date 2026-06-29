function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I'm a pragmatic, diligent learner focused on building responsive,
          accessible, and visually polished web apps. I enjoy turning ideas
          into clean interfaces with modern CSS and JavaScript.
        </p>

        <div className="about-grid">

          <div className="card">
            <h3>Strengths</h3>

            <ul className="list">
              <li>
                <strong>Detail:</strong> Pixel-perfect UI and consistent styles
              </li>

              <li>
                <strong>UX:</strong> Smooth flows and intuitive interactions
              </li>

              <li>
                <strong>Reliability:</strong> Clear structure, maintainable code
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Tech Stack</h3>

            <ul className="list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;