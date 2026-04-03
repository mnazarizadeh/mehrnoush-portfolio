import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const RESUME_URL = 'https://uxfolio-prod.s3.us-east-1.amazonaws.com/67a11ba89d5a5b2b9f1c9ec1/Mehrnoush_Safari_mKQ.pdf';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__contact">
          <h2 className="footer__heading">Get in touch at</h2>
          <a href="mailto:contact@mehrnoushsafari.com" className="footer__email">
            contact@mehrnoushsafari.com
          </a>
        </div>
        <div className="footer__nav">
          <NavLink to="/" className="footer__link">Home</NavLink>
          <NavLink to="/about" className="footer__link">About</NavLink>
          <NavLink to="/projects" className="footer__link">Projects</NavLink>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="footer__link">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
