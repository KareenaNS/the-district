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
import BlackHistoryMonth from './components/BlackHistoryMonth';
import LunarNewYear from './components/LunarNewYear';
import StPatricksDay from './components/StPatricksDay';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/leasing" element={<Leasing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/BlackHistoryMonth" element={<BlackHistoryMonth />} />
          <Route path="/LunarNewYear" element={<LunarNewYear />} />
          <Route path="/StPatricksDay" element={<StPatricksDay />} /> */}
          <Route path="/the-district" element={<Home />} />
          <Route path="/the-district/gallery" element={<Gallery />} />
          <Route path="/the-district/leasing" element={<Leasing />} />
          <Route path="/the-district/booking" element={<Booking />} />
          <Route path="/the-district/contact" element={<Contact />} />
          <Route path="/the-district/events" element={<Events />} />
          <Route path="/the-district/BlackHistoryMonth" element={<BlackHistoryMonth />} />
          <Route path="/the-district/LunarNewYear" element={<LunarNewYear />} />
          <Route path="/the-district/StPatricksDay" element={<StPatricksDay />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
