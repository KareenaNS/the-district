import React, { useState, useEffect } from "react";
import "../InternationalNightMarket.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import ParallaxTitle from "./ParallaxTitle";

const flyerImage = "/inmflyer.jpg";
const performers = [
  {
    name: "Undecided",
    image: process.env.PUBLIC_URL + "/pastortroy.jpg",
    day: "Saturday, October 4th",
    description:
      'TBD',
  },

];

function InternationalNightMarket() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/InternationalNightMarket/1.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/2.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/3.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/4.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/6.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/7.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/8.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/9.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/10.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/11.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/12.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/13.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/14.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/15.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/16.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/17.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/18.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/19.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/20.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/21.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/23.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/24.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/25.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/26.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/27.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/28.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/29.JPG",
    process.env.PUBLIC_URL + "/InternationalNightMarket/30.JPG",
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
    <div className="landage-container">
      {/* <ParallaxTitle /> */}
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
      <h1>International Night Market</h1>

      <section className="edetails">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="InternationalNightMarket Flyer"
          className="flyer-image"
        />

        <p>
          <strong>Join us for International Night Market! </strong> 
Join us for the International Night Market, a dynamic celebration of global cultures featuring delicious food, captivating performances, and unique traditions from around the world. Enjoy an unforgettable evening of flavor, music, and dance as we come together to honor the rich diversity that makes our community thrive.
        </p>

        <div className="detsection">
          <div>
            <h3>ADMISSION</h3>
            <p>
              <span>FREE</span>
            </p>
          </div>

          <div>
            <h3>DATE</h3>
            <p>
              <span>October 4th, 2025</span>
            </p>
          </div>
        </div>

        <div className="detsection">
          <div>
            <h3>TIME</h3>
            <p>
              <span>
                Saturday: 2 - 11:30 PM</span>
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

      {/* <section className="film-arts-entertainer-container">
  <div className="responsive-panel-container">
    <div className="responsive-panel">
      <h1>BBQ Contest</h1>
      <img
        src={process.env.PUBLIC_URL + "/bbqcontest.jpg"}
        alt="Film Festival"
        className="j-image"
      />
      <p>
        Ready to enter our BBQ cookoff? Reach out to Elizabeth (470-773-2708) or Jimmy (678-898-1610) for more information!
      </p>

    </div>

    <div className="responsive-panel">
      <h1>Headliners</h1>
      <p>Here's who you can expect at our event for each day:</p>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="performer-swiper"
      >
        {performers.map((performer, index) => (
          <SwiperSlide key={index}>
            <div className="performer-slide">
              <img
                src={performer.image}
                alt={performer.name}
                className="performer-image"
              />
              <h3 className="performer-name">{performer.name}</h3>
              <p className="performer-day">{performer.day}</p>
              <p className="performer-description">
                {performer.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="responsive-panel">
      <h1>Mr. and Ms. Juneteenth</h1>
      <img
        src={process.env.PUBLIC_URL + "/mrsjuneteenth.jpg"}
        alt="Film Festival"
        className="j-image"
      />
      <p>
        Ready to enter Mr. our Ms. Juneteenth? Read the requirements below and reach out to events@morrowga.gov or Elizabeth (470-773-2708) for more information!
      </p>
      <ul>
        You must be a student of a Clayton County high school.
      </ul>
      <ul>
        Your entry must be in poetry or essay format.
      </ul>
      <ul>
        For the poetry porton, your poem must be 20-40 lines in length and an original piece of work. 
      </ul>
      <ul>
        For the essay portion, your essay must be 500 - 1000 words in length and an original piece of work.
      </ul>
      <ul>
        Record a video of yourself performing your poem or essay with a maximum duration of 3 minutes.
      </ul>

    </div>
  </div>
</section> */}


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
        <section className="volunteer-infos">
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
        <section className="vendor-infos">
          <h2>Become a Vendor</h2>
          <img
            src={process.env.PUBLIC_URL + "/vendor.JPG"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            If you're interested in becoming a vendor for International Night Market,
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
            <p>Interested in paying for a slot at our International Night Market event? Click the button below!</p>
            <a
              href="https://morrowga.gov/tc-events/international-night-out-moon-festival"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Payment Links for Vendors
            </a>
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNURjJQVlcyNVY2S0U1V1hIWDhaQ1RBVUZRTy4u"
            width="100%"
            height="600px"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </section>

        <section className="sponsor-infos">
          <h2>Become a Sponsor</h2>
          <img
            src={process.env.PUBLIC_URL + "/kathy.jpg"}
            alt="Sponsor"
            className="sponsor-image"
          />
          <p>
            Support International Night Market by becoming a sponsor! Gain exposure for
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
              src={process.env.PUBLIC_URL + "/inmsponsor.pdf"}
              width="100%"
              height="600px"
              title="Sponsorship Package"
            />
          </section>
        </section>
      </section>

      <section className="gall-container">
        <div className="gall">
          <img src="/InternationalNightMarket/1.JPG" alt="Event 1" />
          <img src="/InternationalNightMarket/2.JPG" alt="Event 2" />
          <img src="/InternationalNightMarket/3.JPG" alt="Event 3" />
          <img src="/InternationalNightMarket/4.JPG" alt="Event 4" />
          <img src="/InternationalNightMarket/5.JPG" alt="Event 5" />
          <img src="/InternationalNightMarket/6.JPG" alt="Event 6" />
          <img src="/InternationalNightMarket/7.JPG" alt="Event 7" />
          <img src="/InternationalNightMarket/8.JPG" alt="Event 8" />
          <img src="/InternationalNightMarket/9.JPG" alt="Event 9" />
          <img src="/InternationalNightMarket/10.JPG" alt="Event 10" />
          <img src="/InternationalNightMarket/11.JPG" alt="Event 11" />
          <img src="/InternationalNightMarket/12.JPG" alt="Event 12" />
          <img src="/InternationalNightMarket/13.JPG" alt="Event 13" />
          <img src="/InternationalNightMarket/14.JPG" alt="Event 14" />
          <img src="/InternationalNightMarket/15.JPG" alt="Event 15" />
          <img src="/InternationalNightMarket/16.JPG" alt="Event 16" />
          <img src="/InternationalNightMarket/17.JPG" alt="Event 17" />
          <img src="/InternationalNightMarket/18.JPG" alt="Event 18" />
          <img src="/InternationalNightMarket/19.JPG" alt="Event 19" />
          <img src="/InternationalNightMarket/20.JPG" alt="Event 20" />
          <img src="/InternationalNightMarket/21.JPG" alt="Event 21" />
          <img src="/InternationalNightMarket/22.JPG" alt="Event 22" />
          <img src="/InternationalNightMarket/23.JPG" alt="Event 23" />
          <img src="/InternationalNightMarket/24.JPG" alt="Event 24" />
          <img src="/InternationalNightMarket/25.JPG" alt="Event 25" />
          <img src="/InternationalNightMarket/26.JPG" alt="Event 26" />
          <img src="/InternationalNightMarket/27.JPG" alt="Event 27" />
          <img src="/InternationalNightMarket/28.JPG" alt="Event 28" />
          <img src="/InternationalNightMarket/29.JPG" alt="Event 29" />
          <img src="/InternationalNightMarket/30.JPG" alt="Event 30" />
        </div>
      </section>

      <section className="map-sectn">
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

export default InternationalNightMarket;
