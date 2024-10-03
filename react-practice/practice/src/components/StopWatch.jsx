import React, { useEffect, useState } from "react";
import "../styles/stopwatch.css";

export const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  let timer;

  useEffect(() => {
    if (isStart) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  const formatTime = (count) => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const handleStart = () => {
    setCount(0);
    setIsStart(true);
  };

  const handleResume = () => {
    setIsStart(true);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-title">StopWatch</div>
      <div className="stopwatch-display">
        <p className="stopwatch-count">Time: {formatTime(count)}</p>
        <div className="button-group">
          <button className="stopwatch-button start" onClick={handleStart}>
            Start
          </button>
          <button className="stopwatch-button resume" onClick={handleResume}>
            Resume
          </button>
          <button className="stopwatch-button stop" onClick={handleStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};
