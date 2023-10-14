import { useNavigate } from "react-router-dom";
import { TextButton } from "../TextButton";
import { Container } from "./styles";

import signOutIcon from '../../assets/botao-de-logout-delineado.png'
import profileIcon from '../../assets/companhia.png'
import productsIcon from '../../assets/caracteristicas.png'

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
      <TextButton title={"Products"} isLoading={false} icon={productsIcon} onClick={goToHome} />
      <TextButton title={"Company Profile"} isLoading={false} onClick={goToProfile} icon={profileIcon} />
      <TextButton title={"Logout"} isLoading={false} onClick={handleLogout} icon={signOutIcon} />
    </Container>
  );
}
