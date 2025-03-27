import React from 'react';
import'../SPD.css';

function FarmersMarket() {
  return (
    <div className="landi-page-container">
        <h1>
            <img
            alt="Farmers Market"
            className="header-image"
            />
            <span className="headers-text">City of Morrow's Farmers Market</span>
        </h1>
        <section className="vendor-sponsor-contain">
            {/* Event Details */}
            <section className="sponsor-infos">
                <h2>Event Details</h2>
                <img src={process.env.PUBLIC_URL + '/fm.jpg'} alt="Farmer's Market Flyer" className="flyer-image" />
                <p><strong>Join us for Morrow's annual farmers market! </strong> Check out multiple vendors, and buy fresh fruit and vegetables. </p>
                <p><strong>Admission:</strong> Free for patrons, nominal fee for vendors</p>
                <p><strong>Date:</strong> May 3rd - September 27th, 2025</p>
                <p><strong>Time:</strong> 9 AM - 1 PM every Saturday</p>
                <p><strong>Location:</strong> Morrow Station Park, 5854 Jonesboro Rd., [Morrow, Georgia, 30260]</p>
            </section>
            {/* Vendor Information */}
            <section className="vendor-infos">
                <h2>Become a Vendor</h2>
                <img src={process.env.PUBLIC_URL + '/vendor.JPG'} alt="Sponsor" className="sponsor-image" />
                <p>Here are some of the benefits to becoming a vendor at Morrow's annual farmers market.</p>
                <ul>
                <li>Showcase your products or services to a diverse audience.</li>
                <li>We offer booths, tables, and various vendor options to fit your needs.</li>
                <li>Contact us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> for more information.</li>
                </ul>
                <p>If you're interested, please fill out the interest form below: </p>
                <div className="form-container">
                    <iframe 
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNUNjRBSVM1Vjg0U1Y4QUg5STRIMzRTTllaUC4u"
                    width="100%"
                    height="600"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="Event Registration Form"
                    >
                    Loading...
                    </iframe>
                </div>
            </section>
            </section>


<section className="map-section">
  <h2>Map of the Venue</h2>
  <p>Check out the map of the venue to find the location and nearby attractions:</p>
    <div className="map-container">
    <div className="custom-map">
      <img src="fm_map.jpg" alt="Custom Map of the Venue" />
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.752304066134!2d-84.33944822428735!3d33.59554344170732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4febec6ca54f9%3A0x80b8120d71e84fae!2s5854%20Jonesboro%20Rd%2C%20Morrow%2C%20GA%2030260!5e0!3m2!1sen!2sus!4v1742835102383!5m2!1sen!2sus"
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

export default FarmersMarket;
