import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useHistory for navigation
import '../App.css'; // Import styles from App.css
import Calendar from 'react-calendar'; // Importing a simple calendar component
import ReactSlider from 'react-slider';


// Sample data for the events
const events = [
  {
    name: 'Lunar New Year',
    description: 'Join us for Lunar New Year! Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, and cultural performances.',
    date: '01/25/25 - 01/26/25',
    time: '10:00 AM - 12:00 AM',
    location: 'morrow-center',
    imageUrl: '/lny.png',
    link: '/LunarNewYear',
  },
  {
    name: 'Black History Month',
    description: 'Come out for Black History Month! A cultural celebration, including food, art, and music, of black history in the United States.',
    date: '02/22/25 - 02/23/25',
    time: '2:00 PM - 12:00 AM',
    location: 'morrow-center',
    imageUrl: '/bhm25.png',
    link: '/BlackHistoryMonth',
  },
  {
    name: "St. Patrick's Day",
    description: 'Experience music, dancing, and indulging in food to celebrate this occasion!',
    date: '03/15/25',
    time: '5:00 PM - 11:00 PM',
    location: 'district',
    imageUrl: '/spd25.png',
    link: '/StPatricksDay',
  },
  {
    name: "Cinco De Mayo",
    description: 'Join us for a vibrant celebration of Mexican culture and heritage on Cinco de Mayo!',
    date: '05/03/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/cdm25.png',
    link: '/CincoDeMayo',
  },
  {
    name: "May the 4th",
    description: 'Tune in for a fun Star Wars event, including bounce houses, lightsaber battles, and a movie!',
    date: '05/04/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/mtf25.png',
    link: '/May4th',
  },
  {
    name: "Juneteenth",
    description: 'This event honors the emancipation of enslaved African Americans and highlights African American culture with live performances, historical exhibits, delicious food, and community engagement!',
    date: '06/14/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/j25.png',
    link: '/Juneteenth',
  },
  {
    name: "Freedom Fest",
    description: 'Come out for Freedom Fest, a family-friendly celebration of freedom, unity, and patriotism. Enjoy an exciting mix of live music, delicious food, games, and fireworks as we honor the spirit of independence.',
    date: '06/28/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/ff25.png',
    link: '/FreedomFest',
  },
  {
    name: "National Night Out",
    description: 'Join us for an evening filled with neighborhood block parties, safety demonstrations, and opportunities to connect with local law enforcement.',
    date: '08/05/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/nno25.png',
    link: '/NationalNightOut',
  },
  {
    name: "Mexican Independence Day",
    description: "Join us for a fun day of celebrating Mexico's independence.",
    date: '09/14/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/mid25.png',
    link: '/MexicanIndependenceDay',
  },
  {
    name: "International Night Market",
    description: 'Step into a world of culture, flavors, and excitement at the International Night Market! With food, crafts, and entertainment from around the globe, it’s an evening to explore diverse cultures in one place.',
    date: '10/04/25',
    time: '2:00 PM - 12:00 AM',
    location: 'district',
    imageUrl: '/inm25.png',
    link: '/InternationalNightMarket',
  },
  {
    name: "Moon Festival",
    description: 'This cultural event is a family favorite, featuring moon-themed crafts, lantern displays, live performances, and traditional food.',
    date: '10/05/25',
    time: '2:00 PM - 12:00 AM',
    location: 'district',
    imageUrl: '/mf25.png',
    link: '/MoonFestival',
  },
  {
    name: "Hippie Festival",
    description: 'Step back in time to the groovy days of the 60s and 70s with retro music, tie-dye shirts, food trucks, and fun activities.',
    date: '10/18/25',
    time: '5:00 PM - 10:00 PM',
    location: 'district',
    imageUrl: '/hf25.png',
    link: '/HippieFestival',
  },
  {
    name: "Safe Halloween",
    description: 'This fun-filled evening includes costume contests, haunted houses, pumpkin decorating, and plenty of candy.',
    date: '10/25/25',
    time: '5:00 PM - 9:00 PM',
    location: 'district',
    imageUrl: '/sh25.png',
    link: '/SafeHalloween',
  },
  {
    name: "Dia de los Muertos",
    description: 'This fun-filled event includes learning more about the traditions behind this celebration and fun for the kids.',
    date: '11/01/25',
    time: '5:00 PM - 9:00 PM',
    location: 'district',
    imageUrl: '/ddlm25.png',
    link: '/DiaDeLosMuertos',
  },
  {
    name: "Veteran's Day",
    description: 'Join us for a day of remembrance and appreciation, including a ceremony, live music, and community activities.',
    date: '11/08/25',
    time: '11:00 AM - 2:00 PM',
    location: 'morrow-center',
    imageUrl: '/vd25.png',
    link: '/VeteransDay',
  },
  {
    name: "Fall Festival",
    description: 'Join us for fall activities like hay rides, face painting, and pumpkin picking.',
    date: '11/15/25',
    time: '4:00 PM - 9:00 PM',
    location: 'district',
    imageUrl: '/fallf25.png',
    link: '/FallFestival',
  },
  {
    name: "Christmas in the Park",
    description: 'This magical event features a dazzling light display, holiday music, hot cocoa, and festive activities for all ages.',
    date: '12/06/25',
    time: '4:00 PM - 9:00 PM',
    location: 'district',
    imageUrl: '/citp25.png',
    link: '/ChristmasInThePark',
  },
];

