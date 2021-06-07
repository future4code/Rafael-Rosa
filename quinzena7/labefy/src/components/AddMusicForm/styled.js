import styled from 'styled-components'
import {Colors} from '../../constants/colors'

export const AddMusicBox = styled.div`
  border: none;
  border-radius: 25px;
  background-color: ${Colors.white};
  margin: 2px auto;
  padding: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img{
    max-width: 20px;
    margin: 0 10px;
  }
`

export const IconContainer = styled.div`
  display: flex;
`

export const InputField = styled.input`
  padding: 5px 15px;
  margin: 2px;

  :focus-visible {
    outline: none;
  }
`
export const FormButton = styled.button`
  background-color: ${Colors.gray};
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  margin: 2px 10px;
  transition: all 100ms ease-out;

  :hover {
    background-color: ${Colors.green};
    cursor: pointer;
  }
`
