import { createGlobalStyle } from 'styled-components'
import {Colors} from '../constants/colors'
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100vh;
  }

  a{
    text-decoration: none;

    :hover {
      color: ${Colors.green};
    }
  }
`;
 
export default GlobalStyle;