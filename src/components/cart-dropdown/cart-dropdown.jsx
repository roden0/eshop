import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart-selectors';

import './cart-dropdown.scss';

import { CartItem } from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

const CartDropDown = ({items}) => (
    <aside className="cart-dropdown">
        <ul className="cart-items">
            {
            items && items.length ?
            items.map(item=>(
                <CartItem key={item.id} item={item}/>
                )) :
            null
            }
        </ul>
        <CustomButton>
            Go Checkout
        </CustomButton>
    </aside>
);

const mapStateToProps = state =>({
    items: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropDown);