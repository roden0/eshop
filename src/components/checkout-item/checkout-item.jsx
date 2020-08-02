import React from 'react';

import { connect } from 'react-redux';

import { removeProduct, addItem, removeItem } from '../../redux/cart/cart-actions';

import './checkout-item.scss';

const CheckoutItem = ({ item, clearItem, increase, decrease })=>{
    const { name, imageUrl, price, quantity } = item;
    return(
    <li className="checkout-item">
        <figure className="image-container">
            <img className="product-image" src={imageUrl} load="lazy" alt=""/>
        </figure>
        <span className="name">{name}</span>
        <span className="quantity">
            <span className="arrow left-arrow" onClick={()=> decrease(item)}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow right-arrow" onClick={()=> increase(item)}>&#10095;</span>
        </span>    
        <span className="price currency">{price}</span>
        <span className="remove" onClick={() => clearItem(item)}>&times;</span>
    </li>
)};


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeProduct(item)),
    increase: item => dispatch(addItem(item)),
    decrease: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);