import React, { useState, useEffect } from "react";
import "../Juneteenth.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const flyerImage = "/juneteenth.jpg";
const performers = [
  {
    name: "Pastor Troy",
    image: process.env.PUBLIC_URL + "/pastortroy.jpg",
    day: "Saturday, June 22nd",
    description:
      'Micah LeVar "Pastor" Troy is an American rapper from Augusta, Georgia. He is best known for his 2002 single "Are We Cuttin", which entered the Billboard Hot 100.',
  },
  {
    name: "Young Dro",
    image: process.env.PUBLIC_URL + "/Young-Dro.png",
    day: "Saturday, June 22nd",
    description:
      "D'Juan Montrel Hart, better known by his stage name Young Dro, is an American rapper.",
  },
  {
    name: "Yung Joc",
    image: process.env.PUBLIC_URL + "/yungjoc.jpg",
    day: "Saturday, June 22nd",
    description:
      "Yung Joc is the stage name of American rapper Jasiel Amon Robinson. He's best known for his 2006 single “It's Goin' Down”, which reached number three on the Billboard Hot 100.",
  },
  {
    name: "Lil Scrappy",
    image: process.env.PUBLIC_URL + "/lilscrappy.jpg",
    day: "Saturday, June 22nd",
    description:"Lil Scrappy is the stage name of Darryl Raynard Richardson III, an American rapper from Atlanta, Georgia."  },
  {
    name: "YoungBloodZ",
    image: process.env.PUBLIC_URL + "/youngbloodz.jpg",
    day: "Saturday, June 22nd",
    description:
      "YoungBloodZ is an American Southern hip hop duo from Atlanta, Georgia composed of J-Bo and Sean Paul formed in 1997. ",
  },
];

function Juneteenth() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/juneteenth/june.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june1.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june2.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june3.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june4.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june6.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june7.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june8.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june9.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june10.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june11.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june12.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june13.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june14.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june15.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june16.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june17.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june18.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june19.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june20.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june21.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june23.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june24.JPG",
    process.env.PUBLIC_URL + "/juneteenth/june25.JPG",
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
    <div className="land-page-container">
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
      <h1>Juneteenth</h1>
      <section className="event-detail">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="Juneteenth Flyer"
          className="flyer-image"
        />

        <p>
          <strong>Join us for Juneteenth! </strong> 
          Join us in celebrating Juneteenth, a powerful commemoration of freedom and resilience, as we proudly partner with Keys to the City for an unforgettable community event this year.
        </p>

        <div className="details-section">
          <div>
            <h3>ADMISSION</h3>
            <p>
              <span>FREE</span>
            </p>
          </div>

          <div>
            <h3>DATE</h3>
            <p>
              <span>June 21st, 2025</span>
            </p>
          </div>
        </div>

        <div className="details-section">
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

      <section className="film-arts-entertainer-container">
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
            href=""
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
            If you're interested in becoming a vendor for Juneteenth,
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
            <p>Interested in paying for a slot at our Juneteenth event? Click the button below!</p>
            <a
              href="https://morrowga.gov/tc-events/juneteenth/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Payment Links for Vendors
            </a>
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNUMjNVN0ZYNU9JQlpNWlhOSjcxSlI4WVlKSC4u"
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
            Support Juneteenth by becoming a sponsor! Gain exposure for
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
              src={process.env.PUBLIC_URL + "/juneteenth-sponsor.pdf"}
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

      <section className="map-section">
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

export default Juneteenth;
