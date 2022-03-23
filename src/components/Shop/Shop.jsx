import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const[products,setProducts] = useState([]);
    const[cart,setCart] = useState([]);
    
   

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(products =>setProducts(products));

    },[]);

    useEffect(()=>{
        const storedCart = getStoredCart() ;
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
           // console.log(addedProduct);
        }
        setCart(saveCart);
        
    },[products])
    const handleAddToCart = (product)=>{
        let newCart =[];
     // console.log(product);
   const exist = cart.find(data => data.id===product.id);
   if(!exist){
       console.log(product);
       product.quantity = 1;
       console.log(product);
       newCart = [...cart,product];
   }
   else {
       let rest = cart.filter(data => data.id!==product.id);
        exist.quantity = exist.quantity+1;
        newCart = [...rest,exist];
   }
      
      console.log(newCart);
      setCart(newCart);
      addToDb(product.id);
    };
    const clearCart = () =>{
        setCart([]);
    };
 
    return (
        <div className="shop-container">
            <div className='product-component'>
            {
             products.map(product =>
             <Product key={product.id} 
             product={product}
             handle = {handleAddToCart}>  
             </Product>)  
           }
            </div>
            <Cart cart={cart} clearCart={clearCart} ></Cart>
         
        </div>
    );
};

export default Shop;