// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';  // Import the emailjs SDK
// import '../App.css';

// function Leasing() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     interest: '',
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Call the EmailJS API to send an email
//     emailjs
//       .send('service_w3k5b36', 'template_cir2c9s', formData, 'bKFUVDcGTAD-1R-Aq')
//       .then((response) => {
//         setMessage('Your inquiry has been sent successfully!');
//       })
//       .catch((error) => {
//         setMessage('There was an error sending your inquiry.');
//       });
//   };

//   return (
//     <div className="leasing">
//       <h1>Leasing</h1>
//       <div className="lease-contain">
//         <div 
//             style={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               alignItems: 'center', 
//               marginRight: '20px' // Add margin to create space between columns

//             }}
//         >
//           <img 
//             src="tenants.png" 
//             alt="Tenants" 
//             style={{ 
//               width: '400px', 
//               height: 'auto', 
//               borderRadius: '5px', 
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
//             }} 
//           />
//           <img 
//             src="tenants2.png" 
//             alt="Tenants" 
//             style={{ 
//               width: '400px', 
//               height: 'auto', 
//               borderRadius: '5px', 
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
//             }} 
//           />
//           </div>
//           <img 
//           src="suites.png" 
//           alt="Suites" 
//           style={{ 
//             width: '200px', 
//             height: 'auto', 
//             borderRadius: '5px', 
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
//           }} 
//         />
//       </div>



//       <div className="leasing-container">
//         <h2>Leasing Inquiry</h2>
//         <p>Fill out the form below to inquire about leasing a suite at The District.</p>
//         <form className="leasing-form" onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             What are you interested in?
//             <textarea
//               name="interest"
//               value={formData.interest}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//         {message && <p className="form-message">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default Leasing;


import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import the emailjs SDK
import '../App.css';

function Leasing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const [message, setMessage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the EmailJS API to send an email
    emailjs
      .send('service_w3k5b36', 'template_cir2c9s', formData, 'bKFUVDcGTAD-1R-Aq')
      .then((response) => {
        setMessage('Your inquiry has been sent successfully!');
      })
      .catch((error) => {
        setMessage('There was an error sending your inquiry.');
      });
  };

  // Slideshow images
  const slides = [
    process.env.PUBLIC_URL + '/tenants.png',
    process.env.PUBLIC_URL + '/tenants2.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="leasing">
      <h1>Leasing</h1>
      <div className="lease-contain" style={{ display: 'flex', alignItems: 'center' }}>
        {/* Left: Slideshow */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '20px',
            width: '100%',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              overflow: 'hidden',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.5s ease-in-out',
              }}
            />
            {/* Slideshow controls */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Right: Suites image */}
        <img
          src={process.env.PUBLIC_URL + '/Suites.png'}
          alt="Suites"
          style={{
            width: '50%',
            height: 'auto',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Leasing Inquiry Form */}
      <div className="leasing-container">
        <h2>Leasing Inquiry</h2>
        <p>Fill out the form below to inquire about leasing a suite at The District.</p>
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

export default Leasing;
