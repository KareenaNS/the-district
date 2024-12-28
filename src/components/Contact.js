import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import the emailjs SDK
import '../App.css';

function Contact() {
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
      .send('service_w3k5b36', 'template_3vqn2cs', formData, 'bKFUVDcGTAD-1R-Aq')
      .then((response) => {
        setMessage('Your inquiry has been sent successfully!');
      })
      .catch((error) => {
        setMessage('There was an error sending your inquiry.');
      });
  };

  return (
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
  );
}

export default Contact;
