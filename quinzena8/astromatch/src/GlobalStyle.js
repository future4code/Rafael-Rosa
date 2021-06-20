import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
      font-family: 'Open Sans', sans-serif;
      width: 100vw;
      height: 100vh;
    }

    h1 {
      font-size: 27px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

`

export default GlobalStyle