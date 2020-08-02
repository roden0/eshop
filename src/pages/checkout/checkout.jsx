import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import './checkout.scss';

const CheckoutPage = ({items, totalPrice}) =>(
    <section className="page checkout-page">
        <header className="header">
            <span className="block">Product</span>
            <span className="block">Description</span>
            <span className="block">Quantity</span>
            <span className="block">Price</span>
            <span className="block">Remove</span>
        </header>
        <ul className="checkout-items">
            {
                items.map(item=>(<CheckoutItem key={item.id} item={item} />))
            }
        </ul>
        <footer className="checkout-footer">
            <p className="total currency">
               Total: {totalPrice}
            </p>
            <StripeCheckoutButton amount={totalPrice}/>
        </footer>
    </section>
);

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);