import { useEffect, useState } from "react";
import Github from "../assets/Github.jpg";

function Hero() {
  const roles = ["Web Developer", "Full Stack Developer", "UI Designer"];

  const fullName = "Hi, I'm Lukesh Patil";

  const [nameIndex, setNameIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);

  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // NAME TYPING FIRST
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setNameIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowRoles(true), 500);
    }
  }, [nameIndex]);

  // ROLE TYPING AFTER NAME
  useEffect(() => {
    if (!showRoles) return;

    const currentText = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setSubIndex((prev) => prev + 1);

        if (subIndex === currentText.length) {
          setDeleting(true);
        }
      } else {
        setSubIndex((prev) => prev - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, showRoles, roleIndex]);

  return (
    <section className="hero">
      <div className="container hero-inner">

        <div className="hero-text">

          <h1>
            {fullName.substring(0, nameIndex)}
            <span className="cursor">|</span>
          </h1>

          {showRoles && (
            <h2 className="typing">
              {roles[roleIndex].substring(0, subIndex)}
              <span className="cursor">|</span>
            </h2>
          )}

          

          <div className="cta">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img src={Github} alt="Lukesh" />
        </div>

      </div>
    </section>
  );
}

export default Hero;