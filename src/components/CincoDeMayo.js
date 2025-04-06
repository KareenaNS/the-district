import React, { useState, useEffect } from "react";
import "../CDM.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const flyerImage = "/cdmflyer.jpg";
const performers = [
  {
    name: "Grupo Esencia",
    image: process.env.PUBLIC_URL + "/grupoesencia.JPG",
    day: "Saturday, May 3rd",
    description:
      'Este banda performe la música de género banda regional',
  },
  {
    name: "Flores Morenas",
    image: process.env.PUBLIC_URL + "/floresmorenas.JPG",
    day: "Saturday, February 23rd",
    description:
      "",
  },
  {
    name: "Los Armadillos",
    image: process.env.PUBLIC_URL + "/losarmadillos.JPG",
    day: "Saturday, February 23rd",
    description:
      "",
  },
];

function CincoDeMayo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/cinco/1.JPG",
    process.env.PUBLIC_URL + "/cinco/2.JPG",
    process.env.PUBLIC_URL + "/cinco/3.JPG",
    process.env.PUBLIC_URL + "/cinco/4.JPG",
    process.env.PUBLIC_URL + "/cinco/5.JPG",
    process.env.PUBLIC_URL + "/cinco/6.JPG",
    process.env.PUBLIC_URL + "/cinco/7.JPG",
    process.env.PUBLIC_URL + "/cinco/8.JPG",
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
            <a href="https://www.pelicanhillurgentcarecenter.com/" target="_blank">
              <span>Pelican Hill</span>
            </a>
            <a href="https://www.facebook.com/long.merchants" target="_blank">
              <span>Long Merchants</span>
            </a>
            <a href="https://tranrealtygroup.com/" target="_blank">
              <span>Tran Realty</span>
            </a>
            <a href="https://www.statefarm.com/agent/us/ga/morrow/kim-duong-z0qt35r2nal" target="_blank">
              <span>Kim Duong State Farm</span>
            </a>
            <a href="https://www.dnb.com/business-directory/company-profiles.tsg_recovery_services_llc.dbde237da306cd95ea72d3ca90a341a7.html" target="_blank">
              <span>TSG Services and Solutions LLC</span>
            </a>
          </div>
        </div>
      </div>
      <h1>Cinco De Mayo</h1>
      <section className="event-detail">
        <h2>Event Details</h2>

        <img
          src={process.env.PUBLIC_URL + flyerImage}
          alt="Cinco de Mayo Flyer"
          className="flyer-image"
        />

        <p>
          <strong>Join us for Cinco De Mayo! </strong> 
          Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, 
          and cultural performances.
        </p>
        <p>
          <strong>¡Únete a nosotros para el Cinco de Mayo! </strong>  
          Reúna, celebre y honre las tradiciones con este vibrante festival, deliciosa comida, y 
          actuaciones culturales.
        </p>

        <div className="details-section">
          <div>
            <h3>ENTRADA / ADMISSION</h3>
            <p>
              <span>Libre / FREE</span>
            </p>
          </div>

          <div>
            <h3>FECHA / DATE</h3>
            <p>
              <span>3 de Mayo / May 3rd, 2025</span>
            </p>
          </div>
        </div>

        <div className="details-section">
          <div>
            <h3>TIEMPO / TIME</h3>
            <p>
              <span>El Sabado a 5 hasta 11 de la noche / Saturday: 5 - 11 PM</span>
            </p>
          </div>

          <div>
            <h3>LOCACIÓN / LOCATION</h3>
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
        <div className="enter-tainer-infos">
          <h2>Headliners / Los artistas</h2>
          <p>Here's who you can expect at our event:</p>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfbKEh5Gu9_h4SF6trBWECYuRAlBXgPSGONY_BKPrt3bzZzlw/viewform?usp=header"
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
            If you're interested in becoming a vendor for Cinco De Mayo,
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
            <p>Interested in paying for a slot at our Cinco De Mayo event? Click the button below!</p>
            <a
              href="https://morrowga.gov/tc-events/cinco-de-mayo/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Payment Links for Vendors
            </a>
          <h2>Vendor Registration Form</h2>
          <iframe
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=Id1HTAYKMEeF20yDdtNCINTtYiHrpEpAhDG5XILqbJNUMDFVSFZYT0dET0VWUUhENUlNMUhTVE5KSC4u&origin=Invitation&channel=0"
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
            Support Cinco De Mayo by becoming a sponsor! Gain exposure for
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
              src={process.env.PUBLIC_URL + "/cinco_sponsor.pdf"}
              width="100%"
              height="600px"
              title="Sponsorship Package"
            />
          </section>
        </section>
      </section>

      <section className="gall-container">
        <div className="gall">
          <img src="/cinco/1.JPG" alt="Previous Event 1" />
          <img src="/cinco/2.JPG" alt="Previous Event 1" />
          <img src="/cinco/3.JPG" alt="Previous Event 1" />
          <img src="/cinco/4.JPG" alt="Previous Event 1" />
          <img src="/cinco/5.JPG" alt="Previous Event 1" />
          <img src="/cinco/6.JPG" alt="Previous Event 1" />
          <img src="/cinco/7.JPG" alt="Previous Event 1" />
          <img src="/cinco/8.JPG" alt="Previous Event 1" />
          <img src="/cinco/9.JPG" alt="Previous Event 1" />
          <img src="/cinco/10.JPG" alt="Previous Event 1" />
          <img src="/cinco/11.JPG" alt="Previous Event 1" />
          <img src="/cinco/12.JPG" alt="Previous Event 1" />
          <img src="/cinco/13.JPG" alt="Previous Event 1" />
          <img src="/cinco/14.JPG" alt="Previous Event 1" />
          <img src="/cinco/15.JPG" alt="Previous Event 1" />
          <img src="/cinco/16.JPG" alt="Previous Event 1" />
          <img src="/cinco/17.JPG" alt="Previous Event 1" />
          <img src="/cinco/18.JPG" alt="Previous Event 1" />
          <img src="/cinco/19.JPG" alt="Previous Event 1" />
          <img src="/cinco/20.JPG" alt="Previous Event 1" />
          <img src="/cinco/21.JPG" alt="Previous Event 1" />
          <img src="/cinco/22.JPG" alt="Previous Event 1" />
          <img src="/cinco/23.JPG" alt="Previous Event 1" />
          <img src="/cinco/24.JPG" alt="Previous Event 1" />
          <img src="/cinco/25.JPG" alt="Previous Event 1" />
          <img src="/cinco/26.JPG" alt="Previous Event 1" />
          <img src="/cinco/27.JPG" alt="Previous Event 1" />
        </div>
      </section>

      <section className="map-section">
  <h2>Map of the Venue</h2>
  <p>Check out the map of the venue to find the location and nearby attractions:</p>
    <div className="map-container">
    <div className="custom-map">
      <img src="cinco_map.jpg" alt="Custom Map of the Venue" />
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

export default CincoDeMayo;
