import React from 'react';

import styled from 'styled-components';

import Mosaic from '../components/mosaic/mosaic';

const HomePage = () => (
    <HomePageContainer>
        <Mosaic />
    </HomePageContainer>
);

export default HomePage;

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    @media screen and (max-width: 700px){
      padding: 0 3%
    }
`