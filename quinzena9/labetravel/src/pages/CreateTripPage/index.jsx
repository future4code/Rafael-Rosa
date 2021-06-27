import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer } from './styled'

export default function CreateTripPage() {

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <PageContainer>
      <Header />
      <p>CreateTripPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
      <Footer />
    </PageContainer>
  );
}
