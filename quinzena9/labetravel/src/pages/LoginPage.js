import { useHistory } from "react-router-dom";

export default function LoginPage() {
  
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
