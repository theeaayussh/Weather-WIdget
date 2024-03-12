import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherResults from "./WeatherResults";

const WeatherWidget = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [error, setError] = useState("");

  const searchWeather = (city, zipcode) => {
    const temperature = Math.floor(Math.random() * 100) + 1;
    const newSearch = `${city}: ${temperature}°C`;
    setRecentSearches([newSearch, ...recentSearches.slice(0, 2)]);
  };

  const clearError = () => {
    setError("");
  };

  const resetSearches = () => {
    setRecentSearches([]);
  };

  return (
    <div>
      <WeatherForm
        searchWeather={searchWeather}
        error={error}
        clearError={clearError}
        resetSearches={resetSearches}
      />
      <WeatherResults recentSearches={recentSearches} />
    </div>
  );
};

export default WeatherWidget;
