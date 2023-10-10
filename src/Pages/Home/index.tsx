
import { useEffect, useState } from "react";
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
import { ProductsProps } from "../../@types/products";
import { api } from "../../services/api";

export function Home() {
    const [allProducts, setAllProducts] = useState<ProductsProps[]>([])

    async function fetchAllProducts() {
        const response = await api.get(`/products`);

        return response;
    }

    useEffect(() => {
        async function populateAllEvents() {
          const response = await fetchAllProducts();
          setAllProducts(response.data);
        }
    
        populateAllEvents();
      }, []);
    
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
            {
               allProducts && (
                allProducts.map((product) => (
                    <TableRow key={product.id} name={product.name} price={product.price} id={product.id} />
                ))
               )
            }
         

          </ProductsTable>
        </ProductsContainer>
      </Content>
    </Container>
  );
}
