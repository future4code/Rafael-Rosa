import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

export default function TripDetailsPage() {
  
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <Header />
      <p>TripDetailsPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
