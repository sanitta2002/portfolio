import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <span className="logo-text">Sanitta</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="footer-tagline">
            Building the digital future with elegant code and passion.
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/sanitta2002" target="_blank" rel="noreferrer" className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sanitta-johnson-5b7820325" target="_blank" rel="noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>
            Designed & Built by Sanitta Johnson <FaHeart className="heart-icon" /> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
