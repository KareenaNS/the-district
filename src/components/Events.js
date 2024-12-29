// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import styles from App.css
// import Calendar from 'react-calendar'; // Importing a simple calendar component

// // Sample data for the events

// const events = [
//   {
//     name: 'Lunar New Year',
//     description: 'Join us for Lunar New Year! Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, and cultural performances.',
//     date: '01/25/25 - 01/26/25',
//     time: '10:00 AM - 12:00 AM',
//     imageUrl: '/lny.png',
//     link: '/LunarNewYear',
//   },
//   {
//     name: 'Black History Month',
//     description: 'Come out for Black History Month! A cultural celebration, including food, art, and music, of black history in the United States.',
//     date: '02/22/25 - 02/23/25',
//     time: 'TBD',
//     imageUrl: '/bhm25.png',
//     link: '/BlackHistoryMonth',

//   },
//   {
//     name: "St. Patrick's Day",
//     description: 'Experience music, dancing, and indulging in food to celebrate this occasion!',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/spd25.png',
//   },  
//   {
//     name: "Cinco De Mayo",
//     description: 'Join us for a vibrant celebration of Mexican culture and heritage on Cinco de Mayo!',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/cdm25.png',
//   },
//   {
//     name: "May the 4th",
//     description: 'Tune in for a fun Star Wars event, including bounce houses, lightsaber battles, and a movie!',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/mtf25.png',
//   },
//   {
//     name: "Juneteenth",
//     description: 'This event honors the emancipation of enslaved African Americans and highlights African American culture with live performances, historical exhibits, delicious food, and community engagement!',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/j25.png',
//   },
//   {
//     name: "Freedom Fest",
//     description: 'Come out for Freedom Fest, a family-friendly celebration of freedom, unity, and patriotism. Enjoy an exciting mix of live music, delicious food, games, and fireworks as we honor the spirit of independence.',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/ff25.png',
//   },
//   {
//     name: "National Night Out",
//     description: 'Join us for an evening filled with neighborhood block parties, safety demonstrations, and opportunities to connect with local law enforcement.',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/nno25.png',
//   },
//   {
//     name: "International Night Market",
//     description: 'Step into a world of culture, flavors, and excitement at the International Night Market! With food, crafts, and entertainment from around the globe, it’s an evening to explore diverse cultures in one place.',
//     date: 'TBD',
//     time: '5:00 PM - 12:00 AM',
//     imageUrl: '/inm25.png',
//   },
//   {
//     name: "Moon Festival",
//     description: 'This cultural event is a family favorite, featuring moon-themed crafts, lantern displays, live performances, and traditional food. ',
//     date: 'TBD',
//     time: '5:00 PM - 12:00 AM',
//     imageUrl: '/mf25.png',
//   },
//   {
//     name: "Hippie Festival",
//     description: 'Step back in time to the groovy days of the 60s and 70s with retro music, tie-dye shirts, food trucks, and fun activities.',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/hf25.png',
//   },
//   {
//     name: "Safe Halloween",
//     description: 'This fun-filled evening includes costume contests, haunted houses, pumpkin decorating, and plenty of candy.',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/sh25.png',
//   },
//   {
//     name: "Veteran's Day",
//     description: 'Join us for a day of remembrance and appreciation, including a ceremony, live music, and community activities.',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/vd25.png',
//   },
//   {
//     name: "Christmas in the Park",
//     description: 'This magical event features a dazzling light display, holiday music, hot cocoa, and festive activities for all ages.',
//     date: 'TBD',
//     time: '5:00 PM - 10:00 PM',
//     imageUrl: '/citp25.png',
//   },
// ];

