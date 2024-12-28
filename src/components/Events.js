import React from 'react';
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
  },
  {
    name: 'Black History Month',
    description: 'Come out for Black History Month! A cultural celebration, including food, art, and music, of black history in the United States.',
    date: 'TBD',
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
];

function Events() {
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
            <p>As a vendor, you can showcase your products or services to a large audience. We offer booths, tables, and various options to fit your needs.</p>
          </div>
          <div className="info-card">
            <h3>Sponsor</h3>
            <p>Become a sponsor and support our events while gaining exposure for your business. We offer different levels of sponsorship for each event.</p>
          </div>
          <div className="info-card">
            <h3>Volunteer</h3>
            <p>Volunteers are essential to making our events run smoothly. Sign up to help with event setup, guest assistance, and more!</p>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="events-list">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={process.env.PUBLIC_URL + event.imageUrl} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
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
