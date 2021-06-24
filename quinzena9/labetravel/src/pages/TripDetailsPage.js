import { useHistory } from "react-router-dom";

export default function TripDetailsPage() {
  
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <p>TripDetailsPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
