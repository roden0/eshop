import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/human.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { CartContext } from '../../providers/cart/cart-provider';

import { auth } from '../../firebase/firebase.utils';

import styled, {css} from 'styled-components';

const Header = ({ currentUser }) => {

    const {hidden} = useContext(CartContext);
    
    return(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/collections">
                Collections
            </OptionLink>

            <OptionLink to="/contact">
                Contact
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='a' href="#signout" onClick={()=>auth.signOut()}>
                    Sign Out
                </OptionLink>
                :
                <OptionLink to="/signin">
                    Sign In / Sign Up
                </OptionLink>
            }
            
            <CartIcon />
            
        </OptionsContainer>
        { hidden ? null : <CartDropDown/>}
    </HeaderContainer>
)};

export default Header;

const HeaderContainer = styled.header`
    height: 5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;

    @media screen and (max-width: 700px){
        height: 3em;
        margin-bottom: 2%;
    }
`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 4.5em;
    padding: 10px;

    @media screen and (max-width: 700px){
        width: 3.3em;
    }
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