import React, { useState, useEffect } from 'react';
import '../App.css'; // Import App.css for global styling

function Home() {
    // State to manage the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Array of image sources for the slideshow
    const images = [
      '/bg.png',
      '/image2.jpg',
      '/image3.jpg',
      '/image4.jpg'
    ];
  
    // Function to change the image index
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    useEffect(() => {
      const intervalId = setInterval(nextImage, 3000); // 3000ms = 3 seconds
      return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
    }, []);

  return (
    <div className="home-container">
      <div className="video-container">
        <video className="full-width-video" autoPlay loop muted>
          <source src="/drone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <img src="/district.png" alt="The District" className="district-logo" />
      <h2>Welcome to The District</h2>
      <div className="description-container">
        <p>
          Your premier outdoor event venue! Located 15 minutes from Atlanta's Hartsfield-Jackson Airport,
          The District contains a variety of fun activities for families, including shops, live music,
          and events once a month! Scroll down for more details about our venue and services.
        </p>
      </div>
      <div className="image-container">
          <img src="/bg.png" alt="Event Image" className="full-width-image" />
      </div>
        


    </div>
  );
}

export default Home;
