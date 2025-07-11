import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Calendar from "react-calendar";

const events = [
  // {
  //   name: "Lunar New Year",
  //   description:
  //     "Join us for Lunar New Year! Reunite, celebrate, and honor traditions with this vibrant festival, delicious food, and cultural performances.",
  //   date: "01/25/25 - 01/26/25",
  //   time: "10:00 AM - 12:00 AM",
  //   location: "morrow-center",
  //   imageUrl: "/lny.png",
  //   link: "/LunarNewYear",
  // },
  // {
  //   name: "Black History Month",
  //   description:
  //     "Come out for Black History Month! A cultural celebration, including food, art, and music, of black history in the United States.",
  //   date: "02/22/25 - 02/23/25",
  //   time: "2:00 PM - 12:00 AM",
  //   location: "morrow-center",
  //   imageUrl: "/bhm25.png",
  //   link: "/BlackHistoryMonth",
  // },
  // {
  //   name: "St. Patrick's Day",
  //   description:
  //     "Experience music, dancing, and indulging in food to celebrate this occasion!",
  //   date: "03/15/25",
  //   time: "5:00 PM - 11:00 PM",
  //   location: "district",
  //   imageUrl: "/spd25.png",
  //   link: "/StPatricksDay",
  // },
  // {
  //   name: "Cinco De Mayo",
  //   description:
  //     "Join us for a vibrant celebration of Mexican culture and heritage on Cinco de Mayo!",
  //   date: "05/03/25",
  //   time: "5:00 PM - 10:00 PM",
  //   location: "district",
  //   imageUrl: "/cdm25.png",
  //   link: "/CincoDeMayo",
  // },
  {
    name: "Farmers Market",
    description:
      "Join us for Morrow's annual farmers market! Check out multiple vendors, and buy fresh fruit and vegetables.",
    date: "05/10/25",
    time: "9:00 AM - 1:00 PM",
    location: "district",
    imageUrl: "/fm25.png",
    link: "/FarmersMarket",
  },
  // {
  //   name: "Juneteenth",
  //   description:
  //     "This event honors the emancipation of enslaved African Americans and highlights African American culture with live performances, historical exhibits, delicious food, and community engagement!",
  //   date: "06/21/25",
  //   time: "3:00 PM - 11:00 PM",
  //   location: "district",
  //   imageUrl: "/j25.png",
  //   link: "/Juneteenth",
  // },
  // {
  //   name: "Freedom Fest",
  //   description:
  //     "Come out for Freedom Fest, a family-friendly celebration of freedom, unity, and patriotism. Enjoy an exciting mix of live music, delicious food, games, and fireworks as we honor the spirit of independence.",
  //   date: "06/28/25",
  //   time: "5:00 PM - 10:00 PM",
  //   location: "district",
  //   imageUrl: "/ff25.png",
  //   link: "/FreedomFest",
  // },
  {
    name: "National Night Out",
    description:
      "Join us for an evening filled with neighborhood block parties, safety demonstrations, and opportunities to connect with local law enforcement.",
    date: "08/05/25",
    time: "4:00 PM - 8:00 PM",
    location: "district",
    imageUrl: "/nno25.png",
    link: "/NationalNightOut",
  },
  {
    name: "Mexican Independence Day",
    description: "Join us for a fun day of celebrating Mexico's independence.",
    date: "09/13/25",
    time: "5:00 PM - 11:00 PM",
    location: "district",
    imageUrl: "/mid25.png",
    link: "/MexicanIndependenceDay",
  },
  {
    name: "International Night Market",
    description:
      "Step into a world of culture, flavors, and excitement at the International Night Market! With food, crafts, and entertainment from around the globe, it’s an evening to explore diverse cultures in one place.",
    date: "10/04/25",
    time: "2:00 PM - 12:00 AM",
    location: "district",
    imageUrl: "/inm25.png",
    link: "/InternationalNightMarket",
  },
  {
    name: "Moon Festival",
    description:
      "This cultural event is a family favorite, featuring moon-themed crafts, lantern displays, live performances, and traditional food.",
    date: "10/05/25",
    time: "2:00 PM - 12:00 AM",
    location: "district",
    imageUrl: "/mf25.png",
    link: "/MoonFestival",
  },
  {
    name: "Hippie Festival",
    description:
      "Step back in time to the groovy days of the 60s and 70s with retro music, tie-dye shirts, food trucks, and fun activities.",
    date: "10/18/25",
    time: "5:00 PM - 10:00 PM",
    location: "district",
    imageUrl: "/hf25.png",
    link: "/HippieFestival",
  },
  {
    name: "Safe Halloween",
    description:
      "This fun-filled evening includes costume contests, haunted houses, pumpkin decorating, and plenty of candy.",
    date: "10/25/25",
    time: "5:00 PM - 10:00 PM",
    location: "district",
    imageUrl: "/sh25.png",
    link: "/SafeHalloween",
  },
  {
    name: "Dia de los Muertos",
    description:
      "This fun-filled event includes learning more about the traditions behind this celebration and fun for the kids.",
    date: "11/01/25",
    time: "5:00 PM - 10:00 PM",
    location: "district",
    imageUrl: "/ddlm25.png",
    link: "/DiaDeLosMuertos",
  },
  {
    name: "Veteran's Day",
    description:
      "Join us for a day of remembrance and appreciation, including a ceremony, live music, and community activities.",
    date: "11/08/25",
    time: "11:00 AM - 1:00 PM",
    location: "morrow-center",
    imageUrl: "/vd25.png",
    link: "/VeteransDay",
  },
  {
    name: "Fall Festival",
    description:
      "Join us for fall activities like hay rides, face painting, and pumpkin picking.",
    date: "10/25/25",
    time: "10:00 AM - 3:00 PM",
    location: "district",
    imageUrl: "/fallf25.png",
    link: "/FallFestival",
  },
  {
    name: "Christmas in the Park",
    description:
      "This magical event features a dazzling light display, holiday music, hot cocoa, and festive activities for all ages.",
    date: "12/06/25",
    time: "4:00 PM - 10:00 PM",
    location: "district",
    imageUrl: "/citp25.png",
    link: "/ChristmasInThePark",
  },
];

