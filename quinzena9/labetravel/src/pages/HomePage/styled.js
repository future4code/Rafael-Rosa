import styled from "styled-components";
import BannerIMG from '../../assets/banner-image.jpg'
import { green, white, yellow } from "../../constants/colors";


export const PageContainer = styled.div`
  height: calc(100vh + 105px);
  display: flex;
  flex-direction: column;
  background-color: #0F586C;
`

export const Banner = styled.div`
  background-image: url(${BannerIMG});
  background-position: 50% 30%;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    max-width: 60%;
  }
`
