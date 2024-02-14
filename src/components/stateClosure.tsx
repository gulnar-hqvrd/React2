import React, { useEffect, useState } from "react";

export default function StateClosure() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log("intervat function is running");
  //       setCount(count + 1);
  //     }, 100);
  //     return () => clearInterval(interval);
  //   }, [count]);
  //   return <div className="container">Count : {count}</div>;
  // }



//   Second part --------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log("intervat function is running");
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return <div className="container">Count : {count}</div>;
}