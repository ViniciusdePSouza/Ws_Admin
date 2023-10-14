import { styled } from "styled-components";

export const Container = styled.button`
    all: unset;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    padding: 1.5rem;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;


    background: ${({theme}) => theme.COLORS.WHITE_100};

    cursor: pointer;

    img {
        width: 40px;
    }
`