import { FooterContainer } from "./styled";
import LogoWhite from '../../assets/labetravel-logo-white.svg'

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src={LogoWhite} alt={'Logotipo Labetravel'} />
      </div>
      <div>
        Desenvolvido por
        <a href={'https://www.linkedin.com/in/rafaelsilveiradarosa'} target={'_blank'}>
           Rafael S. da Rosa
        </a>
      </div>
    </FooterContainer>
  );
}
