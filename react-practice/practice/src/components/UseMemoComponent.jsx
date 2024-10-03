import React, { useMemo, useState } from "react";

export const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  let memoizedFunction = (count) => {
    return `${count * 2}...`;
    // return `${text}...`;
  };

  let memoizedResult = useMemo(() => memoizedFunction(count), [count]);

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    paragraph: {
      margin: "10px 0",
      lineHeight: "1.5",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Use Memo Optimization Example</h2>
      <p style={styles.paragraph}>Result: {count}</p>
      <p style={styles.paragraph}>Memoized Result: {memoizedResult}</p>
      <p style={styles.paragraph}>Text: {text}</p>
      <button
        style={styles.button}
        onClick={() => setCount(count + 1)}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.button.backgroundColor)
        }
      >
        Submit
      </button>
      <br />
      <input
        style={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />{" "}
      <br /> <br />
      <br />
      <b>Optimization for Expensive Calculations:</b>
      <p style={styles.paragraph}>
        If you have a calculation that requires a lot of processing time and
        doesn’t need to run on every render, using useMemo can significantly
        reduce the computational load on your app.
      </p>
      <br />
      <b>Avoiding Unnecessary Renders:</b>
      <p style={styles.paragraph}>
        Components that rely on derived state (like memoizedResult) can prevent
        unnecessary updates if their dependencies have not changed, improving
        overall rendering performance.
      </p>
    </div>
  );
};
