import styled from "styled-components"
import { green, white, yellow } from "../constants/colors"


export const TransparentButton = styled.button`
  margin: 5px 10px;
  padding: 5px 10px;
  background-color: transparent;
  color: ${white};
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${yellow};
  }
`

export const SolidYellowButton = styled.button`
  margin: 5px 2px;
  padding: 5px 10px;
  background-color: ${yellow};
  color: ${green};
  font-weight: 600;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${white};
    /* color: ${yellow}; */
  }
`

export const SolidGreenButton = styled.button`
  margin: 5px 10px;
  padding: 5px 10px;
  background-color: ${green};
  color: ${white};
  font-weight: 600;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${yellow};
  }
`