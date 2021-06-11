import styled from 'styled-components'
import {Colors} from '../../constants/colors'

export const FormClosed = styled.div`
  border: none;
  border-radius: 25px;
  background-color: ${Colors.white};
  margin: 2px auto;
  padding: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img{
    max-width: 20px;
    margin: 0 10px;
  }
`

export const IconContainer = styled.div`
  display: flex;
`

export const ListBox = styled.div`
  width: 100%;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 10px;
`
export const NoMusicMessage = styled.div`
  color: ${Colors.white};
`

export const ItemList = styled.div`
  width: 50%;
  min-width: 260px;
  border: none;
  border-radius: 25px;
  background-color: ${Colors.white};
  margin: 2px auto;
  padding: 5px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  :hover, :active {
    background-color: ${Colors.green};
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const TrackName = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const DeleteButton = styled.button`
  background-color: ${Colors.gray};
  border: none;
  border-radius: 25px;
  padding: 5px 10px;
  margin: 2px 10px;
  height: fit-content;
  transition: all 100ms ease-out;

  :hover {
    cursor: pointer;
  }
`