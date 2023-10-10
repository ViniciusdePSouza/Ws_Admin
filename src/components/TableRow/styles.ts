import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr 3fr;

  font-size: 2rem;
`;

export const TableColumn = styled.div`
  display: flex;
  align-items: center;
  padding: 1.8rem;
`;

export const TableColumnMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const EditButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  font-weight: 700;

  padding: 1rem  2rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  font-weight: 700;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;
`;
