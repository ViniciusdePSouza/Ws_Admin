import { styled } from "styled-components";

import FormSelect from "react-bootstrap/Form";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormValidatorAdvisor = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};

  font-weight: 600;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  background-color: ${({ theme }) => theme.COLORS.WHITE_100};

  padding: 2rem;

  border-radius: 8px;

  > h1 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  position: relative;
`;

export const ButtonClose = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 0;

  font-size: 3, 6rem;
  font-weight: 700;

  border-radius: 8px;

  margin: 1rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;
`;

export const PriceTagWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;

  margin-bottom: 1.2rem;
`;

export const Select = styled(FormSelect.Select)`
  height: 5rem;

  width: 100%;

  align-self: center;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 8px;

  font-family: "Roboto", sans-serif;
  font-style: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > option {
    font-family: "Roboto", sans-serif;
    font-style: 400;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &:selected {
      background-color: ${({ theme }) => theme.COLORS.WHITE_100};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }
`;
