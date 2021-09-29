import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Gold Coast",
    temperature: "17",
    date: "Wednesday 17:38",
    description: "Partly cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "87%",
    wind: "11 km/h",
  };
  return (
    <div className="Weather">
      <form class="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn–primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-start"
            />
            <div className="float-start">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {weatherData.wind}</li>
          </ul>
        </div>
      </div>
      <small>
        <a href="https://github.com/jackymadenfrost/weather-react">
          Open-source code
        </a>
        , by <a href="https://www.matdelac.io">Jacky Madenfrost</a>
      </small>
    </div>
  );
}
