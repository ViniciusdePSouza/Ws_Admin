import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;

  font-size: 2rem;

  padding: 2rem 1.6rem 15rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
  border-left: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
  border-right: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
`;
