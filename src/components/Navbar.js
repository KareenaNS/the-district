import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../App.css'; // Import styles from App.css

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/district.png'} alt="The District" className="navbar-image" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/events">Events</Link></li>
          <li><Link to="/leasing">Leasing</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
