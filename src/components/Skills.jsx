function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill">
            <span>HTML5</span>
            <div className="bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>CSS3</span>
            <div className="bar">
              <div className="progress" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Responsive Design</span>
            <div className="bar">
              <div className="progress" style={{ width: "97%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Express</span>
            <div className="bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Node.js</span>
            <div className="bar">
              <div className="progress" style={{ width: "55%" }}></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;