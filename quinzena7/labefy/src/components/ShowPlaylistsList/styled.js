import styled from 'styled-components'

export const ListBox = styled.div`
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const IndividualPlaylistBox = styled.div`
  width: 50%;
  border: 1px solid #000;
  margin: 2px auto;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  button{
    margin: 0 5px;
  }
`