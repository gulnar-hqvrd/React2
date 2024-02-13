import React, { useEffect, useState } from "react";
const item_price = 5;
export default function CalculatePrice() {
  const [quatity, setQuatity] = useState(1);
  // const [price , setPrice] = useState(0)
  const handleClick = () => {
    setQuatity(quatity + 1);
  };

  //   useEffect(()=>{
  //     setPrice(quatity * item_price)
  //   } , [quatity])

  const price = quatity * item_price;
  return (
    <>
      <div className="container">
        <button onClick={handleClick}>Add new Element</button>
        <br />
        <p>Counter :{quatity}</p>
        <p>Total Price : {price}</p>
      </div>
    </>
  );
}
