import styled from "styled-components";
import { gray } from "../../constants/colors";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const MainContainer = styled.div`
  background-color: ${gray};
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`