import React from 'react';
import '../style/AmbulanceDriver.css'

const AmbulanceDriver = () => {
  return (
    <div className="business-section">
      <div className="business-content">
        <h2>Looking to become an ambulance driver?</h2>
        <p>Join our team and help save lives. Get information about how you can connect with our ambulance service:</p>
        <a href="#">Driver requirements</a>
        <a href="#">Benefits and compensation</a>
        <a href="#">Application process</a>
        <button>Get started</button>
        <button>Learn more</button>
      </div>
      <div className="business-image">
        <img
          alt="Ambulance Driver"
          height="200"
          src="./images/Driver.jpeg"
          width="300"
        />
      </div>
    </div>
  );
};

export default AmbulanceDriver;
