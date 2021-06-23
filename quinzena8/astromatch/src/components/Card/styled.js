import styled from "styled-components"

export const CardContainer = styled.div`
  background: url(${props => props.photo})  center top no-repeat;
  background-size: cover;
  width: 90%;
  height: 70%;
`

export const LayerTransparency = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 66%,rgba(0,0,0,0.9) 90%);
  color: whitesmoke;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`


