import React, { useState, useCallback } from "react";

export const UseCallBack = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("Button clicked!");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <ButtonComponent handleClick={handleClick} />
    </div>
  );
};

const ButtonComponent = ({ handleClick }) => {
  return <button onClick={handleClick}>Click</button>;
};
