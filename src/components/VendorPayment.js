import React from 'react';

export default function VendorPayment() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      paddingTop: '75%',
      overflow: 'hidden' 
    }}>
      <iframe
        src="https://morrowga.gov/ticketing-home/"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Ticketing Page"
      />
    </div>
  );
}
