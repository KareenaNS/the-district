import React, { useState, useEffect } from "react";
import "../mid.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const flyerImage = "/mid_flyer.png";

function DiaDeLosMuertos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/mid/1.JPG",
    process.env.PUBLIC_URL + "/mid/2.JPG",
    process.env.PUBLIC_URL + "/mid/3.JPG",
    process.env.PUBLIC_URL + "/mid/4.JPG",
    process.env.PUBLIC_URL + "/mid/5.JPG",
    process.env.PUBLIC_URL + "/mid/6.JPG",
    process.env.PUBLIC_URL + "/mid/7.JPG",
    process.env.PUBLIC_URL + "/mid/8.JPG",
    process.env.PUBLIC_URL + "/mid/9.JPG",
    process.env.PUBLIC_URL + "/mid/10.JPG",
    process.env.PUBLIC_URL + "/mid/11.JPG",
    process.env.PUBLIC_URL + "/mid/12.JPG",
    process.env.PUBLIC_URL + "/mid/13.JPG",
    process.env.PUBLIC_URL + "/mid/14.JPG",
    process.env.PUBLIC_URL + "/mid/15.JPG",
    process.env.PUBLIC_URL + "/mid/16.JPG",
    process.env.PUBLIC_URL + "/mid/17.JPG",
    process.env.PUBLIC_URL + "/mid/18.JPG",
    process.env.PUBLIC_URL + "/mid/19.JPG",
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
    <div className="ladcontainr">
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
      <h1>Dia De Los Muertos</h1>
      <section className="event-detalle">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="Dia De Los Muertos"
          className="flyer-image"
        />

        <p>
          <strong>Join us for Dia De Los Muertos! </strong> 
          Celebrate culture, music, and heritage! Our Dia De Los Muertos event draws families and festival-goers for a vibrant day of performances, food, and tradition        </p>

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
              <span>November 1st, 2025</span>
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
        <section className="volunteermid">
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
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNURFo1VjBZVklCVTBJT1BNTVhCWFJTUkVCSS4u"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Sign Up to Volunteer
          </a>
        </section>
        <section className="vendormid">
          <h2>Become a Vendor</h2>
          <img
            src={process.env.PUBLIC_URL + "/vendor.JPG"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            If you're interested in becoming a vendor for Dia De Los Muertos,
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
            <p>Interested in paying for a slot at Dia De Los Muertos? Click the button below!</p>
            <a
              href="https://morrowga.gov/tc-events/dia-de-los-muertos"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Payment Links for Vendors
            </a>
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNURFo1VjBZVklCVTBJT1BNTVhCWFJTUkVCSS4u"
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </section>

        <section className="sponsormid">
          <h2>Become a Sponsor</h2>
          <img
            src={process.env.PUBLIC_URL + "/kathy.jpg"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            Support Dia De Los Muertos by becoming a sponsor! Gain exposure for
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
          <img src="/mid/1.JPG" alt="Event 1" />
          <img src="/mid/2.JPG" alt="Event 2" />
          <img src="/mid/3.JPG" alt="Event 3" />
          <img src="/mid/4.JPG" alt="Event 4" />
          <img src="/mid/6.JPG" alt="Event 6" />
          <img src="/mid/7.JPG" alt="Event 7" />
          <img src="/mid/8.JPG" alt="Event 8" />
          <img src="/mid/9.JPG" alt="Event 9" />
          <img src="/mid/10.JPG" alt="Event 10" />
          <img src="/mid/11.JPG" alt="Event 11" />
          <img src="/mid/12.JPG" alt="Event 12" />
          <img src="/mid/13.JPG" alt="Event 13" />
          <img src="/mid/14.JPG" alt="Event 14" />
          <img src="/mid/15.JPG" alt="Event 15" />
          <img src="/mid/16.JPG" alt="Event 16" />
          <img src="/mid/17.JPG" alt="Event 17" />
          <img src="/mid/18.JPG" alt="Event 18" />
          <img src="/mid/19.JPG" alt="Event 19" />

        </div>
      </section>

      <section className="map-section-mid">
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

export default DiaDeLosMuertos;
