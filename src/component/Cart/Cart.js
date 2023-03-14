import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {


let total = 0;
let shipping = 0;



for(const product of cart){
    
     total = total + product.price;
     shipping = shipping + product.shipping; 
    
}
let tax = parseFloat((total * 0.1).toFixed(2)); 
let grandTotal = total + shipping + tax;

    return (
        <div className='cart-info'>
            <h1>Order Summary</h1>
                <h2>Selected Item: {cart.length}</h2>
                <p>Total Price : ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;