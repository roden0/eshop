import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({amount}) => {
    const amountForStripe = amount * 100;
    const pubKey = "pk_test_51HBiQSLwoiP51HYTEqPHsYvdGKbJJjlX81aAAQO3p6zOGNBtORpTmlsuiD9RmFZuspUmPBlRzUAGVj33v9TkBESr00BF7QvAId";

    const onToken = token =>{
        console.log(token);
    }

    return(
        <StripeCheckout
        token={onToken}
        amount={amountForStripe}
        currency="EUR"
        locale="es"
        label="Pay now"
        panelLabel="Pay now"
        name="SerEsHumano Shop"
        billingAddress
        shippingAddress
        description={`Your final price is ${amount}€`}
        stripeKey={pubKey}
         />
    );
}

export default StripeCheckoutButton;