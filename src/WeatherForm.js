// WeatherForm.js
import React, { useState } from "react";

const WeatherForm = ({ searchWeather, error, clearError, resetSearches }) => {
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((city && !zipcode) || (!city && zipcode)) {
      searchWeather(city, zipcode);
      setCity("");
      setZipcode("");
    } else {
      clearError();
      setErrorMessage("Please provide either a city or a zipcode, not both.");
    }
  };

  const handleReset = () => {
    resetSearches();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">None</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
        </select>
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WeatherForm;
