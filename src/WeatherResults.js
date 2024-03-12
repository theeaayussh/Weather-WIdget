import React from "react";

const WeatherResults = ({ recentSearches }) => {
  return (
    <div className="weather-results">
      <h2>Recent Searches</h2>
      {recentSearches.map((search, index) => (
        <div key={index} className="search-item">
          {search}
        </div>
      ))}
    </div>
  );
};

export default WeatherResults;
