import React, { useState, useEffect } from 'react';
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


// Sample image paths and event details
const flyerImage = '/bhmflyer.jpeg';
const mapImage = '/exhall-map.png';
const performers = [
  {
    name: 'Vedo',
    image: process.env.PUBLIC_URL + '/vedo.jpg',
    day: 'Saturday, February 22nd',
    description: 'Vedo is an R&B singer-songwriter known for his soulful hits like "You Got It" and collaborations with top artists.',
  },
  {
    name: 'Keke Wyatt',
    image: process.env.PUBLIC_URL + '/keke-wyatt.jpeg',
    day: 'Sunday, February 23rd',
    description: 'Keke Wyatt is a powerhouse vocalist with chart-topping hits and an impressive career in R&B music.',
  },
  {
    name: "Bobby Valentino",
    image: process.env.PUBLIC_URL + "/bobby-v.jpg",
    day: "Saturday, February 22nd",
    description: "Bobby Valentino is a multi-talented singer and songwriter with a smooth blend of R&B and pop. Known for hits like 'Slow Down,' he brings timeless charm to the stage."
  },
  {
    name: "Kameron Corvet",
    image: process.env.PUBLIC_URL + "/kameron-corvet.jpg",
    day: "Sunday, February 23rd",
    description: "Kameron Corvet is a Grammy-winning singer, songwriter, and guitarist who seamlessly blends R&B, soul, and acoustic sounds in his music."
  },
];


