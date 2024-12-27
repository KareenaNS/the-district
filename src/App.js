import React from 'react';
//import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Leasing from './components/Leasing';
import Booking from './components/Booking';
import Contact from './components/Contact';

function App() {
  // useEffect(() => {
  // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  // }, []);

  // const handleLoginSuccess = (response) => {
  //   // The response object contains the authentication token
  //   console.log(response);
  //   // You can send this token to your backend to validate and log the user in
  // };

  // const handleLoginFailure = (error) => {
  //   console.error('Login Failed: ', error);
  // };
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
