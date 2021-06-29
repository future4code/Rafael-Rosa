import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

export default function AdminHomePage() {

  // useEffect(() => {
  //   if (!localStorage.getItem("token")){
  //     history.push('/login')
  //   }
  // }, [])

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <div>
      <Header />
      <p>AdminHomePage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
