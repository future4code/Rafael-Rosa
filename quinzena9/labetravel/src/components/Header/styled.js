import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0F586C;
`

export const HeaderButtonContainer = styled.div`
  border: 1px solid green;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderButton = styled.button`
  margin: 5px 10px;
  padding: 5px 10px;
  background-color: transparent;
  color: whitesmoke;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #fdb927;
  }
`

