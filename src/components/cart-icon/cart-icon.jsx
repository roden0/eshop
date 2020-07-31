import React from 'react';

import { ReactComponent as BasketIcon } from '../../assets/basket.svg';

import './cart-icon.scss';

export const CartIcon = () => (
    <div className="basket">
        <BasketIcon className="basket-icon" />
        <span className="item-count">
            0
        </span>
    </div>
);