function Events() {
  const [value, setValue] = useState(new Date());  // Initial value as a Date object
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const history = useNavigate();
  const [location, setLocation] = useState('');
  const [month, setMonth] = useState('');
  const [timeRange, setTimeRange] = useState([0, 24]);


  const isDateInRange = (startDate, endDate, date, view) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    switch (view) {
      case 'month':
        return date >= start && date <= end;
      case 'week':
        // Calculate start and end of the week containing the given date
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay()); // Get the Sunday of the week
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6); // Get the Saturday of the week
        return (start >= weekStart && start <= weekEnd) || 
               (end >= weekStart && end <= weekEnd);
      default:
        return date >= start && date <= end; 
    }
  };
  const handleChange = (newDate) => {
    // Make sure to pass a Date object, not a string
    setValue(new Date(newDate));
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

const getMonthFromDate = (date) => {
  const dateParts = date.split(' - ')[0].split('/'); // Getting the start date
  return dateParts[0]; // Extracting the month (MM)
};
const convertTimeTo12HourFormat = (time) => {
  const hours = time % 24;  // Ensure time is within 0-23 range
  const period = hours >= 12 ? 'PM' : 'AM';
  const hourIn12HourFormat = hours % 12 === 0 ? 12 : hours % 12;  // Convert 0 to 12 (for 12 AM)
  return `${hourIn12HourFormat}:00 ${period}`;
};

const filteredEvents = events.filter(event => {
  const matchesSearchTerm = event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             event.description.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesMonth = month ? getMonthFromDate(event.date) === month : true;
  const eventStartTime = parseInt(event.time.split(' - ')[0].split(':')[0], 10);
  const eventEndTime = parseInt(event.time.split(' - ')[1].split(':')[0], 10);
  const matchesTimeRange = eventStartTime >= timeRange[0] && eventEndTime <= timeRange[1];
  const matchesLocation = location ? event.location === location : true;
  return matchesSearchTerm && matchesMonth && matchesTimeRange && matchesLocation;
});

  const sortedEvents = filteredEvents.sort((a, b) => {
    // Parse start date for both events
    const parseDate = (dateStr) => {
      const [month, day, year] = dateStr.split('/');
      return new Date(`20${year}-${month}-${day}`); // Adjust year to '20xx' format
    };
  
    // Parse the start dates of both events
    const dateA = a.date.includes(' - ') ? parseDate(a.date.split(' - ')[0]) : parseDate(a.date);
    const dateB = b.date.includes(' - ') ? parseDate(b.date.split(' - ')[0]) : parseDate(b.date);
  
    // Sort based on the parsed dates
    if (sortOrder === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  const handleTimeRangeChange = (values) => {
    setTimeRange(values);
  };
  

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
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdF439v6FefEiLSG9vzhygK0H06zgDjwHbD4E4Bai5Yyz4UTA/viewform?embedded=true"
                width="640"
                height="1358"
                title="Vendor Sign-Up Form"
                className="sponsor-iframe"
              >
                Loading…
              </iframe>
          </div>
          <div className="info-card">
            <h3>Sponsor</h3>
            <img src={process.env.PUBLIC_URL + '/kathy.jpg'} alt="Sponsor" className="sponsor-image" />
            <p>Become a sponsor and support our events while gaining exposure for your business. We offer different levels of sponsorship for each event.</p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScQA38-gkKRjXs_4_1p9siWCyHhtKttNuFB4zRmVKtixgdgHw/viewform?embedded=true"
                width="640"
                height="1358"
                title="Sponsor Sign-Up Form"
                className="sponsor-iframe"
              >
                Loading…
              </iframe>
          </div>
          <div className="info-card">
            <h3>Volunteer</h3>
            <img src={process.env.PUBLIC_URL + '/volunteer.JPG'} alt="Sponsor" className="sponsor-image" />
            <p>Volunteers are essential to making our events run smoothly. Sign up to help with event setup, guest assistance, and more! Fill out the form below!</p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc_mypilHPySrd9AAGPYlR5WAWBHkVOuQq-sMA0thH69J4qUw/viewform?embedded=true" 
              width="640"
                height="1358"
                title="Vendor Sign-Up Form"
                className="sponsor-iframe"
              >
                Loading…
              </iframe>
          </div>
        </div>
      </section>

<section className="events-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Search Bar */}
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Filters */}
        <div className="filters">
          <h3>Filters</h3>
          
          {/* Location Filter */}
          <div className="filter-item">
            <label>Location</label>
            <select value={location} onChange={handleLocationChange} className="filter-select">
              <option value="">Select Location</option>
              <option value="district">District</option>
              <option value="morrow-center">Morrow Center</option>
            </select>
          </div>
          
          {/* Month Filter */}
          <div className="filter-item">
            <label>Month</label>
            <select value={month} onChange={(e) => setMonth(e.target.value)} className="filter-select">
              <option value="">Select Month</option>
              {/* Add month options here */}
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          
         {/* Time Range Filter */}
         <div className="filter-item">
            <label>Time Range</label>
            <ReactSlider
              value={timeRange}
              onChange={handleTimeRangeChange}
              min={0}
              max={24}
              step={1}
              renderTrack={(props, state) => {
                const { key, ...restProps } = props; // Extract the key
                return (
                  <div
                    key={key} // Pass the key directly
                    {...restProps}
                    style={{ ...restProps.style, height: '6px', backgroundColor: '#ddd', borderRadius: '5px' }}
                  />
                );
              }}
              renderThumb={(props, state) => {
                const { key, ...restProps } = props; // Extract the key
                return (
                  <div
                    key={key} // Pass the key directly
                    {...restProps}
                    style={{ ...restProps.style, height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#f4a261' }}
                  />
                );
              }}
              
            />
            <div>
            <div className="time-range-display">
              <span>{convertTimeTo12HourFormat(timeRange[0])} - {convertTimeTo12HourFormat(timeRange[1])}</span>
            </div>
              </div>
          </div>
        </div>

        {/* Sort Button */}
        <div className="sort-section">
          <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="sort-button">
            Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
          </button>
        </div>
      </div>

      {/* Events Listing */}
      <div className="events-list">
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
            // Find all events within the displayed view (week, month, etc.)
            const matchingEvents = events.filter(event => {
              const [startDateStr, endDateStr] = event.date.split(' - '); 
              const startDate = new Date(startDateStr); 
              const endDate = endDateStr ? new Date(endDateStr) : startDate;
              return isDateInRange(startDate, endDate, date, view); 
            });          
            if (matchingEvents.length > 0) {
              return (
                <div className="event-indicator" style={{ cursor: 'pointer' }}>
                  {matchingEvents.length === 1 ? (
                    // Navigate directly if only one event
                    <span title={matchingEvents[0].name} onClick={() => navigateToEventPage(matchingEvents[0].link)}>
                      {matchingEvents[0].name}
                    </span>
                  ) : (
                    // Show a dropdown for multiple events
                    <>
                      <span title="Select an event">Multiple Events</span> 
                      <select onChange={e => navigateToEventPage(e.target.value)}>
                        {matchingEvents.map(event => (
                          <option key={event.id} value={event.link}>
                            {event.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              );
            }
       
            return null; // No indicator for dates without events
          }}
        />
      </section>
    </div>
  );
}

export default Events;
