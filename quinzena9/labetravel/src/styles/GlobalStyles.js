import { createGlobalStyle } from "styled-components"
import { green, yellow } from "../constants/colors"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    color: ${green};
    background-color: #ffffffb3;
    padding: 2px 23px;
    border-radius: 25px;

    @media(max-width: 600px){
      font-size: larger;
    }
  }
`

export default GlobalStyles