import styled from "styled-components";
import { gray, softblue, softred } from "../../constants/colors";


export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const MainContainer = styled.div`
  background-color: ${gray};
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const MessageNoProfileContainer = styled.div`
  text-align: center;

  span {
    color: ${softblue};
    font-weight: 600;
    cursor: pointer;
  }
  span:hover {
    color: ${softred};
  }
`
