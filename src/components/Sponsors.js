// import React from "react";
// import "../Sponsors.css";

// const eventData = [
//   {
//     name: "Lunar New Year",
//     sponsors: [
//       "S3 Spa", "Hong Duc", "Atlanta Beauty School", "Fire Extinguisher of Atlanta",
//       "Pelican Hill Medical Center", "Nogales Law", "Unity Health Clinic", "VN Systems",
//       "Tea 265", "Wendy Boutique", "Tracy's Nails", "Smartlink", "VN Pho", "Kathy Nguyen",
//       "Morrow Animal Hospital", "Interactive College of Technology", "Saigon Services",
//       "Morrow Family Dentistry", "Saigon Pharmacare", "Long Merchants", "One Mile Mortgage",
//       "Viet Home Care", "The Mailroom", "Simpli Productions", "Thinh Ton", "4U Florals and Gifts",
//       "Travis Nguyen Photography"
//     ]
//   },
//   {
//     name: "Black History Month",
//     sponsors: [
//       "BeautyMaster", "Morrow Center", "VN Pho", "The Plucked Peach", "Atlanta Philly", 
//       "Hampton Inn", "404 Sports Bar and Grill", "Rare Breed", "Frontier Airlines", "Boost Mobile", 
//       "Great Wall", "Ourconic Entertainment", "Truth Honey", "Lenz Noirre", "Norma's Academy of Dance", 
//       "Popped Gourmet Popcorn and Fun Treats"
//     ]
//   },
//   {
//     name: "St. Patrick's Day",
//     sponsors: ["Las Trojas Cantina", "VNJ Designs", "Radio One", "Fortune Concierge"]
//   },
//   {
//     name: "Cinco De Mayo",
//     sponsors: [
//       "Beba Food Stores", "Talpa Supermercados", "Tran Realty", "Pelican Hill Medical Center",
//       "Kim Duong State Farm", "TSG Services and Solutions LLC", "Long Merchants"
//     ]
//   }
// ];

// export default function Sponsors() {
//   return (
//     <div className="sv-container">
//       <h1>2025 City of Morrow Event Sponsors</h1>
//       <p className="sv-subheading">
//         We are grateful for the incredible businesses and organizations that support our community events.
//       </p>

//       <div className="sv-events-grid">
//         {eventData.map((event, idx) => (
//           <div className="sv-card" key={idx}>
//             <h2 className="sv-event-title">{event.name}</h2>
//             <div className="sv-sponsor-list">
//               {event.sponsors.map((sponsor, i) => (
//                 <span className="sv-sponsor" key={i}>
//                   {sponsor}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="sv-footer">
//         <p>Interested in becoming a sponsor? <a href="mailto:events@morrowga.gov">Contact us here</a>.</p>
//       </div>
//     </div>
//   );
// }

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
    sponsors: [
      "BeautyMaster", "Morrow Center", "VN Pho", "The Plucked Peach", "Atlanta Philly", 
      "Hampton Inn", "404 Sports Bar and Grill", "Rare Breed", "Frontier Airlines", "Boost Mobile", 
      "Great Wall", "Ourconic Entertainment", "Truth Honey", "Lenz Noirre", "Norma's Academy of Dance", 
      "Popped Gourmet Popcorn and Fun Treats"
    ]
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

// Dummy images array for benefits gallery
const benefitsGallery = [
  { img: "/freedom/4.jpg", caption: "Massive Event Exposure" },
  { img: "/freedom/14.jpg", caption: "On-Stage Branding" },
  { img: "/kathy.jpg", caption: "Banners & Signage" },
  { img: "/events/14.jpg", caption: "Networking Opportunities" },
  { img: "/events/4.jpg", caption: "Family Friendly Audience" }
];

export default function Sponsors() {
  return (
    <div className="sv-container">

      <h1>City of Morrow Event Sponsors</h1>

      {/* SPONSOR BENEFITS GALLERY */}
      <section className="sv-benefits">
        <h2>Why Sponsor Our Events?</h2>
        <p>Reach thousands of attendees while supporting your local community.</p>
        <div className="sv-benefits-gallery">
          {benefitsGallery.map((item, idx) => (
            <div className="sv-benefit-card" key={idx}>
              <img src={item.img} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BECOME A SPONSOR SECTION */}
      <section className="sv-become-sponsor">
        <div className="sv-become-text">
          <h2>Partner With Us</h2>
          <p>
            Become a sponsor and elevate your brand visibility at our city's most anticipated events.
            Sponsorship packages include booth space, on-site branding, online promotions, social media features,
            and much more. Packages available for businesses of all sizes.
          </p>
          <a className="sv-cta-button" href="mailto:events@morrowga.gov">Contact Us to Sponsor</a>
        </div>
        <div className="sv-become-image">
          <img src="/talpa.jpg" alt="Sponsor Booth" />
        </div>
      </section>

      {/* EXISTING SPONSORS LIST */}
      <h2 className="sv-existing-title">Our 2025 Sponsors</h2>
      <p className="sv-subheading">
        We are grateful for the incredible businesses and organizations that support our community events.
      </p>

      <div className="sv-events-grid">
        {eventData.map((event, idx) => (
          <div className="sv-card" key={idx}>
            <h3 className="sv-event-title">{event.name}</h3>
            <div className="sv-sponsor-list">
              {event.sponsors.map((sponsor, i) => (
                <span className="sv-sponsor" key={i}>{sponsor}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sv-footer">
        <p>Still have questions? <a href="mailto:events@morrowga.gov">Email our events team.</a></p>
      </div>
    </div>
  );
}
