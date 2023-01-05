import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --main-bg-color: #030917;
      --color-blue-500:  #1850E1;
      --color-blue-700: #0C2A75;
      --color-gray-500:  #6c757d;
    }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: 0;
  
  }
  body {
    background-color: var(--main-bg-color);
  } 

  html {
    font-size: 62.5%;
    height: 100%;
    
  }
  body {
  
   height:100%;
   position:relative;
   overflow-x: hidden;

  }

  img {
    max-width: 100%;
    display: block;
  }
  .text-gray {
    color: #CCD6F6;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Archivo Black', sans-serif!important;
  }
 
`

export default GlobalStyle;