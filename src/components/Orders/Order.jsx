import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Order = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    const[cart,setCart] = useCart(products);
    const clearCart = () =>{
        setCart([]);
    };
   const  handleRemoveProduct = product =>{
         const rest =cart.filter(pd=>pd.id!==product.id);
         setCart(rest);
         removeFromDb(product.id);
    }
    return (
        <div className="shop-container">
        <div className='order-container'>
          {
              cart.map((product) =>
              (<ReviewItem 
                key={product.id} 
                product={product}
                handleRemoveProduct ={handleRemoveProduct}
                 ></ReviewItem>))
          }
        </div>
        <Cart cart={cart} clearCart={clearCart} >
            <button onClick={()=>{navigate('/shipment')}}> Shipment </button>
        </Cart>
     
    </div>
    );
};

export default Order;