import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    padding: 3% 6%;

    @media screen and (max-width: 700px){
        padding: 0 3%;
    }
}

a {
    text-decoration: none;
    color: inherit;
}

.currency:after{
    content: "€";
}
`;