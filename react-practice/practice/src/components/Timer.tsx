import React, { useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(60);
  const handleStartTimer = () => {
    setTimeout(() => {
      setTime(time * 1000 - 1000);
    }, 1000);
  };
  const handleStopTimer = () => {};
  return (
    <div>
      <h1>Timer</h1>
      <div>
        <p>{time}</p>
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
      </div>
    </div>
  );
};
