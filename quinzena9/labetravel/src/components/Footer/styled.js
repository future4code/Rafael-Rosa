import styled from "styled-components";
import { green, white, yellow } from "../../constants/colors";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10%;
  height: fit-content;
  background-color: ${green};
  color: ${white};

  a {
    text-decoration: none;
    color: ${white};
    padding: 0 5px;

    :hover {
      color: ${yellow};
    }
  }

`
