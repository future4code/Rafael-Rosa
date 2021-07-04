import styled from "styled-components";
import { green, white, yellow } from "../../constants/colors";

export const HeaderContainer = styled.header`
  /* height: fit-content; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${green};
  color: ${white};

  @media(max-width: 600px){
    justify-content: center;
  }
`

export const LogoImage = styled.img`
  cursor: pointer;
`

export const HeaderButtonContainer = styled.div`
  width: 35%;
  
  @media(max-width: 600px){
    width: 100%;
  }
`
export const LoggedOut = styled(HeaderButtonContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoggedIn = styled(HeaderButtonContainer)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr 1fr;

  p{
    grid-column: span 2;
    text-align: center;
  }

  span {
    color: ${yellow}
  }
`

