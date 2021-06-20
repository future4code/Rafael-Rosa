import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const Header = styled.header`
  background-color: whitesmoke;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-color: yellow;
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  /* background-color: blueviolet; */
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
