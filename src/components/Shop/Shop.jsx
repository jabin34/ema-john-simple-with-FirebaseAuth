import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const[products,setProducts] = useState([]);
    const[cart,setCart] = useState([]);
    const[total,setTotal] = useState(0);
    const[grandTotal,setGrandTotal] = useState(0);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(products =>setProducts(products));

    },[]);
    const handleAddToCart = (product)=>{
      console.log(product);
      const newCart = [...cart,product];
      const newTotal = total+ product.price;
      const newgrandTotal = newTotal+5+114;
      setGrandTotal(newgrandTotal);

      setTotal(newTotal)
      setCart(newCart);
    };
    const clearCart = () =>{
        setCart([]);
      setTotal(0);
      setGrandTotal(0);
    };
 
    return (
        <div className="shop-container">
            <div className='product-component'>
            {
             products.map(product =>
             <Product key={product.id} 
             product={product}
             handle = {handleAddToCart}  
             >  
             
             </Product>)  
           }
            </div>
            <div className='order'>
                <h4>Order Summary</h4>
                <div>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total price:${total} </p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <p>Grand Total:${grandTotal}</p>
                    </div>
                    <div>
                        <button onClick={clearCart}>Clear Cart</button>
                    </div>
            </div>
         
        </div>
    );
};

export default Shop;