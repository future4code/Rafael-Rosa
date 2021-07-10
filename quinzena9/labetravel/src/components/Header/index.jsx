import { useHistory } from "react-router-dom";

import { HeaderContainer, LogoImage, LoggedIn, LoggedOut } from "./styled";
import { TransparentButton } from "../../styles/styles";
import Logo from '../../assets/labetravel-logo.svg'

export default function Header() {

  const userEmail = localStorage.getItem("user")

  const history = useHistory()

  const changePage = (path) => {
    history.push(path)
  }

  const doLogout = () => {
    const confirm = window.confirm('Você realmente deseja desconectar?')
    if (confirm) {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      changePage('/')
    }
  }

  return (
    <HeaderContainer>
      <div>
        <LogoImage
          src={Logo}
          alt={'Logotipo Labetravel'}
          onClick={() => changePage('/')}
        />
      </div>

      {userEmail ?
        <LoggedIn>
          <p>Olá <span>{userEmail}</span></p>
          <TransparentButton
            onClick={() => changePage('/admin/trips/list')}
          >
            <i className="fas fa-cog"></i> Acessar Painel
          </TransparentButton>
          <TransparentButton
            onClick={doLogout}
          >
            <i className="fas fa-times-circle"></i> Fazer Logout
          </TransparentButton>
        </LoggedIn> :
        <LoggedOut>
          <TransparentButton
            onClick={() => changePage('/login')}
          >
            <i className="fas fa-user-lock"></i> Área Administrativa
          </TransparentButton>
        </LoggedOut>
      }

    </HeaderContainer>
  );
}
