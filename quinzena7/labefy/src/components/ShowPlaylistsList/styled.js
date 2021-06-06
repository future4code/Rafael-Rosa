import styled from 'styled-components'
import {Colors} from '../../constants/colors'

export const ListBox = styled.div`
  width: 50%;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 10px;
`

export const ItemList = styled.div`
  width: 90%;
  border: none;
  border-radius: 25px;
  background-color: ${Colors.white};
  margin: 2px auto;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${Colors.green};
  }
`
export const PlaylistName = styled.p`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const PlaylistButton = styled.button`
  margin: 0 5px;
`
