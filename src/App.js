// import React, { useEffect, useCallback } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Gallery from './components/Gallery';
// import Events from './components/Events';
// import Leasing from './components/Leasing';
// import Booking from './components/Booking';
// import Contact from './components/Contact';
// import BlackHistoryMonth from './components/BlackHistoryMonth';
// import LunarNewYear from './components/LunarNewYear';
// import StPatricksDay from './components/StPatricksDay';
// import CincoDeMayo from './components/CincoDeMayo'; // import the components for each event
// import May4th from './components/May4th';
// import Juneteenth from './components/Juneteenth';
// import FreedomFest from './components/FreedomFest';
// import NationalNightOut from './components/NationalNightOut';
// import MexicanIndependenceDay from './components/MexicanIndependenceDay';
// import InternationalNightMarket from './components/InternationalNightMarket';
// import MoonFestival from './components/MoonFestival';
// import HippieFestival from './components/HippieFestival';
// import SafeHalloween from './components/SafeHalloween';
// import DiaDeLosMuertos from './components/DiaDeLosMuertos';
// import VeteransDay from './components/VeteransDay';
// import FallFestival from './components/FallFestival';
// import ChristmasInThePark from './components/ChristmasInThePark';
// import ScrollToTop from './components/ScrollToTop';

// function throttle(func, limit) {
//   let inThrottle;
//   return function () {
//     if (!inThrottle) {
//       func();
//       inThrottle = true;
//       setTimeout(() => {
//         inThrottle = false;
//       }, limit);
//     }
//   };
// }

// function App() {
//   const handleScroll = useCallback(
//     throttle(() => {
//       console.log('Scroll event triggered');
//     }, 200),
//     []
//   );
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]); 
//   return (
//       <div className="App">
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/leasing" element={<Leasing />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/BlackHistoryMonth" element={<BlackHistoryMonth />} />
//           <Route path="/LunarNewYear" element={<LunarNewYear />} />
//           <Route path="/StPatricksDay" element={<StPatricksDay />} />
//           <Route path="/CincoDeMayo" element={<CincoDeMayo />} />
//           <Route path="/May4th" element={<May4th />} />
//           <Route path="/Juneteenth" element={<Juneteenth />} />
//           <Route path="/FreedomFest" element={<FreedomFest />} />
//           <Route path="/NationalNightOut" element={<NationalNightOut />} />
//           <Route path="/MexicanIndependenceDay" element={<MexicanIndependenceDay />} />
//           <Route path="/InternationalNightMarket" element={<InternationalNightMarket />} />
//           <Route path="/MoonFestival" element={<MoonFestival />} />
//           <Route path="/HippieFestival" element={<HippieFestival />} />
//           <Route path="/SafeHalloween" element={<SafeHalloween />} />
//           <Route path="/DiaDeLosMuertos" element={<DiaDeLosMuertos />} />
//           <Route path="/VeteransDay" element={<VeteransDay />} />
//           <Route path="/FallFestival" element={<FallFestival />} />
//           <Route path="/ChristmasInThePark" element={<ChristmasInThePark />} />
//         </Routes>
//         <Footer />
//       </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import CincoDeMayo from './components/CincoDeMayo';
import May4th from './components/May4th';
import Juneteenth from './components/Juneteenth';
import FreedomFest from './components/FreedomFest';
import NationalNightOut from './components/NationalNightOut';
import MexicanIndependenceDay from './components/MexicanIndependenceDay';
import InternationalNightMarket from './components/InternationalNightMarket';
import MoonFestival from './components/MoonFestival';
import HippieFestival from './components/HippieFestival';
import SafeHalloween from './components/SafeHalloween';
import DiaDeLosMuertos from './components/DiaDeLosMuertos';
import VeteransDay from './components/VeteransDay';
import FallFestival from './components/FallFestival';
import ChristmasInThePark from './components/ChristmasInThePark';
import FarmersMarket from './components/FarmersMarket';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      // Replace with your actual API call
      const results = await fakeSearchAPI(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    }
    setIsLoading(false);
  };

  const fakeSearchAPI = (query) => {
    // Mock search API response (replace this with your actual API logic)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Event 1' },
          { id: 2, name: 'Event 2' },
        ]);
      }, 1000);
    });
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/BlackHistoryMonth" element={<BlackHistoryMonth />} />
        <Route path="/LunarNewYear" element={<LunarNewYear />} />
        <Route path="/StPatricksDay" element={<StPatricksDay />} />
        <Route path="/CincoDeMayo" element={<CincoDeMayo />} />
        <Route path="/May4th" element={<May4th />} />
        <Route path="/Juneteenth" element={<Juneteenth />} />
        <Route path="/FreedomFest" element={<FreedomFest />} />
        <Route path="/NationalNightOut" element={<NationalNightOut />} />
        <Route path="/MexicanIndependenceDay" element={<MexicanIndependenceDay />} />
        <Route path="/InternationalNightMarket" element={<InternationalNightMarket />} />
        <Route path="/MoonFestival" element={<MoonFestival />} />
        <Route path="/HippieFestival" element={<HippieFestival />} />
        <Route path="/SafeHalloween" element={<SafeHalloween />} />
        <Route path="/DiaDeLosMuertos" element={<DiaDeLosMuertos />} />
        <Route path="/VeteransDay" element={<VeteransDay />} />
        <Route path="/FallFestival" element={<FallFestival />} />
        <Route path="/ChristmasInThePark" element={<ChristmasInThePark />} />
        <Route path="/FarmersMarket" element={<FarmersMarket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
