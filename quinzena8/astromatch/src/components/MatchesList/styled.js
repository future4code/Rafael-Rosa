import styled from "styled-components"
import {softblue} from "../../constants/colors"

export const MatchesListContainer = styled.div`
  width: 90%;
  height: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`
export const MatchItem = styled.div`
  background-color: ${softblue};
  color: whitesmoke;
  padding: 8px 4px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 5px auto;
  width: 100%;
  overflow-wrap: anywhere;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ItemPhoto = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;

  img {
    max-width: 100%;
    height: 50px;
    object-fit: cover;
  }
`
export const ItemDescription = styled.p`
  padding: 0 10px;
`