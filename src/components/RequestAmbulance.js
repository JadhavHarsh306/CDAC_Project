import React from "react";
import "../style/RequestAmbulance.css"

const RequestAmbulance = () => {
  return (
    <div className="container1">
      <div className="content">
        <h1>Request an Ambulance Cab</h1>
        <p>Quick and reliable ambulance service for your health emergencies.</p>
        <div className="input-group">
          <input type="text" placeholder="Enter location" />
          <i className="fas fa-location-arrow icon"></i>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Enter destination" />
          <i className="fas fa-map-marker-alt icon"></i>
        </div>
        <div className="buttons">
          <button className="primary">Book Now</button>
        </div>
      </div>
      <div className="image-container">
        <img
          src="./images/Map.jpg"
          alt="Google Map"
        />
      </div>
    </div>
  );
};

export default RequestAmbulance;
