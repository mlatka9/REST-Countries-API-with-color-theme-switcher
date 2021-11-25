import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


html{ 
    box-sizing: border-box;
}
*,*::after,*::before{
    box-sizing: inherit;
} 
body{
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
}
a, button{
    font-family: inherit;
}
`;
