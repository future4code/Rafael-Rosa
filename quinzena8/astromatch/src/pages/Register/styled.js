import styled from "styled-components";
import { gray, softblue } from "../../constants/colors";

export const PageContainer = styled.div`
  background-color: ${gray};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterBox = styled.div`
  background-color: #FFF;
  border-radius: 25px;
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;

  input {
    width: 80%;
    border: 1px solid ${softblue};
    border-radius: 5px;
    background-color: ${gray};
    padding: 5px;
    margin: 15px auto;
  }

  button {
    background-color: ${gray};
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    transition: all 200ms;
  }

  button:hover {
    background-color: ${softblue};
    color: ${gray};
  }
`

