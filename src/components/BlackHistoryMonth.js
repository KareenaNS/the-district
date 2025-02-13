import React, { useState, useEffect } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const flyerImage = "/bhmflyer.jpeg";
const performers = [
  {
    name: "Vedo",
    image: process.env.PUBLIC_URL + "/vedo.jpg",
    day: "Saturday, February 22nd",
    description:
      'Vedo is an R&B singer-songwriter known for his soulful hits like "You Got It" and collaborations with top artists.',
  },
  {
    name: "Keke Wyatt",
    image: process.env.PUBLIC_URL + "/keke-wyatt.jpeg",
    day: "Sunday, February 23rd",
    description:
      "Keke Wyatt is a powerhouse vocalist with chart-topping hits and an impressive career in R&B music.",
  },
  {
    name: "Bobby Valentino",
    image: process.env.PUBLIC_URL + "/bobby-v.jpg",
    day: "Saturday, February 22nd",
    description:
      "Bobby Valentino is a multi-talented singer and songwriter with a smooth blend of R&B and pop. Known for hits like 'Slow Down,' he brings timeless charm to the stage.",
  },
  {
    name: "Kameron Corvet",
    image: process.env.PUBLIC_URL + "/kameron-corvet.jpg",
    day: "Sunday, February 23rd",
    description:
      "Kameron Corvet is a Grammy-winning singer, songwriter, and guitarist who seamlessly blends R&B, soul, and acoustic sounds in his music.",
  },
];

function BlackHistoryMonth() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/bird.jpg",
    process.env.PUBLIC_URL + "/parrot.jpg",
    process.env.PUBLIC_URL + "/fruit.jpg",
    process.env.PUBLIC_URL + "/flamingo.jpg",
    process.env.PUBLIC_URL + "/ladygrey.jpg",
    process.env.PUBLIC_URL + "/ladyclouds.jpg",
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
  const filmArtsSignupURL =
    "https://lp.constantcontactpages.com/sl/VZjKd8q/BlackArtsFest";
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
    <div className="land-page-container">
      <div class="sponsors-banner">
        <div
          class="scroller"
          data-animated="true"
          data-direction="left"
          data-speed="fast"
        >
          <div class="scroller__inner">
            <a href="https://www.thepluckedpeach.com" target="_blank">
              <span>Plucked Peach</span>
            </a>
            <a href="https://www.themailroomonline.com/" target="_blank">
              <span>The Mailroom</span>
            </a>
            <a href="https://www.beautymaster.com/" target="_blank">
              <span>Beauty Master</span>
            </a>
            <a href="https://www.skiplinow.com/shop/-M1DAWQVUIzYPraAjtNM" target="_blank">
              <span>VN Pho</span>
            </a>
            <a href="https://www.flyfrontier.com/" target="_blank">
              <span>Frontier</span>
            </a>
            <a href="https://www.hilton.com/en/hotels/atlslhx-hampton-atlanta-southlake/" target="_blank">
              <span>Hampton Inn</span>
            </a>
            <a href="https://404sportsbar.com/" target="_blank">
              <span>404 Sports Bar & Grill</span>
            </a>
            <a href="https://www.atdentalcenter.com/" target="_blank">
              <span>AT Dental</span>
            </a>
            <a href="https://atlphillyitalian.com/" target="_blank">
              <span>Atlanta Philly & Subs</span>
            </a>
          </div>
        </div>
      </div>
      <h1>Black History Month</h1>
      <section className="event-detail">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="Black History Month Flyer"
          className="flyer-image"
        />

        <p>
          <strong>Join us for Black History Month!</strong> Reunite, celebrate,
          and honor traditions with this vibrant festival, delicious food, and
          cultural performances.
        </p>

        <div className="details-section">
          <div>
            <h3>ADMISSION</h3>
            <p>
              <span>Free</span>
            </p>
          </div>

          <div>
            <h3>DATE</h3>
            <p>
              <span>February 22nd - 23rd 2025</span>
            </p>
          </div>
        </div>

        <div className="details-section">
          <div>
            <h3>TIME</h3>
            <p>
              <span>Saturday: Noon - 11 PM</span>
            </p>
            <p>
              <span>Sunday: 1 PM - 8 PM</span>
            </p>
          </div>

          <div>
            <h3>LOCATION</h3>
            <p>
              <span>
                Morrow Center Exhibition Hall, 1180 Southlake Circle, [Morrow,
                Georgia, 30260]
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="film-arts-entertainer-container">
        <div className="film-arts-signup-container">
          <h2>Film Arts Festival Sign-Up</h2>
          <img
            src={process.env.PUBLIC_URL + "/film.png"}
            alt="Film Festival"
            className="film-image"
          />
          <p>
            Ready to showcase your film at the Film Arts Festival? Sign up now
            and join us in celebrating Black history through film!
          </p>
          <ul>
            <li>You must be a K-12 student to enter.</li>
            <li>
              Your film must be free of profanity, excessive violence, and
              nudity.
            </li>
            <li>
              Films should be respectful and celebrate positive cultural values.
            </li>
            <li>
              Films must be original works created by the student filmmaker.
            </li>
          </ul>
          <button
            onClick={() => window.open(filmArtsSignupURL, "_blank")}
            className="cta-button"
          >
            Sign Up Now
          </button>
        </div>
        <div className="enter-tainer-infos">
          <h2>Headliners</h2>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE9I9gYFy-gsSDYnK-F2xTlNeu8gk5mKYRcBIvbeI1e2Tusw/viewform?usp=header"
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
            If you're interested in becoming a vendor for Black History Month,
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
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/pages/responsepage.aspx?id=Id1HTAYKMEeF20yDdtNCIB37gZsewGFNq0DLLFRK7F9UMVFUVllEWVJSWEZUTFg3VUFCWTAwRE5GQi4u&route=shorturl"
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
            Support Black History Month by becoming a sponsor! Gain exposure for
            your business while helping to celebrate and uplift African American
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
              src={process.env.PUBLIC_URL + "/bhm25_sponsor.pdf"}
              width="100%"
              height="600px"
              title="Sponsorship Package"
            />
          </section>
        </section>
      </section>

      <section className="gall-container">
        <div className="gall">
          <img src="/bhm_slideshow/1.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/2.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/3.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/4.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/5.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/6.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/7.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/8.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/9.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/10.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/11.jpeg" alt="Previous Event 1" />
          <img src="/bhm_slideshow/12.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/13.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/14.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/15.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/16.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/17.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/18.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/19.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/20.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/21.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/22.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/23.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/24.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/25.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/26.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/27.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/28.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/29.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/30.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/31.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/32.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/33.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/34.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/35.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/36.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/37.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/38.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/39.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/40.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/41.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/42.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/43.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/44.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/45.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/46.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/47.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/48.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/50.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/51.JPG" alt="Previous Event 1" />
          <img src="/bhm_slideshow/99.JPG" alt="Previous Event 1" />
        </div>
      </section>
      <section className="map-sections">
        <h2>Map of the Venue</h2>
        <p>
          Check out the map of the venue to find the location and nearby
          attractions:
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.205207217455!2d-84.35407222430386!3d33.57402087334094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4f9567dd0295d%3A0x38e58521f893463e!2sMorrow%20Center!5e0!3m2!1sen!2sus!4v1735422509114!5m2!1sen!2sus"
            width="100%"
            height="auto"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default BlackHistoryMonth;
