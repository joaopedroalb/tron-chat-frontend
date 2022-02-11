import styled from "styled-components";

export const Box = styled.div`
    width: 50%;
    min-height: 50vh;
    border-radius: 20px;
    padding: 2rem;
    background: var(--gray);
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    label{
        font-size: 1.5rem;
        font-weight: 500;
    }

    button{
        width: 150px;
        padding: .4rem;
        font-weight: 600;
        border: none;
        border-radius: 6px;
        cursor: pointer;

        transition: 400ms;

        &:hover{
            transform: scale(1.05);
        }
    }

`