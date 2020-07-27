import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/human.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.scss';

const Header = ({ currentUser }) => (
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
                <button className="option" onClick={(e) =>{
                    e.preventDefault();
                    auth.signOut();
                } }>Sign Out</button>
                :
                <Link className="option" to="/signin">
                    Sign In / Sign Up
                </Link>
            }

        </nav>
    </header>
);

export default Header;