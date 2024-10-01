import React, { useEffect, useState } from "react";

export const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  let timer;

  useEffect(() => {
    if (isStart) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Use functional update to prevent stale state
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  // Format count to hours:minutes:seconds
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
    <div style={styles.stopwatchContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>StopWatch</h1>
        <div style={styles.timeContainer}>
          <p style={styles.timeText}>Time: {formatTime(count)}</p>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleStart}>
              Start
            </button>
            <button style={styles.button} onClick={handleResume}>
              Resume
            </button>
            <button style={styles.button} onClick={handleStop}>
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  stopwatchContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    width: "350px",
    height: "250px",
    margin: "auto",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  timeText: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
