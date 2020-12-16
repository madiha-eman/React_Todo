import React from 'react'

const Show = ({product}) => {
    return (
        
              <div key={product.id}>
        <div className='title'>{product.category}</div>
        <div><img width='100px' height='100px' src={product.image}></img></div>
        <button className='buyBtn'>Buy Now</button>
        </div>
       
    )
}

export default Show
