import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::before, *::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}
h1,h2,h4,h5,h6{
    display: inline-block;
    color: white;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, .6);
}


body{
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', 'Poppins',sans-serif;
    overflow-x: hidden;
    
}
`;

export default GlobalStyle;
