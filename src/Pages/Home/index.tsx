
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TableRow } from "../../components/TableRow";
import {
  Container,
  Content,
  HeaderProductsContainer,
  ProductsContainer,
  ProductsTable,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <ProductsContainer>
          <HeaderProductsContainer>
            <h1>List of Products</h1>
            <button>+ New</button>
          </HeaderProductsContainer>

          <ProductsTable>
          <TableRow name={"Red Apple"} price={1.99} />
          <TableRow name={"Red Apple"} price={1.99} />
          <TableRow name={"Red Apple"} price={1.99} />
          <TableRow name={"Red Apple"} price={1.99} />
          <TableRow name={"Red Apple"} price={1.99} />
          <TableRow name={"Red Apple"} price={1.99} />
          </ProductsTable>
        </ProductsContainer>
      </Content>
    </Container>
  );
}
