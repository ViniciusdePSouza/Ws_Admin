import { useNavigate } from "react-router-dom";
import { TextButton } from "../TextButton";
import { Container } from "./styles";

export function Menu() {
  const navigate = useNavigate()

  function goToProfile() {
    navigate('/profile')
  }

  function goToHome() {
    navigate('/home')
  }

  function handleLogout() {
    localStorage.setItem('e', JSON.stringify({}))
    navigate('/')
  }

  return (
    <Container>
      <TextButton title={"Products"} isLoading={false} onClick={goToHome}/>
      <TextButton title={"Company Profile"} isLoading={false} onClick={goToProfile}/>
      <TextButton title={"Logout"} isLoading={false} onClick={handleLogout}/>
    </Container>
  );
}
