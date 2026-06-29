function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="project-grid">

          {/* Project 1 */}
          <article className="project-card">
            <img
              src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1470&auto=format&fit=crop"
              alt="Hotel"
            />

            <div className="project-content">
              <h3>Hotel Management Site</h3>

              <p>
                Multi-page responsive hotel site with animations,
                toast alerts and booking UI.
              </p>

              <p className="tags">
                HTML • CSS • JS • Express • Node
              </p>

              <div className="links">
                <a href="#" className="btn small">
                  Live
                </a>

                <a href="#" className="btn small">
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}

          <article className="project-card">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop"
              alt="Music"
            />

            <div className="project-content">
              <h3>Music Player Site</h3>

              <p>
                Simple and elegant music player with theme toggle.
              </p>

              <p className="tags">
                HTML • CSS • JS
              </p>

              <div className="links">
                <a href="#" className="btn small">
                  Live
                </a>

                <a
                  href="https://github.com/lukesh08/Musicbiz"
                  className="btn small"
                >
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}

          <article className="project-card">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop"
              alt="Restaurant"
            />

            <div className="project-content">
              <h3>Restaurant Management</h3>

              <p>
                Restaurant website using frontend technologies.
              </p>

              <p className="tags">
                HTML • CSS • JS
              </p>

              <div className="links">
                <a href="#" className="btn small">
                  Live
                </a>

                <a
                  href="https://github.com/lukesh08/Restaurant-"
                  className="btn small"
                >
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Project 4 */}

          <article className="project-card">
            <img
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop"
              alt="Netflix"
            />

            <div className="project-content">
              <h3>Netflix Clone</h3>

              <p>
                Responsive Netflix Clone.
              </p>

              <p className="tags">
                HTML • CSS • JS
              </p>

              <div className="links">
                <a href="#" className="btn small">
                  Live
                </a>

                <a href="#" className="btn small">
                  Code
                </a>
              </div>
            </div>
          </article>

          {/* Project 5 */}

          <article className="project-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1470&auto=format&fit=crop"
              alt="Mediqueue"
            />

            <div className="project-content">
              <h3>Mediqueue</h3>

              <p>
                Medical and clinic management site with AI chatbot.
              </p>

              <p className="tags">
                HTML • CSS • JS • Express • Node • MongoDB
              </p>

              <div className="links">
                <a href="#" className="btn small">
                  Live
                </a>

                <a href="#" className="btn small">
                  Code
                </a>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Projects; 