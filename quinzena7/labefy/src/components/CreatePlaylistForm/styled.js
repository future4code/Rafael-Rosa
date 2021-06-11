import styled from 'styled-components'
import { Colors } from '../../constants/colors'

export const FormBox = styled.div`
  width: 50%;
  min-width: 272px;
  border: none;
  border-radius: 25px;
  background-color: ${Colors.white};
  margin: 2px auto;
  padding: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputField = styled.input`
  padding: 5px 15px;

  :focus-visible {
    outline: none;
  }
`

export const FormButton = styled.button`
  background-color: ${Colors.gray};
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  margin: 0 10px;
  transition: all 100ms ease-out;

  :hover {
    background-color: ${Colors.green};
    cursor: pointer;
  }
`
