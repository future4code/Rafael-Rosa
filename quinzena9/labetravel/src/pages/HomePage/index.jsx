import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, Banner } from './styled'
import { SolidYellowButton } from "../../styles/styles";


export default function HomePage(props) {

  const history = useHistory()

  const goToListTrips = () => {
    history.push("/trips/list")
  }

  return (
    <PageContainer>
      <Header />
      <Banner>
        <h1>
          ENCONTRE SUA PRÓXIMA VIAGEM E EMBARQUE CONOSCO!
        </h1>
        <div>
          <SolidYellowButton onClick={goToListTrips}>
            VER LISTA
          </SolidYellowButton>
        </div>
      </Banner>
      <Footer />
    </PageContainer>
  );
}