// function Events() {
//   const [value, setValue] = useState(new Date());  // Initial value as a Date object
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleChange = (newDate) => {
//     // Make sure to pass a Date object, not a string
//     setValue(new Date(newDate));
//   };

//   const filteredEvents = events.filter(event => 
//     event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     event.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedEvents = filteredEvents.sort((a, b) => {
//     const dateA = a.date === 'TBD' ? '' : a.date;
//     const dateB = b.date === 'TBD' ? '' : b.date;
//     if (sortOrder === 'asc') {
//       return dateA - dateB;
//     } else {
//       return dateB - dateA;
//     }  });
//   return (
//     <div className="events-container">
//       <h1>Our Events</h1>

//       {/* Vendor, Sponsor, Volunteer Information */}
//       <section className="info-section">
//         <h2>Become a Vendor, Sponsor, or Volunteer</h2>
//         <p>If you're interested in becoming a vendor, sponsor, or volunteer for one of our events, here's how you can get involved:</p>
//         <div className="info-cards">
//           <div className="info-card">
//             <h3>Vendor</h3>
//             <img src={process.env.PUBLIC_URL + '/vendor.JPG'} alt="Sponsor" className="sponsor-image" />
//             <p>As a vendor, you can showcase your products or services to a large audience. We offer booths, tables, and various options to fit your needs.</p>
//           </div>
//           <div className="info-card">
//             <h3>Sponsor</h3>
//             <img src={process.env.PUBLIC_URL + '/kathy.jpg'} alt="Sponsor" className="sponsor-image" />
//             <p>Become a sponsor and support our events while gaining exposure for your business. We offer different levels of sponsorship for each event.</p>
//           </div>
//           <div className="info-card">
//             <h3>Volunteer</h3>
//             <img src={process.env.PUBLIC_URL + '/volunteer.JPG'} alt="Sponsor" className="sponsor-image" />
//             <p>Volunteers are essential to making our events run smoothly. Sign up to help with event setup, guest assistance, and more! Contact <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> for more information.</p>
//           </div>
//         </div>
//       </section>

//     {/* Search Bar and Sort Button Section */}
//     <section className="search-sort-section">
//       <input 
//         type="text" 
//         placeholder="Search events..." 
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-input"
//       />
//       <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="sort-button">
//         Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
//       </button>
//     </section>


//       {/* Events Listing */}
//       <section className="events-list">
//         <h2>Upcoming Events</h2>
//         <div className="events-grid">
//           {sortedEvents.map((event, index) => (
//             <div key={index} className="event-card">
//               <img src={process.env.PUBLIC_URL + event.imageUrl} alt={event.name} />
//               <h3>{event.name}</h3>
//               <p>{event.description}</p>
//               <p><strong>Date:</strong> {event.date}</p>
//               <p><strong>Time:</strong> {event.time}</p>
//                 {event.link && (
//                   <Link to={event.link}>
//                     <button className="event-button">Learn More</button>
//                   </Link>
//                 )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Calendar */}
//       <section className="calendar-section">
//         <h2>Event Calendar</h2>
//         {/* <Calendar
//           locale="en-US"
//           value={value}
//           onChange={onChange}
//           tileClassName={({ date, view }) => 
//             view === 'month' && 
//             (date.getMonth() !== value.getMonth() || date.getFullYear() !== value.getFullYear()) ? 
//             'other-month-day' : 
//             '' 
//           }  
//         /> */}

// <Calendar
//       locale="en-US"
//       value={value}  // Passing the Date object to Calendar
//       onChange={handleChange}
//       tileClassName={({ date, view }) => {
//         if (view === 'month') {
//           const isSameMonthAndYear = date.getMonth() === value.getMonth() && date.getFullYear() === value.getFullYear();
//           return isSameMonthAndYear ? '' : 'other-month-day';
//         }
//         return '';
//       }}
//     />

//       </section>
//     </div>
//   );
// }

// export default Events;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useHistory for navigation
import '../App.css'; // Import styles from App.css
import Calendar from 'react-calendar'; // Importing a simple calendar component

// Sample data for the events
const events = [
  {
    name: 'Lunar New Year',
    description: 'Join us for Lunar New Year! Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, and cultural performances.',
    date: '01/25/25 - 01/26/25',
    time: '10:00 AM - 12:00 AM',
    imageUrl: '/lny.png',
    link: '/LunarNewYear',
  },
  {
    name: 'Black History Month',
    description: 'Come out for Black History Month! A cultural celebration, including food, art, and music, of black history in the United States.',
    date: '02/22/25 - 02/23/25',
    time: 'TBD',
    imageUrl: '/bhm25.png',
    link: '/BlackHistoryMonth',
  },
  {
    name: "St. Patrick's Day",
    description: 'Experience music, dancing, and indulging in food to celebrate this occasion!',
    date: '03/17/25 - 03/17/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/spd25.png',
  },
  {
    name: "Cinco De Mayo",
    description: 'Join us for a vibrant celebration of Mexican culture and heritage on Cinco de Mayo!',
    date: '05/05/25 - 05/05/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/cdm25.png',
  },
  {
    name: "May the 4th",
    description: 'Tune in for a fun Star Wars event, including bounce houses, lightsaber battles, and a movie!',
    date: '05/04/25 - 05/04/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/mtf25.png',
  },
  {
    name: "Juneteenth",
    description: 'This event honors the emancipation of enslaved African Americans and highlights African American culture with live performances, historical exhibits, delicious food, and community engagement!',
    date: '06/19/25 - 06/19/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/j25.png',
  },
  {
    name: "Freedom Fest",
    description: 'Come out for Freedom Fest, a family-friendly celebration of freedom, unity, and patriotism. Enjoy an exciting mix of live music, delicious food, games, and fireworks as we honor the spirit of independence.',
    date: '07/04/25 - 07/04/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/ff25.png',
  },
  {
    name: "National Night Out",
    description: 'Join us for an evening filled with neighborhood block parties, safety demonstrations, and opportunities to connect with local law enforcement.',
    date: '08/05/25 - 08/05/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/nno25.png',
  },
  {
    name: "International Night Market",
    description: 'Step into a world of culture, flavors, and excitement at the International Night Market! With food, crafts, and entertainment from around the globe, it’s an evening to explore diverse cultures in one place.',
    date: '09/21/25 - 09/21/25',
    time: '5:00 PM - 12:00 AM',
    imageUrl: '/inm25.png',
  },
  {
    name: "Moon Festival",
    description: 'This cultural event is a family favorite, featuring moon-themed crafts, lantern displays, live performances, and traditional food.',
    date: '09/30/25 - 09/30/25',
    time: '5:00 PM - 12:00 AM',
    imageUrl: '/mf25.png',
  },
  {
    name: "Hippie Festival",
    description: 'Step back in time to the groovy days of the 60s and 70s with retro music, tie-dye shirts, food trucks, and fun activities.',
    date: '10/12/25 - 10/12/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/hf25.png',
  },
  {
    name: "Safe Halloween",
    description: 'This fun-filled evening includes costume contests, haunted houses, pumpkin decorating, and plenty of candy.',
    date: '10/31/25 - 10/31/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/sh25.png',
  },
  {
    name: "Veteran's Day",
    description: 'Join us for a day of remembrance and appreciation, including a ceremony, live music, and community activities.',
    date: '11/11/25 - 11/11/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/vd25.png',
  },
  {
    name: "Christmas in the Park",
    description: 'This magical event features a dazzling light display, holiday music, hot cocoa, and festive activities for all ages.',
    date: '12/15/25 - 12/15/25',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/citp25.png',
  },
];

function Events() {
  const [value, setValue] = useState(new Date());  // Initial value as a Date object
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const history = useNavigate();  // Use history for programmatic navigation


  const handleChange = (newDate) => {
    // Make sure to pass a Date object, not a string
    setValue(new Date(newDate));
  };

  // Function to check if a date is within the event date range
  const isDateInEventRange = (date) => {
    return events.find(event => {
      const [startDateStr, endDateStr] = event.date.split(' - ');

      // Parse both start and end dates into Date objects
      const [startMonth, startDay, startYear] = startDateStr.split('/');
      const [endMonth, endDay, endYear] = endDateStr.split('/');
      
      const startDate = new Date(`20${startYear}-${startMonth}-${startDay}`);
      const endDate = new Date(`20${endYear}-${endMonth}-${endDay}`);

      return date >= startDate && date <= endDate;
    });
  };

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEvents = filteredEvents.sort((a, b) => {
    const dateA = a.date === 'TBD' ? '' : a.date;
    const dateB = b.date === 'TBD' ? '' : b.date;
    if (sortOrder === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const navigateToEventPage = (eventLink) => {
    history(eventLink);  // Navigate to the event's specific page using useNavigate
  };

  return (
    <div className="events-container">
      <h1>Our Events</h1>

      {/* Vendor, Sponsor, Volunteer Information */}
      <section className="info-section">
        <h2>Become a Vendor, Sponsor, or Volunteer</h2>
        <p>If you're interested in becoming a vendor, sponsor, or volunteer for one of our events, here's how you can get involved:</p>
        <div className="info-cards">
          <div className="info-card">
            <h3>Vendor</h3>
            <img src={process.env.PUBLIC_URL + '/vendor.JPG'} alt="Sponsor" className="sponsor-image" />
            <p>As a vendor, you can showcase your products or services to a large audience. We offer booths, tables, and various options to fit your needs.</p>
          </div>
          <div className="info-card">
            <h3>Sponsor</h3>
            <img src={process.env.PUBLIC_URL + '/kathy.jpg'} alt="Sponsor" className="sponsor-image" />
            <p>Become a sponsor and support our events while gaining exposure for your business. We offer different levels of sponsorship for each event.</p>
          </div>
          <div className="info-card">
            <h3>Volunteer</h3>
            <img src={process.env.PUBLIC_URL + '/volunteer.JPG'} alt="Sponsor" className="sponsor-image" />
            <p>Volunteers are essential to making our events run smoothly. Sign up to help with event setup, guest assistance, and more! Contact <a href="mailto:events@morrowga.gov">events@morrowga.gov</a> for more information.</p>
          </div>
        </div>
      </section>

      {/* Search Bar and Sort Button Section */}
      <section className="search-sort-section">
        <input 
          type="text" 
          placeholder="Search events..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="sort-button">
          Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </section>

      {/* Events Listing */}
      <section className="events-list">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {sortedEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img src={process.env.PUBLIC_URL + event.imageUrl} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
                {event.link && (
                  <Link to={event.link}>
                    <button className="event-button">Learn More</button>
                  </Link>
                )}
            </div>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="calendar-section">
        <h2>Event Calendar</h2>
        <Calendar
          locale="en-US"
          value={value}  // Passing the Date object to Calendar
          onChange={handleChange}
          tileClassName={({ date, view }) => {
            if (view === 'month') {
              const isSameMonthAndYear = date.getMonth() === value.getMonth() && date.getFullYear() === value.getFullYear();
              return isSameMonthAndYear ? '' : 'other-month-day';
            }
            return '';
          }}
          tileContent={({ date, view }) => {
            const event = events.find(event => isDateInEventRange(date));
            if (event) {
              return (
                <div className="event-indicator" onClick={() => navigateToEventPage(event.link)}>
                  <span>🎉</span>  {/* You can use an icon or custom content here */}
                </div>
              );
            }
            return null;
          }}
        />
      </section>
    </div>
  );
}

export default Events;
