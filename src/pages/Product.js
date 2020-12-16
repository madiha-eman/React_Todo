import React, { useState, useEffect } from 'react'
import Show from '../component/Show'


const Product = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(prod=>{
            console.log(prod)
            setproducts(prod)

        })
    },[])
    console.log(products)
    return (
               <>
            {products.map((product)=>(
                <Show product={product}/>
            ))}
        </>
        
    )
}

export default Product
