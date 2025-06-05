// import React, { useState, useEffect } from "react";
// import "../Freedom.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation, Pagination } from "swiper/modules";

// const eventData = [
//   {
//     name: "Freedom Fest",
//     date: "June 28, 2025",
//     location: "The District, Morrow, GA",
//     vendorForm: "https://your-freedomfest-vendor-form.com",
//     sponsorPacket: "https://your-freedomfest-sponsor-packet.com",
//     pastSponsors: [
//       "Chick-fil-A", "MARTA", "City of Morrow", "Georgia Power"
//     ],
//   },
//   {
//     name: "Juneteenth Celebration",
//     date: "June 15, 2025",
//     location: "Morrow City Hall Lawn",
//     vendorForm: "https://your-juneteenth-vendor-form.com",
//     sponsorPacket: "https://your-juneteenth-sponsor-packet.com",
//     pastSponsors: [
//       "Delta Airlines", "Amazon", "Home Depot"
//     ],
//   },
//   // Add more events here as needed
// ];

// function Sponsors() {
//   return (
//     <div className="sponsor-vendor-wrapper">
//       <h1>Event Sponsor & Vendor Opportunities</h1>

//       {eventData.map((event, index) => (
//         <section key={index} className="event-section">
//           <h2>{event.name}</h2>
//           <p><strong>Date:</strong> {event.date}</p>
//           <p><strong>Location:</strong> {event.location}</p>

//           <div className="event-links">
//             <a
//               href={event.vendorForm}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="cta-button"
//             >
//               Vendor Application
//             </a>
//             <a
//               href={event.sponsorPacket}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="cta-button"
//             >
//               Sponsorship Packet
//             </a>
//           </div>

//           <div className="sponsor-list">
//             <h4>Past Sponsors:</h4>
//             <ul>
//               {event.pastSponsors.map((sponsor, i) => (
//                 <li key={i}>{sponsor}</li>
//               ))}
//             </ul>
//           </div>
//         </section>
//       ))}

//       <div className="sponsor-footer">
//         <p>Questions? Email us at <a href="mailto:events@morrowga.gov">events@morrowga.gov</a></p>
//       </div>
//     </div>
//   );
// }

// export default Sponsors;


import React from "react";
import "../Sponsors.css";

const eventData = [
  {
    name: "Lunar New Year",
    sponsors: [
      "S3 Spa", "Hong Duc", "Atlanta Beauty School", "Fire Extinguisher of Atlanta",
      "Pelican Hill Medical Center", "Nogales Law", "Unity Health Clinic", "VN Systems",
      "Tea 265", "Wendy Boutique", "Tracy's Nails", "Smartlink", "VN Pho", "Kathy Nguyen",
      "Morrow Animal Hospital", "Interactive College of Technology", "Saigon Services",
      "Morrow Family Dentistry", "Saigon Pharmacare", "Long Merchants", "One Mile Mortgage",
      "Viet Home Care", "The Mailroom", "Simpli Productions", "Thinh Ton", "4U Florals and Gifts",
      "Travis Nguyen Photography"
    ]
  },
  {
    name: "Black History Month",
    sponsors: ["BeautyMaster", "Morrow Center", "VN Pho", "The Plucked Peach", "Atlanta Philly", 
        "Hampton Inn", "404 Sports Bar and Grill", "Rare Breed", "Frontier Airlines", "Boost Mobile", 
        "Great Wall", "Ourconic Entertainment", "Truth Honey", "Lenz Noirre", "Norma's Academy of Dance", 
        "Popped Gourmet Popcorn and Fun Treats"]
  },
  {
    name: "St. Patrick's Day",
    sponsors: ["Las Trojas Cantina", "VNJ Designs", "Radio One", "Fortune Concierge"]
  },
  {
    name: "Cinco De Mayo",
    sponsors: [
      "Beba Food Stores", "Talpa Supermercados", "Tran Realty", "Pelican Hill Medical Center",
      "Kim Duong State Farm", "TSG Services and Solutions LLC", "Long Merchants"
    ]
  }
];

export default function Sponsors() {
  return (
    <div className="sv-container">
      <h1>2025 City of Morrow Event Sponsors</h1>
      <p className="sv-subheading">Thank you to all our sponsors for making these events possible!</p>

      <div className="sv-events-grid">
        {eventData.map((event, idx) => (
          <div className="sv-card" key={idx}>
            <h2 className="sv-event-title">{event.name}</h2>
            <div className="sv-sponsor-list">
              {event.sponsors.map((sponsor, i) => (
                <span className="sv-sponsor" key={i}>
                  {sponsor}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

