import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::before, *::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
}
h1,h2,h4,h5,h6{
    display: inline-block;
    color: white;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, .6);
}


body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins',sans-serif;
    
    @media only screen and (min-width: 768px) {
    body{
        font-size: 16px;
    }
}
@media only screen and (min-width: 480px) and (max-width:768px) {
    body{
        font-size: 15px;
    }
}

@media only screen and (max-width: 479px) {
    body{
        font-size: 14px;

    }
}
}
`;

export default GlobalStyle;
