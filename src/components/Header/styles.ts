import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 2rem 3rem 1rem; 

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;
