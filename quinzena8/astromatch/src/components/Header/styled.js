import styled from "styled-components";
import { gray, softblue } from "../../constants/colors";

export const HeaderTag = styled.header`
  background-color: ${gray};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ImageLogo = styled.img`
  max-width: 70%;
`
export const HeaderButton = styled.button`
  background-color: ${gray};
  max-width: 10%;
  border: none;
  cursor: pointer;
`
export const ClearListButton = styled(HeaderButton)`
  padding-left: 5px;
  transition: all 400ms;

  :hover {
    img{
      display: none;
    }
    :after{
      color: ${softblue};
      content: 'Limpar Lista'
    }
  }
`
export const ChangePageButton = styled(HeaderButton)`
  :hover {
    background-color: #e5e5e5;
  }
`
export const IconButton = styled.img`
  max-width: 100%;
`