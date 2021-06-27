import { FooterContainer } from "./styled";
import LogoWhite from '../../assets/labetravel-logo-white.svg'

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src={LogoWhite} alt={'Logotipo Labetravel'}/>
      </div>
    </FooterContainer>
  );
}
