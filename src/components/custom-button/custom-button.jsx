import React from 'react';

import styled, {css} from 'styled-components';

export const CustomButton = ({ children, ...props}) => (
    <CustomButtonContainer className="custom-button" {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

const getButtonStyles = props =>{
    let ret = props.inverted ? invertedButtonStyles : buttonStyles;

    if(props.isGoogleButton){
        ret = googleButtonStyles;
    }

    return ret;
}

const buttonStyles = css`
    background-color: #666;
    color: white;
    
    &:hover {
        background-color: #000;
        color: #fff;
      }
`

const invertedButtonStyles = css`
    background-color: #ccc;
    color: black;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`

const googleButtonStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: white;
        color: black;
      }
`

const CustomButtonContainer = styled.button`
    font-size: 1.1em;
    border-radius: .3em;
    cursor: pointer;
    padding: .3em 1em;
    margin: 1em auto;
    font-weight: bold;
    display: flex;
    justify-content: center;
    border: 0;
    ${getButtonStyles}
`
