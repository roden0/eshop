import React, {useContext} from 'react';

import { withRouter } from 'react-router-dom';

import { CartContext } from '../../providers/cart/cart-provider';

import './cart-dropdown.scss';

import { CartItem } from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

const CartDropDown = ({history}) => {
    
    const {toggleHidden, items} = useContext(CartContext);

    return(
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
                    toggleHidden();
                    history.push('/checkout')
                }
            }>
                Go Checkout
            </CustomButton>
            :
            null
        }
    </aside>
)};

export default withRouter(CartDropDown);