import styled from "styled-components";
import BackgroundImage from "../../assets/banner-image.jpg"
import { green, white, yellow } from "../../constants/colors";


export const PageContainer = styled.div`
  min-height: calc(100vh + 105px);
  display: flex;
  flex-direction: column;
  background-color: ${white};
`

export const TitleContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ListContainer = styled.div`
  height: 100%;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
`

export const CardTrip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${green};
  border-radius: 10px;
  box-shadow: -4px 4px 1px 0px ${yellow};
  padding: 10px;
  width: 80%;
  max-width: 800px;
  margin: 10px;
  cursor: pointer;

  h2, strong {
    color: ${yellow};
  }
  
  p {
    color: ${white};
  }
`

