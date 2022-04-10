import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, clearCart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        console.log(product);
         quantity = quantity+product.quantity;
         console.log(quantity);
        total = total+product.price*product.quantity;
        shipping =  shipping+product.shipping;
    }
   const tax = (total*0.1).toFixed(2);
   const grandTotal = total+shipping+parseFloat(tax);
    return (
        <div className='order'>
                <h4>Order Summary</h4>
                <div>
                    <p>Selected Items: {quantity}</p>
                    <p>Total price:${total} </p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <p>Grand Total:${grandTotal.toFixed(2)}</p>
                    </div>
                    <div>
                        <button onClick={clearCart}>Clear Cart</button>
                        {props.children}
                    </div>
            </div>
    );
};

export default Cart;