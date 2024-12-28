import React from 'react';
import '../App.css'; // Import styles from App.css

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <f>&copy; 2024 The District | All Rights Reserved</f>
        <div className="social-media">
          <a href="https://www.instagram.com/visitmorrowga/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
          <img src={process.env.PUBLIC_URL + '/instagram.png'} alt="The District" className="navbar-image" />
          </a>
          <a href="https://www.facebook.com/visitmorrowga" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
          <img src={process.env.PUBLIC_URL + '/facebook.png'} alt="The District" className="navbar-image" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
