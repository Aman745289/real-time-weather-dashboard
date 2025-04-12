import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.country}</h2>
      <img src={weather.icon} alt={weather.condition} />
      <p>{weather.condition}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
