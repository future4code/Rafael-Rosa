import styled from "styled-components";
import BannerIMG from '../../assets/banner-image.jpg'


export const PageContainer = styled.div`
  height: calc(100vh + 105px);
  display: flex;
  flex-direction: column;
  background-color: #0F586C;
  color: red;
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
`
