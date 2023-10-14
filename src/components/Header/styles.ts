import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 2.4rem;

  font-size: 3.6rem;
  font-weight: 700;

  padding: 3rem;

  background: linear-gradient(70deg, ${({ theme }) => theme.COLORS.PURPLE_100}, ${({ theme }) => theme.COLORS.PURPLE_200});
  color: ${({ theme }) => theme.COLORS.PURPLE_300};
`;
