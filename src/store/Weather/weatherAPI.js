import axios from "axios";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

//Отримання широти довготи за назвою міста
export async function getCoordinatesByCity(cityName) {
  const params = {
    name: cityName,
    language: "uk",
  };
  const resp = await axios.get(GEO_URL, { params });
  const results = resp.data.results;
  const { latitude, longitude, name } = results[0];
  return { latitude, longitude, name };
}
// Отримання погодних даних завдяки широті довготі
export async function getWeather(latitude, longitude) {
  const params = {
    latitude,
    longitude,
    forecast_days: 7,
    daily: "weathercode,temperature_2m_max,temperature_2m_min",
    current_weather: true,
    timezone: "Europe/Kyiv",
  };
  return await axios
    .get(BASE_URL, { params })
    .then((response) => {
      const data = response.data;
      const daily = [];
      const times = data.daily.time;
      const codes = data.daily.weathercode;
      const tempsMax = data.daily.temperature_2m_max;
      const tempsMin = data.daily.temperature_2m_min;
      for (let i = 0; i < times.length; i++) {
        const rawDate = new Date(times[i]);
        const formattedDate = rawDate.toLocaleDateString("uk-UA", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        });
        daily.push({
          date: formattedDate,
          weathercode: codes[i],
          tempMax: tempsMax[i],
          tempMin: tempsMin[i],
        });
      }
      const current = {
        dateTime: data.current_weather.time,
        temperature: data.current_weather.temperature,
        weathercode: data.current_weather.weathercode,
      };
      return { daily, current };
    })
    .catch((err) => {
      console.error("Weather API error", err);
      throw err;
    });
}
