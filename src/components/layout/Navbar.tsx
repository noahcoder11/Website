import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">Noah Hester</Link>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          <a href="/papers/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>

        {/* Hamburger button */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          <a href="/papers/Resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-resume-btn">Resume ↗</a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
