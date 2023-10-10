import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container, Content } from "./styles";

export function Home() {
    return <Container>
        <Header/>
        <Content>
            <Menu/>
        </Content>
    </Container>
}