import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Leasing from './components/Leasing';
import Booking from './components/Booking';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/leasing" element={<Leasing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
