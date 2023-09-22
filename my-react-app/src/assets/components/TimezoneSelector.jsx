import React, { useState } from "react";
import "./styles.css";

function TimezoneSelector({ addTimezone }) {
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const timezonesList = ["UTC", "UTC+1", "UTC-1", "UTC+2", "UTC-2"];

  const handleAddTimezone = () => {
    addTimezone(selectedTimezone);
    setSelectedTimezone("UTC");
  };

  return (
    <div className="timezoneselector-container">
      <select
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}>
        {timezonesList.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
      <button onClick={handleAddTimezone}>Dodaj</button>
    </div>
  );
}

export default TimezoneSelector;
