import React, { useState, useEffect } from "react";
import "../Freedom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const flyerImage = "/freedom_flyer.png";

function FreedomFest() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/freedom/june.JPG",

  ];
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  });
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      const clonedContent = scrollerContent.map((item) => item.cloneNode(true));
      const scrollerInnerClone = document.createElement("div");
      scrollerInnerClone.classList.add("scroller__inner");
      clonedContent.forEach((item) => scrollerInnerClone.appendChild(item));
      scroller.appendChild(scrollerInnerClone);
    });
  }

  return (
    <div className="land-container">
      <div class="sponsors-banner">
        <div
          class="scroller"
          data-animated="true"
          data-direction="left"
          data-speed="fast"
        >
          <div class="scroller__inner">
            <a href="https://morrowga.gov/" target="_blank">
              <span>Sponsor our Event!</span>
            </a>
          </div>
        </div>
      </div>
      <h1>Freedom Fest</h1>
      <section className="event-detailed">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="Freedom Fest Flyer"
          className="flyer-image"
        />

        <p>
          <strong>Join us for Freedom Fest! </strong> 
          Join us in celebrating Freedom Fest, a celebration of America's independence, featuring food, live music, and fire breathers!
        </p>

        <div className="detailssection">
          <div>
            <h3>ADMISSION</h3>
            <p>
              <span>FREE</span>
            </p>
          </div>

          <div>
            <h3>DATE</h3>
            <p>
              <span>June 28th, 2025</span>
            </p>
          </div>
        </div>

        <div className="detailssection">
          <div>
            <h3>TIME</h3>
            <p>
              <span>
                Saturday: 5 - 11 PM</span>
            </p>
          </div>

          <div>
            <h3>LOCATION</h3>
            <p>
              <span>
                The District, 1065 Olde Towne Morrow, [Morrow,
                Georgia, 30260]
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="ss-container">
        <button className="arrow-button left-arrow" onClick={prevImage}>
          &#10094;
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Event Image"
          className="ss-image"
        />
        <button className="arrow-button right-arrow" onClick={nextImage}>
          &#10095;
        </button>
      </div>

      <section className="vendor-sponsor-contain">
        <section className="volunteer">
          <h2>Volunteer Sign-Up</h2>
          <img
            src={process.env.PUBLIC_URL + "/volunteer.JPG"}
            alt="Volunteer"
            className="sponsor-image"
          />
          <p>
            Interested in volunteering for our event? Click the button below to
            sign up.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfbKEh5Gu9_h4SF6trBWECYuRAlBXgPSGONY_BKPrt3bzZzlw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Sign Up to Volunteer
          </a>
        </section>
        <section className="vendor">
          <h2>Become a Vendor</h2>
          <img
            src={process.env.PUBLIC_URL + "/vendor.JPG"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            If you're interested in becoming a vendor for Freedom Fest,
            here's how you can get involved:
          </p>
          <ul style={{ color: "white", fontSize: "1.2rem" }}>
            <li style={{ marginBottom: "10px" }}>
              Showcase your products or services to a diverse audience.
            </li>
            <li style={{ marginBottom: "10px" }}>
              We offer booths, tables, and various vendor options to fit your
              needs.
            </li>
            <li>
              Contact us at{" "}
              <a
                href="mailto:events@morrowga.gov"
                style={{ color: "#ff6f00", textDecoration: "underline" }}
              >
                events@morrowga.gov
              </a>{" "}
              for more details.
            </li>
          </ul>
          <h2>Vendor Payment Links</h2>
            <p>Interested in paying for a slot at Freedom Fest? Click the button below!</p>
            <a
              href="https://morrowga.gov/tc-events/freedom-fest/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Payment Links for Vendors
            </a>
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNUNUdCSEc3TkIyTTRJWVAwUEwwQ01IUjRXQy4u"
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </section>

        <section className="sponsor">
          <h2>Become a Sponsor</h2>
          <img
            src={process.env.PUBLIC_URL + "/kathy.jpg"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            Support Freedom Fest by becoming a sponsor! Gain exposure for
            your business while helping to celebrate and uplift Hispanic
            culture.
          </p>
          <ul style={{ color: "white", fontSize: "1.2rem" }}>
            <li style={{ marginBottom: "10px" }}>
              Different levels of sponsorship available.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Prominent logo placement and other benefits based on sponsorship
              tier.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Contact us at{" "}
              <a
                href="mailto:events@morrowga.gov"
                style={{ color: "#ff6f00", textDecoration: "underline" }}
              >
                events@morrowga.gov
              </a>{" "}
              for more details.
            </li>
          </ul>
          <section className="pdf-section">
            <h2>Sponsorship Package</h2>
            <iframe
              src={process.env.PUBLIC_URL + "/freedom-sponsor.pdf"}
              width="100%"
              height="600px"
              title="Sponsorship Package"
            />
          </section>
        </section>
      </section>

      <section className="gall-container">
        <div className="gall">
          <img src="/juneteenth/june1.JPG" alt="Event 1" />
          <img src="/juneteenth/june2.JPG" alt="Event 2" />
          <img src="/juneteenth/june3.JPG" alt="Event 3" />
          <img src="/juneteenth/june4.JPG" alt="Event 4" />
          <img src="/juneteenth/june6.JPG" alt="Event 6" />
          <img src="/juneteenth/june7.JPG" alt="Event 7" />
          <img src="/juneteenth/june8.JPG" alt="Event 8" />
          <img src="/juneteenth/june9.JPG" alt="Event 9" />
          <img src="/juneteenth/june10.JPG" alt="Event 10" />
          <img src="/juneteenth/june11.JPG" alt="Event 11" />
          <img src="/juneteenth/june12.JPG" alt="Event 12" />
          <img src="/juneteenth/june13.JPG" alt="Event 13" />
          <img src="/juneteenth/june14.JPG" alt="Event 14" />
          <img src="/juneteenth/june15.JPG" alt="Event 15" />
          <img src="/juneteenth/june16.JPG" alt="Event 16" />
          <img src="/juneteenth/june17.JPG" alt="Event 17" />
          <img src="/juneteenth/june18.JPG" alt="Event 18" />
          <img src="/juneteenth/june19.JPG" alt="Event 19" />
          <img src="/juneteenth/june20.JPG" alt="Event 20" />
          <img src="/juneteenth/june21.JPG" alt="Event 21" />
          <img src="/juneteenth/june23.JPG" alt="Event 23" />
          <img src="/juneteenth/june24.JPG" alt="Event 24" />
          <img src="/juneteenth/june25.JPG" alt="Event 25" />
        </div>
      </section>

      <section className="map-section-freedom">
  <h2>Map of the Venue</h2>
  <p>Check out the map of the venue to find the location and nearby attractions:</p>
    <div className="map-container">
    <div className="custom-map">
      <img src="juneteenth_map.jpg" alt="Custom Map of the Venue" />
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13296.278572017578!2d-84.37180012464525!3d33.57754100153506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4fb0042692621%3A0xb111ea8ab9e8d63a!2sThe%20District!5e0!3m2!1sen!2sus!4v1743086323610!5m2!1sen!2sus"
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

export default FreedomFest;
