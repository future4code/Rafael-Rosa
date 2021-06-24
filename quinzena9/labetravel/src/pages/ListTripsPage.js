import { useHistory } from "react-router-dom";

export default function ListTripsPage() {
  
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <p>ListTripsPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
