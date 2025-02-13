// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import '../App.css'; // Import styles from App.css
// import { InputBase, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// function Navbar({ onSearch }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     if (onSearch) {
//       onSearch(searchQuery); // Pass query to the parent component
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-content">
//         <Link to="/" className="navbar-logo">
//           <img src={process.env.PUBLIC_URL + '/district.png'} alt="The District" className="navbar-image" />
//         </Link>
        
//         {/* Search Bar */}
//         <form onSubmit={handleSearchSubmit} className="navbar-search">
//           <InputBase
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search events or locations..."
//             inputProps={{ 'aria-label': 'search' }}
//             className="navbar-input"
//           />
//           <IconButton type="submit" className="search-button">
//             <SearchIcon />
//           </IconButton>
//         </form>

//         {/* Menu Button for Mobile */}
//         <button className="menu-toggle" onClick={toggleMenu}>
//           ☰
//         </button>

//         {/* Menu Links */}
//         <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
//           <li><Link to="/events">Events</Link></li>
//           <li><Link to="/leasing">Leasing</Link></li>
//           <li><Link to="/booking">Booking</Link></li>
//           <li><Link to="/gallery">Gallery</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../App.css'; // Import styles from App.css
import { InputBase, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Navbar({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false); // Track if search bar is visible

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery); // Call onSearch with the query
    }
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle visibility of search bar
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/district.png'} alt="The District" className="navbar-image" />
        </Link>

        {/* Search Bar
        <form onSubmit={handleSearchSubmit} className={`navbar-search ${searchVisible ? 'open' : ''}`}>
          <InputBase
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search events or locations..."
            inputProps={{ 'aria-label': 'search' }}
            className="navbar-input"
          />
          <IconButton type="submit" className="search-button">
            <SearchIcon />
          </IconButton>
        </form>

        <Button 
          variant="contained" 
          color="secondary" 
          onClick={toggleSearch} 
          className="mobile-search-button"
          style={{
            backgroundColor: '#d32f2f',
            marginLeft: '20px',
          }}
        >
          {searchVisible ? 'Close Search' : 'Open Search'}
        </Button> */}

        {/* Menu Button for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
        </button>

        {/* Menu Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/leasing">Leasing</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
