import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div className="forecast-details">
      <h3 className="forecast-details_heading">
        Forecast Details for
        {' '}
        {formattedDate}
        :
      </h3>
      <ul>
        <li>
          Temperature High:
          {' '}
          {forecast.temperature.max}
          &deg;C
        </li>
        <li>
          Temperature Low:
          {' '}
          {forecast.temperature.min}
          &deg;C
        </li>
        <li>
          Wind Speed:
          {' '}
          {forecast.wind.speed}
          mph
        </li>
        <li>
          Wind Direction:
          {' '}
          {forecast.wind.direction.toUpperCase()}
        </li>
        <li>
          Humidity:
          {' '}
          {forecast.humidity}
          %
        </li>
      </ul>
    </div>
  );
}

export default ForecastDetails;
