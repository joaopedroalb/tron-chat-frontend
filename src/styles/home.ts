import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: var(--green-ligth);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    width: 50%;
    min-height: 50vh;
    border-radius: 20px;
    padding: 2rem;
    background: var(--gray);
    color: var(--white);

    display: flex;
    flex-direction: column;

`