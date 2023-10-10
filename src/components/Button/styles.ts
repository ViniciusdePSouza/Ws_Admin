import { styled } from "styled-components";
export const Container = styled.button`
  all: unset;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 0;

  margin-top: 2.6rem;

  font-size: 1.6rem;
  line-height: 2rem;

  color: ${({ theme }) => theme.COLORS.GRAY_400};

  background: ${({ theme }) => theme.COLORS.WHITE_100};

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 8px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
