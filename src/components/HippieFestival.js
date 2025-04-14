import React, { useState, useEffect } from "react";
import "../hippie.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const flyerImage = "/hippie_flyer.png";

function HippieFest() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/hippie/1.JPG",
    process.env.PUBLIC_URL + "/hippie/2.JPG",
    process.env.PUBLIC_URL + "/hippie/3.JPG",
    process.env.PUBLIC_URL + "/hippie/4.JPG",
    process.env.PUBLIC_URL + "/hippie/5.JPG",
    process.env.PUBLIC_URL + "/hippie/6.JPG",
    process.env.PUBLIC_URL + "/hippie/7.JPG",
    process.env.PUBLIC_URL + "/hippie/8.JPG",
    process.env.PUBLIC_URL + "/hippie/9.JPG",
    process.env.PUBLIC_URL + "/hippie/10.JPG",
    process.env.PUBLIC_URL + "/hippie/11.JPG",
    process.env.PUBLIC_URL + "/hippie/12.JPG",
    process.env.PUBLIC_URL + "/hippie/13.JPG",
    process.env.PUBLIC_URL + "/hippie/14.JPG",
    process.env.PUBLIC_URL + "/hippie/15.JPG",
    process.env.PUBLIC_URL + "/hippie/16.JPG",
    process.env.PUBLIC_URL + "/hippie/17.JPG",
    process.env.PUBLIC_URL + "/hippie/18.JPG",
    process.env.PUBLIC_URL + "/hippie/19.JPG",
    process.env.PUBLIC_URL + "/hippie/20.JPG",
    process.env.PUBLIC_URL + "/hippie/21.JPG",
    process.env.PUBLIC_URL + "/hippie/22.JPG",
    process.env.PUBLIC_URL + "/hippie/23.JPG",
    process.env.PUBLIC_URL + "/hippie/24.JPG",
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
    <div className="lacontain">
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
      <h1>Hippie Fest</h1>
      <section className="event-deets">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="Hippie Fest"
          className="flyer-image"
        />

        <p>
          <strong>Join us for Hippie Fest! </strong> 
          Peace, love, and good vibes only! Step back into the groovy era at Hippie Fest, where music, art, and free-spirited fun come alive. Enjoy live bands, tie-dye stations, vintage vendors, food trucks, and more. Bring your flower crowns, funky outfits, and positive energy for a far-out day of community and creativity!
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
              <span>October 18th, 2025</span>
            </p>
          </div>
        </div>

        <div className="detailssection">
          <div>
            <h3>TIME</h3>
            <p>
              <span>
                Saturday: 5 - 10 PM</span>
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
        <section className="volunteerhippiee">
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
        <section className="vendorhippiee">
          <h2>Become a Vendor</h2>
          <img
            src={process.env.PUBLIC_URL + "/vendor.JPG"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            If you're interested in becoming a vendor for Hippie Fest,
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
            <p>Interested in paying for a slot at Hippie Fest? Click the button below!</p>
            <a
              href="https://morrowga.gov/tc-events/hippie-fest"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Payment Links for Vendors
            </a>
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNUM0hXS0wxV1lPU1hPUUJIUkpWNFVBR1YyWi4u"
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </section>

        <section className="sponsorhippiee">
          <h2>Become a Sponsor</h2>
          <img
            src={process.env.PUBLIC_URL + "/kathy.jpg"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            Support Hippie Fest by becoming a sponsor! Gain exposure for
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
        <img src="/hippie/1.JPG" alt="Event 1" />
        <img src="/hippie/2.JPG" alt="Event 2" />
        <img src="/hippie/3.JPG" alt="Event 3" />
        <img src="/hippie/4.JPG" alt="Event 4" />
        <img src="/hippie/5.JPG" alt="Event 5" />
        <img src="/hippie/6.JPG" alt="Event 6" />
        <img src="/hippie/7.JPG" alt="Event 7" />
        <img src="/hippie/8.JPG" alt="Event 8" />
        <img src="/hippie/9.JPG" alt="Event 9" />
        <img src="/hippie/10.JPG" alt="Event 10" />
        <img src="/hippie/11.JPG" alt="Event 11" />
        <img src="/hippie/12.JPG" alt="Event 12" />
        <img src="/hippie/13.JPG" alt="Event 13" />
        <img src="/hippie/14.JPG" alt="Event 14" />
        <img src="/hippie/15.JPG" alt="Event 15" />
        <img src="/hippie/16.JPG" alt="Event 16" />
        <img src="/hippie/17.JPG" alt="Event 17" />
        <img src="/hippie/18.JPG" alt="Event 18" />
        <img src="/hippie/19.JPG" alt="Event 19" />
        <img src="/hippie/20.JPG" alt="Event 20" />
        <img src="/hippie/21.JPG" alt="Event 21" />
        <img src="/hippie/22.JPG" alt="Event 22" />
        <img src="/hippie/23.JPG" alt="Event 23" />
        <img src="/hippie/24.JPG" alt="Event 24" />
        </div>
      </section>

      <section className="map-section-vets">
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

export default HippieFest;
