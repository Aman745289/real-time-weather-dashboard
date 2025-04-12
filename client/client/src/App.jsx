import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/weather';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      setError('City not found or network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
