import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container, Content, ProfileInfo } from "./styles";

export function CompanyProfile() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <ProfileInfo>
          <h1>Somos a Company Profile!!</h1>

          <h2>Sobre nós</h2>
          <p>
            Temos profissionais com décadas de experiência no desenvolvimento de
            sistemas, com formações técnica, superior e certificações. Como
            empresa existimos desde 2013, realizando projetos de desenvolvimento
            de sistemas em diversas àreas de aplicação.
          </p>

          <h2>Aprenda conosco</h2>
          <p>
            Você pode conhecer um pouco mais sobre nossa equipe através de
            tutoriais disponíveis em nosso canal do Youtube, diversos assuntos
            são abordados em nosso canal que conta com mais de 1.000 seguidores.
            Nos comprometemos em auxiliar a comunidade opensource bem como
            estamos a disposição para demonstrar nosso conhecimento à quem se
            interesse, seja desenvolvedor ou um possivel cliente. Acesse nosso
            canal no Youtube e confira.
          </p>

          <h2>Perguntas Frequentes</h2>
          <h3>• Que tipo de trabalho a WS Work Sistemas faz?</h3>
          <p>
            A WS Work atua em duas áreas, uma delas é a área de serviços, nossos
            profissionais têm a experiência necessária para solucionar problemas
            de tecnologia da sua empresa. A outra área é a de produtos,
            disponibilizamos alguns produtos de tecnologia para auxiliar a sua
            empresa no seu trabalho cotidiano, trazendo maior eficiência e
            velocidade em sua operação.
          </p>

          <h3>• Como eu posso contratar a WS Work?</h3>
          <p>
            A WS Work trabalha com pacote de horas, você pode entrar em contato
            com nossa equipe comercial através do email adm@wswork.com.br para
            receber uma proposta de pacote de horas que sejam suficientes para
            atender o seu negócio. Em caso de contratação de algum produto da WS
            Work, além de consultar o e-mail acima, você pode encontrar mais
            informações na página de cada um dos produtos, basta acessar o WS
            Market o WS Factory ou WS Agro .
          </p>
        </ProfileInfo>
      </Content>
    </Container>
  );
}
