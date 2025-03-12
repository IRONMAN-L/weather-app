import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import weatherVideo from "./assets/weather-bg.webm";


const API_KEY = "849e8c883353766166c89acba9fcd9b2"; // Replace with your actual API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });

      setWeather(response.data);
    } catch (error) {
      alert("City not found! Please enter a valid city.");
    }
  };

  return (
    <div className="app">
      {/* Video Background */}
      <video autoPlay loop muted className="bg-video">
      <source src={weatherVideo} type="video/webm" />
      </video>


      {/* Weather Search Box */}
      <div className="content">
        <h1>Weather</h1>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>

        {/* Weather Display */}
        {weather && (
          <>
            {/* City and Country */}
            <h2 className="location">{weather.name}, {weather.sys.country}</h2>

            {/* Centered Weather Info */}
            <div className="weather-container">
              <div className="weather-info">
                <div className="weather-detail">
                  <p>🌡 Temperature:<br />
                    <span className="weather-value">{weather.main.temp}°C</span>
                  </p>
                </div>
                
                <div className="weather-detail">
                  <p>💧 Humidity:<br />
                    <span className="weather-value">{weather.main.humidity}%</span>
                  </p>
                </div>

                <div className="weather-detail">
                  <p>💨 Wind Speed:<br />
                    <span className="weather-value">{weather.wind.speed} m/s</span>
                  </p>
                </div>

                <div className="weather-detail">
                  <p>🌤 Condition:<br />
                    <span className="weather-value">{weather.weather[0].main} - {weather.weather[0].description}</span>
                  </p>
                </div>
              </div>
            </div>

          
          </>
        )}
      </div>
    </div>
  );
};

export default App;
