import { useHistory } from "react-router-dom";

export default function AdminHomePage() {

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
