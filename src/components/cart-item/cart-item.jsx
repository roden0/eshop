import React from 'react';

import './cart-item.scss';

export const CartItem = ({item:{ imageUrl, price, name, quantity }}) => (
    <li className="cart-item">
        <figure className="image">
            <img src={imageUrl} load="lazy" alt=""/>
        </figure>
        
        <section className="details">
            <p className="name">
                {name}
            </p>
            <span className="price currency">{price * quantity}</span>
            <p className="quantity">
                x{quantity}
            </p>
        </section>
    </li>
)

export default React.memo(CartItem);