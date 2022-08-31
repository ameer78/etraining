
import { useState, useEffect, useRef } from "react";

const TestRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [previousInputValue, setPreviousInputValue] = useState("");
//   const previousInputValue = useRef("");

  useEffect(() => {
    setPreviousInputValue(inputValue);
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue}</h2>
    </>
  );
}

export default TestRef;

