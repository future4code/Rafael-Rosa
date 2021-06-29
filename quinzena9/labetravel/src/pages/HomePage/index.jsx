import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, Banner } from './styled'


export default function HomePage(props) {

  const history = useHistory()

  const goToListTrips = () => {
    history.push("/trips/list")
  }

  return (
    <PageContainer>
      {/* <button onClick={props.getTripsList}>getTripsList</button> */}
      <Header />
      <Banner>
        <h1>
          ENCONTRE SUA PRÓXIMA VIAGEM E EMBARQUE CONOSCO!
        </h1>
        <div>
          <button onClick={goToListTrips}>VER LISTA</button>
        </div>
      </Banner>
      <Footer />
    </PageContainer>
  );
}
