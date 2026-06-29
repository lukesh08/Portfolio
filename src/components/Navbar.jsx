import { useState } from "react";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">

        <a href="#" className="logo">
          Lp
        </a>

        {/* NAV MENU */}
        <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* THEME TOGGLE */}
        <button
          className="theme-toggle"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;