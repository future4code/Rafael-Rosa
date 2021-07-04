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

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-top: 20px;
`

export const Form = styled.form`
  background-color: ${green};
  border-radius: 25px;
  min-height: 150px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input{
    margin: 10px 0;
    padding: 5px;
    outline: none;
  }
`