import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  margin: 1.6rem auto 0;
`;

export const HeaderProductsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 2.4rem;
    text-decoration: underline;
  }

  button {
    all: unset;

    font-size: 1.8rem;
    font-weight: 700;

    padding: 1rem;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
  }
`;

export const ProductsTable = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
`
