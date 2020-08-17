import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(err){
        return { hasError: true };
    }

    componentDidCatch(e, i){
        console.trace(i);
        console.error(e);
    }

    render(){
        let ret = this.props.children;

        if(this.state.hasError){
            ret = (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png'/>
                <ErrorImageText>Oh no! We tripped up!</ErrorImageText>
            </ErrorImageOverlay>
            );
        }

        return ret;
    }
}

export default ErrorBoundary;


export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

