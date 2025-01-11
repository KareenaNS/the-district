import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation
import emailjs from 'emailjs-com'; // Import the emailjs SDK
import '../App.css'; // Import App.css for global styling

function Home() {
    // State to manage the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      interest: '',
    });
    const [message, setMessage] = useState('');
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
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .send('service_w3k5b36', 'template_3vqn2cs', formData, 'bKFUVDcGTAD-1R-Aq')
        .then((response) => {
          setMessage('Your inquiry has been sent successfully!');
        })
        .catch((error) => {
          setMessage('There was an error sending your inquiry.');
        });
    };

  return (
    <div className="home-container">

      <div className="video-container">
      <video 
        className="full-width-video" 
        autoPlay 
        loop 
        muted 
        playsInline 
        controls={false}
      >
        <source src={process.env.REACT_APP_VIDEO_URL} type="video/mp4" />
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
      {/* Slideshow Section */}
      <div className="slideshow-container">
        <button className="arrow-button left-arrow" onClick={prevImage}>
          &#10094; {/* Left Arrow */}
        </button>
        <img
          src={images[currentImageIndex]} // Display the current image based on index
          alt="Event Image"
          className="slideshow-image"
        />
        <button className="arrow-button right-arrow" onClick={nextImage}>
          &#10095; {/* Right Arrow */}
        </button>
      </div>

            {/* Inquiry Form */}
            <div className="leasing-container">
        <h2>General Inquiry</h2>
        <p>Have any general questions about The District? Fill out the form below and we will get back to you as soon as possible!</p>
        <form className="leasing-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            What are you interested in?
            <textarea
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </div>    
  );
}

export default Home;
