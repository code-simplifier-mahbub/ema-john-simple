import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Product.css'

const Product = ({product, handleAddToCard}) => {

    const{name, img, price, seller, ratings} = product;
    // const{addEventHandler} = props;

    
    
   
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Seller: {seller}</p>
                <p className='product-rating'>Ratings: {ratings}</p>
            </div>
            <div className="product-cart">
                <button onClick={() => handleAddToCard(product)} className= "btn-cart">
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;