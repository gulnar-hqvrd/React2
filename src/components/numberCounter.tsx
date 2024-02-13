import React, { useState } from "react";

export default function NumberCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {

    // setCount(count + 1)
    // setCount(count + 1) // 1 1 artacaq

    setCount((prev) => prev + 1); 
    setCount((prev) => prev + 1);// 2 2 artacaq
  };
  return (
    <>
      <div className="container">
        <h2>Number Counter</h2>
        <p>Counter : {count}</p>
        <br />
        <button onClick={handleClick}>Increase</button>
      </div>
    </>
  );
}
