import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/human.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import styled, {css} from 'styled-components';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>

            <OptionLink to="/shop">
                Contact
            </OptionLink>

            {
                currentUser ?
                <OptionLink as='a' href="#signout" onClick={(e) =>{
                    e.preventDefault();
                    auth.signOut();
                } }>Sign Out</OptionLink>
                :
                <OptionLink to="/signin">
                    Sign In / Sign Up
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropDown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

const HeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 4.5em;
    padding: 10px;
`

const OptionsContainer = styled.nav`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const OptionContainer = css`
    cursor: pointer;
    padding: 10px 15px;
`

const OptionLink = styled(Link)`
    ${OptionContainer}
`