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
          <h1>We are Company Profile!!</h1>

          <h2>About Us</h2>
          <p>
            We have professionals with decades of experience in system
            development, with technical qualifications, higher education, and
            certifications. As a company, we have been in existence since 2013,
            undertaking system development projects in various application
            areas.
          </p>

          <h2>Learn with Us</h2>
          <p>
            You can learn more about our team through tutorials available on our
            YouTube channel, where various subjects are covered. Our channel has
            over 1,000 followers. We are committed to assisting the open-source
            community and are available to demonstrate our knowledge to anyone
            interested, whether you are a developer or a potential client. Visit
            our YouTube channel and check it out.
          </p>

          <h2>Frequently Asked Questions</h2>
          <h3>• What kind of work does WS Work Systems do?</h3>
          <p>
            WS Work operates in two areas. One is the services area, where our
            professionals have the necessary experience to solve your company's
            technology problems. The other area is products, where we offer
            various technology products to help your company in its day-to-day
            operations, bringing greater efficiency and speed to your processes.
          </p>

          <h3>• How can I hire WS Work?</h3>
          <p>
            WS Work operates on a package-of-hours basis. You can get in touch
            with our sales team via email at adm@wswork.com.br to receive a
            proposal for a package of hours that will meet your business needs.
            In case you want to contract one of WS Work's products, in addition
            to contacting the email mentioned above, you can find more
            information on the page of each of our products. Just visit WS
            Market, WS Factory, or WS Agro.
          </p>
        </ProfileInfo>
      </Content>
    </Container>
  );
}
