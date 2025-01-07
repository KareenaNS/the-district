import React from 'react';
import '../App.css'; // Import your CSS file for styling

function Gallery() {
  // Array of image sources for your gallery
  const images = [
    process.env.PUBLIC_URL + '/events/1.jpg',
    process.env.PUBLIC_URL + '/events/2.jpg',
    process.env.PUBLIC_URL + '/events/3.jpg',
    process.env.PUBLIC_URL + '/events/4.jpg',
    process.env.PUBLIC_URL + '/events/5.jpg',
    process.env.PUBLIC_URL + '/events/6.jpg',
    process.env.PUBLIC_URL + '/events/7.JPG',
    process.env.PUBLIC_URL + '/events/8.JPG',
    process.env.PUBLIC_URL + '/events/9.JPG',
    process.env.PUBLIC_URL + '/events/10.jpg',
    process.env.PUBLIC_URL + '/events/11.JPG',
    process.env.PUBLIC_URL + '/events/12.JPG',
    process.env.PUBLIC_URL + '/events/13.jpg',
    process.env.PUBLIC_URL + '/events/14.JPG',
    process.env.PUBLIC_URL + '/events/15.jpg',
    process.env.PUBLIC_URL + '/events/16.jpg',
    process.env.PUBLIC_URL + '/events/17.JPG',
    process.env.PUBLIC_URL + '/events/18.JPG',
    process.env.PUBLIC_URL + '/events/19.jpg',
    process.env.PUBLIC_URL + '/events/20.jpg',
    process.env.PUBLIC_URL + '/events/21.jpg',
    process.env.PUBLIC_URL + '/events/22.JPG',
    process.env.PUBLIC_URL + '/events/23.jpg',
    process.env.PUBLIC_URL + '/events/24.JPG',
    process.env.PUBLIC_URL + '/events/25.jpg',
    process.env.PUBLIC_URL + '/events/26.JPG',
    process.env.PUBLIC_URL + '/events/27.jpg',
    process.env.PUBLIC_URL + '/events/28.JPG',
    process.env.PUBLIC_URL + '/events/29.jpg',
    process.env.PUBLIC_URL + '/events/30.jpg',
    process.env.PUBLIC_URL + '/events/31.JPG',
    process.env.PUBLIC_URL + '/events/32.jpg',
  ];

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
