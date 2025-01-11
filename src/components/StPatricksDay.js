import React from 'react';
import'../SPD.css';

// Sample image paths and event details
const flyerImage = '/spdflyer.jpeg';
const mapImage = '/exhall-map.png';

function StPatricksDay() {
  return (
    <div className="landi-page-container">
      <h1>
        <img
          src={process.env.PUBLIC_URL + '/spd.png'} // Ensure the image path is correct
          alt="St. Patrick's Day"
          className="header-image"
        />
        <span className="header-text">St. Patrick's Day</span>
      </h1>
      {/* Event Details */}
      <section className="event-detail">
        <h2>Event Details</h2>
        <img src={process.env.PUBLIC_URL + flyerImage} alt="St. Patrick's Day Flyer" className="flyer-image" />
        <p><strong>Join us for St. Patrick's Day!</strong> Experience music, dancing, and indulging in food to celebrate this occasion</p>
        <p><strong>Admission:</strong> Free</p>
        <p><strong>Date:</strong> March 15th, 2025</p>
        <p><strong>Time:</strong> 5 PM - 11 PM</p>
        <p><strong>Location:</strong> The District, 1065 Olde Towne Morrow Road, [Morrow, Georgia, 30260]</p>
      </section>

      <section className="vendor-sponsor-contain">
  {/* Vendor Information */}
  <section className="vendor-infos">
    <h2>Become a Vendor</h2>
    <img src={process.env.PUBLIC_URL + '/vendor.JPG'} alt="Sponsor" className="sponsor-image" />
    <p>If you're interested in becoming a vendor for St. Patrick's Day, here's how you can get involved:</p>
    <ul>
      <li>Showcase your products or services to a diverse audience.</li>
      <li>We offer booths, tables, and various vendor options to fit your needs.</li>
      <li>Contact us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> to apply.</li>
    </ul>
  </section>

  {/* Sponsor Information */}
  <section className="sponsor-infos">
    <h2>Become a Sponsor</h2>
    <img src={process.env.PUBLIC_URL + '/kathy.jpg'} alt="Sponsor" className="sponsor-image" />
    <p>Support St. Patrick's Day by becoming a sponsor! Gain exposure for your business while helping to celebrate and uplift African American culture.</p>
    <ul>
      <li>Different levels of sponsorship available.</li>
      <li>Prominent logo placement and other benefits based on sponsorship tier.</li>
      <li>Contact us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> for more details.</li>
    </ul>
    <section className="pdf-section">
    <h2>Sponsorship Package</h2>
    <iframe
        src={process.env.PUBLIC_URL + '/spd25_sponsor.pdf'}
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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53185.1139809127!2d-84.42484247832033!3d33.57754150000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4fb0042692621%3A0xb111ea8ab9e8d63a!2sThe%20District!5e0!3m2!1sen!2sus!4v1735677593110!5m2!1sen!2sus"
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

export default StPatricksDay;
