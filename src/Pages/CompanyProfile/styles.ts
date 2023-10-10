import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  margin: 1.6rem auto 0;

  h1 {
    font-size: 3.6rem;
    font-weight: 700;

    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;

    margin-bottom: 1rem; 
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;

    margin: .5rem 0; 
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;

    margin-bottom: .5rem; 
  }

`;
