import styled from 'styled-components'
import {Colors} from '../../constants/colors'

export const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  background-color: aqua;
  height: 100vh;
`;

export const MainContainer = styled.main`
    width: 100%;
    background-color: ${Colors.darkblue};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
  color: ${Colors.white};
`