import styled from 'styled-components'
import {Colors} from '../../constants/colors'

export const HeaderTag = styled.header`
    width: 100%;
    background-color: ${Colors.blue};
`
export const HeaderContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ButtonTheme = styled.button`
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
