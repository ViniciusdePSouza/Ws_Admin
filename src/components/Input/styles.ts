import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  > input {
    width: 100%;

    background: ${({ theme }) => theme.COLORS.WHITE};

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

    font-family: "Roboto", sans-serif;

    border-radius: 8px;

    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      font-size: 1.6rem;
    }
  }
`;
