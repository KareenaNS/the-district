import React from 'react';
import '../App.css';

// Sample image paths and event details
const flyerImage = '/BlackHistoryMonth.jpg';
const mapImage = '/exhall-map.png';

function BlackHistoryMonth() {
  return (
    <div className="landing-page-container">
      <h1>Black History Month</h1>

      {/* Event Details */}
      <section className="event-details">
        <h2>Event Details</h2>
        <img src={process.env.PUBLIC_URL + flyerImage} alt="Black History Month Flyer" className="flyer-image" />
        <p><strong>Join us for Black History Month!</strong> Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, and cultural performances.</p>
        <p><strong>Admission:</strong> Free</p>
        <p><strong>Date:</strong> February 22nd - 23rd 2025</p>
        <p><strong>Time:</strong> 5 PM - 12 AM</p>
        <p><strong>Location:</strong> Morrow Center Exhibition Hall, 1180 Southlake Circle, [Morrow, Georgia, 30260]</p>
      </section>

      <section className="vendor-sponsor-container">
  {/* Vendor Information */}
  <section className="vendor-info">
    <h2>Become a Vendor</h2>
    <img src={process.env.PUBLIC_URL + '/vendor.JPG'} alt="Sponsor" className="sponsor-image" />
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
    <img src={process.env.PUBLIC_URL + '/kathy.jpg'} alt="Sponsor" className="sponsor-image" />
    <p>Support Black History Month by becoming a sponsor! Gain exposure for your business while helping to celebrate and uplift African American culture.</p>
    <ul>
      <li>Different levels of sponsorship available.</li>
      <li>Prominent logo placement and other benefits based on sponsorship tier.</li>
      <li>Contact us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> for more details.</li>
    </ul>
    <section className="pdf-section">
    <h2>Sponsorship Package</h2>
    <iframe
        src={process.env.PUBLIC_URL + '/sponsor.pdf'}
        width="100%"
        height="600px"
        title="Sponsorship Package"
    />
    </section>
  </section>
</section>

      {/* Map of the District */}
  <section className="map-section">
  <h2>Map of the Venue</h2>
  <p>Check out the map of the venue to find the location and nearby attractions:</p>
  
  {/* Container for both map and iframe */}
  <div className="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.205207217455!2d-84.35407222430386!3d33.57402087334094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4f9567dd0295d%3A0x38e58521f893463e!2sMorrow%20Center!5e0!3m2!1sen!2sus!4v1735422509114!5m2!1sen!2sus"
      width = "100%"
      height= "auto"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>

    </div>
  );
}

export default BlackHistoryMonth;
