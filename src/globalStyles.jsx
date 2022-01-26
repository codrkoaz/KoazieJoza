import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::before, *::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h4,h5,h6{
    display: inline-block;
    color: white;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.6);
}

body{
    margin: 0;
    padding: 0;
    ${'' /* overflow-x: hidden; */}
    font-family: 'Poppins',sans-serif;
}
`;

export default GlobalStyle;

// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
// *,*::before,*::after,h1,h2,h3,h4,h5,h6{
//     margin: 0;
//     padding: 0;
// }
// h1,h2,h3,h4,h5,h6{
//     display: inline-block;
// }
// body{
//     margin: 0;
//     overflow: hidden;
//     border: 10px solid black;

//     padding: 0;
//     font-family: 'Source Sans Pro',sans-serif;
// }
// `
// export default GlobalStyle;
