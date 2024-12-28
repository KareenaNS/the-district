// import React, { useState } from 'react';
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (data.success) {
//         setMessage('Your inquiry has been sent successfully!');
//       } else {
//         setMessage('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       setMessage('There was an error sending your inquiry.');
//     }
//   };

//   return (
//     <div className="leasing-container">
//       <h2>Leasing Inquiry</h2>
//       <p>Fill out the form below to inquire about leasing a suite at The District.</p>
//       <form className="leasing-form" onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           What are you interested in?
//           <textarea
//             name="interest"
//             value={formData.interest}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p className="form-message">{message}</p>}
//     </div>
//   );
// }

// export default Leasing;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import the emailjs SDK
import '../App.css';

function Leasing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
  });

  const [message, setMessage] = useState('');

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

  return (
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
  );
}

export default Leasing;
