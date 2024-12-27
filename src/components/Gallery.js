import React, { useState, useEffect } from 'react';
import '../App.css'; // Import App.css for global styling

function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of image sources for the slideshow
  const images = [
    '/storefront.png',
    '/house.jpg',
    '/storefront2.jpg',
    '/house2.jpg',
    '/storefront3.jpg',
    '/house3.jpg',
    '/storefront4.jpg',
    '/house4.jpg',
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
    <div>
      <h2>Gallery</h2>
      <div className="gallery-container">
        <img
          src={images[currentImageIndex]} // Display the current image based on index
          alt="Event Image"
          className="slideshow-image"
        />
      </div>
    </div>
    
  );
}

export default Gallery;
