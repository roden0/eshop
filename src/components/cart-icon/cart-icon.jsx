import React, { useContext } from 'react';

import {CartContext} from '../../providers/cart/cart-provider';

import { ReactComponent as BasketIcon } from '../../assets/basket.svg';

import './cart-icon.scss';

export const CartIcon = () => {
    const { toggleHidden, itemCount } = useContext(CartContext);

    return(
    <div className="basket" onClick={toggleHidden}>
        <BasketIcon className="basket-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)};

export default CartIcon;