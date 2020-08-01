import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart-actions';

import { ReactComponent as BasketIcon } from '../../assets/basket.svg';

import './cart-icon.scss';

export const CartIcon = ({toggleCart}) => (
    <div className="basket" onClick={toggleCart}>
        <BasketIcon className="basket-icon" />
        <span className="item-count">
            0
        </span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCart: ()=> dispatch(toggleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);