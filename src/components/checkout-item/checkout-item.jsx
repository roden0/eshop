import React, { useContext } from 'react';

import { CartContext }  from '../../providers/cart/cart-provider';

import './checkout-item.scss';

const CheckoutItem = ({ item })=>{
    const {clear, addItem, removeItem} = useContext(CartContext);
    const { name, imageUrl, price, quantity } = item;
    return(
    <li className="checkout-item">
        <figure className="image-container">
            <img className="product-image" src={imageUrl} load="lazy" alt=""/>
        </figure>
        <span className="name">{name}</span>
        <span className="quantity">
            <span className="arrow left-arrow" onClick={()=> removeItem(item)}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow right-arrow" onClick={()=> addItem(item)}>&#10095;</span>
        </span>    
        <span className="price currency">{price}</span>
        <span className="remove" onClick={() => clear(item)}>&times;</span>
    </li>
)};

export default CheckoutItem;