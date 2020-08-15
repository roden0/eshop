import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { CartContext } from '../../providers/cart/cart-provider';

import './checkout.scss';

const CheckoutPage = () =>{
    const {items, totalPrice} = useContext(CartContext);

    return(
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
)};

export default CheckoutPage;