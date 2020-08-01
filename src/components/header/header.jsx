import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/human.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>

            <Link className="option" to="/shop">
                Contact
            </Link>

            {
                currentUser ?
                <a href="#signout" className="option" onClick={(e) =>{
                    e.preventDefault();
                    auth.signOut();
                } }>Sign Out</a>
                :
                <Link className="option" to="/signin">
                    Sign In / Sign Up
                </Link>
            }
            <CartIcon />
        </nav>
        { hidden ? null : <CartDropDown/>}
    </header>
);

const mapStateToProps = ({user:{currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);