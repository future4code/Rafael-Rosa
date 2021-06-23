import styled from "styled-components"
import { gray } from "./constants/colors"

export const AppContainer = styled.div`
  width: 337px;
  min-height: 600px;
  max-height: 100vh;
  height: 600px;
  margin: 0 auto;
  text-align: center;
`

export const Loader = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${gray};
`

export const AlertMatch = styled.div`
  height: 150px;
  width: 337px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  margin: 0 auto;
  background-color: green;
  color: whitesmoke;
  border-radius: 0 0 25px 25px;
`