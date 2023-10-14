import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 3.6rem;

  font-size: 2rem;

  padding: 3rem;

  background: linear-gradient(200deg, ${({ theme }) => theme.COLORS.PURPLE_100}, ${({ theme }) => theme.COLORS.PURPLE_200});
`
