import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function FetchingUseEffect() {
  const [id, setId] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Content />
          </div>
        </div>
        {/* <Content id={id} />
        <button onClick={() => setId(Math.floor(Math.random() * 100))}>
          Random Content!
        </button> */}
      </div>
    </>
  );
}

export function Content({ id }: { id?: number }) {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
        }, 2000);
      });
  }, [id]);

  return (
    <div className="row row-cols-4 mt-5">
      {products == null ? (
        <>
          <Placeholder count={8} />
        </>
      ) : (
        <>
          {products.map((p) => (
            <div className="col">
              <ProductCard item={p} />{" "}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export function ProductCard({ item }: { item: Product }) {
  return (
    <>
      <div className="card p-3 mb-3" aria-hidden="true">
        <div className="card-img-container">
          <img className="rounded " src={item.image} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title  ">
            <span className=" col-6">
              {item.title.split(" ").slice(0, 3).join(" ")}
            </span>
          </h5>
          <p className="card-text  ">
            <span className="card-text card-text-content">
              {item.description.split(" ").slice(0, 11).join(" ")}
            </span>
            <hr />
            <span className="card-text">{item.price}</span>
            <br />
            <span className="card-text">{item.category}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export function Placeholder({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <>
          <div className="col mb-3">
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
          </div>
        </>
      ))}
    </>
  );
}
