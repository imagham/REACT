import React, { useState, useEffect } from "react";
import axios from "axios";

function Soal1() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true")
      .then((response) => {
        setWeather(response.data.current_weather);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white">
      <h1 className="text-4xl font-bold mb-8">Cuaca Saat Ini - London</h1>
      {weather ? (
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-xl font-semibold mb-2">Suhu: {weather.temperature}°C</p>
          <p className="text-lg mb-2">Kecepatan Angin: {weather.windspeed} km/h</p>
          <p className="text-lg">Arah Angin: {weather.winddirection}°</p>
        </div>
      ) : (
        <p className="text-lg">Memuat data cuaca...</p>
      )}
    </div>
  );
}

export default Soal1;
