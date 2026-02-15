import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== Theme ===== */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ===== Scroll Effect ===== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        <div className="logo">
          Kishor<span>.</span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end className="nav-item" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="nav-item" onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/skills" className="nav-item" onClick={toggleMenu}>Skills</NavLink></li>
          <li><NavLink to="/projects" className="nav-item" onClick={toggleMenu}>Projects</NavLink></li>
          <li><NavLink to="/experience" className="nav-item" onClick={toggleMenu}>Experience</NavLink></li>
          <li><NavLink to="/contact" className="nav-item" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>

        <div className="nav-right">

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kishorkudnar2004@gmail.com&su=Hiring Inquiry&body=Hello Kishor"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-btn"
          >
            Hire Me
          </a>

          {/* HAMBURGER */}
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Navbar;