function BlackHistoryMonth() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + '/bird.jpg',
    process.env.PUBLIC_URL + '/parrot.jpg',
    process.env.PUBLIC_URL + '/fruit.jpg',
    process.env.PUBLIC_URL + '/flamingo.jpg',
    process.env.PUBLIC_URL + '/ladygrey.jpg',
    process.env.PUBLIC_URL + '/ladyclouds.jpg',
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
        const intervalId = setInterval(nextImage, 3000); // 3000ms = 3 seconds
        return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
      }, []);
      const filmArtsSignupURL = "https://lp.constantcontactpages.com/sl/VZjKd8q/BlackArtsFest"; // Your provided URL
      const scrollers = document.querySelectorAll(".scroller");

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
      
      function addAnimation() {
        scrollers.forEach((scroller) => {
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);
      
          // Clone the content and append it at the end of the scroller
          const clonedContent = scrollerContent.map(item => item.cloneNode(true));
          const scrollerInnerClone = document.createElement("div");
          scrollerInnerClone.classList.add("scroller__inner");
          clonedContent.forEach(item => scrollerInnerClone.appendChild(item));
          scroller.appendChild(scrollerInnerClone);
        });
      }
      

  return (
    
    <div className="land-page-container">
      <div class="sponsors-banner">
        <div class="scroller" data-animated="true" data-direction="left" data-speed="fast">
          <div class="scroller__inner">
            <span>Plucked Peach</span>
            <span>The Mailroom</span>
            <span>Business 3</span>
            <span>Business 4</span>
          </div>
        </div>
      </div>
      <h1>Black History Month</h1>
      {/* Event Details */}
      {/* <section className="event-detail">
        <h2>Event Details</h2>
        <img src={process.env.PUBLIC_URL + flyerImage} alt="Black History Month Flyer" className="flyer-image" />
        <p><strong>Join us for Black History Month!</strong> Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, and cultural performances.</p>
        <p><strong>Admission:</strong> Free</p>
        <p><strong>Date:</strong> February 22nd - 23rd 2025</p>
        <p><strong>Time:</strong> 5 PM - 12 AM</p>
        <p><strong>Location:</strong> Morrow Center Exhibition Hall, 1180 Southlake Circle, [Morrow, Georgia, 30260]</p>
      </section> */}
      <section className="event-detail">
      <h2>Event Details</h2>

  <img
    src={process.env.PUBLIC_URL + flyerImage}
    alt="Black History Month Flyer"
    className="flyer-image"
  />

  <p>
    <strong>Join us for Black History Month!</strong> Reunite, celebrate, and
    honor traditions with this vibrant festival, delicious food, and cultural
    performances.
  </p>

  <div className="details-section">
    <div>
      <h3>ADMISSION</h3>
      <p><span>Free</span></p>
    </div>

    <div>
      <h3>DATE</h3>
      <p><span>February 22nd - 23rd 2025</span></p>
    </div>
  </div>

  <div className="details-section">
    <div>
      <h3>TIME</h3>
      <p><span>5 PM - 12 AM</span></p>
    </div>

    <div>
      <h3>LOCATION</h3>
      <p>
        <span>Morrow Center Exhibition Hall, 1180 Southlake Circle,
        [Morrow, Georgia, 30260]</span>
      </p>
    </div>
  </div>
</section>


      <section className="film-arts-entertainer-container">
  <div className="film-arts-signup-container">
    <h2>Film Arts Festival Sign-Up</h2>
    <img 
      src={process.env.PUBLIC_URL + '/film.png'} 
      alt="Film Festival" 
      className="film-image"
    />    
    <p>Ready to showcase your film at the Film Arts Festival? Sign up now and join us in celebrating Black history through film!</p>
    <ul>
      <li>You must be a K-12 student to enter.</li>
      <li>Your film must be free of profanity, excessive violence, and nudity.</li>
      <li>Films should be respectful and celebrate positive cultural values.</li>
      <li>Films must be original works created by the student filmmaker.</li>
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
              <p className="performer-description">{performer.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </div>
</section>

<div className="ss-container">
        <button className="arrow-button left-arrow" onClick={prevImage}>
          &#10094; {/* Left Arrow */}
        </button>
        <img
          src={images[currentImageIndex]} // Display the current image based on index
          alt="Event Image"
          className="ss-image"
        />
        <button className="arrow-button right-arrow" onClick={nextImage}>
          &#10095; {/* Right Arrow */}
        </button>
      </div>

      

      <section className="vendor-sponsor-contain">
        {/* Vendor Information */}
        <section className="vendor-infos">
          <h2>Become a Vendor</h2>
          <img src={process.env.PUBLIC_URL + '/vendor.JPG'} alt="Sponsor" className="sponsor-image" />
          <p>If you're interested in becoming a vendor for Black History Month, here's how you can get involved:</p>
          <ul style={{ color: 'white', fontSize: '1.2rem' }}>
              <li style={{ marginBottom: '10px' }}>Showcase your products or services to a diverse audience.</li>
              <li style={{ marginBottom: '10px' }}>We offer booths, tables, and various vendor options to fit your needs.</li>
              <li>Contact us at <a href="mailto:events@morrowga.gov" style={{ color: '#ff6f00', textDecoration: 'underline' }}>events@morrowga.gov</a> for more details.</li>
          </ul>
          <h2>Vendor Registration Form</h2>
          <iframe src="https://forms.office.com/pages/responsepage.aspx?id=Id1HTAYKMEeF20yDdtNCIB37gZsewGFNq0DLLFRK7F9UMVFUVllEWVJSWEZUTFg3VUFCWTAwRE5GQi4u&route=shorturl" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>

        </section>

        <section className="sponsor-infos">
          <h2>Become a Sponsor</h2>
          <img src={process.env.PUBLIC_URL + '/kathy.jpg'} alt="Sponsor" className="sponsor-image" />
          <p>Support Black History Month by becoming a sponsor! Gain exposure for your business while helping to celebrate and uplift African American culture.</p>
            <ul style={{ color: 'white', fontSize: '1.2rem' }}>
              <li style={{ marginBottom: '10px' }}>Different levels of sponsorship available.</li>
              <li style={{ marginBottom: '10px' }}>Prominent logo placement and other benefits based on sponsorship tier.</li>
              <li style={{ marginBottom: '10px' }}>
                Contact us at <a href="mailto:events@morrowga.gov" style={{ color: '#ff6f00', textDecoration: 'underline' }}>events@morrowga.gov</a> for more details.
              </li>
            </ul>
          <section className="pdf-section">
          <h2>Sponsorship Package</h2>
          <iframe
              src={process.env.PUBLIC_URL + '/bhm25_sponsor.pdf'}
              width="100%"
              height="600px"
              title="Sponsorship Package"
          />
          </section>
        </section>
      </section>

      {/* <iframe src="https://lp.constantcontactpages.com/sl/VZjKd8q/BlackArtsFest" 
        width="100%" 
        height="600px" 
        frameborder="0" 
        allowfullscreen>
      </iframe> */}

      {/* Map of the District */}
  <section className="map-sections">
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
