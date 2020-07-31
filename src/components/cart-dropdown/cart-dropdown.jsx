import React from 'react';

import './cart-dropdown.scss';

import { CustomButton } from '../custom-button/custom-button';

export const CartDropDown = () => (
    <aside className="cart-dropdown">
        <ul className="cart-items">

        </ul>
        <CustomButton>
            Go Checkout
        </CustomButton>
    </aside>
);