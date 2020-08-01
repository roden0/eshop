import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCart } from '../../redux/cart/cart-actions';

import './cart-dropdown.scss';

import { CartItem } from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

const CartDropDown = ({items, history, dispatch}) => (
    <aside className="cart-dropdown">
        <ul className="cart-items">
            {
            items && items.length ?
            items.map(item=>(
                <CartItem key={item.id} item={item}/>
                )) :
            <span className="empty-cart">Cart is empty</span>
            }
        </ul>
        {
            items && items.length ?
            <CustomButton onClick={()=>{
                    dispatch(toggleCart());
                    history.push('/checkout')
                }
            }>
                Go Checkout
            </CustomButton>
            :
            null
        }
    </aside>
);

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));