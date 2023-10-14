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
    font-weight: 700;
  }

  button {
    all: unset;

    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Roboto';

    padding: 1.2rem;

    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.PURPLE_100};

    cursor: pointer;

    transition: transform 0.2s;

    &:active {
      box-shadow: inset -4px 4px 0 ${({ theme }) => theme.COLORS.PURPLE_500};
    }
  }
`;

export const ProductsTable = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 2rem;

  border-radius: 8px;
  
  box-shadow: 2px 2px 4px ${({ theme }) => theme.COLORS.GRAY_100};
`;
