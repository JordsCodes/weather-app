import React from "react";
import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  if (errorMessage) {
    return <h1 className="location-details">{errorMessage}</h1>;
  }
  return <h1 className="location-details">{`Five day forecast for ${city}, ${country}`}</h1>;
}

export default LocationDetails;
