import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">Noah Hester</Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          <a href="/papers/Resumé.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
