import React from 'react';
import '../App.css'; // Import App.css for global styling

function Booking() {
  return (
    <div className="booking-container">
      <div className="booking-header">
        <h2>Booking Information</h2>
        <p className="intro-text">
          If you are interested in booking a space, please contact Kimberly Summerlin for more information.
        </p>
      </div>

      <div className="contact-info">
        <p className="contact-title">Contact Information</p>
        <p>
          <strong>Email:</strong>
          <a className="contact-link" href="mailto:ksummerlin@morrowga.gov">
            ksummerlin@morrowga.gov
          </a>
        </p>
        <p>
          <strong>Phone:</strong>
          <a className="contact-link" href="tel:+14707732708">470-773-2708</a>
        </p>
      </div>

      <div className="cta-section">
        <p>Ready to get started?</p>
        <a className="cta-button" href="mailto:ksummerlin@morrowga.gov">
          Contact Kimberly Now
        </a>
      </div>
    </div>
  );
}

export default Booking;
