import React from 'react';
import '../App.css'; // Import styles from App.css

// Sample image paths and event details
const flyerImage = '/bhm-flyer.jpg'; // Replace with actual image path
const mapImage = '/exhall-map.png'; // Replace with actual map image path

function BlackHistoryMonth() {
  return (
    <div className="landing-page-container">
      <h1>Black History Month Celebration</h1>

      {/* Event Details */}
      <section className="event-details">
        <h2>Event Details</h2>
        <p><strong>Join us for Black History Month!</strong> A cultural celebration honoring black history in the United States with food, art, music, and more. This is an event for all ages to learn, celebrate, and reflect on the impact of African American culture.</p>
        <p><strong>Admission:</strong> Free</p>
        <p><strong>Time:</strong> TBD</p>
        <p><strong>Location:</strong> Morrow Center Exhibition Hall, 1180 Southlake Circle, [Morrow, Georgia, 30260]</p>

        {/* Image of Flyer */}
        <img src={process.env.PUBLIC_URL + flyerImage} alt="Black History Month Flyer" className="flyer-image" />
      </section>

      {/* Vendor Information */}
      <section className="vendor-info">
        <h2>Become a Vendor</h2>
        <p>If you're interested in becoming a vendor for Black History Month, here's how you can get involved:</p>
        <ul>
          <li>Showcase your products or services to a diverse audience.</li>
          <li>We offer booths, tables, and various vendor options to fit your needs.</li>
          <li>Contact us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> to apply.</li>
        </ul>
      </section>

      {/* Sponsor Information */}
      <section className="sponsor-info">
        <h2>Become a Sponsor</h2>
        <p>Support Black History Month by becoming a sponsor! Gain exposure for your business while helping to celebrate and uplift African American culture.</p>
        <ul>
          <li>Different levels of sponsorship available.</li>
          <li>Prominent logo placement and other benefits based on sponsorship tier.</li>
          <li>Contact us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> for more details.</li>
        </ul>
      </section>

      {/* Map of the District */}
      <section className="map-section">
        <h2>Map of the District</h2>
        <p>Check out the map of the district to find the event location and nearby attractions:</p>
        <img src={process.env.PUBLIC_URL + mapImage} alt="District Map" className="district-map" />
      </section>
    </div>
  );
}

export default BlackHistoryMonth;
