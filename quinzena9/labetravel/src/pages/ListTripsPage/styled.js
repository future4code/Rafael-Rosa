import styled from "styled-components";
import BackgroundImage from "../../assets/banner-image.jpg"
import { green, white, yellow } from "../../constants/colors";


export const PageContainer = styled.div`
  height: calc(100vh + 105px);
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const CardTrip = styled.div`
  background-color: ${green};
  border-radius: 10px;
  box-shadow: -4px 4px 1px 0px ${yellow};
  padding: 10px;
  width: 300px;
  height: 250px;
  margin: 10px;

  h2, strong {
    color: ${yellow};
  }
  
  p {
    color: ${white};
  }
`

