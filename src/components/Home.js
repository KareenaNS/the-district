import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom'; // Import Link from React Router for navigation

import '../App.css'; // Import App.css for global styling

function Home() {
    // State to manage the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Array of image sources for the slideshow
    // const images = [
    //   '/storefront.png',
    //   '/house.jpg',
    //   '/storefront2.jpg',
    //   '/house2.jpg',
    //   '/storefront3.jpg',
    //   '/house3.jpg',
    //   '/storefront4.jpg',
    //   '/house4.jpg',
    // ];
    const images = [
      process.env.PUBLIC_URL + '/storefront.png',
      process.env.PUBLIC_URL + '/house.jpg',
      process.env.PUBLIC_URL + '/storefront2.jpg',
      process.env.PUBLIC_URL + '/house2.jpg',
      process.env.PUBLIC_URL + '/storefront3.jpg',
      process.env.PUBLIC_URL + '/house3.jpg',
      process.env.PUBLIC_URL + '/storefront4.jpg',
      process.env.PUBLIC_URL + '/house4.jpg',
    ];
    

    // Function to change the image index
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    useEffect(() => {
      const intervalId = setInterval(nextImage, 5000); // 3000ms = 3 seconds
      return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
    }, []);

  return (
    <div className="home-container">
      <div className="video-container">
      {/* <video className="full-width-video" autoPlay loop muted>
        <source src="https://kareenans.github.io/the-district/drone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
                <video className="full-width-video" autoPlay loop muted>
          <source src={process.env.PUBLIC_URL + '/drone.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
      <img src={process.env.PUBLIC_URL + '/district.png'} alt="The District" className="district-logo" />
      <h2>Welcome to The District</h2>
      <div className="description-container">
        <p>
          Your premier outdoor event venue! Located 15 minutes from Atlanta's Hartsfield-Jackson Airport,
          The District contains a variety of fun activities for families, including shops, live music,
          and events once a month. Scroll down for more details about our venue and services!
        </p>
      </div>

      <div className="info-columns">
        <div className="column">
        <img src={process.env.PUBLIC_URL + '/storefront.png'} alt="Leasing a Suite" className="column-image" />
        <h3>Leasing a Suite</h3>
          <p>
            Discover premium suites available for leasing at The District, perfect for businesses
            or private events.
          </p>
          <Link to="/leasing">
            <button className="column-button">Learn More</button>
          </Link>
        </div>
        <div className="column">
        <img src={process.env.PUBLIC_URL + '/hosting.JPG'} alt="Hosting an Event" className="column-image" />
        <h3>Hosting Your Event</h3>
          <p>
            Book and host your own event with ease. Our venue offers exceptional services to make your event memorable.
          </p>
          <Link to="/booking">
            <button className="column-button">Learn More</button>
          </Link>
        </div>
        <div className="column">
        <img src={process.env.PUBLIC_URL + '/city.jpg'} alt="City-Hosted Events" className="column-image" />
        <h3>City-Hosted Events</h3>
          <p>
            Join us for events organized by the city, from concerts to festivals, right here at The District.
          </p>
          <Link to="/events">
            <button className="column-button">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="slideshow-container">
        <img
          src={images[currentImageIndex]} // Display the current image based on index
          alt="Event Image"
          className="slideshow-image"
        />
      </div>
    </div>
  );
}

export default Home;
