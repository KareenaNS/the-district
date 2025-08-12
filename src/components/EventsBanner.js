// EventsBanner.js
import React from 'react';
import { Link } from 'react-router-dom'; // if you use react-router

function EventsBanner() {
  return (
    <div style={{
        width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      background: '#004aad',
      color: 'white',
      padding: '10px 0',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      cursor: 'pointer'
    }}>
      <Link to="/VendorPayment" style={{ color: 'white', textDecoration: 'none' }}>
        <span style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'scroll-left 15s linear infinite'
        }}>
          Don’t miss out! Make your vendor payment now &nbsp; • &nbsp; Don’t miss out! Make your vendor payment now &nbsp; • &nbsp;
        </span>
      </Link>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
export default EventsBanner;