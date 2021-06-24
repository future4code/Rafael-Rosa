import { useHistory } from "react-router-dom";

export default function CreateTripPage() {
  
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <p>CreateTripPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
