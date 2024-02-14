import React, { useEffect, useState } from 'react'

interface Product {
    title:string,
    description:string,
    category:string , 
    price:number,
    image:string,
}
export default function InitialState() {
    const [product , setProduct] = useState<Product | null>(null)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/3").then((response)=>response.json().then((data) =>{
            setTimeout(()=>{
                setProduct(data) 
                setLoading(false)
            } ,2000)
           
        })
        )
    },[])
  return (
    <>
    {loading ? (
        "Loading ..."
    ): (
    <>
    <div className='container'>
        {product?.title && <h1>{product?.title}</h1>}
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <img src={product?.image} alt={product?.title} />
    </div>
    </>
    )}
  </> 
  )
}
