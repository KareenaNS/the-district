import React, { useState } from 'react';
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
    link: 'https://www.morrowcenter.com/event-details/lunar-new-year-year-of-the-snake', // Link to detailed event page
  },
  {
    name: 'Black History Month',
    description: 'Come out for Black History Month! A cultural celebration, including food, art, and music, of black history in the United States.',
    date: '02/22/25 - 02/23/25',
    time: 'TBD',
    imageUrl: '/bhm25.png',
  },
  {
    name: "St. Patrick's Day",
    description: 'Experience music, dancing, and indulging in food to celebrate this occasion!',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/spd25.png',
  },  
  {
    name: "Cinco De Mayo",
    description: 'Join us for a vibrant celebration of Mexican culture and heritage on Cinco de Mayo!',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/cdm25.png',
  },
  {
    name: "May the 4th",
    description: 'Tune in for a fun Star Wars event, including bounce houses, lightsaber battles, and a movie!',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/mtf25.png',
  },
  {
    name: "Juneteenth",
    description: 'This event honors the emancipation of enslaved African Americans and highlights African American culture with live performances, historical exhibits, delicious food, and community engagement!',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/j25.png',
  },
  {
    name: "Freedom Fest",
    description: 'Come out for Freedom Fest, a family-friendly celebration of freedom, unity, and patriotism. Enjoy an exciting mix of live music, delicious food, games, and fireworks as we honor the spirit of independence.',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/ff25.png',
  },
  {
    name: "National Night Out",
    description: 'Join us for an evening filled with neighborhood block parties, safety demonstrations, and opportunities to connect with local law enforcement.',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/nno25.png',
  },
  {
    name: "International Night Market",
    description: 'Step into a world of culture, flavors, and excitement at the International Night Market! With food, crafts, and entertainment from around the globe, it’s an evening to explore diverse cultures in one place.',
    date: 'TBD',
    time: '5:00 PM - 12:00 AM',
    imageUrl: '/inm25.png',
  },
  {
    name: "Moon Festival",
    description: 'This cultural event is a family favorite, featuring moon-themed crafts, lantern displays, live performances, and traditional food. ',
    date: 'TBD',
    time: '5:00 PM - 12:00 AM',
    imageUrl: '/mf25.png',
  },
  {
    name: "Hippie Festival",
    description: 'Step back in time to the groovy days of the 60s and 70s with retro music, tie-dye shirts, food trucks, and fun activities.',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/hf25.png',
  },
  {
    name: "Safe Halloween",
    description: 'This fun-filled evening includes costume contests, haunted houses, pumpkin decorating, and plenty of candy.',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/sh25.png',
  },
  {
    name: "Veteran's Day",
    description: 'Join us for a day of remembrance and appreciation, including a ceremony, live music, and community activities.',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/vd25.png',
  },
  {
    name: "Christmas in the Park",
    description: 'This magical event features a dazzling light display, holiday music, hot cocoa, and festive activities for all ages.',
    date: 'TBD',
    time: '5:00 PM - 10:00 PM',
    imageUrl: '/citp25.png',
  },
];

function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

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
    }  });
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
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button className="event-button">Learn More</button>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="calendar-section">
        <h2>Event Calendar</h2>
        <Calendar />
      </section>
    </div>
  );
}

export default Events;
