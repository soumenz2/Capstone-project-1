import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=<YOUR_WEATHER_API_KEY>&q=London`
      );
      setWeather(response.data.current);
    };

    fetchWeather();
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-indigo-800 text-white p-6 rounded-lg text-center">
      <div className="text-xl font-semibold">{new Date().toLocaleDateString()}</div>
      <div className="text-3xl font-bold">{time}</div>
      {weather && (
        <div className="mt-4">
          <img src={weather.condition.icon} alt={weather.condition.text} />
          <div className="text-xl">{weather.temp_c}°C</div>
          <div>{weather.condition.text}</div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
