import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import "./styles.css";

function Clock({ timezone }) {
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime
    .setZone(timezone)
    .toLocaleString(DateTime.TIME_WITH_SECONDS);

  return (
    <div className="clock-container">
      <h2 className="clock-title">{timezone}</h2>
      <p className="clock-time">{formattedTime}</p>
    </div>
  );
}

export default Clock;
