import { log } from "console";
import React, { useEffect, useState } from "react";

export default function PrimitiriveNumbers() {
  console.log("Salam");

  const [price, setPrice] = useState({
    price: 0,
    name: "ali",
  });

  const handleClick = () => {
    setPrice({
      price: 0,
      name: "ali",
    });
  };

  useEffect(() => {
    console.log("useEffect...");
  }, [price.price]); //component bir defe yuklenir
  return (
    <div className="container">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

//rfc yazzzzz
