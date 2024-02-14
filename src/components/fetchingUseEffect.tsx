import React, { useEffect, useState } from "react";

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
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setText(data.body));
  }, [id]);
  return <div>{text}</div>;
}
