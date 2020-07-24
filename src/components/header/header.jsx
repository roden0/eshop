import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/human.svg';

import './header.scss';

const Header = () => (
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
        </nav>
    </header>
);

export default Header;