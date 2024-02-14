import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";

const handleClick = () => {};
export default function FetchingUseEffect() {
  const [id, setId] = useState(1);
  return (
    <>
      <div className="container">
        <Content id={id} />
        <button onClick={() => setId(Math.floor(Math.random() * 100))}>
          Random content
        </button>
      </div>
      ;
    </>
  );
}

export function Content({ id }: { id?: number }) {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setText(data.description));
  }, [id]);
  return (
    <>
      <div className="card" aria-hidden="true">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
      <div style={{ padding: 20 }}>{text}</div>
    </>
  );
}


export function Placeholder(){
<>
<div className="card" aria-hidden="true">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
</>
}