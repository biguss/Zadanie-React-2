import React from "react";
import Clock from "./Clock";
import "./styles.css";

function ClockList({ timezones, removeTimezone }) {
  return (
    <div className="clocklist-container">
      {timezones.map((timezone) => (
        <div key={timezone}>
          <Clock timezone={timezone} />
          <button onClick={() => removeTimezone(timezone)}>Usuń</button>
        </div>
      ))}
    </div>
  );
}

export default ClockList;
