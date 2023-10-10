import { TextButton } from "../TextButton";
import { Container } from "./styles";

export function Menu() {
  return (
    <Container>
      <TextButton title={"Products"} isLoading={false} />
      <TextButton title={"Company Profile"} isLoading={false} />
      <TextButton title={"Logout"} isLoading={false} />
    </Container>
  );
}
