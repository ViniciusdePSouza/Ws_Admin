import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr 3fr;

  font-size: 2rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_50};
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

font-size: 1.8rem;
font-weight: 700;
font-family: 'Roboto';

padding: 1.2rem 2rem;

border-radius: 8px;

background: ${({ theme }) => theme.COLORS.PURPLE_100};

cursor: pointer;

transition: transform 0.2s;

&:active {
  box-shadow: inset -4px 4px 0 ${({ theme }) => theme.COLORS.PURPLE_500};
}

`;

export const DeleteButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

font-size: 1.8rem;
font-weight: 700;
font-family: 'Roboto';

padding: .8rem;

border-radius: 8px;

background: ${({ theme }) => theme.COLORS.RED};

cursor: pointer;

transition: transform 0.2s;

&:active {
  box-shadow: inset -4px 4px 0 ${({ theme }) => theme.COLORS.RED_300};
}


  cursor: pointer;
`;
