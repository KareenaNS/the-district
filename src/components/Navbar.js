import React from 'react';
import '../App.css'; // Import styles from App.css

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Replace text with an image */}
        <a href="/" className="navbar-logo">
          <img src="/district.png" alt="The District" className="navbar-image" />
        </a>
        <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/rentals">Rentals</a></li>
        <li><a href="/booking">Booking</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
