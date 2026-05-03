import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {year} Noah Hester. All rights reserved.</p>
        <div className="social-links">
          <a href="mailto:noahcoder11@gmail.com">noahcoder11@gmail.com</a>
          <a href="https://github.com/noahcoder11" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
