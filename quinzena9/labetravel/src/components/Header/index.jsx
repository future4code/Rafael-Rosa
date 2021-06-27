import { HeaderContainer, HeaderButtonContainer, HeaderButton } from "./styled";
import Logo from '../../assets/labetravel-logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt={'Logotipo Labetravel'}/>
      </div>
      <HeaderButtonContainer>
        <HeaderButton>
          <i className="fas fa-user-lock"></i> Área Administrativa
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}
