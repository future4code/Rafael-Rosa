import { useHistory } from "react-router-dom";

export default function ApplicationFormPage() {
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <p>ApplicationFormPage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
