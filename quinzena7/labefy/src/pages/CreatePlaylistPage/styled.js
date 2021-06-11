import styled from 'styled-components'
import {Colors} from '../../constants/colors'
 
export const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 115px 6fr 100px;
  height: 100vh;
  width: 100vw;
`;

export const MainTag = styled.main`
    width: 100%;
    background-color: ${Colors.darkblue};
`
export const MainContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
  color: ${Colors.white};
`