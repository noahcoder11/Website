import { Link } from 'react-router-dom';
import './Hero.css';
import headshot from '../../assets/headshot.jpeg';

const Hero = () => {
  return (
    <section className="hero page-container container">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Noah Hester</h1>
          <h2 className="title">Computer Science & Mathematics</h2>
          <p className="description">
            I'm a student at California State University Channel Islands dual-majoring in Computer Science and Mathematics. Beyond building software and embedded systems, I'm deeply passionate about algorithmic theory, higher math, and teaching—having spent the last few years as a Math and Physics tutor helping students master complex topics.
          </p>
          <div className="cta-group">
            <Link to="/experience" className="btn btn-primary">See my experience</Link>
            <Link to="/projects" className="btn btn-outline">View projects</Link>
            <a href="/papers/Resumé.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={headshot} alt="Noah Hester" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
