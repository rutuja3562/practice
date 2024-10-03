import React, { useEffect, useState } from "react";
import "../styles/timer.css"; // Import the external CSS

export const Timer = () => {
  const [time, setTime] = useState(180);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let timer;
    if (isStart && time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsStart(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isStart, time]);

  const handleStartTimer = () => {
    setIsStart(true);
  };

  const handleStopTimer = () => {
    setIsStart(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-title">Timer</h1>
      <div className="timer-display">
        <p className="timer-count">{time} seconds</p>
        <div className="button-group">
          <button className="timer-button start" onClick={handleStartTimer}>
            Start
          </button>
          <button className="timer-button stop" onClick={handleStopTimer}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};
