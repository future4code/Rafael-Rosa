import { HeaderContainer, LogoImage, HeaderButtonContainer, HeaderButton } from "./styled";
import Logo from '../../assets/labetravel-logo.svg'
import { useHistory } from "react-router-dom";

export default function Header() {

  const history = useHistory()

  const changePage = (path) => {
    history.push(path)
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

      <button
        onClick={() => changePage('/trips/list')}>
        ListTrips
      </button>

      <button
        onClick={() => changePage('/trips/application')}>
        ApplicationForm
      </button>

      <button
        onClick={() => changePage('/login')}>
        Login
      </button>

      <button
        onClick={() => changePage('/admin/trips/list')}>
        AdminHome
      </button>

      <button
        onClick={() => changePage('/admin/trips/:id')}>
        TripDetails
      </button>

      <button
        onClick={() => changePage('/admin/trips/create')}>
        CreateTrip
      </button>

      <HeaderButtonContainer>
        <HeaderButton
          onClick={() => changePage('/login')}
        >
          <i className="fas fa-user-lock"></i> Área Administrativa
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}
