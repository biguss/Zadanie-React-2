import React, { useState } from "react";
import TimezoneSelector from "./assets/components/TimezoneSelector";
import ClockList from "./assets/components/ClockList";
import "./App.css";

function App() {
  const [timezones, setTimezones] = useState(["UTC"]);

  const addTimezone = (newTimezone) => {
    if (!timezones.includes(newTimezone)) {
      setTimezones([...timezones, newTimezone]);
    }
  };

  const removeTimezone = (timezoneToRemove) => {
    const updatedTimezones = timezones.filter(
      (timezone) => timezone !== timezoneToRemove
    );
    setTimezones(updatedTimezones);
  };

  return (
    <div>
      <h1>Zegary</h1>
      <TimezoneSelector addTimezone={addTimezone} />
      <ClockList timezones={timezones} removeTimezone={removeTimezone} />
    </div>
  );
}

export default App;
