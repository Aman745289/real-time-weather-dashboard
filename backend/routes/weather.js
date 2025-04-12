const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;
    const result = {
      name: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      condition: data.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    };

    res.json(result);
  } catch (error) {
    res.status(404).json({ error: 'City not found' });
  }
});

module.exports = router;
