import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } })=>(
    <li className="checkout-item">
        <figure className="image-container">
            <img className="product-image" src={imageUrl} load="lazy" alt=""/>
        </figure>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price currency">{price}</span>
        <span className="remove">&times;</span>
    </li>
);

export default CheckoutItem;