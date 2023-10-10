import { styled } from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    width: 30%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
   
   border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

   padding: 2rem;

   border-radius: 8px;

   >h1 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: .8rem;
   }
`

export const FormValidatorAdvisor = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};

  font-weight: 600;
  font-size: 1.2rem;
`;