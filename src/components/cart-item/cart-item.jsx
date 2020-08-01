import React from 'react';

import './cart-item.scss';

export const CartItem = ({item:{ imageUrl, price, name, quantity }}) => (
    <li className="cart-item">
        <img className="image" src={imageUrl} load="lazy" alt=""/>
        <section className="details">
            <p className="name">
                {name}
            </p>
            <p className="quantity">
                {quantity}x<span className="currency">{price}</span> = <span className="price currency">{price * quantity}</span>
            </p>
        </section>
    </li>
)