function Events() {
  const [value, setValue] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const history = useNavigate();
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [timeRange, setTimeRange] = useState([0, 24]);

  const isDateInRange = (startDate, endDate, date, view) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    switch (view) {
      case "month":
        return date >= start && date <= end;
      case "week":
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return (
          (start >= weekStart && start <= weekEnd) ||
          (end >= weekStart && end <= weekEnd)
        );
      default:
        return date >= start && date <= end;
    }
  };
  const handleChange = (newDate) => {
    setValue(new Date(newDate));
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const getMonthFromDate = (date) => {
    const dateParts = date.split(" - ")[0].split("/");
    return dateParts[0];
  };
  const filteredEvents = events.filter((event) => {
    const matchesSearchTerm =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = month ? getMonthFromDate(event.date) === month : true;
    const eventStartTime = parseInt(
      event.time.split(" - ")[0].split(":")[0],
      10
    );
    const eventEndTime = parseInt(event.time.split(" - ")[1].split(":")[0], 10);
    const matchesTimeRange =
      eventStartTime >= timeRange[0] && eventEndTime <= timeRange[1];
    const matchesLocation = location ? event.location === location : true;
    return (
      matchesSearchTerm && matchesMonth && matchesTimeRange && matchesLocation
    );
  });

  const sortedEvents = filteredEvents.sort((a, b) => {
    const parseDate = (dateStr) => {
      const [month, day, year] = dateStr.split("/");
      return new Date(`20${year}-${month}-${day}`);
    };

    const dateA = a.date.includes(" - ")
      ? parseDate(a.date.split(" - ")[0])
      : parseDate(a.date);
    const dateB = b.date.includes(" - ")
      ? parseDate(b.date.split(" - ")[0])
      : parseDate(b.date);
    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  const handleTimeRangeChange = (values) => {
    setTimeRange(values);
  };

  const navigateToEventPage = (eventLink) => {
    history(eventLink);
  };

  return (
    <div className="events-container">
      <div className="header-container">
        <h1>City of Morrow Events</h1>
      </div>{" "}
      <section className="events-container">
        <div className="sidebar">
          <div className="filters">
            <h3>Filters</h3>

            <div className="search-section">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-item">
              <label>Location</label>
              <select
                value={location}
                onChange={handleLocationChange}
                className="filter-select"
              >
                <option value="">Select Location</option>
                <option value="district">District</option>
                <option value="morrow-center">Morrow Center</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Month</label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="filter-select"
              >
                <option value="">Select Month</option>
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
          </div>
          <div className="sort-section">
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="sort-button"
            >
              Sort by Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
          </div>
        </div>
        <div className="events-list">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {sortedEvents.map((event, index) => (
              <div key={index} className="event-card">
                <img
                  src={process.env.PUBLIC_URL + event.imageUrl}
                  alt={event.name}
                />
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
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
      <section className="calendar-section">
        <h2>Event Calendar</h2>
        <Calendar
          locale="en-US"
          value={value}
          onChange={handleChange}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const isSameMonthAndYear =
                date.getMonth() === value.getMonth() &&
                date.getFullYear() === value.getFullYear();
              return isSameMonthAndYear ? "" : "other-month-day";
            }
            return "";
          }}
          tileContent={({ date, view }) => {
            const matchingEvents = events.filter((event) => {
              const [startDateStr, endDateStr] = event.date.split(" - ");
              const startDate = new Date(startDateStr);
              const endDate = endDateStr ? new Date(endDateStr) : startDate;
              return isDateInRange(startDate, endDate, date, view);
            });
            if (matchingEvents.length > 0) {
              return (
                <div className="event-indicator" style={{ cursor: "pointer" }}>
                  {matchingEvents.length === 1 ? (
                    <span
                      title={matchingEvents[0].name}
                      onClick={() =>
                        navigateToEventPage(matchingEvents[0].link)
                      }
                    >
                      {matchingEvents[0].name}
                    </span>
                  ) : (
                    <>
                      <span title="Select an event">Multiple Events</span>
                      <select
                        onChange={(e) => navigateToEventPage(e.target.value)}
                      >
                        {matchingEvents.map((event) => (
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

            return null;
          }}
        />
      </section>
      <section className="info-section">
        <h2>Become a Vendor, Sponsor, or Volunteer</h2>
        <p>
          If you're interested in becoming a vendor, sponsor, or volunteer for
          one of our events, here's how you can get involved:
        </p>
        <div className="info-cards">
          <div className="info-card">
            <h3>Vendor</h3>
            <img
              src={process.env.PUBLIC_URL + "/vendor.JPG"}
              alt="Sponsor"
              className="sponsor-image"
            />
            <p>
              As a vendor, you can showcase your products or services to a large
              audience. We offer booths, tables, and various options to fit your
              needs.
            </p>
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
            <img
              src={process.env.PUBLIC_URL + "/kathy.jpg"}
              alt="Sponsor"
              className="sponsor-image"
            />
            <p>
              Become a sponsor and support our events while gaining exposure for
              your business. We offer different levels of sponsorship for each
              event.
            </p>
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
            <img
              src={process.env.PUBLIC_URL + "/volunteer.JPG"}
              alt="Sponsor"
              className="sponsor-image"
            />
            <p>
              Volunteers are essential to making our events run smoothly. Sign
              up to help with event setup, guest assistance, and more! Fill out
              the form below!
            </p>
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
    </div>
  );
}

export default Events;
