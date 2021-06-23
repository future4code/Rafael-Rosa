import { createGlobalStyle } from 'styled-components'
import { softblue } from './constants/colors'

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
    padding-top: 10px;
  }

  h1 {
    font-size: 27px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${softblue} #000;
  }

  /* Chrome, Edge, e Safari */
  *::-webkit-scrollbar {
    width: 12px;
    padding-top: 10px
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${softblue};
    border-radius: 20px;
  }
`

export default GlobalStyle