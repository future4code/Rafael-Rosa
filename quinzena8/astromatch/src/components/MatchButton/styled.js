import styled from "styled-components"
import { gray } from "../../constants/colors"

export const ButtonTag = styled.button`
  background-color: ${gray};
  border: 1px solid ${props => props.borderColor};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 200ms;

  :hover {
    background-color: ${props => props.borderColor};
  }
`

