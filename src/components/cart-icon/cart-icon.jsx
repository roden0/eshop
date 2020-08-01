import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart-actions';
import { selectItemCount } from '../../redux/cart/cart-selectors';

import { ReactComponent as BasketIcon } from '../../assets/basket.svg';

import './cart-icon.scss';

export const CartIcon = ({toggleCart, itemCount}) => (
    <div className="basket" onClick={toggleCart}>
        <BasketIcon className="basket-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCart: ()=> dispatch(toggleCart())
});

const mapStateToProps = state => ({
    itemCount: selectItemCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);